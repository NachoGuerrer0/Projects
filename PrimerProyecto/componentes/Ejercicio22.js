import React, {useEffect, useState} from 'react';
import { Text, ScrollView, View, StyleSheet, FlatList,RefreshControl } from 'react-native';

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}


export default function App() {
    const [refreshing, setRefreshing] = useState(false);
    const [fruits,setFruits] = useState(null);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

        useEffect(() => {
            fetch("http://10.88.8.236:8080/fruits")
            .then(response=> response.json())
            .then((responseJson) => {
                console.log('getting data from fetchhh', responseJson);
                setFruits (responseJson);
            })
            .catch(error => console.log(error));
        }, [])


        const renderItem = ({ item}) => (
            <View>
                <Text>ID: {item.id}</Text>
                <Text>Nombre: {item.name}</Text>
                <Text>Precio: {item.price}</Text>
            </View>
        )


        return (
            <ScrollView refreshControl=
                {
                < RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <FlatList
                    data={fruits}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        )
}