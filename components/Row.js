import React from 'react'
import { Pressable, Text, StyleSheet, View } from 'react-native'

export default function Row({ item, selectedId,remove}) {
  const backgroundColor = item.id === selectedId ? '#f0f0f0' : '#fff'

  return (
    <Pressable style={[styles.row, { backgroundColor }]}
      onPress={() => remove()}
      >
          <Text style={styles.rowText}>{item.name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 6,

  },
  rowText: {
    width: '80%',
    fontSize: 24,
    padding: 4,
    margin: 4,
  },
})