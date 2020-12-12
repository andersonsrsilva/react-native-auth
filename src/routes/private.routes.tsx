import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from '../navigation/tabs';

const Stack = createStackNavigator();

const PrivateRoutes = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
    </Stack.Navigator>
)

export default PrivateRoutes;
