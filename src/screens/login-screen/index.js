import {Text, View, StyleSheet, Image} from "react-native";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.images}>
                    <Image alt='Logo République Française' style={styles.headerImg} source={require('../../../assets/images/Republique-Francaise-Logo.png')} />
                    <Image alt='Logo Resources Relationnelles' style={styles.headerImg} source={require('../../../assets/images/Resources-Relationnelles-Logo.png')} />
                </View>

                <View>
                    <Text>deede</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    header: {
        marginVertical: 36
    },
    images: {
        flex: 1,
        flexDirection: 'row',
    },
    headerImg: {
        width: 100,
        height: 89,
        alignSelf: 'center'
    }
});
