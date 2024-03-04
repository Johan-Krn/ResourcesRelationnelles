import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const items = [
    {
        title: "Test",
        description: "Description test",
        creator : "John Doe",
        category : "Vidéos",
        img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    },
    {
        title: "Test 2",
        description: "Description test2",
        creator : "John Doe",
        category : "Photos",
        img: "https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-lakescape-landscape-nature-scenery-hd-image_2950137.jpg"
    },
];

export default function CatalogResourceScreen() {
    const navigation = useNavigation();

    const navigateToDetailResource = () => {
        navigation.navigate('DetailResource');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {items.map(({title, description, creator, category, img}, index) => (
                <TouchableOpacity key={index} onPress={navigateToDetailResource}>
                    <View style={styles.card}>
                        <View style={styles.cardTop}>
                            <Image
                                source={{uri: img}}
                                resizeMode="cover"
                                alt={`Ressource ${title}`}
                                style={styles.cardImg}
                            />

                            <View style={styles.cardTopPills}>
                                <View style={styles.cardTopPill}>
                                    <Text style={styles.cardTopPillText}>{creator}</Text>
                                </View>

                                <View style={styles.cardTopPill}>
                                    <Text style={styles.cardTopPillText}>{category}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.cardBody}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>{title}</Text>
                                {/*<Text style={styles.cardCategory}>{description}</Text>*/}
                            </View>

                            <Text style={styles.cardDescription}>{description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}

            <View style={{marginBottom: 50}}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container : {
        padding: 24,
    },
    cardTitle : {
        fontSize: 19,
        fontWeight: '700',
        color: '#222',
    },
    cardCategory :  {
        fontSize: 16,
        fontWeight: '700',
        color: '#6a6bff'
    },
    card: {
        padding: 12,
        borderRadius: 24,
        marginBottom: 24,
        backgroundColor: '#fff',
    },
    cardTop: {
        position: 'relative',
        borderRadius: 24,
    },
    cardImg: {
        width: '100%',
        height: 180,
        borderRadius: 24
    },
    cardTopPills: {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12
    },
    cardTopPill: {
        height: 36,
        paddingHorizontal: 14,
        backgroundColor: '#fff',
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardTopPillText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222'
    },
    cardBody: {
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    cardDescription: {
        fontSize: 15,
        letterSpacing: 0.25,
        fontWeight: '500',
        lineHeight: 22,
        color: '#545454'
    }
});
