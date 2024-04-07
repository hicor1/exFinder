    // db example
    import { getKREAM } from "$lib/server/resell";
    
    export async function load({ params }) {
        const pageNumber = params.page;
        const pageSize = 5;
        const result = await getKREAM({ pageNumber: pageNumber, pageSize: pageSize });
        return { result };
        
    };


