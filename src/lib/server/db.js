// DB connection은 최초 한번만 불러와야한다!!
import {db, supabaseDB} from '$lib/server/db_conn';




// 전체 회원정보 불러오는 코드 ( 남은날짜 계산하여 추가 )
export const getAllAccount = async () => {
  const SQL_QUERY = `
    SELECT *, 
           TO_DATE(valid_date, 'YYYY-MM-DD') - CURRENT_DATE AS remaining_days 
    FROM kmong_auth
    ORDER BY create_at DESC
  `;

  const data = await db.any(SQL_QUERY);
  return data;
};


// 특정 회원정보 불러오는 코드 ( 남은날짜 계산하여 추가 )
// @ts-ignore
export const getUserAccount = async (id) => {
  const SQL_QUERY = `
  SELECT *, 
         TO_DATE(valid_date, 'YYYY-MM-DD') - CURRENT_DATE AS remaining_days 
  FROM kmong_auth WHERE id = $1
`;

  const data = await db.one(SQL_QUERY, [id]);
  return data;
};

// 회원정보 수정
// @ts-ignore
export const updateUserAccount = async ({id, memo, valid_date, 사용여부}) => {
  const SQL_QUERY = `
    UPDATE kmong_auth 

    SET 
      memo = $2,
      valid_date = $3,
      "사용여부" = $4

    WHERE id = $1
  `;
  try {
    await db.none(SQL_QUERY, [id, memo, valid_date, 사용여부]);
    return { status: 'success' }; // 쿼리 실행 성공
  } catch (error) {
    console.error('Failed to update user account:', error);
    return { status: 'error', error }; // 쿼리 실행 실패
  }
};

// 신규 회원가입
// @ts-ignore
export const createUserAccount = async ({ service_name, id, pwd, customer_name, valid_date, memo }) => {

  const SQL_QUERY = `
      INSERT INTO kmong_auth (service_name, id, pwd, customer_name, valid_date, memo, create_at)
      VALUES ($1, $2, $3, $4, $5, $6, NOW());
  `;


  try {
      const checkQuery = "SELECT * FROM kmong_auth WHERE id = $1;";
      const checkResult = await db.query(checkQuery, [id]);
      console.log(checkResult);

      if (checkResult && checkResult.rows && checkResult.rows.length > 0) {
        return { status: 'error', message: '이미 존재하는 id입니다.' };
    } else {
        await db.query(SQL_QUERY, [service_name, id, pwd, customer_name, valid_date, memo]);
        return { status: 'success' };
    }
  } catch (error) {
      console.error('Failed to create user account:', error);
      // @ts-ignore
      return { status: 'error', message: error.message }; // 에러 메시지만 반환
  }
};


