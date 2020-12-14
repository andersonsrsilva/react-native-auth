import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FormButton from '../../components/FormButton';
import FormTextInput from '../../components/FormTextInput';

export default function Home() {
    const [name, setName] = useState('');

    function handleSave() {
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
