import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import { loginPost, logoutPost } from './LoginAction';

interface IProps {
  isEnglish: boolean,
  isDark: boolean,
  isLogin: boolean,
  onPress: any,
}

interface IState {

}

class LoginView extends React.Component<IProps, IState> {

  render() {
    const {isEnglish, isDark, isLogin, onPress} = this.props;
    const loginStr = isEnglish ? 'Login' : '登录';
    const logoutStr = isEnglish ? 'Logout' : '登出';
    const textStyle = isDark ? styles.textForDark : styles.text;
    return (
        <View style={[styles.container, {backgroundColor: isDark ? '#000' : '#FFF'}]}>
          <TouchableOpacity style={styles.button} onPress={() => onPress(isLogin)}>
            <Text style={textStyle}>{isLogin ? logoutStr : loginStr}</Text>
          </TouchableOpacity>
        </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    marginTop: 20,
    width: 100,
    height: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#000',
  },

  textForDark: {
    color: '#FFF',
  }
})

const mapStateToProps = (state: any) => {
  return {
   isLogin: state.loginReducer.isLogin,
   isEnglish: state.settingReducer.isEnglish,
   isDark: state.settingReducer.isDark
  }
}

const mapDispatchToProps = (dispatch: any) => {
 return {
   onPress: (isLogin: boolean) => {     
     dispatch(isLogin ? logoutPost({userName: 'caiyun'}) : loginPost({userName: 'caiyun', password: '123456'}))
   }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);