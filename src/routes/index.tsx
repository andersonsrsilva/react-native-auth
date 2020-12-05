import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';


import { useAuth } from '../contexts/auth';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  console.log(loading);


  if (loading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size='large' color='#666' />
      </View>
    )
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

export default Routes;