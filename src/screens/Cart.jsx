import { StyleSheet, Text, View, FlatList, Pressable, useWindowDimensions } from 'react-native'
import allCart from '../data/cart.json'
import CartItem from '../components/CartItem'
import { useState, useEffect } from 'react'

export default function Cart() {
  const [ cart, setCart ] = useState([])
  const [ totalPrice, setTotalPrice ] = useState(0)
  const { width, height } = useWindowDimensions()
  const [ landscape, setLandscape ] = useState(false)
  useEffect(()=>{
    if (width > height){
      setLandscape(true)
    }else{
      setLandscape(false)
  }},[width, height])

  useEffect(() =>{
    setCart(allCart)
  },[])
  useEffect(() =>{
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    setTotalPrice(total)
  },[cart])
  return (
    <View style={landscape ? styles.containerLandscape : styles.container}>
      <FlatList
        data={allCart}
        keyExtractor={item => item.id}
        renderItem={({item})=> <CartItem item={item}/>}
      />
      <View style={styles.totalContainer}>
        <Text>Total: ${totalPrice}</Text>
        <Pressable>
          <Text>Confirm</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: '80%',
    width: '100%',
    padding: 10,
  },
  containerLandscape:{
    height: '80%',
    width: '100%',
    padding: 10,
  },
  totalContainer:{
    flexDirection:'row',
    backgroundColor: 'grey',
    padding: 20,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})