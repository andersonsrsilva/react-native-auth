import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';
import Loading from './src/components/Loading';
import { StyleSheet } from 'react-native';
import { LoadProvider } from './src/contexts/load';

export default function App() {
    return (
        <NavigationContainer>
            <LoadProvider>
                <AuthProvider>
                    <StatusBar style="auto" backgroundColor="#428AF8" />
                    <Loading />
                    <SafeAreaView style={styles.container}>
                        <Routes />
                    </SafeAreaView>
                </AuthProvider>
            </LoadProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

