import { verifyLogin } from '$lib/server/auth.js';

export const load = async ({ cookies, url }) => {
    
    const access_token = cookies.get('access_token');
    const user_name = cookies.get('user_name');

    //로그인 유효성 검사
    const loggedIn = await verifyLogin(access_token);
    
    return {
        props: {
            user: {
                name : user_name,
                email : 'hicor1@ktl.re.kr',
                avatar : 'https://st.kakaocdn.net/shoppingstore/store/20231226142444_32c7d42ce6724921b4f7910b699f5996.jpg',
            },
            loggedIn: loggedIn,
            access_token : access_token
        }
    }
}