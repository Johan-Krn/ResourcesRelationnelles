import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableWithoutFeedback,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from "@react-navigation/native";
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Input from "../../components/shared/input";
import {Controller, useForm} from "react-hook-form";

const IMAGES = [
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-lakescape-landscape-nature-scenery-hd-image_2950137.jpg',
    'https://images.unsplash.com/photo-1652509525608-6b44097ea5a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHRlc2xhJTIwbW9kZWwlMjBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
];

const comments = [
    {
        img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        name: 'Becca B',
        comment: 'Très sympa :)',
    },
    {
        img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        name: 'Max B',
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
        name: 'Gina L',
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        img: 'https://images.unsplash.com/photo-1553240799-36bbf332a5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        name: 'Jake P',
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        name: 'Amy S',
        comment: 'Ressource utile !!!!',
    },
];

export default function DetailResourceScreen() {
    const navigation = useNavigation();

    const sheetEdit = React.useRef();
    const sheet = React.useRef();

    const [errors, setErrors] = useState({
        comment: '',
    });

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };

    const { control, handleSubmit, getValues } = useForm({
        defaultValues: {
            comment: '',
        },
    });

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerAction}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.goBack()
                                }}>
                                <FeatherIcon
                                    color="#000"
                                    name="arrow-left"
                                    size={24} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.headerTitle}>Ressource</Text>

                        <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
                            <TouchableOpacity
                                onPress={() => {
                                    sheetEdit.current.open()
                                }}>
                                <FeatherIcon
                                    color="#000"
                                    name="more-vertical"
                                    size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                        <View style={styles.photos}>
                            <View style={styles.photosTop}>
                                <TouchableOpacity
                                    onPress={() => {
                                        // handle onPress
                                    }}
                                    style={styles.photosTopItem}>
                                    <FeatherIcon color="#000" name="heart" size={18} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        // handle onPress
                                    }}
                                    style={styles.photosTopItem}>
                                    <FeatherIcon
                                        color="#000"
                                        name="share"
                                        size={16} />
                                </TouchableOpacity>
                            </View>

                            <Swiper
                                renderPagination={(index, total) => (
                                    <View style={styles.photosPagination}>
                                        <Text style={styles.photosPaginationText}>
                                            {index + 1} sur {total}
                                        </Text>
                                    </View>
                                )}>
                                {IMAGES.map((src, index) => (
                                    <Image
                                        alt=""
                                        key={index}
                                        source={{ uri: src }}
                                        style={styles.photosImg} />
                                ))}
                            </Swiper>
                        </View>

                        <View style={styles.picker}>
                            <FeatherIcon color="#000" name="calendar" size={18} />

                            <View style={styles.pickerDates}>
                                <Text style={styles.pickerDatesText}>
                                    Sun, Feb 26 at 10:00 AM
                                </Text>
                            </View>

                            <View style={styles.pickerAction}>

                            </View>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.infoTitle}>Ressource</Text>

                            <View style={styles.infoRating}>
                                <FeatherIcon
                                    color="#4c6cfd"
                                    name="heart"
                                    size={15} />

                                <Text style={styles.infoRatingText}>(7)</Text>
                            </View>

                            <Text style={styles.infoDescription}>
                                Model S Dual Motor All-Wheel Drive unlocks more range than any
                                other vehicle in our current lineup, with insane power and
                                maximum control.
                            </Text>
                        </View>

                        <TouchableOpacity onPress={() => {sheet.current.open();}} style={styles.picker}>
                            <FeatherIcon color="#000" name="message-square" size={18} />

                            <View style={styles.pickerDates}>
                                <Text style={styles.pickerDatesText}>
                                    Commentaire
                                </Text>
                            </View>

                            <View style={styles.pickerAction}>
                                <Text style={styles.pickerActionText}>Ouvrir</Text>

                                <FeatherIcon
                                    color="#4C6CFD"
                                    name="chevron-right"
                                    size={18} />
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <RBSheet
                    customStyles={{ container: styles.sheet }}
                    height={630}
                    openDuration={250}
                    ref={sheet}>
                    <SafeAreaView>
                        <View style={styles.sheetHeader}>
                            <Text style={styles.sheetHeaderTitle}>Commentaires</Text>
                        </View>

                        <ScrollView contentContainerStyle={[styles.sheetBody]}>
                            <View style={[styles.overlay]}>
                                <View style={{flex:1}}>
                                    <Controller
                                        control={control}
                                        render={({field: {onChange, onBlur, value}}) => (
                                            <Input
                                                label=""
                                                onBlur={onBlur}
                                                onChangeText={onChange}
                                                value={value}
                                                placeholder="Commentaire..."
                                                placeholderTextColor="#6b7280"
                                                onChange={() =>
                                                    handleError(null, 'comment')
                                                }
                                                onFocus={() =>
                                                    handleError(null, 'comment')
                                                }
                                                error={errors.comment}
                                            />
                                        )}
                                        name="comment"
                                    />
                                </View>

                                <TouchableOpacity
                                onPress={() => {
                                    // handle onPress
                                }}>
                                    <FeatherIcon color="#000" name="send" size={30} />
                                </TouchableOpacity>
                            </View>

                            {comments.map(({ name, comment, img }, index) => {
                                return (
                                    <View
                                        key={index}
                                        style={[styles.card, index === 0 && { borderTopWidth: 0 }]}>
                                        <Image
                                            alt=""
                                            resizeMode="cover"
                                            source={{ uri: img }}
                                            style={styles.cardImg} />

                                        <View style={styles.cardBody}>
                                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                                <Text style={styles.cardTitle}>{name}</Text>

                                                <TouchableOpacity
                                                    onPress={() => {
                                                        // handle onPress
                                                    }}>
                                                    <FeatherIcon color="#ff6a55" name="trash" size={15} />
                                                </TouchableOpacity>
                                            </View>

                                            <View style={[styles.cardComment]}>
                                                <Text style={styles.cardCommentText}>{comment}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </SafeAreaView>
                </RBSheet>

                <RBSheet
                    customStyles={{ container: styles.sheet }}
                    height={200}
                    openDuration={250}
                    ref={sheetEdit}>
                    <View style={styles.sheetHeader}>
                        <View style={{ width: 60 }} />

                        <Text style={styles.sheetHeaderTitle}>Options</Text>

                        <TouchableOpacity
                            onPress={() => {
                                sheetEdit.current.close()
                            }}>
                            <View style={{ width: 60, alignItems: 'flex-end' }}>
                                <Text style={styles.done}>Fermer</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.sheetBody}>
                        <TouchableOpacity
                            style={styles.radio}
                            onPress={() => {
                                // handle onPress
                            }}>
                            <FeatherIcon name="edit" color="#000" size={20} />
                            <Text style={[styles.radioLabel]}>
                                Éditer la ressource
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.radio}
                            onPress={() => {
                                // handle onPress
                            }}>
                            <FeatherIcon name="trash" color="#ff6a55" size={20} />
                            <Text style={[styles.radioLabel, { color: '#ff6a55' }]}>
                                Supprimer la ressource
                            </Text>
                        </TouchableOpacity>
                    </View>
                </RBSheet>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 0,
        paddingHorizontal: 16,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    /** Header */
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    /** Photos */
    photos: {
        marginTop: 12,
        position: 'relative',
        height: 240,
        overflow: 'hidden',
        borderRadius: 12,
    },
    photosTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    photosTopItem: {
        width: 40,
        height: 40,
        borderRadius: 9999,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    photosPagination: {
        position: 'absolute',
        bottom: 12,
        right: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: '#000',
        borderRadius: 12,
    },
    photosPaginationText: {
        fontWeight: '600',
        fontSize: 14,
        color: '#fbfbfb',
    },
    photosImg: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        width: '100%',
        height: 240,
    },
    /** Picker */
    picker: {
        marginTop: 12,
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#f5f5f5',
    },
    pickerDates: {
        marginLeft: 12,
    },
    pickerDatesText: {
        fontSize: 13,
        fontWeight: '500',
    },
    pickerAction: {
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerActionText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '600',
        color: '#4c6cfd',
    },
    /** Info */
    info: {
        marginTop: 12,
        backgroundColor: '#fff',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    infoTitle: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: '600',
        letterSpacing: 0.38,
        color: '#000000',
        marginBottom: 6,
    },
    infoRating: {
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoRatingLabel: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000',
        marginRight: 2,
    },
    infoRatingText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#8e8e93',
        marginLeft: 2,
    },
    infoDescription: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 18,
        letterSpacing: -0.078,
        color: '#8e8e93',
    },
    /** Sheet */
    done: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ff6a55',
    },
    overlay: {
        flex:1,
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    sheet: {
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
    },
    sheetHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#efefef',
        paddingHorizontal: 24,
        paddingVertical: 14,
    },
    sheetHeaderTitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    sheetBody: {
        paddingHorizontal: 24,
        paddingBottom: 30,
    },
    /** Card */
    card: {
        paddingVertical: 14,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#f8f8f8',
        borderRadius: 12,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderColor: '#2f3336',
    },
    cardImg: {
        width: 48,
        height: 48,
        borderRadius: 9999,
    },
    cardBody: {
        marginRight: 'auto',
        marginLeft: 12,
        flex: 1
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
    },
    cardComment: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        borderTopWidth: 0,
    },
    cardCommentText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000',
        lineHeight: 20,
        marginBottom: 2,
    },
    /** Radio */
    radio: {
        height: 44,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 4,
        paddingHorizontal: 0,
    },
    radioLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000',
        marginLeft: 12,
        marginRight: 'auto',
    },
});
