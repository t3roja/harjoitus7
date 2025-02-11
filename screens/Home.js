import React, { useReducer, useRef, useState } from 'react'
import { FlatList, SafeAreaView, View, Text, TextInput, Button } from 'react-native'
import { useTheme } from '../context/useTheme'
import uuid from 'react-native-uuid';
import Styles from '../Styles'
import Row from '../components/Row'

const initialState = { tasks: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { tasks: [...state.tasks, { id: uuid.v4(), name: action.name}] };
    case 'remove':
      return { tasks: state.tasks.filter(task => task.id !== action.id) }
    default:
      throw new Error('Unknown action type');
  }
};


export default function Home() {

  const { isDarkMode } = useTheme()
  const themeStyle = isDarkMode ? Styles.dark : Styles.light
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const inputRef = useRef(null)

  const add = () => {
    if (name.trim() !== '') {
      dispatch({ type: 'add', name });
      setName('')
      inputRef.current?.focus()
    }
  }

  const remove = (id) => {
    dispatch({ type: 'remove', id });
  };


  return (
    <View style={[Styles.container, themeStyle]}>

      <SafeAreaView>
        <Text style={[themeStyle, Styles.font]}>Todo list</Text>

        <View style={[Styles.form]}>
        <TextInput style={[themeStyle, Styles.font]}
          value={name}
          onChangeText={
            text => setName(text)} placeholder='Add new task...' placeholderTextColor={isDarkMode ? Styles.dark.color : Styles.light.color} />
        <Button style={[Styles.container, themeStyle]} title='Save' onPress={add} disabled={name.trim() === ''}/>
        </View>
        <FlatList
          data={state.tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (

            <Row
              item={item}
              selectedId={state.selectedId}
              remove={() => remove(item.id)}
            />
          )}
        />
      </SafeAreaView>

    </View>
  )
}

