import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { colors } from '../global/colors'
import { useDispatch } from 'react-redux'
import { removeItem } from '../features/cart/cartSlice'

export default function CartItem({item}) {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{item.title}</Text>
        <Text style={styles.text2}>{item.brand}</Text>
        <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
        <Text style={styles.text2}>Precio: ${item.price * item.quantity}</Text>
      </View>
      <Pressable onPress={()=>dispatch(removeItem(item.id))}>
        <Entypo name='trash' size={25} color='black' />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: colors.blue1,
    width: '95%',
    height: 140,
    padding: 20,
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 4,
    shadowColor: 'black',
  },
  textContainer:{
    padding: 10,
  },
  text1:{
    fontFamily: 'Josefin',
    color: colors.blue5,
    fontSize: 26,
    fontWeight: 'bold'
  },
  text2:{
    fontFamily: 'Josefin',
    color: colors.blue5,
    fontSize: 18,
  },
})