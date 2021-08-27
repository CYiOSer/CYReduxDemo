export const SettingActionType = {
  ChangeLanguage: 'changeLanguage',
  ChangeTheme: 'changeTheme',
};

export const changeLanguage = (isEnglish: boolean) => {
  return {
    type: SettingActionType.ChangeLanguage,
    isEnglish,
  };
};

export const changeTheme = (isDark: boolean) => {
  return {
    type: SettingActionType.ChangeTheme,
    isDark,
  };
};
