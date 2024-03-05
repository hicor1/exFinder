import { writable } from 'svelte/store';


// 관리자 로그인 상태값 저장 (writable함수를써서 값 변경이 가능하도록 함)
export const loggedIn = writable(false);

// 관리자 계정 저장
export const masterId = "hicor";
export const masterPwd = "@12345";