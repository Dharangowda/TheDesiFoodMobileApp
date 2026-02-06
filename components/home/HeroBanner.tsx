import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/theme';
import { useState, useRef } from 'react';

const { width } = Dimensions.get('window');

interface BannerData {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    backgroundColor?: string;
    icon?: string;
    iconColor?: string;
    image?: any;
    isImageBanner?: boolean;
}

const banners: BannerData[] = [
    {
        image: require('../../assets/images/desifood-banner.webp'),
        isImageBanner: true,
        backgroundColor: '#FFF3E0',
    },
    {
        title: '100% Authentic\nIndian Products',
        subtitle: 'Delivered Worldwide',
        buttonText: 'Shop Now',
        backgroundColor: '#FFF3E0',
        icon: 'storefront',
        iconColor: '#F5A623'
    },
    {
        title: 'New Customer?\nGet 15% Off',
        subtitle: 'Use code: WELCOME15',
        buttonText: 'Claim Now',
        backgroundColor: '#E3F2FD',
        icon: 'gift',
        iconColor: '#2196F3'
    }
];

export function HeroBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);

    const handleScroll = (event: any) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / (width - 32));
        setCurrentIndex(index);
    };

    return (
        <View style={styles.heroSection}>
            <ScrollView 
                ref={scrollViewRef}
                horizontal 
                pagingEnabled 
                showsHorizontalScrollIndicator={false}
                style={styles.bannerContainer}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {banners.map((banner, index) => (
                    <View 
                        key={index} 
                        style={[styles.heroBanner, { backgroundColor: banner.backgroundColor }]}
                    >
                        {banner.isImageBanner ? (
                            <Image 
                                source={banner.image} 
                                style={styles.bannerImage}
                                resizeMode="cover"
                            />
                        ) : (
                            <>
                                <View style={styles.bannerContent}>
                                    <Text style={styles.bannerTitle}>{banner.title}</Text>
                                    <Text style={styles.bannerSubtitle}>{banner.subtitle}</Text>
                                    <TouchableOpacity style={styles.bannerButton}>
                                        <Text style={styles.bannerButtonText}>{banner.buttonText}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.bannerImageContainer}>
                                    <View style={styles.bannerImagePlaceholder}>
                                        <Ionicons 
                                            name={banner.icon as any} 
                                            size={60} 
                                            color={banner.iconColor} 
                                        />
                                    </View>
                                </View>
                            </>
                        )}
                    </View>
                ))}
            </ScrollView>
            
            <View style={styles.bannerIndicators}>
                {banners.map((_, index) => (
                    <View 
                        key={index} 
                        style={[styles.indicator, index === currentIndex && styles.activeIndicator]} 
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    heroSection: {
        marginBottom: 24,
    },
    bannerContainer: {
        marginHorizontal: 16,
    },
    heroBanner: {
        height: 200,
        width: width - 32,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    bannerImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
    bannerContent: {
        flex: 1,
        padding: 20,
    },
    bannerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: 4,
        lineHeight: 24,
    },
    bannerSubtitle: {
        fontSize: 14,
        color: Colors.mutedForeground,
        marginBottom: 12,
    },
    bannerButton: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    bannerButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    bannerImageContainer: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerImagePlaceholder: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerIndicators: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 12,
        gap: 6,
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ddd',
    },
    activeIndicator: {
        backgroundColor: Colors.primary,
    },
});