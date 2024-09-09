import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styles'

export const ButtonAdd = ({ onPress }) => {

    return (

        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Icon name="add" size={30} color="white" />
        </TouchableOpacity>


    );
}