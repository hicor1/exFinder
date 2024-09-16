import { redirect } from '@sveltejs/kit';
import { authLogin } from '$lib/server/auth.js';

export const actions = {
    // "로그인 상태 업데이트" 액션
    Auth_test: ({ cookies, url }) => {
        cookies.set('logged_in', 'true', { path: '/' });
        throw redirect(303, url.searchParams.get('redirectTo') ?? '/');
    },

    // "AuthAPI 에 로그인 문의" 액션
    updateUserAccount: async ({ request, url, cookies }) => {
        const post = await request.formData();
        const id = post.get('id');
        const user_pwd = post.get('password');  // 비밀번호 필드 이름 확인 필요
    
        // 로그인 시도
        const loginData = await authLogin(id, user_pwd);
        const resp = {}

        if (loginData['result'] === 'success') {
            // 로그인 성공 액션 추가
            // 쿠키에 로그인정보 씌우기
            cookies.set('access_token', loginData['access_token'], { path: '/' });
            cookies.set('user_name', loginData['user_name'], { path: '/' });
            throw redirect(303, '/');
        } 
        if (loginData['result'] === 'failure') {
            // 로그인 실패 액션 추가
        } 
        return loginData;
    }
}
