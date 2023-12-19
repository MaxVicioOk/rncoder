import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import allProducts from '../data/products.json'
import { colors } from '../global/colors'

export default function ItemDetail({prodIdSelected, setProdIdSelected}) {
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
    const findedProduct = allProducts.find(product => product.id === prodIdSelected)
    setProduct(findedProduct)
  },[prodIdSelected])
  return (
    <>
      <Header title='Detail'/>
      <Pressable style={styles.goBack} title='GO BACK' onPress={() => setProdIdSelected(0)}>
        <Text style={styles.text}>GO BACK</Text>
      </Pressable>
      <View style={landscape ? styles.containerLandscape : styles.container}>
        <Image
          style={landscape ? styles.imageLandscape : styles.image}
          source={{uri:product.thumbnail}}
          resizeMode='cover'
        />
        <View style={styles.containerDetail}>
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15
  },
  containerLandscape: {
    flexDirection: 'row',
    height:'70%'
  },
  image:{
    width:'100%',
    height: 300,
  },
  imageLandscape: {
    width:'30%',
    height: '100%',
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
  goBack: {
    backgroundColor: colors.blue2,
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
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
    margin: 10.
  }
})