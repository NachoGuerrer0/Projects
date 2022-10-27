import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View } from 'react-native';

export default function Ejercicio6() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <View>
      <Button onPress={() => {
        setCount(count + 1);
      }}
        title={"Cuenta 1"}
      />
      <Text>Cada vez que pulso sumo 1 y llevo: {count}</Text>

      <Button onPress={() => {
        setCount2(count2 + 10);
      }}
        title={"Cuenta 10"}
      />
      <Text>Cada vez que pulso sumo 10 y llevo: {count2}</Text>

      <Button onPress={() => {
        setCount(0);
        setCount2(0);
      }}
        title={"Resetea"}
      />
      <Text>Cada vez que pulso reseteo {count} y {count2}</Text>
    </View>
  );
}

/*export default function Ejercicio6() {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Button onPress={() => {
                setCount(count + 1);
            }}
                title={"Cuenta 1"}
            />
            <Text>Cada vez que pulso sumo 1 y llevo: {count}</Text>

            <Button onPress={() => {
                setCount(count + 10);
            }}
                title={"Cuenta 10"}
            />
            <Text>Cada vez que pulso sumo 10 y llevo: {count}</Text>

            <Button onPress={() => {
                setCount(0);
            }}
                title={"Resetea"}
            />
            <Text>Cada vez que pulso reseteo {count}</Text>
        </View>
    );
}*/

/*export default function Ejercicio6() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <View>
      <View style={{backgroundColor:'grey', padding: 10}}>
        <Button onPress={() => {
        setCount(count+1);
      }}
      title={"Cuenta 1"}
      />
      <Text>Cada vez que pulso sumo 1 y llevo: {count}</Text>
      </View>

      <View><Button onPress={() => {
        setCount2(count2+10);
      }}
      title={"Cuenta 10"}
      />
      <Text>Cada vez que pulso sumo 10 y llevo: {count2}</Text>
      </View>

      <View><Button onPress={() => {
        setCount(0);
        setCount2(0);
      }}
      title={"Resetea"}
      />
      <Text>Cada vez que pulso reseteo {count} y {count2}</Text>
      </View>
    </View>
  );
}*/