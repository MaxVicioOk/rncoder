import { StyleSheet, useWindowDimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import { colors } from '../global/colors';
import OrderStack from './OrderStack';
import TabIcon from '../components/TabIcon';
import { useEffect, useState } from 'react';

const Tab = createBottomTabNavigator();
export default function Navigator() {
  const { width, height } = useWindowDimensions()
  const [ landscape, setLandscape ] = useState(false)
  useEffect(()=>{
    if (width > height){
      setLandscape(true)
    }else{
      setLandscape(false)
  }},[width, height])
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: landscape ? styles.tabBarLandscabe : styles.tabBar
        }}
      >
        <Tab.Screen
          name="ShopStack"
          component={ShopStack}
          options={{
            tabBarIcon:({focused})=> <TabIcon icon='shop' label='SHOP' focused={focused} />
          }}
        />
        <Tab.Screen 
          name="CartStack" 
          component={CartStack} 
          options={{
            tabBarIcon:({focused})=> <TabIcon icon='shopping-cart' label='CART' focused={focused} />
          }}/>
        <Tab.Screen 
          name="OrderStack" 
          component={OrderStack} 
          options={{
            tabBarIcon:({focused})=> <TabIcon icon='list' label='ORDERS' focused={focused} />
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  tabBar:{
    backgroundColor: colors.blue4,
    position: 'absolute',
    shadowColor: 'black',
    elevation: 5,
    bottom: 25,
    left: 15,
    right: 15,
    borderRadius: 10,
    height: 90
  },
  tabBarLandscabe:{
    backgroundColor: colors.blue4,
    position: 'absolute',
    shadowColor: 'black',
    elevation: 5,
    bottom: 10,
    left: 15,
    right: 15,
    borderRadius: 10,
    height: 60
  }
})