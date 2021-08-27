import AccountInfo from '../Account/AccountInfo';

export const LoginActionType = {
  Login: 'login',
  LoginSuccess: 'loginSuccess',
  LoginFail: 'loginFail',
  Logout: 'logout',
  LogoutSuccess: 'logoutSuccess',
  LogoutFail: 'logoutFail',
};

export const loginPost = (params: any) => {
  return {
    type: LoginActionType.Login,
    params,
  };
};

export const loginSuccess = (accountInfo: AccountInfo) => {
  return {
    type: LoginActionType.LoginSuccess,
    accountInfo,
  };
};

export const loginFail = (error: Error) => {
  return {
    type: LoginActionType.LoginFail,
    error,
  };
};

export const logoutPost = (params: any) => {
  return {
    type: LoginActionType.Logout,
    params,
  };
};

export const logoutSuccess = () => {
  return {
    type: LoginActionType.LogoutSuccess,
  };
};

export const logoutFail = (error: Error) => {
  return {
    type: LoginActionType.LogoutFail,
    error,
  };
};
