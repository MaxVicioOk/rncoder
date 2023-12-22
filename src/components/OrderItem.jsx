import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { colors } from '../global/colors'

export default function OrderItem({item}) {
  const total = item.items.reduce((acc, product) => acc + (product.price * product.quantity), 0)
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{item.id}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text2}>{new Date(item.createAt).toLocaleString()}</Text>
        <Text style={styles.text2}>Total: ${total}</Text>
      </View>
      <Feather name='search' size={25} color='black'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: colors.blue1,
    width: '95%',
    height: 100,
    padding: 20,
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 4,
    shadowColor: 'black'
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