import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { colors } from '../global/colors'
import { useEffect, useState } from 'react'

export default function Header({title}) {
  const { width, height } = useWindowDimensions()
  const [ landscape, setLandscape ] = useState(false)
  useEffect(()=>{
    if (width > height){
      setLandscape(true)
    }else{
      setLandscape(false)
  }},[width, height])
  return (
    <View style={landscape ? styles.containerLandscape : styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue4,
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLandscape:{
    backgroundColor: colors.blue4,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Josefin'
  },
})