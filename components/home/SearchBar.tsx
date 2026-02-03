import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Layout } from '../../constants/theme';

export function SearchBar() {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={20} color={Colors.mutedForeground} style={styles.icon} />
            <TextInput
                placeholder="Search for products, brands, and more..."
                placeholderTextColor={Colors.mutedForeground}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.card || '#fff', // Fallback if white not in theme
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        paddingHorizontal: 12,
        height: 44,
        marginVertical: 8,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: Colors.foreground,
    },
});
