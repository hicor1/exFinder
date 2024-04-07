import {resellDB} from '$lib/server/db_conn';

// 페이지 번호와 페이지당 항목 수를 인자로 받습니다. ( 1과 10은 기본값!!, 함수 호출할때 변경 가능)
export const getKREAM = async ({ pageNumber = 1, pageSize = 3 }) => {
    const offset = (pageNumber - 1) * pageSize; // 현재 페이지에 해당하는 데이터의 시작점을 계산합니다.
    
    const SQL_QUERY = `
      SELECT *, 
        (즉시구매가격_보관판매입찰::NUMERIC - okmall_즉시구매가격::NUMERIC) AS 마진,
        COUNT(*) OVER() AS 전체행수
      FROM kream_matched
      WHERE 즉시구매가격_보관판매입찰 IS NOT NULL AND 즉시구매가격_보관판매입찰 <> ''
      ORDER BY 마진 DESC
      LIMIT ${pageSize} OFFSET ${offset};
    `; // 페이지당 항목 수와 시작점을 적용합니다.
  
    const data = await resellDB.any(SQL_QUERY);
    if (data.length === 0) {
        return { data: [], totalPages: 0 };
    }
    const totalRows = data[0].전체행수; // 전체 행의 수를 가져옵니다.
    const totalPages = Math.ceil(totalRows / pageSize); // 총 페이지 수를 계산합니다.

    return {result_dict_list : data, 전체페이지 : totalPages, 현재페이지 : pageNumber};
};
