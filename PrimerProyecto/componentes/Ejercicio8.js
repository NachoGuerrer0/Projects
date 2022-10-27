import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View } from 'react-native';

//24/10/2022
//Condicionales

export default function Ejercicio8() {

    const [texto, setTexto] = useState('');

    function checkInp() {
        var regex = /^[a-zA-Z]+$/;
        if (!texto.match(regex)) {
            return <Text>Es un número</Text>
        } else {
            return <Text>Es letra</Text>
        }

    }

    return (
        <View>
            <TextInput
                defaultValue=""
                placeholder="Texto"
                onChangeText={texto => setTexto(texto)}
            />
            {checkInp()}

        </View>
    )
}