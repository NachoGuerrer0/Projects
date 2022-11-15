import React, { useState } from 'react';
import { StyleSheet, Button, Text, Image, TextInput, View, Switch } from 'react-native';

export default function DesarrolloFormulario() {
    const [edad, setEdad] = useState(0);
    const [nombre, setNombre] = useState(null);
    const [apellidos, setApellidos] = useState(null);
    const [correo, setCorreo] = useState(null);
    const [sexo, setSexo] = useState(null);
    const [text, setText] = useState(null);
    const [isEnabled, setIsEnabled] = useState(false)


    function Texto(edad, correo) {
        const regex = /^[a-zA-Z]+$/;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (!edad.match(regex) && !correo.text === true && Object.keys(edad).length != 0 && Object.keys(correo).length != 0) {
            setText('Mi nombre es ' + nombre +' '+apellidos+ ' con edad ' + edad + ' , y correo ' + correo + ' y sexo ' + (isEnabled?'Femenino':'Masculino'));

        } else {
            setText('Edad o correo incorrecto')
        }

    }

    return (
        <View>
            <Text style={{ color: 'black', padding: 20, textAlign: 'center' }}>Desarrollo de formulario</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text>Nombre: </Text>
                <TextInput
                    style={{
                        marginLeft:25,
                        padding: 0,
                        height: 30,
                        width: 275,
                        borderColor: '#006666',
                        borderWidth: 1
                    }}
                    placeholder=" Nombre"
                    onChangeText={nombre => setNombre(nombre)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Apellidos: </Text>
                <TextInput
                    style={{
                        marginLeft:18,
                        padding: 0,
                        height: 30,
                        width: 275,
                        borderColor: '#006666',
                        borderWidth: 1
                    }}
                    placeholder=" Apellidos"
                    onChangeText={() => setApellidos(apellidos)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Edad: </Text>
                <TextInput
                    style={{
                        marginLeft:45,
                        padding: 0,
                        height: 30,
                        width: 275,
                        borderColor: '#006666',
                        borderWidth: 1
                    }}
                    placeholder=" Edad"
                    onChangeText={edad => setEdad(edad)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Correo: </Text>
                <TextInput
                    style={{
                        marginLeft:34,
                        padding: 0,
                        height: 30,
                        width: 275,
                        borderColor: '#006666',
                        borderWidth: 1
                    }}
                    placeholder=" Correo"
                    onChangeText={correo => setCorreo(correo)}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Sexo: </Text>
                <Switch
                    trackColor={{ false: '#33CCCC', true: '#FF9999' }}
                    thumbColor={isEnabled ? 'pink' : 'cyan'}
                    onValueChange={() => setIsEnabled(previousState => !previousState)}
                    value={isEnabled}
                />
                {isEnabled ? <Text style={{ alignItems: 'center' }}>  Femenino</Text> : <Text style={{ alignItems: 'center' }}>  Masculino</Text>}
           </View>
            <View style={{ padding: 55 }}>
                <Button title='Enviar'
                    onPress={() => { Texto(edad, correo) }}
                    />
            </View>
            <Text style={{ alignItems: 'center', borderRadius:15 }}>{text}</Text>
            <View>
                < Image
                    style={{
                        height: 400,
                        width: 400,
                        alignItems: 'center'
                    }}
                    source={{
                        uri: isEnabled? 'https://pyxis.nymag.com/v1/imgs/a3f/a42/21ee9441b186d58086039a8c833d84b697-30-patty-selma.w710.jpg':'https://pbs.twimg.com/profile_images/482602104712749056/RND9ApuW_400x400.jpeg'
                    }}
                    />
            </View>
        </View>
    )
}
