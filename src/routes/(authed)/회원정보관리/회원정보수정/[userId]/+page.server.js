
// 초기데이터 입혀주기 (LOAD) : load 함수는 페이지가 로딩될때마다 호출되는 함수
import {getUserAccount} from '$lib/server/db.js'

export async function load({ params }) {
    const userId = params.userId;
    const userAccount = await getUserAccount(userId);
    return { props: { userAccount } };
}


//Form action 처리 _ 
import {updateUserAccount} from '$lib/server/db.js'
export const actions = {
    //(1) "회원정보 업데이트"
    default: async ({request}) =>{
        const post = await request.formData();
        const resp = await updateUserAccount({
            id : post.get('id'),
            memo : post.get('memo'),
            valid_date : post.get('valid_date'),
            사용여부 : post.get('사용여부'),
        })

        console.log(resp.status);
        return resp;

    }
    //(2) ""
}