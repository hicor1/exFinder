import {resellDB} from '$lib/server/db_conn';

// 즉시구매가격_보관판매입찰 값이 존재하며, 그 값과 okmall_즉시구매가격 값의 차이값(절대값이 아닌)이 높은 순으로 정렬하여 전체 회원정보 가져오기
export const getKREAM = async () => {
    const SQL_QUERY = `
    SELECT *, 
      (즉시구매가격_보관판매입찰::NUMERIC - okmall_즉시구매가격::NUMERIC) AS 마진
    FROM kream_matched
    WHERE 즉시구매가격_보관판매입찰 IS NOT NULL AND 즉시구매가격_보관판매입찰 <> ''
    ORDER BY 마진 DESC;
  `;
  
    const data = await resellDB.any(SQL_QUERY);
    return data;
};
