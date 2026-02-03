import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../../constants/theme';

export function Separator({ style }: { style?: ViewStyle }) {
    return <View style={[styles.separator, style]} />;
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: Colors.border,
        marginVertical: 16,
    },
});
