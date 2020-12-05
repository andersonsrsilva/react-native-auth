import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useAuth} from '../../contexts/auth';

export default function SignIn() {
  
    const { signed, signIn } = useAuth();

    function handleSignIn(){
        signIn();
    }

    return (
        <View style={styles.container}>
            <Button onPress={handleSignIn} title='Sign in' />
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