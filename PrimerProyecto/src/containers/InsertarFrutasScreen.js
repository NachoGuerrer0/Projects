import React, { useEffect, useState } from 'react';
import { RefreshControl, Text, ScrollView, StyleSheet, Button, TextInput } from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function InsertarFrutasScreen() {
  const [fruits, setFruits] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [nombre, setNombre] = useState(null);
  const [precio, setPrecio] = useState(null);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  function post() {
    let data =
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nombre,
        price: precio
      }),
    };


    return fetch("http://10.88.3.231:8080/fruits", data)
  }
  return (
    <ScrollView>
      <Text
        style={{
          textAlign: 'center', fontSize: 20,
          color: 'black'
        }}>Insertar Fruta</Text>
      <TextInput
        style={{
          marginLeft: 25,
          marginBottom: 25,
          marginTop: 25,
          padding: 0,
          height: 32,
          width: 275,
          alignSelf: 'center',
          borderColor: '#4a9ae9',
          borderWidth: 1,
          fontSize: 18,
          color: 'black',
          borderRadius:10,
          textAlign:'center'
        }}
        placeholder=" Nombre"
        onChangeText={nombre => setNombre(nombre)}
      />
      <TextInput
        style={{
          marginLeft: 25,
          marginBottom: 25,
          padding: 0,
          height: 32,
          width: 275,
          alignSelf: 'center',
          borderColor: '#4a9ae9',
          borderWidth: 1,
          fontSize: 18,
          color: 'black',
          borderRadius:10,
          textAlign:'center'
        }}
        placeholder=" Precio"
        onChangeText={precio => setPrecio(precio)}
      />
      <Button title='Enviar' onPress={post} />
    </ScrollView>
  )
}