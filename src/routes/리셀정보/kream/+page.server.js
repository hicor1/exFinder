// db example
import {getKREAM} from "$lib/server/resell"

export const load = async () => {
    const dataKREAM = await getKREAM();
    return {dataKREAM};
}

