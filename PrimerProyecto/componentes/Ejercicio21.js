import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from '../src/navigation/HomeStack';
import SettingsScreen from '../src/containers/SettingsScreen';


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Listado') {
                    iconName = focused
                        ? 'person'
                        : 'person-outline';
                } else if (route.name === 'Informacion') {
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                }
    
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'green',
              tabBarInactiveTintColor: 'black',
            })}
          >
            <Tab.Screen name="Listado" component={HomeStack} />
            <Tab.Screen name="Informacion" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }