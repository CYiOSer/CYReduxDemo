import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { changeLanguage, changeTheme } from './SettingAction';

interface IProps {
  isEnglish: boolean,
  isDark: boolean,
  changeToEnglish: any,
  changeToDark: any,
}

interface IState {

}

class SettingView extends React.Component<IProps, IState> {

  render() {
    const {isEnglish, isDark, changeToEnglish, changeToDark} = this.props;
    const textStyle = isDark ? styles.textForDark : styles.text;
    return (
        <View style={[styles.container, {backgroundColor: isDark ? '#000' : '#FFF'}]}>
          <View style={styles.itemContainer}>
            <Text style={textStyle}>{isEnglish ? 'English:' : '英文：'}</Text>
            <Switch value={isEnglish} onValueChange={changeToEnglish} />
          </View>
          <View style={styles.itemContainer}>
            <Text style={textStyle}>{isEnglish ? 'Dark Mode:' : '暗黑模式：'}</Text>
            <Switch value={isDark} onValueChange={changeToDark} />
          </View>
        </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },

  itemContainer: {
    flexDirection: 'row',
    height: 40,
    width: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 80,
  },

  text: {
    color: '#000',
  },

  textForDark: {
    color: '#FFF',
  }

})

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    isEnglish: state.settingReducer.isEnglish,
    isDark: state.settingReducer.isDark
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
 return {
  changeToEnglish: (isEnglish: boolean) => {
     dispatch(changeLanguage(isEnglish))
   },
   changeToDark: (isDark: boolean) => {
    dispatch(changeTheme(isDark))
  }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingView);