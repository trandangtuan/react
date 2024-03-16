// App.js (or wherever your main navigation setup is)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Messaging from './Messaging';
import Chats from './Chats';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Register" component={RegisterForm} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="Messaging" component={Messaging} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
