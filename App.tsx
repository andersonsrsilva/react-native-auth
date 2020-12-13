import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';
import Loading from './src/components/Loading';

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Loading />
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    );
}
