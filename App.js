import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  const [fontLoaded] = useFonts({
    Josefin:require('./assets/fonts/JosefinSans-Regular.ttf'),
    Lobster:require('./assets/fonts/Lobster-Regular.ttf'),
    PlayFair:require('./assets/fonts/PlayfairDisplay-Regular.ttf')
  });
  if(!fontLoaded) return null;
  return (
    <>
      <StatusBar style='auto'/>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
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