import {Text, View, TouchableOpacity} from "react-native";
import useUserGlobalStore from '../../store/useUserGlobalStore';

export default function AccountScreen() {
    const {updateUser} = useUserGlobalStore();

    return (
        <View>
            {/*<Text>Compte</Text>*/}

            <TouchableOpacity style={{backgroundColor:'#000', padding: 10}} onPress={() => {
                updateUser(null);
            }}>
                <Text style={{fontWeight: '700',color: 'white', alignSelf: 'center'}}>Déconnexion</Text>
            </TouchableOpacity>
        </View>
    );
}
