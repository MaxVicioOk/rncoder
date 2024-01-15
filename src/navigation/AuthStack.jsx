import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Signup from '../screens/Signup'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator()

export default function AuthStack () {
  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Bienvenido"/>
                }
            }
        }
    >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}