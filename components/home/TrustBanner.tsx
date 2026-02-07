import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/theme';

export function TrustBanner() {
    const trustItems = [
        {
            icon: 'mail-outline',
            title: 'No Custom Duties',
        },
        {
            icon: 'globe-outline',
            title: 'Worldwide Shipping',
        },
        {
            icon: 'shield-checkmark-outline',
            title: '100% Authentic Products',
        },
        {
            icon: 'card-outline',
            title: 'Secure Payments',
        },
    ];

    return (
        <View style={styles.container}>
            {trustItems.map((item, index) => (
                <View key={index} style={styles.item}>
                    <View style={styles.iconContainer}>
                        <Ionicons name={item.icon as any} size={32} color="#FF9800" />
                    </View>
                    <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: '#FFF8E1',
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
    },
    item: {
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 4,
    },
    iconContainer: {
        marginBottom: 6,
    },
    title: {
        fontSize: 10,
        fontWeight: '600',
        color: '#5D4037',
        textAlign: 'center',
        lineHeight: 13,
    },
});