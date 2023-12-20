import { StyleSheet } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'

export default function Home({navigation, route}) {
  return (
    <>
      <Categories navigation={navigation} route={route}/>
    </>
  )
}

const styles = StyleSheet.create({})