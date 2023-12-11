import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

export default function ProductItem({item}) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        resizeMode='cover'
        source={{uri: item.thumbnail}}
      />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '85%',
    flexDirection: 'row',
    backgroundColor: colors.blue3,
    margin:10,
    paddingHorizontal: 10,
    paddingVertical:5,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    gap: 10
  },
  image: {
    width: 50,
    height: 50,
  },
  text:{
    fontFamily: 'PlayFair'
  }
})