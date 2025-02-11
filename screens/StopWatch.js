import { Button, Text, View } from 'react-native'
import { useEffect, useReducer, useRef } from 'react'
import { useTheme } from '../context/useTheme'
import Styles from '../Styles'

const initialState = {
  isRunning: false,
  time: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, isRunning: true }
    case 'stop':
      return { ...state, isRunning: false }
    case 'reset':
      return { isRunning: false, time: 0 }
    case 'tick':
      return { ...state, time: state.time + 1 }
    default:
      throw new Error()
  }
}

export default function StopWatch() {

  const { isDarkMode } = useTheme()

  const [state, dispatch] = useReducer(reducer, initialState)
  const timerId = useRef(null)

  useEffect(() => {
    if (!state.isRunning) return

    timerId.current = setInterval(() => dispatch({ type: 'tick' }), 1000)
    return () => {
      clearInterval(timerId.current)
      timerId.current = null
    }
  }, [state.isRunning])

  const FormattedTime = () => {
    const secondsInt = parseInt(state.time, 10)
    const hours = String(Math.floor(secondsInt / 3600))
    const minutes = String(Math.floor((secondsInt / 60) % 60))
    const seconds = String(secondsInt % 60)

    return <Text style={[isDarkMode ? Styles.dark : Styles.light, Styles.stopWatchTime]}>{hours.padStart(2, '0')}.{minutes.padStart(2, '0')}.{seconds.padStart(2, '0')}</Text>
  }

  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light, Styles.stopWatchContainer]}>
      <FormattedTime />
      <View style={Styles.stopWatchButtons}>
        <Button title='Start' onPress={() => dispatch({ type: 'start' })} />
        <Button title='Stop' onPress={() => dispatch({ type: 'stop' })} />
        <Button title='Reset' onPress={() => dispatch({ type: 'reset' })} />
      </View>
    </View>
  )
}