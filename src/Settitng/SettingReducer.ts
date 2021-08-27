import AccountInfo from '../Account/AccountInfo';
import {SettingActionType} from './SettingAction';

const initState = {
  isEnglish: false,
  isDark: false,
};

const settingReducer = (state = initState, action: any) => {
  switch (action.type) {
    case SettingActionType.ChangeLanguage:
      const isEnglish = action.isEnglish;
      return {...state, isEnglish};

    case SettingActionType.ChangeTheme:
      const isDark = action.isDark;
      return {...state, isDark};

    default:
      break;
  }
  return state;
};

export default settingReducer;
