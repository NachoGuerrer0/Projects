import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NombresScreen from '../containers/NombresScreen'; 
import PerfilScreen from '../containers/PerfilScreen';


export default function HomeScreen() {
  const Stack = createNativeStackNavigator();
    return (
    <Stack.Navigator initialRouteName="Nombres">
        <Stack.Screen name="Nombres" component={NombresScreen} />
        <Stack.Screen  name="Perfil" component={PerfilScreen} options={{title:'Mis contactos', headerTitleAlign:'center'}} />
      </Stack.Navigator>
    )
}