// 로그인 함수
// @ts-ignore
import { json } from "@sveltejs/kit";

export const authLogin = async (user_id, user_pwd) => {
    const url = new URL('http://180.228.248.76:4000/api/auth/login');
    url.searchParams.append('user_id', user_id);
    url.searchParams.append('user_pwd', user_pwd);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    return data;
};



// 로그인 유효성 체크 ( 쿠키에 저장된 토큰을 읽어와서 서버에 유효성 검증)
export const verifyLogin = async (access_token) => {
    const url = 'http://180.228.248.76:4000/api/auth/me'; 

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data;
};
