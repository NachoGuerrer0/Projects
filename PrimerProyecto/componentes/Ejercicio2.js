import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View } from 'react-native';

export default function Ejercicio2() {

  const getFullName = (firstName, secondName) => {
    return firstName + " " + secondName;
  }

  return (
    <Text>Hola, soy {getFullName("Nacho", "Guerrero",)}</Text>);
}