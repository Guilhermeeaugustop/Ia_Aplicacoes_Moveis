import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/login/Login';
import SingIn from '../pages/singin/SingIn';
import RecSenha from '../pages/recsenha/RecSenha';
import ResSenha from '../pages/ressenha/ResSenha';
import Home from '../pages/home/Home';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={SingIn} />
        <Stack.Screen name="RecuperacaoSenha" component={RecSenha} />
        <Stack.Screen name="ResSenha" component={ResSenha} />
         <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}