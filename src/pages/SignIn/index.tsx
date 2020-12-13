import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth';
import { SafeAreaView, View, Button, StyleSheet, Image } from 'react-native';
import FormTextInput from '../../components/FormTextInput';
import colors from '../../constants/colors';
import images from '../../constants/images';
import Spinner from 'react-native-loading-spinner-overlay';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, loading } = useAuth();

    function handleSignIn() {
        signIn(email, password);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />


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
        backgroundColor: colors.WHITE,
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
        alignSelf: "center"
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: "80%"
    },


    spinnerTextStyle: {
        color: '#FFF',
    },
});
