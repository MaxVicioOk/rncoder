import { FlatList, StyleSheet } from 'react-native'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../app/services/shopServices'

export default function Categories({navigation, route}) {
  const { data: categories} = useGetCategoriesQuery()
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
    height: '100%',
    marginBottom: 120
  }
})