import { FlatList, StyleSheet } from 'react-native'
import categories from '../data/categories.json'
import CategoryItem from './CategoryItem'

export default function Categories({setCategorySelected}) {
  return (
    <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={item => item}
      renderItem={({item}) => <CategoryItem setCategorySelected={setCategorySelected} category={item}/>}
    />
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
  }
})