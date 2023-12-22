import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { colors } from '../global/colors';
import { useEffect, useState } from 'react';

export default function TabIcon({icon, label, focused}) {
  const { width, height } = useWindowDimensions()
  const [ landscape, setLandscape ] = useState(false)
  useEffect(()=>{
    if (width > height){
      setLandscape(true)
    }else{
      setLandscape(false)
  }},[width, height])
  return (
    <View style={styles.container}>
      <Entypo name={icon} size={landscape ? (focused ? 39 : 28) : (focused ? 55 : 35)} color={focused ? colors.blue5 : colors.blue1} />
      <Text style={focused ? styles.textFocused : styles.text}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: colors.blue1,
    fontWeight: 'bold',
  },
  textFocused:{
    color: colors.blue5,
    fontWeight: 'bold',
  }
})