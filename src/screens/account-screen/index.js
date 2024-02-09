import {Text, View, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import Icon, { Icons } from '../../utils/theme/Icons';
import useUserGlobalStore from '../../store/useUserGlobalStore';

export default function AccountScreen() {
    const {updateUser} = useUserGlobalStore();

    const SECTIONS = [
        {
            header: "Contenu",
            items: [
                { id: 'resources_created', icon : 'plus-circle', label: "Ressources créées", onPress: () => {console.log("Les ressources que j'ai créer")} },
                { id: 'resources_liked', icon : 'heart', label: "Ressources aimées", onPress: () => {console.log("Les ressources que j'aime")} },
            ],
        },
        {
            header: "Aide",
            items: [
                { id: 'help', icon : 'mail', label: "Contactez-nous", onPress: () => {console.log('Nous contacter')} },
            ],
        },
        {
            header: "Compte",
            items: [
                { id: 'deactivate_account', icon : 'power', label: "Désactiver mon compte", onPress: () => {console.log('Désactiver mon compte')} },
                { id: 'logout', icon : 'log-out', label: "Se déconnecter", onPress: () => {updateUser(null)} },
            ],
        },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Paramètres</Text>
                <Text style={styles.subtitle}>Mettez à jour vos préférences ici</Text>
            </View>

            {SECTIONS.map(({header, items}) => (
                <View style={styles.section} key={header}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderTitle}>{header}</Text>
                    </View>

                    <View style={styles.sectionBody}>
                        {items.map(({id, label, onPress, icon}, index) => (
                            <View style={[
                                    styles.rowWrapper,
                                    index === 0 && {borderTopWidth: 0},
                                ]}
                                key={id}
                            >
                                <TouchableOpacity onPress={onPress}>
                                    <View style={styles.row}>
                                        <Icon type={Icons.Feather} name={icon} color='#616161' size={22} style={{marginRight:12}} />
                                        <Text style={styles.rowLabel}>{label}</Text>

                                        <View style={styles.rowSpacer}/>

                                        <Icon type={Icons.Feather} name='chevron-right' size={22} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292'
    },
    section: {
        paddingTop: 12,
    },
    sectionHeader: {
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    sectionHeaderTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#a7a7a7',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
    },
    sectionBody: {

    },
    rowWrapper: {
        paddingLeft: 24,
        borderTopWidth: 1,
        borderColor: '#e3e3e3',
        backgroundColor: '#fff',
    },
    row: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 24,
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000',
    },
    rowSpacer: {
        flex: 1,
    },
    rowValue: {
        fontSize: 17,
        color: '#616161',
        marginRight: 4,
    }
});
