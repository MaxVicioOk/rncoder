import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header';
import Cart from '../screens/Cart';

const Stack = createNativeStackNavigator();
export default function CartStack() {
  return (
    <Stack.Navigator
      initialRouteName='Cart'
      screenOptions={
        ({route})=>({
          header: () => {
            return <Header title={'Cart'}/>
          }
        })
      }
    >
      <Stack.Screen name="Cart" component={Cart}/>
    </Stack.Navigator>
  )
}