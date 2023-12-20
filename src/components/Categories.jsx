import { FlatList, StyleSheet } from 'react-native'
import categories from '../data/categories.json'
import CategoryItem from './CategoryItem'

export default function Categories({navigation, route}) {
  return (
    <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={item => item}
      renderItem={({item}) => <CategoryItem navigation={navigation} route={route} category={item}/>}
    />
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
  }
})