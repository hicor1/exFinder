//https://www.youtube.com/watch?v=KdE4EeMGb-k
//https://ko.javascript.info/
import {json} from '@sveltejs/kit'


// ⭐ GET 테스트 ( 사용 예 ; http://localhost:5173/api/kream?pageNumber=3 )
import { getKREAM } from "$lib/server/resell";

export async function GET(requestEvent) {
    const url = new URL(requestEvent.url); // 요청 객체에서 URL을 가져옵니다.
    const searchParams = url.searchParams; // URL에서 쿼리 매개변수를 가져옵니다.

    // 쿼리 매개변수에서 pageNo 값을 가져오고, 없는 경우에는 기본값으로 1을 사용합니다.
    const pageNumber = searchParams.get('pageNumber') || 1;
    const pageSize = searchParams.get('pageSize') || 5;

    const result = await getKREAM({ pageNumber: pageNumber, pageSize: pageSize });
    return json(result);
    
};


// ⭐ POST 테스트
export async function POST(requestEvent){
    // 정보 꺼내기 ( 구조분해할당 )     const { request } = requestEvent;
    const result_dict = await request.json();
    const newComment = {
        id       :  1,
        contents : result_dict["text"]
    };
    // DB에 새로운 데이터를 쓰는 코드

    // 결과 리턴
    return json(newComment, {status:201});
} 