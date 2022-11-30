import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation, route}) {
  const {userName}=route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:'blue'}}>Pantalla Principal</Text>
      <Button onPress={()=>navigation.navigate("Perfil",{userName:userName})} title={'Ir a Perfil'}></Button>
      <Button onPress={()=>navigation.navigate("Ajustes")} title={'Ir a Ajustes'}></Button>
    </View>
  );
}

function PerfilScreen({navigation, route}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'green'}}>Perfil</Text>
        <Text style={{color:'black'}}>{route.params.userName}</Text>
        <Button onPress={()=>navigation.navigate("Ajustes")} title={'Ir a Ajustes'}></Button>
      </View>
    );
  }

  function AjustesScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'red'}}>Ajustes</Text>
        <Button onPress={()=>navigation.navigate("Perfil")} title={'Ir a Perfil'}></Button>
      </View>
    );
  }

const Stack = createNativeStackNavigator();

function Ejercicio17() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{userName:"Nacho"}}/>
        <Stack.Screen  name="Perfil" component={PerfilScreen} options={{title:'Mi Perfil', headerTitleAlign:'center'}} />
        <Stack.Screen  name="Ajustes" component={AjustesScreen} options={{title: 'Ajustes', headerTitleAlign:'center'}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Ejercicio17;