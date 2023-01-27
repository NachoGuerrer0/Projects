import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';


export default function NombresScreen({navigation}) {
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
    const renderItem = ({item}) => {
        return (
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Perfil', {item})}>
                <Text style = {{margin: 10, color:'black'}}>{item.Nombre}</Text>
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