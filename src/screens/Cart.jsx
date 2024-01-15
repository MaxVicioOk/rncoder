import { StyleSheet, Text, View, FlatList, Pressable, useWindowDimensions } from 'react-native'
import CartItem from '../components/CartItem'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../app/services/shopServices'

export default function Cart() {
  const { width, height } = useWindowDimensions()
  const [ landscape, setLandscape ] = useState(false)
  const cart = useSelector(state => state.cart.value)
  useEffect(()=>{
    if (width > height){
      setLandscape(true)
    }else{
      setLandscape(false)
  }},[width, height])

  const [postOrder] = usePostOrderMutation()
    
  return (
    <View style={landscape ? styles.containerLandscape : styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={item => item.id}
        renderItem={({item})=> <CartItem item={item}/>}
      />
      <View style={styles.totalContainer}>
        <Text>Total: ${cart.total}</Text>
        <Pressable onPress={()=>postOrder(cart)}>
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