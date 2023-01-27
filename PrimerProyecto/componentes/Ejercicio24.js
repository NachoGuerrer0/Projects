import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InsertarFrutasScreen from '../src/containers/InsertarFrutasScreen';
import MercadoScreen from '../src/containers/MercadoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Mercado') {
              iconName = focused
                ? 'basket-check'
                : 'basket-off-outline';
            } else if (route.name === 'Frutas') {
              iconName = focused ? 'fruit-cherries' :
                'fruit-cherries-off';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Mercado" component={MercadoScreen} />
        <Tab.Screen name="Frutas" component={InsertarFrutasScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}