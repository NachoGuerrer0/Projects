import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';



  function HomeScreen() {
    return (
    <Stack.Navigator initialRouteName="Nombres">
        <Stack.Screen name="Nombres" component={NombresScreen} />
        <Stack.Screen  name="Perfil" component={PerfilScreen} options={{title:'Mis contactos', headerTitleAlign:'center'}} />
      </Stack.Navigator>
    )
}

function NombresScreen({navigation}) {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            Nombre: 'Nacho',
            Apellido: 'Guerrero',
            Edad: '37',
            Sexo: 'Helicoptero de combate'
        },

        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            Nombre: 'Mónica',
            Apellido: 'Mariño',
            Edad: '19',
            Sexo: 'Unicornio'
        },

        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63a',
            Nombre: 'Antonio',
            Apellido: 'Recio',
            Edad: '55',
            Sexo: 'Masculino'
        }
    ];


    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Perfil', {item})}>
                <Text style = {{margin: 10}}>{item.Nombre}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style = {{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 15, marginTop: 15}}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

function PerfilScreen({route}) {
    const {item} = route.params;
    return(
        <View style = {{flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 100}}>
            <Text>Nombre: {item.Nombre}</Text>
            <Text>Apellido: {item.Apellido}</Text>
            <Text>Edad: {item.Edad}</Text>
            <Text>Sexo: {item.Sexo}</Text>
        </View>
    )
}

function SettingsScreen() {
    return (
        <View style = {{flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 60}}>
            <Text>Esta aplicación muestra información de los contactos</Text>
        </View>
    )
}


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';;
                }
    
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'green',
              tabBarInactiveTintColor: 'black',
            })}
          >
            <Tab.Screen name="Listado" component={HomeScreen} />
            <Tab.Screen name="Informacion" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }