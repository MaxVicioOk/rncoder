import { StyleSheet, Image, View, Text, useWindowDimensions } from 'react-native'
import AddButton from '../components/AddButton'
import { useGetProfileImageQuery, useGetUserLocationQuery } from '../app/services/shopServices'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export default function MyProfile({navigation}) {
  const { width, height } = useWindowDimensions()
  const [ landscape, setLandscape ] = useState(false)
  useEffect(()=>{
    if (width > height){
      setLandscape(true)
    }else{
      setLandscape(false)
  }},[width, height])

  const localId = useSelector(state => state.auth.value.localId)
  const {data} = useGetProfileImageQuery(localId)
  const {data: location} = useGetUserLocationQuery(localId)
  return (
    <View style={landscape ? styles.landscapeContainer : styles.container}>
        <View style={landscape ? styles.container : styles.imageContainer}>
          <Image
              source={data ? {uri: data.image} : require("../../assets/user.png")}
              style={styles.image}
              resizeMode='cover'
              />
          <Text>{location?.address}</Text>
        </View>
        {landscape ? <View style={styles.landscapeButtonsContainer}>
            <AddButton title={"Add profile picture"} onPress={()=> navigation.navigate("ImageSelector")}/>
            <AddButton title={"Add adress"} onPress={()=> navigation.navigate("LocationSelector")}/>
          </View>
        :
        <>
          <AddButton title={"Add profile picture"} onPress={()=> navigation.navigate("ImageSelector")}/>
          <AddButton title={"Add adress"} onPress={()=> navigation.navigate("LocationSelector")}/>
        </>
          }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    marginTop: 20
  },
  landscapeContainer:{
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"flex-end",
  },
  imageContainer:{
    alignItems:"center",
    gap: 20,
    marginBottom: 20,
  },
  image:{
    width:200,
    height:200,
    marginBottom: 10,
  },
  landscapeButtonsContainer:{
    width: "45%",
  },
})