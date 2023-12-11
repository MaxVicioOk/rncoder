import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'

export default function Home({setCategorySelected}) {
  return (
    <>
      <Header title='Categories'/>
      <Categories setCategorySelected={setCategorySelected}/>
    </>
  )
}

const styles = StyleSheet.create({})