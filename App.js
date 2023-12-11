import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import { useState } from 'react';
import ItemListCategories from './src/screens/ItemListCategories';
import { useFonts } from 'expo-font'

export default function App() {
  const [ categorySelected, setCategorySelected ] = useState('')
  const [fontLoaded] = useFonts({
    Josefin:require('./assets/fonts/JosefinSans-Regular.ttf'),
    Lobster:require('./assets/fonts/Lobster-Regular.ttf'),
    PlayFair:require('./assets/fonts/PlayfairDisplay-Regular.ttf')
  });
  if(!fontLoaded) return null;
  return (
    <View style={styles.container}>
      {categorySelected ? 
        <ItemListCategories category={categorySelected}/>
        :
        <Home setCategorySelected={setCategorySelected}/>
      }
      <StatusBar style="auto" />
    </View>
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
