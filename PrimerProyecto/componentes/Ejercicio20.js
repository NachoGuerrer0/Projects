import * as React from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
    return (
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Bienvenido</Text>
        </View>
    )
}

function ListScreen() {

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

    function ListCompleteScreen() {
        const DATA = [
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                Nombre: 'Nacho',
                Apellido: 'Guerrero',
                Edad: '37',
                Sexo: 'Masculino'
            },
    
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                Nombre: 'Mónica',
                Apellido: 'Mariño',
                Edad: '19',
                Sexo: 'Femenino'
            },
    
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63a',
                Nombre: 'Antonio',
                Apellido: 'Recio',
                Edad: '55',
                Sexo: 'Masculino'
            }
        ];
    }

    const renderItem = ({ item }) => (
        <View>
            <Button onPress style = {() => navigation.navigate("InfoScreen")} title={item.Nombre} />
        </View>
    )

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

function SettingsScreen() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Información</Text>
        </View>
    );

}

function ListStack() {
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  name="Lista" component={ListScreen} options={{title:'Mi Perfil', headerTitleAlign:'center'}} />
        <Stack.Screen  name="Datos" component={ListCompleteScreen} options={{title: 'Ajustes', headerTitleAlign:'center'}} /> 
      </Stack.Navigator>
    </NavigationContainer>
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

                        if (route.name === 'Informacion') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Listado') {
                            iconName = focused ? 'person' : 'person-outline';
                        }


                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Listado" component={ListStack} />
                <Tab.Screen name="Informacion" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

