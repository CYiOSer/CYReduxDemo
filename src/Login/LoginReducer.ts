import {LoginActionType} from './LoginAction';

const initState = {
  isLogin: false,
  accountInfo: null,
};

const loginReducer = (state = initState, action: any) => {
  console.log('~~~~~ loginReducer action type: ', action.type);

  switch (action.type) {
    case LoginActionType.LoginSuccess:
      const {accountInfo} = action;
      return {isLogin: true, accountInfo};

    case LoginActionType.LogoutSuccess:
      return initState;

    default:
      break;
  }
  return state;
};

export default loginReducer;
