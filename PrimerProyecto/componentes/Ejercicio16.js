import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:'blue'}}>Pantalla Principal</Text>
      <Button onPress={()=>navigation.navigate("Perfil",{nombre:'Nacho', nombre2:'Mónica', edad:'37', edad2:'19'})} title={'Ir a Perfil'}></Button>
      <Button onPress={()=>navigation.navigate("Ajustes")} title={'Ir a Ajustes'}></Button>
    </View>
  );
}

function PerfilScreen({navigation, route}) {
  //console.log("El route es: ", route);
    //const{nombre,nombre2, edad, edad2}=route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'green'}}>Perfil</Text>
        <Text>{route.params.nombre},{route.params.edad}</Text>
        <Text>{route.params.nombre2},{route.params.edad2}</Text>
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

function Ejercicio16() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen  name="Perfil" component={PerfilScreen} options={{title:'Mi Perfil'}} />
        <Stack.Screen  name="Ajustes" component={AjustesScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Ejercicio16;