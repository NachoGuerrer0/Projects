import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function Ejercicio13() {
    
    const [count,setCount]=useState(0);
        
    return (
        <View>
            <TouchableOpacity
            style={{alignItems: "center",backgroundColor: "green",padding: 10}}
            onPress={()=> setCount(count + 1)}>
            <Text>Press Here</Text>
        </TouchableOpacity>
       <TouchableHighlight
        style={{alignItems: "center",backgroundColor: "blue",padding: 10}}
            onPress={()=> setCount(count + 1)}
>
            <Text>Press Here</Text>
       </TouchableHighlight> 
        </View>
    )
}