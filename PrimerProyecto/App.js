
/**

 * Sample React Native App

 * https://github.com/facebook/react-native

 *

 * @format

 * @flow strict-local

 */



import React, { useState } from 'react';

import { StyleSheet, Button, Text, Image, TextInput, View } from 'react-native';
import Ejercicio from './componentes/Ejercicio2';



/*export default function App(){
 
  const nombre="Nacho"
  const name="Cesur"
 
  return(
 
  <Text>hola {nombre} Bienvenido a {name}</Text>);
  }*/

/*export default function App(){
 const getFullName = (firstName, secondName) => {
   return firstName + " " + secondName;
 }

 return(
   <Text>Hola, soy {getFullName("Nacho","Guerrero",)}</Text>
 );
   
 

}*/

/*export default function App(){

 return(
   <View>
     <Text>Hola, me llamo...</Text>
     <TextInput style={{
       height:40,
       borderColor:'green',
       borderWidth:4
     }}
     defaultValue="Escribe tu nombre aquí!"
     />
   </View>
 )
}*/

/*const Human = () =>{
 return(
   <View>
     <Text>Soy un humano</Text>
   </View>
 );
}

const Human2 = () =>{
 return(
   <View>
     <Text>Soy de La Tierra</Text>
   </View>
 );
}

const Human3 = () =>{
 return(
   <View>
     <Text>Consiste en lanzar aros...</Text>
   </View>
 );
}

export default function App(){
 return(
   <View>
     <Text>Bienvenido!</Text>
     <Human />
     <Human2 />
     <Human3 />
   </View>
 )
}*/

/*const Human = (props) =>{
 return(
   <View>
     <Text>Hola, soy {props.name} {props.name2}!</Text>
   </View>
 );
}

export default function App(){

 return(
   <View>
     <Human name="Nacho" name2="Tengo tierras!" />
     <Human name="Fekir" name2="Te apetezco?!"/>
     <Human name="Antonio Recio,mayorista, no limpio pescado" name2="¡Morirás entre terribles sufrimientos!" />
   </View>
 );
}*/

/*export default function App(){
const [name, setname] = useState("cesur");
 
return(
  <Text>Hola {name} </Text>
  
);
}*/

/*export default function App () {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button onPress={() => {
        setCount(count+1);
      }}
      title={"Cuenta 1"}
      />
      <Text>Cada vez que pulso sumo 1 y llevo: {count}</Text>

      <Button onPress={() => {
        setCount(count+10);
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

/*export default function App () {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <View>
      <Button onPress={() => {
        setCount(count+1);
      }}
      title={"Cuenta 1"}
      />
      <Text>Cada vez que pulso sumo 1 y llevo: {count}</Text>

      <Button onPress={() => {
        setCount2(count2+10);
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
}*/


/*const App = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.red}>just red</Text>
    <Text style={styles.bigBlue}>just bigBlue</Text>
    <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
    <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'white'
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default App;*/

/*export default function App () {
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


//24/10/2022
//Condicionales

/*export default function App() {

  const [texto, setTexto] = useState('');

  function checkInp() { 
    var regex=/^[a-zA-Z]+$/;
    if (!texto.match(regex))
    {
      return <Text>Es un número</Text>
    } else {
      return <Text>Es letra</Text>
    }
    
  }

  return (
    <View>
    <TextInput 
    defaultValue=""
    placeholder="Texto"
    onChangeText={texto => setTexto(texto)}
    />
    {checkInp()}
    
    </View>
  )
}*/

//Ejercicio pizarra (Hacen lo mismo el if-else y el return ultimo)

/*export default function App() {
  const [count, setCount] = useState(20);

  //if (count === 20) {
  //return console.log("Son iguales");
  //} else {
  //return console.log("No son iguales");
  //}

  return (
    count === 20 ? console.log("Iguales") : console.log("No son iguales")
  );
}
 
*/



// Ejercicio 1
/*
export default function App() {
  const [Edad, setEdad] = useState(0);
  const [text, settext] = useState(null);

  function MeterEdad(Edad) {
    if (Edad < 18) {
      (text)=> settext(('¡Eres un yogurin!'))
    } else (Edad > 18); {
      (text)=> settext(('¡Viejo!'))
    }
  }

  return(
    
    <View>
      <Text>
      <Text>Hola mi nombre es Nacho Guerrero</Text>
      <Text style={{color:'blue'}}>Nacho Guerrero</Text>
        <Text>Escribe aqui tu edad</Text>
        <TextInput style={{
          height:40,
          borderColor:'black',
          borderWidth:1
        }}
        
        
        placeholder="Edad"
        onChangeText={Edad => setTexto(Edad)} //para que se guarde en el cuadro edad
    
        />

      <View>
        <Button onPress={()=> {
        MeterEdad(Edad)
      }}
      title={"Finalizar"}
      />
      </Text>
      </View>
      </View>

  )
}
*/

//Ejercicio 1 funciona!!!
/*export default function App() {
  const [Edad, setEdad]= useState(0);
  const [text,settext] = useState(null);

  return(
    
    <View>
      <Text>
        <Text>Hola mi nombre es </Text>
        <Text style = {{color:'blue'}}>Nacho Guerrero</Text>
      </Text>
      <Text>Escribe aquí tu edad:</Text>
      <TextInput 
        
        style = {{
        height:40,
        borderColor:'black',
        borderWidth:1
      }}
      placeholder = "Edad"
      onChangeText = {Edad => setEdad(Edad)}
      />

      <Button title = 'Finalizar' 
      onPress = {Edad === null? 
        (text)=>settext('null'): 
        Edad<18? (text)=>settext('¡Eres un yogurin!'): 
        Edad>19? (text)=>settext('¡A trabajar!'):
        (text)=>settext('¡Disfruta el cheque de 400 pavos en videojuegos!') } 
        />
        <Text>{text}</Text>
        <Text>Gracias por rellenar el formulario.</Text>
    </View>
  )
}
*/

export default function App() {
  /*const [Edad, setEdad] = useState(0);
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
      <View style = {{margin:78}}>
        <Button title='Finalizar'
          onPress={Edad === null ?
            (text) => settext('null') :
            Edad < 18 ?  settext(<Text>¡Eres un yogurin!</Text>) :
              Edad > 19 ?  settext(<Text>¡A trabajar!</Text>) :
                 settext(<Text>¡Disfruta el cheque de 400 pavos en videojuegos!</Text>)}
        />
      </View>
      <Text style = {{textAlign:'center'}}>{text}</Text>
      <Text style={{marginLeft:95,paddingTop:40,color:'black'}}>Gracias por rellenar el formulario.</Text>
    </View>
  )*/
  return (<Ejercicio/>)
}

