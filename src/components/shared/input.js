import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Input = ({ label, error, password, ...props }) => {
    const [showPassword, setShowPassword] = useState(password === true ? true : false);

    return (
        <View style={styles.input}>
            <Text style={styles.inputLabel}>{label}</Text>

            <TextInput
                style={[styles.inputControl]}
                {...props}
                secureTextEntry={showPassword}
            />

            {password && (
                <TouchableOpacity
                    style={styles.btnEye}
                    onPress={() => {
                        setShowPassword(!showPassword);
                    }}>
                    <FeatherIcon
                        name={showPassword !== false ? 'eye' : 'eye-off'}
                        size={26}
                        color="#6b7280"
                    />
                </TouchableOpacity>
            )}

            {error && (
                <Text mt="3.5" color="rose500">
                    {error}
                </Text>
            )}
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
    inputControl: {
        height: 44,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '300',
        color: '#222',
        borderColor: '#000',
        borderWidth: 2,
    },
    btnEye: {
        backgroundColor: '#fff',
        position: 'absolute',
        right: 15,
        top: 40,
    },
});
