import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  StatusBar
} from 'react-native';

import Welcome from "./components/Welcome"
import Home from "./components/Home"
import Option from './components/Option';
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Loading from "./components/Loading"
import { AuthContext } from './navigations/AuthContext'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  const [user, setUser] = useState(true)
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user ?
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                  
                if (route.name === 'Home') {
                  iconName = focused
                    ? 'shield-home'
                    : 'shield-home-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'gamepad-circle' : 'gamepad-circle-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={"#0f75bc"} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Option" component={Option} />
          </Tab.Navigator>
        </NavigationContainer>
        :
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Loading"
              component={Loading} />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      }



    </AuthContext.Provider >
  );
};

export default App;
