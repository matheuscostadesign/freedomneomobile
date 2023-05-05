import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {StatusBar} from 'react-native';

// Navegação
const Stack = createNativeStackNavigator();

// Telas
import Home from '../pages/Home';
import Login from '../pages/Login';

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#002538" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            title: 'FreedomNEO Mobile',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#002538',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
