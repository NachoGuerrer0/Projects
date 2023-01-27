import * as React from 'react';
import { Text, View} from 'react-native';



export default function PerfilScreen({route}) {
    const {item} = route.params;
    return(
        <View style = {{flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 100}}>
            <Text style = {{color:'black'}}>Nombre: {item.Nombre}</Text>
            <Text style = {{color:'black'}}>Apellido: {item.Apellido}</Text>
            <Text style = {{color:'black'}}>Edad: {item.Edad}</Text>
            <Text style = {{color:'black'}}>Sexo: {item.Sexo}</Text>
        </View>
    )
}