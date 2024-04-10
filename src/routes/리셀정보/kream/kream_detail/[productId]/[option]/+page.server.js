    // db example
    import { getKREAM_detail } from "$lib/server/resell";

    export async function load({ params }) {
        const productId = params.productId; // 현재페이지 파라미터 받아오기
        const option = params.option; // 현재페이지 파라미터 받아오기
        const result = await getKREAM_detail({ productId: productId, option: option });
        return { result };
    };
