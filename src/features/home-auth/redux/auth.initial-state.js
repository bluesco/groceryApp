export const initState = {
  dataCustomer: null,
  token: null, // login xong thì phải có token
  refreshToken: null,
  isLogin: false,
  isRegister: false,
  errorRefreshToken: null,
  errorLogin: null,
  errorRegister: null,
  isAuthLoading: false,
  isRegisterLoading: false,
  isAdmin: false,
  isAdminLogin: false,
  isRequireLogin: false,
};
// các trường ở trong store của redux