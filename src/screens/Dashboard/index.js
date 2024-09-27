import React, { useState } from 'react';

import { Container } from '../../components';
import { HeaderDashboard } from '../../components';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Dashboard = () => {
    const [pressed, setPressed] = useState(false)
    const navigation = useNavigation()

    return (
        <Pressable
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
        >
            <Container align='center' bgColor='#0F1B28'>
                <HeaderDashboard pressed={pressed} navigation={navigation} />
                <Container bgColor='#F8F8F8' />
            </Container>
        </Pressable>
    );
};
