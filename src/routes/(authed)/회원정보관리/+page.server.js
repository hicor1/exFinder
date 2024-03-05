// db example
import {getAllAccount} from "$lib/server/db.js"

export const load = async () => {
    const AllAccount = await getAllAccount();
    return {AllAccount};
}

