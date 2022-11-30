import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View, TextComponent,FlatList,ScrollView } from 'react-native';

export default function Ejercicio15() {
    icono:<MaterialCommunityIcons name="account-circle" size={60} color="blue" />
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            nombre: 'Antonio',
            apellido: 'Recio',
            telefono:'652369875',
            icono:<MaterialCommunityIcons name="account-circle" size={60} color="blue" />
            
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            nombre: 'Bernart',
            apellido: 'Costa',
            telefono:'755245698',
            icono:<MaterialCommunityIcons name="account-circle" size={60} color="red" />
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            nombre: 'Cristina',
            apellido: 'Fallaras',
            telefono:'665221458',
            icono:<MaterialCommunityIcons name="account-circle" size={60} color="green" />
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
            nombre: 'Diana',
            apellido: 'de Gales',
            telefono:'655475421',
            icono:<MaterialCommunityIcons name="account-circle" size={60} color="pink" />
        }
        ,
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
            nombre: 'Elena',
            apellido: 'de Troya',
            telefono:'633258741',
            icono:<MaterialCommunityIcons name="account-circle" size={60} color="black" />
        }
        ,];
    const renderItem = ({ item }) => {
        return (
            <View>
                <Text>{item.nombre}</Text>
                <Text>{item.apellido}</Text>
                <Text>{item.telefono}</Text>
                <Text>{item.icono}</Text>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}