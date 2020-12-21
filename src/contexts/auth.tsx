import { apisAreAvailable } from 'expo';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { AsyncStorage } from 'react-native';
import * as auth from '../services/auth';
import api from '../services/api';
import User from '../interfaces/User';
import AuthContextData from '../interfaces/AuthContextData';
import { useLoad } from './load';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const { start, stop } = useLoad();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        start();

        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@RNAuth:user');
            const storageToken = await AsyncStorage.getItem('@RNAuth:token');

            if (storageUser && storageToken) {
                setUser(JSON.parse(storageUser));
                stop();
            } else if (!storageUser && !storageToken) {
                stop();
            }
        }

        loadStorageData();
    }, [])

    async function signIn(email: string, password: string) {
        console.log(email);
        console.log(password);

        start();
        const response = await auth.Signin(email, password);
        setUser(response.user);
        stop();
        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);
    }

    function signOut() {
        start();
        AsyncStorage.clear().then(() => {
            setUser(null);
            stop();
        });
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }} >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}
