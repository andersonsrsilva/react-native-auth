import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import PublicRoutes from './public.routes';
import PrivateRoutes from './private.routes';
import { useAuth } from '../contexts/auth';

const Routes: React.FC = () => {
    const { signed, loading } = useAuth();

    if (loading) {
        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator size='large' color='#666' />
            </View>
        )
    }

    console.log(signed);

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
