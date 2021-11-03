// 백엔드는 기본적으로 /api 라우팅 사용.

// GLOBAL
const USER = "/user";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// FEATURE
const API = "/api";
const AUTH = "/auth";
const ADMIN = "/admin";

// AUTH and ADMIN
const USERINFO = "/userinfo";
const DELUSER = "/deluser";
const CALLBACK = "/callback";
const GITHUB = "/github";
const KAKAO = "/kakao";
const GOOGLE = "/google";

const routes = {
	user: USER,
	login: LOGIN,
	logout: LOGOUT,
	join: JOIN,

	api: API,
	auth: AUTH,
	callback: CALLBACK,
	userinfo: USERINFO,
	admin: ADMIN,

	github: GITHUB,
	kakao: KAKAO,
	google: GOOGLE,

};

export default routes;