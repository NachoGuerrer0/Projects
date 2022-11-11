import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View, TextComponent } from 'react-native';

export default function Ejercicio10() {
  const [edad, setEdad] = useState(0);
  const [text, setText] = useState(null);
  const [color, setColor] = useState(null);


  function MeterEdad() {
    if (edad < 18) {
      setText('¡Eres un yogurin!')
      setColor('blue')
    }
    else if (edad == 18) {
      setText('¡A gastar el cheque de 400 pavos en videojuegos!')
      setColor('green')
    }
    else {
      setText('¡A trabajar!')
      setColor('red')
    }
  }

  function VerificarNumero(numero) {
    //const regex = /^[ÇçÑñáéíóúÁÉÍÓÚA.-Za-z0-9 ]+$/;
    const regex = /^[.a-zA-Z]+$/
    if (!numero.match(regex)) {
      { MeterEdad() }
    } else {
      setText("Mete un número miarma...")
      setColor("red")
    }
  }


  return (
    <View>
      <Text style={{ color: 'black', paddingTop: 40, textAlign: 'center' }}>
        <Text>Hola mi nombre es </Text>
        <Text style={{ color: 'blue' }}>Nacho Guerrero</Text>
      </Text>
      <Text style={{ color: 'black', paddingTop: 30, textAlign: 'left', paddingLeft: 78 }}>Escribe aquí tu edad:</Text>
      <TextInput

        style={{
          height: 30,
          width: 245,
          padding: 0,
          borderColor: 'grey',
          borderWidth: 1,
          marginLeft: 78,


        }}

        placeholder="Edad"
        onChangeText={edad => setEdad(edad)}
      />

      <View style={{ margin: 78 }}>
        <Button title='Finalizar'
          onPress={() => { VerificarNumero(edad); MeterEdad }}
        />

      </View>
      <Text style={{ textAlign: 'center', color: color }}>{text}</Text>
      <Text style={{ marginLeft: 95, paddingTop: 40, color: 'black' }}>Gracias por rellenar el formulario.</Text>
    </View>
  )
}