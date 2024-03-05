import { redirect } from '@sveltejs/kit';

// 관리자 계정인지 확인!!
import { verifyLogin } from '$lib/server/auth.js';

export async function load({ cookies, url }) {
	const access_token = cookies.get('access_token');
	const temp = await verifyLogin(access_token);

    //로그인상태가 맞으며, 관리자 계정인 경우에만 회원정보관리 메뉴를 보여여준다
	if (temp['result'] === 'failure' || temp['user']['authority'] !== '관리자') {
		throw redirect(303, `/login?redirectTo=${url.pathname}`);
	}
}

