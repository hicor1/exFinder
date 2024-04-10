/** @type {import('./$types').RequestHandler} */
import {json} from '@sveltejs/kit'


// ⭐ URL 파라미터를 활용한 GET 요청 예제
import { getKREAM } from "$lib/server/resell";
export async function GET(requestEvent) {
    const params = requestEvent['params'];

    const pageNumber = params['pageNo']; // URL 파라미터를 꺼내는 과정
    const pageSize = 5;

    const result = await getKREAM({ pageNumber: pageNumber, pageSize: pageSize });
    return json(result);
    
};
