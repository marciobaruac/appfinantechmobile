import React, { useState } from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles'

import { Flag } from '../../atoms';

export const ListFlags = () => {
    const flagTypes = [
        { id: 1, label: 'MasterCard', value: 'MasterCard' },
        { id: 2, label: 'Visa', value: 'Visa' },
        { id: 3, label: 'Elo', value: 'Elo' },
        { id: 4, label: 'AmericanExpress', value: 'AmericanExpress' },
    ];

    const [selectedFlag, setSelectedFlag] = useState('MasterCard');

    return (
        <Dropdown
            data={flagTypes}
            labelField="label"
            valueField="value"
            value={selectedFlag}
            onChange={(item) => {
                setSelectedFlag(item.value);
            }}
            renderLeftIcon={() => (
                selectedFlag ? <Flag type={selectedFlag} width="40" /> : null
            )}
            renderItem={(item) => (
                <View style={styles.item}>
                    <Flag type={item.value} width="40" />
                </View>
            )}
            style={styles.dropdown}
            selectedTextStyle={{ display: 'none' }}
            placeholderStyle={{ display: 'none' }}
            renderRightIcon={() => null}
        />
    );
};