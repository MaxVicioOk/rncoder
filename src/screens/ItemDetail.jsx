import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

export default function ItemDetail() {
  const dispatch = useDispatch()
  const { width, height } = useWindowDimensions()
  const [ landscape, setLandscape ] = useState(false)
  const product = useSelector(state => state.shop.value.productSelected)
  useEffect(()=>{
    if (width > height){
      setLandscape(true)
    }else{
      setLandscape(false)
  }},[width, height])
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
          <Pressable style={styles.buyButton} onPress={()=> dispatch(addItem(product))}>
            <Text style={styles.textBuyButton}>ADD TO CART</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
    height: '82%',
  },
  containerLandscape: {
    flexDirection: 'row',
    height:'80%',
    width: '100%',
    justifyContent: 'space-around'
  },
  image:{
    width:'100%',
    height: "45%",
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
  },
  containerDetailLandscape:{
    padding: 15,
    width: '55%'
  }
})