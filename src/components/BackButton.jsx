import { StyleSheet, Text,Pressable } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

export default function BackButton({setCategorySelected}) {
  return (
      <Pressable style={styles.goBack} title='GO BACK' onPress={() => setCategorySelected('')}>
        <Text style={styles.text}>GO BACK</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  goBack: {
    backgroundColor: colors.blue2,
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  text: {
    color: colors.blue5
  }
})