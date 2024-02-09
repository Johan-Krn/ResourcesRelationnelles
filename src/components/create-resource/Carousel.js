import {Text, View, TouchableOpacity, StyleSheet, FlatList, Image} from "react-native";
import ImageView from 'react-native-image-view';

const Carousel = ({list}) => {
    // return <ImageView images={list}/>
    const view = ({index}) => {
        console.log('ici')
        return (<ImageView images={list} imageIndex={index} isVisible={true} />)
    }
    return (
        <View>
            <FlatList
                data={list}
                horizontal
                snapToInterval={100-12}
                deceleratingRate='fast'
                showsHorizontalScrollIndicator={false}
                keyExtractor={i => i.id}
                renderItem={({item, index}) => {
                    return (
                        <TouchableOpacity onPress={() => {view(index)}} style={{marginLeft: 12, marginRight: index === list.length -1 ? 12 : 0}}>
                            <View style={styles.card}>
                                <View style={styles.imageBox}>
                                    <Image source={{uri:item.source.uri}} style={styles.image}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

            <ImageView images={list} imageIndex={0} isVisible={false} />
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
    }
})
