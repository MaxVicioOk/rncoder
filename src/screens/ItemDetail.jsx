import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ItemDetail() {
  return (
    <View style={styles.container}>
      <Text>ItemDetail</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})