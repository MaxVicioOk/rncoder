import { StyleSheet, Text, View, FlatList } from 'react-native'
import allOrders from '../data/order.json'
import OrderItem from '../components/OrderItem'

export default function Order() {
  return (
    <View>
      <FlatList
        data={allOrders}
        keyExtractor={item => item.id}
        renderItem={({item})=> <OrderItem item={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})