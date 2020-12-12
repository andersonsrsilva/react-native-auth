import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../contexts/auth';

export default function Favorite() {
    const { signed, user, signOut } = useAuth();

    return (
        <View style={styles.container}>
            <Text>Favorite</Text>
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
