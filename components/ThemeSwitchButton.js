import React from 'react'
import { useTheme } from '../context/useTheme'
import { Switch } from 'react-native-paper'
import { Text, View } from 'react-native'
import Styles from '../Styles'

export default function ThemeSwitchButton() {

  const { isDarkMode, toggleDarkMode } = useTheme()

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
      <Text style={isDarkMode ? Styles.dark : Styles.light}>Dark mode</Text>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
    </View >
  )
}
