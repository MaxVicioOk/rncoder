import { Image, StyleSheet, Text, Pressable, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

export default function ProductItem({item, navigation, route}) {
  const { width } = useWindowDimensions()
  return (
    <Pressable style={styles.container} onPress={()=> navigation.navigate("ItemDetail", {id: item.id})}>
      <Text style={width > 360 ? styles.text : styles.textMin}>{item.title}</Text>
      <Image 
        style={styles.image}
        resizeMode='cover'
        source={{uri: item.thumbnail}}
      />
    </Pressable>
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
    gap: 10,
    justifyContent: 'space-between',
  },
  image: {
    minWidth: 90,
    height: 90,
    width:'30%',
    borderRadius: 10,
  },
  text:{
    fontFamily: 'PlayFair',
    width: '60%',
    textAlign: 'center',
    fontSize: 18,
  },
  textMin:{
    fontFamily: 'PlayFair',
    width: '60%',
    textAlign: 'center',
    fontSize: 12,
  }
})