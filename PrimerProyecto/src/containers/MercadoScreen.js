import React, { useEffect, useState } from 'react';
import { RefreshControl, Text, View, FlatList, Image } from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function MercadoScreen() {
  const [fruits, setFruits] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    fetch("http://192.168.1.136:8080/fruits")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('getting data from fetch', responseJson);
        setFruits(responseJson);
      })
      .catch(error => console.log(error));
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text style={{
          color: 'black',
          textAlign: 'center'
        }}>{item.name} {item.price}</Text>
        <Image style={{
          height: 200,
          width: 200,
          marginLeft:90
        }}
          source={item.name === 'Piña' ? require('../assets/Piña.jpg') : item.name === 'Pera' ?
            require('../assets/Pera.jpg') : item.name === 'Melocoton' ? require('../assets/melocoton.jpg') :
              item.name === 'Manzana' ? require('../assets/manzana.jpg') : item.name === 'Uva' ?
                require('../assets/uva.jpg') : item.name === 'Naranja' ? require('../assets/naranja.jpg') :
                  item.name === 'Kiwi' ? require('../assets/kiwi.jpg') : require('../assets/Platano.jpg')} />
      </View>)
  }

  return (<View>
    <FlatList refreshControl=
      {< RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      data={fruits}
      renderItem={renderItem}
      keyExtractor={item => item.id} />
  </View>
  )
}