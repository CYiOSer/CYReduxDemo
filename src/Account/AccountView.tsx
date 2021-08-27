import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import AccountInfo from "./AccountInfo";

interface IProps {
  isEnglish: boolean,
  isDark: boolean,
  accountInfo: AccountInfo,
}

interface IState {
}

class AccountView extends React.Component<IProps, IState> {

  render() {
    const {isEnglish, isDark, accountInfo} = this.props;
    const textStyle = isDark ? styles.textForDark : styles.text;
    const trueStr = isEnglish ? 'YES' : '是';
    const falseStr = isEnglish ? 'NO' : '否';
    return (
        <View style={[styles.container, {backgroundColor: isDark ? '#000' : '#FFF'}]}>
          <View style={styles.itemContainer}>
            <Text style={textStyle}>{isEnglish ? 'User Name:' : '用户名：'}</Text>
            {accountInfo && accountInfo.userName && <Text style={textStyle}>{accountInfo.userName}</Text>}
          </View>
          <View style={styles.itemContainer}>
            <Text style={textStyle}>{isEnglish ? 'Nick Name:' : '昵称：'}</Text>
            {accountInfo && accountInfo.nickName && <Text style={textStyle}>{accountInfo.nickName}</Text>}
          </View>
          <View style={styles.itemContainer}>
            <Text style={textStyle}>{isEnglish ? 'VIP? :' : '是否会员：'}</Text>
            {accountInfo && <Text style={textStyle}>{accountInfo.isVIP ? trueStr : falseStr}</Text>}
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
    marginVertical: 3,
  },

  itemContainer: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    alignItems: 'center',
    paddingLeft: 80,
  },

  text: {
    color: '#000',
    width: 100,
  },

  textForDark: {
    color: '#FFF',
    width: 100,
  }
})

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    accountInfo: state.loginReducer.accountInfo,
    isEnglish: state.settingReducer.isEnglish,
    isDark: state.settingReducer.isDark,
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
 return {
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountView);