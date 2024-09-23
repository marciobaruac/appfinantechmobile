import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartoesScreen, Dashboard, LoginScreen, SplashScreen } from '../screens'
import { CreateScreen } from '../screens/CreateScreen';

export const Routes = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={SplashScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Dashboard' component={Dashboard} />
                <Stack.Screen name='Cartoes' component={CartoesScreen} />
                <Stack.Screen name='Create' component={CreateScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}