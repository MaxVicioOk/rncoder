import { FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux'

export default function ItemListCategories({navigation, route}) {
  const productsFilteredByCategory = useSelector(state => state.shop.value.productsFilteredByCategory)
  const [ keyWord, setKeyWord] = useState('')
  const [ products, setProducts ] = useState(productsFilteredByCategory)
  
  useEffect(() =>{
      const filteredProd = productsFilteredByCategory.filter(p=>p.title.toLowerCase().includes(keyWord.toLowerCase()))
      setProducts(filteredProd)
  },[keyWord, productsFilteredByCategory])

  return (
    <>
      <SearchBar setKeyWord={setKeyWord}/>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={(({item}) => <ProductItem item={item} navigation={navigation} route={route}/>)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    marginBottom: 120
  },
})