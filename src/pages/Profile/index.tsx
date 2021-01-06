import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../../components/FormButton';
import { useAuth } from '../../contexts/auth';

export default function Profile() {
    const [nome, setNome] = useState([]);

    useEffect(() => {

    }, []);

    const { user, signOut } = useAuth();

    function handleSignout() {
        signOut();
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text>Olá {user?.email}!</Text>
                <FormButton label="Sign out" onPress={() => handleSignout()} />
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
        width: "80%"
    },
})
