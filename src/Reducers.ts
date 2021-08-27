import {combineReducers} from 'redux';
import loginReducer from './Login/LoginReducer';
import settingReducer from './Settitng/SettingReducer';

const reducers = combineReducers({
  loginReducer,
  settingReducer,
});

export default reducers;
