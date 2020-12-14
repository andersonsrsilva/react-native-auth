import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth';
import { SafeAreaView, View, Button, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import FormTextInput from '../../components/FormTextInput';
import colors from '../../constants/colors';
import images from '../../constants/images';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();

    function handleSignIn() {
        signIn(email, password);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image source={images.logo} style={styles.logo} />
                <View style={styles.form}>
                    <FormTextInput
                        value={email}
                        onChangeText={text => setEmail(text)}
                        placeholder="E-mail"
                    />
                    <FormTextInput
                        value={password}
                        onChangeText={text => setPassword(text)}
                        placeholder="Password"
                    />
                    <Button title="Login" onPress={() => handleSignIn()} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.WHITE,
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        flex: 1,
        width: "100%",
        marginTop: 40,
        resizeMode: "contain",
        alignSelf: "center"
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: "80%"
    },
});
