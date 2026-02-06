import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/theme';

interface PromoBanner {
    title: string;
    subtitle: string;
    buttonText: string;
    backgroundColor: string;
    icon: string;
    iconColor: string;
}

const promoData: PromoBanner[] = [
    {
        title: 'New Customer?',
        subtitle: 'Get 15% off on first order',
        buttonText: 'Claim Now',
        backgroundColor: '#FFF3E0',
        icon: 'gift',
        iconColor: Colors.primary
    },
    {
        title: 'Refer & Earn',
        subtitle: '₹200 for each referral',
        buttonText: 'Refer Now',
        backgroundColor: '#E3F2FD',
        icon: 'people',
        iconColor: '#2196F3'
    }
];

export function PromoBanners() {
    return (
        <View style={styles.promoBannersContainer}>
            {promoData.map((promo, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={[styles.promoBanner, { backgroundColor: promo.backgroundColor }]}
                >
                    <View style={styles.promoBannerContent}>
                        <Text style={styles.promoBannerTitle}>{promo.title}</Text>
                        <Text style={styles.promoBannerSubtitle}>{promo.subtitle}</Text>
                        <View style={styles.promoBannerButton}>
                            <Text style={styles.promoBannerButtonText}>{promo.buttonText}</Text>
                        </View>
                    </View>
                    <View style={styles.promoBannerIcon}>
                        <Ionicons name={promo.icon as any} size={40} color={promo.iconColor} />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    promoBannersContainer: {
        paddingHorizontal: 16,
        marginBottom: 24,
        gap: 12,
    },
    promoBanner: {
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    promoBannerContent: {
        flex: 1,
    },
    promoBannerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: 4,
    },
    promoBannerSubtitle: {
        fontSize: 12,
        color: Colors.mutedForeground,
        marginBottom: 8,
    },
    promoBannerButton: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        alignSelf: 'flex-start',
    },
    promoBannerButtonText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    promoBannerIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});