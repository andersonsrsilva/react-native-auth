import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useAuth } from '../../contexts/auth';

export default function Dashboard() {
    
    const { signed, user, signOut } = useAuth();

    function handleSignout(){
        signOut();
    }

    return (
        <View style={styles.container}>
            <Text>Olá {user.name}!</Text>
            <Button onPress={handleSignout} title='Sign out' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})