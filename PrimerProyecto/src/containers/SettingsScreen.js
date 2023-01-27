import * as React from 'react';
import { Text, View} from 'react-native';


export default function SettingsScreen() {
    return (
        <View style = {{flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 60}}>
            <Text style = {{color:'black'}}>Esta aplicación muestra información de los contactos</Text>
        </View>
    )
}