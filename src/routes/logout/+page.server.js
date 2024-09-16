import { redirect } from '@sveltejs/kit';

export const actions = {
	default: ({ cookies }) => {
		cookies.delete('access_token', { path: '/' });
		cookies.delete('user_name', { path: '/' });
		throw redirect(303, '/?logout=true');
	}
};
