import "firebase/database";
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FormButton from '../../components/FormButton';
import FormTextInput from '../../components/FormTextInput';
import Listing from '../../components/Listing';
import firebase from '../../config/firebaseConnection';

export default function Home() {
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {

        async function loadingData() {
            await firebase.database().ref('users').on('value', (snapshot) => {
                setUsers([]);

                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        name: childItem.val()
                    };

                    setUsers(oldArray => [...oldArray, data]);
                })
            })
        }

        loadingData();
    }, []);

    function handleSave() {
        firebase
            .database()
            .ref('users')
            .push(name);

        setName('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <FormTextInput
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholder="Name"
                />
                <FormButton label="Save" onPress={() => handleSave()} />

                <FlatList
                    keyExtractor={item => item.key}
                    data={users}
                    renderItem={({ item }) => (<Listing data={item} />)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        flex: 1,
        width: "80%"
    },
})
