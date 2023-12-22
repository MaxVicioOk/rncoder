import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header';
import Order from '../screens/Order';

const Stack = createNativeStackNavigator();
export default function OrderStack() {
  return (
    <Stack.Navigator
      initialRouteName='Orders'
      screenOptions={
        ({route})=>({
          header: () => {
            return <Header title={'Order'}/>
          }
        })
      }
    >
      <Stack.Screen name="Order" component={Order}/>
    </Stack.Navigator>
  )
}