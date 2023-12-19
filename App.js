import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
import { useState } from 'react';
import ItemListCategories from './src/screens/ItemListCategories';
import { useFonts } from 'expo-font'
import ItemDetail from './src/screens/ItemDetail';

export default function App() {
  const [ categorySelected, setCategorySelected ] = useState('')
  const [ prodIdSelected, setProdIdSelected ] = useState(0)
  const [fontLoaded] = useFonts({
    Josefin:require('./assets/fonts/JosefinSans-Regular.ttf'),
    Lobster:require('./assets/fonts/Lobster-Regular.ttf'),
    PlayFair:require('./assets/fonts/PlayfairDisplay-Regular.ttf')
  });
  if(!fontLoaded) return null;
  return (
    <>
      <StatusBar style='auto'/>
      <SafeAreaView style={styles.container}>
        {categorySelected ? 
          prodIdSelected != 0 ? 
            <ItemDetail prodIdSelected={prodIdSelected} setProdIdSelected={setProdIdSelected}/> 
            : 
            <ItemListCategories 
            category={categorySelected}
            setCategorySelected={setCategorySelected} 
            setProdIdSelected={setProdIdSelected}/>
          :
          <Home setCategorySelected={setCategorySelected}/>
        }
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
