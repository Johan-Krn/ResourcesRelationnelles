import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
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
            ],
        },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerAction}>

                    </View>

                    <Text style={styles.headerTitle}>Paramètres</Text>

                    <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
                        {/*<TouchableOpacity*/}
                        {/*    onPress={() => {*/}
                        {/*        // handle onPress*/}
                        {/*    }}>*/}
                        {/*    <FeatherIcon*/}
                        {/*        color="#000"*/}
                        {/*        name="more-vertical"*/}
                        {/*        size={24} />*/}
                        {/*</TouchableOpacity>*/}
                    </View>
                </View>

                <ScrollView contentContainerStyle={styles.content}>
                    <View style={[styles.section, { paddingTop: 4 }]}>
                        <Text style={styles.sectionTitle}>Mon compte</Text>

                        <View style={styles.sectionBody}>
                            <TouchableOpacity
                                onPress={() => {
                                    // handle onPress
                                }}
                                style={styles.profile}>
                                <Image
                                    alt=""
                                    source={{
                                        uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                                    }}
                                    style={styles.profileAvatar} />

                                <View style={styles.profileBody}>
                                    <Text style={styles.profileName}>John Doe</Text>

                                    <Text style={styles.profileHandle}>
                                        john.doe@mail.com
                                    </Text>
                                </View>

                                <FeatherIcon
                                    color="#bcbcbc"
                                    name="chevron-right"
                                    size={22} />
                            </TouchableOpacity>
                        </View>

                        {SECTIONS.map(({header, items}) => (
                            <View style={styles.section} key={header}>
                                <Text style={styles.sectionTitle}>{header}</Text>

                                <View style={styles.sectionBody}>
                                    {items.map(({id, label, onPress, icon}, index) => (
                                        <View style={[styles.rowWrapper, index === 0 && styles.rowFirst, index === items.length-1 && styles.rowLast]} key={id}>
                                            <TouchableOpacity onPress={onPress} style={styles.row}>
                                                <View style={{flexDirection: 'row', gap: 6}}>
                                                    <FeatherIcon
                                                        color="#000"
                                                        name={icon}
                                                        size={19} />

                                                    <Text style={styles.rowLabel}>{label}</Text>
                                                </View>

                                                <View style={styles.rowSpacer} />

                                                <FeatherIcon
                                                    color="#bcbcbc"
                                                    name="chevron-right"
                                                    size={19} />
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionBody}>
                            <View
                                style={[
                                    styles.rowWrapper,
                                    styles.rowFirst,
                                    styles.rowLast,
                                    { alignItems: 'center' },
                                ]}>
                                <TouchableOpacity
                                    onPress={() => {
                                        updateUser(null)
                                    }}
                                    style={styles.row}>
                                    <Text style={[styles.rowLabel, styles.rowLabelLogout]}>
                                        Se déconnecter
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.contentFooter}>App Version 1.0.0</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    /** Header */
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
    },
    headerAction: {
        width: 40,
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 19,
        fontWeight: '600',
        color: '#000',
    },
    /** Content */
    content: {
        paddingHorizontal: 16,
    },
    contentFooter: {
        marginTop: 24,
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center',
        color: '#a69f9f',
    },
    /** Section */
    section: {
        paddingVertical: 12,
    },
    sectionTitle: {
        margin: 8,
        marginLeft: 12,
        fontSize: 13,
        letterSpacing: 0.33,
        fontWeight: '500',
        color: '#a69f9f',
        textTransform: 'uppercase',
    },
    sectionBody: {
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    /** Profile */
    profile: {
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    profileAvatar: {
        width: 60,
        height: 60,
        borderRadius: 9999,
        marginRight: 12,
    },
    profileBody: {
        marginRight: 'auto',
    },
    profileName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#292929',
    },
    profileHandle: {
        marginTop: 2,
        fontSize: 16,
        fontWeight: '400',
        color: '#858585',
    },
    /** Row */
    row: {
        height: 44,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 12,
    },
    rowWrapper: {
        paddingLeft: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#f0f0f0',
    },
    rowFirst: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    rowLabel: {
        fontSize: 16,
        letterSpacing: 0.24,
        color: '#000',
    },
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    rowValue: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ababab',
        marginRight: 4,
    },
    rowLast: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    rowLabelLogout: {
        width: '100%',
        textAlign: 'center',
        fontWeight: '600',
        color: '#dc2626',
    },
});
