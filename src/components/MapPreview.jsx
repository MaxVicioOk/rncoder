import { StyleSheet, Image, useWindowDimensions } from 'react-native'
import React, { useState, useEffect }from 'react'
import { googleApi } from '../firebase/googleApi'

export default function MapPreview({ latitude, longitude }) {
  const { width, height } = useWindowDimensions()
  const [ landscape, setLandscape ] = useState(false)
  useEffect(()=>{
    if (width > height){
      setLandscape(true)
    }else{
      setLandscape(false)
  }},[width, height])

  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}
  &zoom=10
  &size=300x300
  &maptype=roadmap
  &markers=color:red%7Clabel:C%7C${latitude},${longitude}
  &key=${googleApi.mapStatic}`

  return (
    <Image style={landscape ? styles.imageLandscape : styles.image} source={ latitude ? {uri: mapPreviewUrl} : require("../../assets/map.png")}/>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300
  },
  imageLandscape:{
    height: 250,
    width: 250
  }
})