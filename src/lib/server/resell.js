import {db, supabaseDB} from '$lib/server/db_conn';

// 전체 회원정보 getKREAM 코드 ( 남은날짜 계산하여 추가 )
export const getKREAM = async () => {
    const SQL_QUERY = `
    SELECT *
    FROM kream
    WHERE "즉시구매가격_일반판매입찰" IS NOT NULL AND "즉시구매가격_일반판매입찰" <> ''
    AND "1일평균체결건수" IS NOT NULL AND "1일평균체결건수" <> ''
    AND "평균거래가격_보관판매입찰" IS NOT NULL AND CAST("평균거래가격_보관판매입찰" AS FLOAT) <> 0
  `;
  
    const data = await supabaseDB.any(SQL_QUERY);
    return data;
};
