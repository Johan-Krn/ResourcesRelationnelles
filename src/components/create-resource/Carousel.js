import {View, TouchableOpacity, StyleSheet, FlatList, Image, Text, SafeAreaView} from "react-native";
import ImageView from "react-native-image-viewing";
import {useState} from "react";
import Button from "../shared/button";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Carousel = ({list}) => {
    const [active, setActive] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [updateList, setUpdateList] = useState(0);

    const view = (index) => {
        setImageIndex(index);
        setActive(true);
    }

    const deleteImage = (index) => {
        list.splice(index, 1);
        setImageIndex(0);
        setActive(false);
        setUpdateList(updateList+1);
    }

    const images = list.map(image => ({ uri: image.source.uri }));

    return (
        <View>
            <FlatList
                extraData={updateList}
                data={list}
                horizontal
                snapToInterval={100-12}
                deceleratingRate='fast'
                showsHorizontalScrollIndicator={false}
                keyExtractor={i => i.id}
                renderItem={({item, index}) => {
                    return (
                        <View style={[styles.card, {marginLeft: 12, marginRight: index === list.length -1 ? 12 : 0}]}>
                            <View style={styles.cardTopPills}>
                                <View style={styles.cardTopPill}>
                                    <TouchableOpacity onPress={() => deleteImage(index)}>
                                        <MaterialCommunityIcons name="close" size={16} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.imageBox}>
                                <TouchableOpacity onPress={() => view(index)}>
                                    <Image source={{uri:item.source.uri}} style={styles.image}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />

            <ImageView images={images} imageIndex={imageIndex} onRequestClose={() => setActive(false)}  visible={active} FooterComponent={(index) => {
                return (
                    <SafeAreaView>
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() => deleteImage(index.imageIndex)}
                            >
                                <Text style={styles.deleteButtonText}>Supprimer</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                );
            }}/>
        </View>
    )
}

export default Carousel;

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 200,
    },
    imageBox: {
        width: 300,
        height: 200,
        borderRadius: 12,
        overflow: 'hidden'
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'cover'
    },
    deleteButton:{
        backgroundColor: 'red',
        height:25,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 24
    },
    deleteButtonText: {
        color:'white',
        fontSize: 15,
        fontWeight: '500',
        alignSelf:'center'
    },
    cardTopPills: {
        zIndex: 2,
        //backgroundColor: 'red',
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 12
    },
    cardTopPill: {
        height: 30,
        width: 30,
        //paddingHorizontal: 14,
        backgroundColor: '#fff',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
