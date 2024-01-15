import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { useState } from 'react'
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';

export default function MainNavigator() {
  const idToken = useSelector(state => state.auth.value.idToken)
  return (
    <NavigationContainer>
      {idToken ? <TabNavigator/> : <AuthStack/>}
    </NavigationContainer>
  )
}