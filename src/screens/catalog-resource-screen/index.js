import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
    {
        img: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
        name: 'Ressource 1',
        categorie: 'Informatique',
        like: 3,
        type: "Photos",
        creator: 'Johan K',
        saved: false,
        date: new Date('2022-10-20'),
    },
    {
        img: 'https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-lakescape-landscape-nature-scenery-hd-image_2950137.jpg',
        name: 'Ressource 2',
        categorie: "Administratif",
        like: 5,
        type: "Photos",
        creator: 'Michel B',
        saved: true,
        date: new Date('2022-10-20'),
    },
];

export default function CatalogResourceScreen() {
    const navigation = useNavigation();

    const navigateToDetailResource = () => {
        navigation.navigate('DetailResource');
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Catalogue des ressources</Text>

                {items.map(
                    ({ img, name, categorie, like, type, date, creator, saved }, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={navigateToDetailResource}>
                                <View style={styles.card}>
                                    <View style={styles.cardLikeWrapper}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                // handle onPress
                                            }}>
                                            <View style={styles.cardLike}>
                                                <FontAwesome
                                                    color={saved ? '#ea266d' : '#222'}
                                                    name="heart"
                                                    solid={saved}
                                                    size={16} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.cardTop}>
                                        <Image
                                            alt=""
                                            resizeMode="cover"
                                            style={styles.cardImg}
                                            source={{ uri: img }} />
                                    </View>

                                    <View style={styles.cardBody}>
                                        <View style={styles.cardHeader}>
                                            <Text style={styles.cardTitle}>{name}</Text>

                                            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                                <Text style={styles.cardPrice}>
                                                    {like}
                                                </Text>

                                                <FeatherIcon
                                                    color="#48496c"
                                                    name="heart"
                                                    size={16} />
                                            </View>
                                        </View>

                                        <View style={styles.cardStats}>
                                            <View style={styles.cardStatsItem}>
                                                <FeatherIcon
                                                    color="#48496c"
                                                    name="file"
                                                    size={14} />

                                                <Text style={styles.cardStatsItemText}>{type}</Text>
                                            </View>

                                            <View style={styles.cardStatsItem}>
                                                <FeatherIcon
                                                    color="#48496c"
                                                    name="list"
                                                    size={14} />

                                                <Text style={styles.cardStatsItemText}>
                                                    {categorie}
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={styles.cardFooter}>
                                            <Text style={styles.cardFooterText}>{creator}</Text>

                                            <Text style={styles.cardFooterText}>
                                                {date.toLocaleDateString('en-US', {
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                    month: 'short',
                                                })}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    },
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        paddingBottom: 70
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 12,
    },
    /** Card */
    card: {
        borderRadius: 12,
        backgroundColor: 'white',
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    cardLikeWrapper: {
        position: 'absolute',
        zIndex: 1,
        top: 12,
        right: 12,
    },
    cardLike: {
        width: 38,
        height: 38,
        borderRadius: 9999,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTop: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    cardImg: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    cardBody: {
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    cardTitle: {
        fontSize: 19,
        fontWeight: '600',
        color: '#2d2d2d',
    },
    cardPrice: {
        fontSize: 20,
        fontWeight: '700',
        color: '#444',
    },
    cardStats: {
        paddingBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: -12,
    },
    cardStatsItem: {
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardStatsItemText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#48496c',
        marginLeft: 4,
    },
    cardFooter: {
        paddingTop: 8,
        borderTopWidth: 1,
        borderColor: '#e9e9e9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardFooterText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#909090',
    },
});
