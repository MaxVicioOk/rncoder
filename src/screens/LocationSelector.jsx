import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddButton from '../components/AddButton'
import MapPreview from '../components/MapPreview'
import { googleApi } from '../firebase/googleApi'
import * as Location from 'expo-location'
import { usePostUserLocationMutation } from '../app/services/shopServices'
import { useSelector } from 'react-redux'

export default function LocationSelector({navigation}) {
  const [ location, setLocation] = useState({ latitude: "", longitude: ""})
  const [ errMsg, setErrMsg ] = useState(null)
  const [ address, setAddress ] = useState("")
  const { width, height } = useWindowDimensions()
  const [ landscape, setLandscape ] = useState(false)
  const [ saveLocation, { data, isSuccess, isError, error } ] = usePostUserLocationMutation()
  const localId = useSelector(state => state.auth.value.localId)

  useEffect(()=>{
    if (width > height){
      setLandscape(true)
    }else{
      setLandscape(false)
  }},[width, height])

  useEffect(()=>{
    ( async ()=>{
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrMsg('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
    })()
  },[])

  useEffect(() => {
    ( async ()=>{
      try {
        if (location.latitude){
          const response = await fetch (`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`)
          const data = await response.json()
          setAddress(data.results[0].formatted_address)
        }
      } catch (error) {
        setErrMsg(error.message)
      }
    })()
  },[location])

  async function handleAddress(){
    try {
      const locationFormatted = {
        address,
        ...location
      }
      const data = await saveLocation({localId, locationFormatted})
      console.log(data)
      navigation.goBack()
    } catch (error) {
      setErrMsg(error.message)
    }
  }
  return (
    <View style={landscape ? styles.landscapeContainer : styles.container}>
      <MapPreview latitude={location.latitude} longitude={location.longitude}/>
      <View style={landscape ? styles.landscapeViewTextContainer : styles.viewTextContainer}>
        <Text style={styles.text}>{address}</Text>
        <AddButton title="Confirm" onPress={handleAddress}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
    gap: 40
  },
  landscapeContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
    marginLeft: "2%",
    gap: 10,
  },
  landscapeViewTextContainer:{
    alignItems: "center",
    paddingLeft: "5%",
  },
  viewTextContainer:{
    width: "100%",
    alignItems: "center",
    gap: 40,
  },
  text: {
    fontSize: 18,
    width: 300
  }
})