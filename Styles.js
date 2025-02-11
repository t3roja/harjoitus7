import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  toDoContainer: {
    paddingTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center,'
  },
  light: {
    backgroundColor: '#f5f5f5',
    color: '#333'
  },
  dark: {
    backgroundColor: '#333',
    color: '#f5f5f5'
  },
  stopWatchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopWatchButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  stopWatchTime: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  button: {
    flex: 1
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    width: '100%'
  },
  font:{
    fontSize: 24
  }

})

