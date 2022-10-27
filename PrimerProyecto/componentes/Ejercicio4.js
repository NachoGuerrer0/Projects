import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View } from 'react-native';

const Human = () => {
    return (
        <View>
            <Text>Soy un humano</Text>
        </View>
    );
}

const Human2 = () => {
    return (
        <View>
            <Text>Soy de La Tierra</Text>
        </View>
    );
}

const Human3 = () => {
    return (
        <View>
            <Text>Consiste en lanzar aros...</Text>
        </View>
    );
}

export default function Ejercicio4() {
    return (
        <View>
            <Text>Bienvenido!</Text>
            <Human />
            <Human2 />
            <Human3 />
        </View>
    )
}