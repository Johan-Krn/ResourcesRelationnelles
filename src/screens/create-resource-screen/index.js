import React, {useCallback, useRef, useState} from "react";
import {Text, View, TouchableOpacity, StyleSheet, ScrollView, Image} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';
import {useNavigation} from "@react-navigation/native";
import {Controller, useForm} from "react-hook-form";
import Button from "../../components/shared/button"
import Input from "../../components/shared/input";
import Carousel from "../../components/create-resource/Carousel";

export default function CreateResourceScreen() {
    const navigation = useNavigation();

    const navigateToResourceScreen = () => {
        navigation.navigate('DetailResourceScreen');
    };

    const [errors, setErrors] = useState({
        rsc_title: '',
        rsc_content: '',
    });

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };

    const [typeSelected, setTypeSelected] = React.useState("");
    const [categorieSelected, setCategorieSelected] = React.useState("");

    const types = [
        {key:'1', value:'Photo'},
        {key:'2', value:'Vidéo'},
        {key:'3', value:'Audio'},
    ];

    const data = [
        {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ];

    const [images, setImages] = useState([]);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            capture: true,
            allowsMultipleSelection : true,
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            // Créez une copie du tableau d'images existant
            const newImagesArray = [...images];

            // Ajoutez chaque nouvelle image au tableau d'images
            result.assets.forEach((image) => {
                newImagesArray.push({
                    source: {
                        uri: image.uri,
                    },
                    title: '',
                    width: image.width,
                    height: image.height,
                });
            });

            // Mettez à jour l'état avec le nouveau tableau contenant toutes les images
            setImages(newImagesArray);
        }
    };

    const { control, handleSubmit, getValues } = useForm({
        defaultValues: {
            rsc_title: '',
            rsc_content: '',
        },
    });

    function validateForm(){
        let isValid = true;

        if (!getValues('rsc_title')) {
            handleError('Veuillez remplir le champ', 'rsc_title');
            isValid = false;
        }

        if (!getValues('rsc_content')) {
            handleError('Veuillez remplir le champ', 'rsc_content');
            isValid = false;
        }

        return isValid;
    }

    const onSubmit = async (data) => {
        loadingButton();

        if(validateForm()){
            const {rsc_title} = data;

            stopLoadingButton();
        }else{
            stopLoadingButton();

            Toast.show({
                type: 'error',
                text1: 'Erreur',
                text2: "Veuillez validé le formulaire !",
            });
        }
    }

    // Bouton
    const refButtonAdd = useRef(null);

    const loadingButton = useCallback(() => {
        refButtonAdd?.current?.Action(true);
    }, []);

    const stopLoadingButton = useCallback(() => {
        refButtonAdd?.current?.Action(false);
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Ressource</Text>
                <Text style={styles.subtitle}>Ajouter une ressource ici</Text>
            </View>

            <View style={styles.form}>
                <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                        <Input
                            label="Nom de la ressource"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder=""
                            placeholderTextColor="#6b7280"
                            onChange={() =>
                                handleError(null, 'rsc_title')
                            }
                            onFocus={() =>
                                handleError(null, 'rsc_title')
                            }
                            error={errors.rsc_title}
                        />
                    )}
                    name="rsc_title"
                />

                <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                        <Input
                            myStyle={{height:150}}
                            label="Description de la ressource"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder=""
                            placeholderTextColor="#6b7280"
                            onChange={() =>
                                handleError(null, 'rsc_content')
                            }
                            onFocus={() =>
                                handleError(null, 'rsc_content')
                            }
                            error={errors.rsc_content}
                        />
                    )}
                    name="rsc_content"
                />

                <SelectList
                    boxStyles={{marginBottom: 15}}
                    setSelected={(val) => setTypeSelected(val)}
                    data={types}
                    save="value"
                    placeholder="Type de ressource"
                />

                <SelectList
                    boxStyles={{marginBottom: 15}}
                    setSelected={(val) => setCategorieSelected(val)}
                    data={data}
                    save="value"
                    placeholder="Choisir une catégorie"
                />

                <TouchableOpacity
                    style={{
                        backgroundColor: '#000',
                        height:50,
                        justifyContent: 'center',
                        marginBottom: 20,
                        borderRadius: 24
                    }}
                    onPress={pickImage}
                >
                    <Text style={{color:'white',fontSize: 15, fontWeight: '500', alignSelf:'center'}}>Ajouter des fichiers</Text>
                </TouchableOpacity>

                {images && (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Carousel list={images}/>
                    </ScrollView>
                )}

                <View style={styles.formAction}>
                    <Button ref={refButtonAdd} label="Ajouter la ressource" onPress={handleSubmit(onSubmit)}/>
                </View>
            </View>
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
    form: {
        paddingHorizontal: 24,
        marginTop: 20,
        marginBottom: 60,
        flex: 1,
    },
    formAction: {
        marginVertical: 10,
    },
});
