import { TouchableOpacity } from 'react-native';

import { styles } from './styles'
import { IconPlusSquare } from '../../atoms';
import { useNavigation } from '@react-navigation/native';


export const ButtonPlusSquare = ({ objetoId }) => {

    const navigation = useNavigation()

    const handlePress = () => {

        navigation.navigate('Despesas', { objetoId });
    };

    return (

        <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={handlePress}>
            <IconPlusSquare />
        </TouchableOpacity>


    );
}