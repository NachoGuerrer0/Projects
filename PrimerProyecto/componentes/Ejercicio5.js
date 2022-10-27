import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View } from 'react-native';

const Human = (props) => {
    return (
        <View>
            <Text>Hola, soy {props.name} {props.name2}!</Text>
        </View>
    );
}

export default function Ejercicio5() {

    return (
        <View>
            <Human name="Nacho" name2="¡Tengo tierras!" />
            <Human name="Minguito" name2="¡¿Te apetezco?!" />
            <Human name="Antonio Recio, mayorista, ¡no limpio pescado!" name2="¡¡Morirás entre terribles sufrimientos!!" />
        </View>
    );
}