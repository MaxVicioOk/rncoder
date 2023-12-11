import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function CardShadows({children,style}) {
  return (
    <View style={{...style,...styles.container}}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    //ANDROID
    elevation: 15,
    //OIs
    shadowColor: 'black',
    shadowOffset: {
      height: 5,
      width: 3
    },
    //elevation: 15,
    shadowRadius: 5,
    shadowOpacity: 1
  }
})