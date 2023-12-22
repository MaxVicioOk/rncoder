import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { colors } from '../global/colors'

export default function CartItem({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{item.title}</Text>
        <Text style={styles.text2}>{item.brand}</Text>
        <Text style={styles.text2}>${item.price}</Text>
      </View>
      <Entypo name='trash' size={25} color='black' />
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