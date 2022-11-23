import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View, TextComponent,FlatList,ScrollView } from 'react-native';

export default function Ejercicio12() {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Primer elemento',
            nombre: 'Antonio',
            edad:'20',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Segundo elemento',
            nombre: 'Bernardo',
            edad:'21',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Tercer elemento',
            nombre: 'Cristina',
            edad:'16',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
            title: 'Cuarto elemento',
            nombre: 'Diana',
            edad:'45',
        }
        ,
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
            title: 'Quinto elemento',
            nombre: 'Elena',
            edad:'29',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
            title: 'Sexto elemento',
            nombre: 'Fernando',
            edad:'7',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
            title: 'Septimo elemento',
            nombre: 'Goyo',
            edad:'50',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
            title: 'Octavo elemento',
            nombre: 'Hiipolito',
            edad:'18',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bg',
            title: 'Noveno elemento',
            nombre: 'Ismael',
            edad:'77',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bh',
            title: 'Décimo elemento',
            nombre: 'Julia',
            edad:'25',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bi',
            title: 'Decimoprimero elemento',
            nombre: 'Kilian',
            edad:'9',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bj',
            title: 'Decimosegundo elemento',
            nombre: 'Luisa',
            edad:'30',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bk',
            title: 'Decimotercero elemento',
            nombre: 'Mario',
            edad:'68',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bl',
            title: 'Decimocuarto elemento',
            nombre: 'Nacho',
            edad:'18',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bm',
            title: 'Decimoquinto elemento',
            nombre: 'Olivia',
            edad:'6',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bn',
            title: 'Decimosexto elemento',
            nombre: 'Pedro',
            edad:'81',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bo',
            title: 'Decimoseptimo elemento',
            nombre: 'Raul',
            edad:'2',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bp',
            title: 'Decimooctavo elemento',
            nombre: 'Tomas',
            edad:'61',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bq',
            title: 'Decimonoveno elemento',
            nombre: 'Sonia',
            edad:'29',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28br',
            title: 'Vigésimo elemento',
            nombre: 'Zacarias',
            edad:'60',
        },];
    const renderItem = ({ item }) => {
        return (
            <View>
                <Text>{item.title}, {item.nombre}</Text>
            </View>
        )
    }
    return (
        <ScrollView>
        
        <Text style={{fontSize: 42,}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        </ScrollView>
    )
}