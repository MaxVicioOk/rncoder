import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import CardShadows from '../wrappers/CardShadows'

export default function CategoryItem({category, navigation, route}) {
  return (
    <Pressable onPress={()=>navigation.navigate("ItemListCategories", {category})}>
      <CardShadows style={styles.container}>
        <Text styles={styles.text}>{category}</Text>
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
  }
})