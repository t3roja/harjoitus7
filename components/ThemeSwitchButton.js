import React from 'react'
import { useTheme } from '../context/useTheme'
import { Switch } from 'react-native-paper'

export default function ThemeSwitchButton() {

    const { isDarkMode,toggleDarkMode } = useTheme()
    
  return (
    <Switch value={isDarkMode} onValueChange={toggleDarkMode}/>
  )
}
