//Form action 처리 _ 
import {createUserAccount} from '$lib/server/db.js'
export const actions = {
    //(1) "회원가입"
    default: async ({request}) =>{
        const post = await request.formData();
        
        // console.log(post.get('service_name'));
        // console.log(post.get('id'));
        // console.log(post.get('pwd'));
        // console.log(post.get('customer_name'));
        // console.log(post.get('valid_date'));
        // console.log(post.get('memo'));
        
        const resp = await createUserAccount({
            service_name    : post.get('service_name'),
            id              : post.get('id'),
            pwd             : post.get('pwd'),
            customer_name   : post.get('customer_name'),
            valid_date      : post.get('valid_date'),
            memo            : post.get('memo'),
        })
        return resp;

    }
    //(2) ""
}