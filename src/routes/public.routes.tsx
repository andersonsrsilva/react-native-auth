import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const Stack = createStackNavigator();

const PublicRoutes = () => (
    <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
)

export default PublicRoutes;
