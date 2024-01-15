import { FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import ProductItem from '../components/ProductItem'
import { useGetProductsByCategoryQuery } from '../app/services/shopServices'

export default function ItemListCategories({navigation, route}) {
  const { category } = route.params
  const { data, isLoading, error } = useGetProductsByCategoryQuery(category)
  const [ keyWord, setKeyWord] = useState('')
  const [ products, setProducts ] = useState()
  
  useEffect(() =>{
    if(!isLoading){
      const dataArray = Object.values(data)
      const filteredProd = dataArray.filter(p=>p.title.toLowerCase().includes(keyWord.toLowerCase()))
      setProducts(filteredProd)
    }
  },[keyWord, data])

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