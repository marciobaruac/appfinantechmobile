import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartoesScreen, Dashboard, DespesasScreen, LoginScreen, SplashScreen, CreateScreen } from '../screens';
import { createNavigationContainerRef } from '@react-navigation/native'; // Importe para criar a referência de navegação
import { CreateDespesasScreen } from '../screens/CreateDespesasScreen';

export const navigationRef = createNavigationContainerRef();

export const Routes = () => {
    const Stack = createNativeStackNavigator();

    // #0F1B28

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: '#0F1B28' }}>
                <Stack.Screen name='Splash' component={SplashScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Dashboard' component={Dashboard} />
                <Stack.Screen name='Cartoes' component={CartoesScreen} />
                <Stack.Screen name='Create' component={CreateScreen} />
                <Stack.Screen name='Despesas' component={DespesasScreen} />
                <Stack.Screen name='CreateDespesas' component={CreateDespesasScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
``
