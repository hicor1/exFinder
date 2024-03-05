import { getAllAccount } from '$lib/server/db';

export const load = async ({ params }) => {
    const AllAccount = await getAllAccount();
    return {props: {AllAccount}}; // userAccount를 props로 반환합니다.
}
