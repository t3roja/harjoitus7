import { PaperProvider } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import MainAppBar from './components/MainAppBar';
import Home from './screens/Home';
import Settings from './screens/Settings';
import StopWatch from './screens/StopWatch';
import ThemeProvider from './context/ThemeProvider';


export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <PaperProvider>
      <ThemeProvider>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='Home'
              screenOptions={{
                header: (props) =>
                  <MainAppBar {...props} backgroundColor='#666' icon='cog' color='#fff' />
              }}
            >
              <Stack.Screen name='Home' component={Home}>
              </Stack.Screen>
              <Stack.Screen name='Settings' component={Settings} />
              <Stack.Screen name='StopWatch' component={StopWatch} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  time: {
    fontSize: 64,
    fontWeight: 'bold',
  }
});
