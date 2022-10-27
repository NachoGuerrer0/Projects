import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View } from 'react-native';

//Ejercicio pizarra (Hacen lo mismo el if-else y el return ultimo)

export default function Ejercicio9() {
    const [count, setCount] = useState(20);

    //if (count === 20) {
    //return console.log("Son iguales");
    //} else {
    //return console.log("No son iguales");
    //}

    return (
        count === 20 ? console.log("Iguales") : console.log("No son iguales")
    );
}
