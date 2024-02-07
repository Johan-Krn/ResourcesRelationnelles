import React, {useCallback, useRef, useState} from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import SafeAreaWrapper from '../../components/shared/safe-area-wrapper';
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

    return (
        <SafeAreaWrapper>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.images}>
                            <Image alt='Logo République Française' style={styles.headerImg} source={require('../../../assets/images/Republique-Francaise-Logo.png')} />
                            <Image alt='Logo Resources Relationnelles' style={styles.headerImg} source={require('../../../assets/images/Resources-Relationnelles-Logo.png')} />
                        </View>

                        <View style={styles.titles}>
                            <Text style={styles.title}>(RE)Sources Relationnelles</Text>

                            <Text style={styles.subtitle}>
                                Accédez à vos ressources et plus encore...
                            </Text>
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
        </SafeAreaWrapper>
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
    titles: {
        marginTop: 30,
    },
    title: {
        fontSize: 27,
        fontWeight: '700',
        color: '#1e1e1e',
        marginBottom: 6,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
        textAlign: 'center',
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
});
