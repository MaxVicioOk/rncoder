import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header';
import MyProfile from '../screens/MyProfile';
import ImageSelector from '../screens/ImageSelector';

const Stack = createNativeStackNavigator();
export default function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName='MyProfile'
      screenOptions={
        ({route})=>({
          header: () => {
            return <Header title={'Profile'}/>
          }
        })
      }
    >
      <Stack.Screen name="MyProfile" component={MyProfile}/>
      <Stack.Screen name="ImageSelector" component={ImageSelector}/>
    </Stack.Navigator>
  )
}