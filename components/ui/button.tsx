import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Colors, Layout } from '../../constants/theme';

interface ButtonProps {
    onPress: () => void;
    title: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    loading?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export function Button({ onPress, title, variant = 'primary', loading, style, textStyle }: ButtonProps) {
    const getBackgroundColor = () => {
        switch (variant) {
            case 'primary': return Colors.primary;
            case 'secondary': return Colors.secondary;
            case 'outline': return 'transparent';
            case 'ghost': return 'transparent';
            default: return Colors.primary;
        }
    };

    const getTextColor = () => {
        switch (variant) {
            case 'primary': return Colors.primaryForeground;
            case 'secondary': return Colors.secondaryForeground;
            case 'outline': return Colors.primary;
            case 'ghost': return Colors.foreground;
            default: return Colors.primaryForeground;
        }
    };

    const getBorder = () => {
        if (variant === 'outline') return { borderWidth: 1, borderColor: Colors.border };
        return {};
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={loading}
            style={[
                styles.button,
                { backgroundColor: getBackgroundColor() },
                getBorder(),
                style
            ]}
        >
            {loading ? (
                <ActivityIndicator color={getTextColor()} />
            ) : (
                <Text style={[styles.text, { color: getTextColor() }, textStyle]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: Layout.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
});
