    // db example
    import { getKREAM } from "$lib/server/resell";

    export async function load({ params }) {
        const pageNumber = params.pageNo; // 현재페이지 파라미터 받아오기
        const pageSize = 5;
        const result = await getKREAM({ pageNumber: pageNumber, pageSize: pageSize });
        return { result };
        
    };


