import { FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ProductItem from '../components/ProductItem'
import allProducts from '../data/products.json'
import BackButton from '../components/BackButton'

export default function ItemListCategories({category, setCategorySelected, setProdIdSelected}) {
  
  const [ keyWord, setKeyWord] = useState('')
  const [ products, setProducts ] = useState('')
  
  useEffect(() =>{
    if (category){
      const categoryFilter = allProducts.filter(p=>p.category === category)
      const filteredProd = categoryFilter.filter(p=>p.title.toLowerCase().includes(keyWord.toLowerCase()))
      setProducts(filteredProd)
    }else{
      const filteredProd = allProducts.filter(p=>p.title.toLowerCase().includes(keyWord.toLowerCase()))
      setProducts(filteredProd)
    }
  },[keyWord])

  return (
    <>
      <Header title='Products'/>
      <SearchBar setKeyWord={setKeyWord}/>
      <BackButton setCategorySelected={setCategorySelected}/>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={(({item}) => <ProductItem item={item} setProdIdSelected={setProdIdSelected}/>)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
  },
  
})