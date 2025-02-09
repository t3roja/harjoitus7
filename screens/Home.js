import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import Styles from '../Styles'
import { useTheme } from 'react-native-paper'

export default function Home() {

  const {isDarkMode} = useTheme

  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
        <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
    </View>
  )
}

