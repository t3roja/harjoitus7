import React from 'react'
import { View, StatusBar, Platform } from 'react-native'

export default function MyStatusBar(props) {

  const backgroundColor = props.backgroundColor ? props.backgroundColor : '#fff'
  const statusBarHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0

  return (
    <View style={{backgroundColor: backgroundColor, height: statusBarHeight}}>
        <StatusBar {...props}/>
    </View>
  )
}

/*
 Add to App.js:
  <MyStatusBar backgroundColor='#00a484' barStyle='light-content'/>

  Before NavigationContainer
*/