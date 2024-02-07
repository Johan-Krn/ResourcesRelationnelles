import React, { useCallback, useImperativeHandle, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const Button = React.forwardRef(
    ({ label, onLongPress, onPress, disabled, uppercase }, ref) => {
        const [loading, setLoading] = useState(false);

        const Action = useCallback((state) => {
            setLoading(state);
        }, []);

        useImperativeHandle(ref, () => ({ Action }), [Action]);

        return (
            <TouchableOpacity
                onPress={() => {
                    if (!loading) {
                        onPress();
                    }
                }}
                onLongPress={() => {
                    if (!loading && onLongPress) {
                        onLongPress();
                    }
                }}
                disabled={disabled}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>
                        {loading ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : (
                            label
                        )}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    },
);

export default Button;


const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#075eec',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#075eec',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    btnText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
});
