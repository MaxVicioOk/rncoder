import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import CardShadows from '../wrappers/CardShadows'
import { useDispatch } from 'react-redux'
import { setProductsFilteredByCategory } from '../features/shop/shopSlice'

export default function CategoryItem({category, navigation}) {
  const dispatch = useDispatch()
  return (
    <Pressable onPress={()=>{
      dispatch(setProductsFilteredByCategory(category))
      navigation.navigate("ItemListCategories", {category})}}>
      <CardShadows style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadows>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue1,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    height: 70
  },
  text:{
    fontFamily: 'Lobster',
    fontSize: 20,
    color: colors.blue5
  }
})