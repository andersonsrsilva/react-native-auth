import React from 'react';
import { StyleSheet } from 'react-native';
import PublicRoutes from './public.routes';
import PrivateRoutes from './private.routes';
import { useAuth } from '../contexts/auth';

const Routes: React.FC = () => {
    const { signed } = useAuth();

    return signed ? <PrivateRoutes /> : <PublicRoutes />
}

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Routes;
