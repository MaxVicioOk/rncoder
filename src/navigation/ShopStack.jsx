import Home from '../screens/Home';
import ItemListCategories from '../screens/ItemListCategories';
import ItemDetail from '../screens/ItemDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header';

const Stack = createNativeStackNavigator();
export default function ShopStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={
        ({route})=>({
          header: () => {
            return <Header title={
              route.name ==='Home' ? 'Categories' : 
              route.name ==='ItemListCategories' ? route.params.category :
              'Details'
            }/>
          }
        })
      }
    >
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="ItemListCategories" component={ItemListCategories}/>
      <Stack.Screen name="ItemDetail" component={ItemDetail}/>
    </Stack.Navigator>
  )
}