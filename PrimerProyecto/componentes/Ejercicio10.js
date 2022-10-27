import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View } from 'react-native';

export default function Ejercicio10() {
  const [Edad, setEdad] = useState(0);
  const [text, settext] = useState(null);

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
        onChangeText={Edad => setEdad(Edad)}
      />
      <View style={{ margin: 78 }}>
        <Button title='Finalizar'
          onPress={Edad === null ?
            (text) => settext('null') :
            Edad < 18 ? (text) => settext(<Text style={{ color: 'green' }} >¡Eres un yogurin!</Text>) :
              Edad > 19 ? (text) => settext(<Text style={{ color: 'red' }}>¡A trabajar!</Text>) :
                (text) => settext(<Text style={{ color: 'blue' }}>¡Disfruta el cheque de 400 pavos en videojuegos!</Text>)}
        />
      </View>
      <Text style={{ textAlign: 'center' }}>{text}</Text>
      <Text style={{ marginLeft: 95, paddingTop: 40, color: 'black' }}>Gracias por rellenar el formulario.</Text>
    </View>
  )
}