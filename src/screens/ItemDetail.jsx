import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../data/products.json'
import { colors } from '../global/colors'

export default function ItemDetail({route}) {
  const {id} = route.params
  const [ product, setProduct ] = useState({})
  const { width, height } = useWindowDimensions()
  const [ landscape, setLandscape ] = useState(false)
  useEffect(()=>{
    if (width > height){
      setLandscape(true)
    }else{
      setLandscape(false)
  }},[width, height])
  useEffect(()=>{
    const findedProduct = allProducts.find(product => product.id === id)
    setProduct(findedProduct)
  },[id])
  return (
    <>
      <View style={landscape ? styles.containerLandscape : styles.container}>
        <Image
          style={landscape ? styles.imageLandscape : styles.image}
          source={{uri:product.thumbnail}}
          resizeMode='cover'
        />
        <View style={landscape ? styles.containerDetailLandscape : styles.containerDetail}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
          <Text style={landscape ? styles.priceLandscape : styles.price}>${product.price}</Text>
          <Pressable style={styles.buyButton}>
            <Text style={styles.textBuyButton}>BUY NOW</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15
  },
  containerLandscape: {
    flexDirection: 'row',
    height:'100%',
    width: '100%',
    padding: '1%',
    justifyContent: 'space-around'
  },
  image:{
    width:'100%',
    height: 300,
  },
  imageLandscape: {
    width:'33%',
    height: '100%',
    borderRadius: 10
  },
  buyButton:{
    backgroundColor: colors.blue1,
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginVertical: 20,
    borderRadius: 50,
  },
  textBuyButton: {
    alignSelf: 'center',
  },
  text: {
    color: colors.blue5
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  price:{
    fontSize: 25,
    alignSelf: 'center',
  },
  priceLandscape:{
    alignSelf: 'center',
    fontSize: 35,
  },
  containerDetail:{
    padding: 25,
    margin: 10,
  },
  containerDetailLandscape:{
    padding: 25,
    margin: 10,
    width: '55%'
  }
})