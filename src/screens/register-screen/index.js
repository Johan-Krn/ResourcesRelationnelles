import React, {useCallback, useRef, useState} from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TouchableHighlight} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Controller, useForm} from "react-hook-form";
import Button from "../../components/shared/button"
import Input from "../../components/shared/input";

export default function RegisterScreen() {
    const navigation = useNavigation();
    const navigateToLoginScreen = () => {
        navigation.navigate('Login');
    };

    const { control, handleSubmit, getValues } = useForm({
        defaultValues: {
            usr_first_name: '',
            usr_last_name: '',
            usr_email: '',
            usr_password: '',
        },
    });

    const [errors, setErrors] = useState({
        usr_first_name: '',
        usr_last_name: '',
        usr_email: '',
        usr_password: '',
    });

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };

    const refButtonRegister = useRef(null);

    // Fonction pour déclencher une action sur le bouton
    const handleRegisterButton = () => {
        console.log('Le bouton a été pressé');
    };

    const loadingButton = useCallback(() => {
        refButtonRegister?.current?.Action(true);
    }, []);

    const stopLoadingButton = useCallback(() => {
        refButtonRegister?.current?.Action(false);
    }, []);

    var [ isPress, setIsPress ] = React.useState(false);

    var touchProps = {
        activeOpacity: 1,
        underlayColor: 'blue',
        style: isPress ? styles.franceConnectBtnPress : styles.franceConnectBtn,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('France Connect'),
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.images}>
                        <Image alt='Logo République Française' style={styles.headerImg} source={require('../../../assets/images/Republique-Francaise-Logo.png')} />
                        <Image alt='Logo Resources Relationnelles' style={styles.headerImg} source={require('../../../assets/images/Resources-Relationnelles-Logo.png')} />
                    </View>
                </View>

                <View style={styles.form}>
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <Input
                                label="Votre prénom"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="John"
                                placeholderTextColor="#6b7280"
                                onChange={() =>
                                    handleError(null, 'usr_first_name')
                                }
                                onFocus={() =>
                                    handleError(null, 'usr_first_name')
                                }
                                error={errors.usr_first_name}
                            />
                        )}
                        name="usr_first_name"
                    />

                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <Input
                                label="Votre nom"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Doe"
                                placeholderTextColor="#6b7280"
                                onChange={() =>
                                    handleError(null, 'usr_last_name')
                                }
                                onFocus={() =>
                                    handleError(null, 'usr_last_name')
                                }
                                error={errors.usr_last_name}
                            />
                        )}
                        name="usr_first_name"
                    />

                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <Input
                                label="Votre adresse E-mail"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="john.doe@example.com"
                                placeholderTextColor="#6b7280"
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChange={() =>
                                    handleError(null, 'usr_email')
                                }
                                onFocus={() =>
                                    handleError(null, 'usr_email')
                                }
                                keyboardType="email-address"
                                error={errors.usr_email}
                            />
                        )}
                        name="usr_email"
                    />

                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <Input
                                label="Votre mot de passe"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="********"
                                placeholderTextColor="#6b7280"
                                onChange={() =>
                                    handleError(null, 'usr_password')
                                }
                                onFocus={() =>
                                    handleError(null, 'usr_password')
                                }
                                error={errors.usr_password}
                                password={true}
                            />
                        )}
                        name="usr_password"
                    />

                    <View style={styles.formAction}>
                        <Button ref={refButtonRegister} label="S'inscrire" onPress={handleRegisterButton}/>
                    </View>

                    <TouchableHighlight {...touchProps}>
                        <View style={styles.franceConnectContainer}>
                            <Image style={styles.franceConnectLogo} source={require('../../../assets/images/franceconnect.png')}/>

                            <View style={{justifyContent: 'center'}}>
                                <Text style={styles.franceConnectText}>S'identifier avec</Text>
                                <Text style={[styles.franceConnectText, {fontWeight: 700}]}>FranceConnect</Text>
                            </View>
                        </View>
                    </TouchableHighlight>

                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <TouchableOpacity onPress={navigateToLoginScreen}>
                            <Text style={styles.formFooter}>
                                Vous avez déjà un compte ?{' '}
                                <Text
                                    style={{
                                        textDecorationLine: 'underline',
                                    }}>
                                    Se connecter
                                </Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    images: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerImg: {
        width: 100,
        height: 89,
        alignSelf: 'center'
    },
    form: {
        marginTop: 30,
        marginBottom: 24,
        flex: 1,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
    },
    formAction: {
        marginVertical: 24,
    },
    formFooter: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
    },
    franceConnect: {
        width: '100%',
        height: 100,
    },
    franceConnectBtn: {
        backgroundColor: '#000091',
        marginBottom: 20,
    },
    franceConnectBtnPress: {
        backgroundColor: '#1212ff',
        marginBottom: 20,
    },
    franceConnectContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    franceConnectLogo: {
        width:60,
        height:68,
        right: 20
    },
    franceConnectText: {
        color:'#fff',
        fontSize: 20,
    }
});
