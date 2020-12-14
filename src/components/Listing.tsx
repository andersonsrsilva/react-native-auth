import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Listing({ data }) {
    return (
        <View style={styles.container}>
            <Text>{data.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    }
})
