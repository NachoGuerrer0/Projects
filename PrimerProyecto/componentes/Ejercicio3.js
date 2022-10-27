import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View } from 'react-native';

export default function Ejercicio3() {

  return (
    <View>
      <Text>Hola, me llamo...</Text>
      <TextInput style={{
        height: 40,
        borderColor: 'green',
        borderWidth: 4
      }}
        defaultValue="Escribe tu nombre aquí!"
      />
    </View>)
}