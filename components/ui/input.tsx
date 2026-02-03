import { TextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';
import { Colors, Layout, Typography } from '../../constants/theme';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
}

export function Input({ label, error, style, ...props }: InputProps) {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[
                    styles.input,
                    error ? styles.inputError : null,
                    style
                ]}
                placeholderTextColor={Colors.mutedForeground}
                {...props}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: Typography.fontSize.small,
        color: Colors.foreground,
        marginBottom: 8,
        fontWeight: '500',
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: Layout.borderRadius,
        padding: 12,
        fontSize: Typography.fontSize.body,
        color: Colors.foreground,
        backgroundColor: '#fff',
    },
    inputError: {
        borderColor: Colors.error,
    },
    errorText: {
        marginTop: 4,
        fontSize: 12,
        color: Colors.error,
    },
});
