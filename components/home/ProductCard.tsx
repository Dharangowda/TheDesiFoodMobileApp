import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Layout } from '../../constants/theme';

interface ProductCardProps {
    product: any;
    onPress: () => void;
}

export function ProductCard({ product, onPress }: ProductCardProps) {
    // Calculate discount percentage
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            {/* Image Container */}
            <View style={styles.imageContainer}>
                <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />

                {/* Rating Badge */}
                <View style={styles.ratingBadge}>
                    <Ionicons name="star" size={10} color="#FFD700" />
                    <Text style={styles.ratingText}>{product.rating} ({product.reviewCount})</Text>
                </View>

                {/* Discount Badge (Optional, inferred from logic) */}
                {discount > 0 && (
                    <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>{discount}% OFF</Text>
                    </View>
                )}
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={2}>{product.name}</Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.price}>₹ {product.price.toLocaleString()}</Text>
                    <Text style={styles.originalPrice}>₹ {product.originalPrice.toLocaleString()}</Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.weight}>{product.weight}</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        width: 160, // Fixed width for horizontal scrolling
        marginRight: 12,
        overflow: 'hidden',
    },
    imageContainer: {
        height: 160,
        width: '100%',
        backgroundColor: '#f9f9f9',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    ratingBadge: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        gap: 4,
    },
    ratingText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '600',
    },
    discountBadge: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: Colors.primary,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    discountText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    content: {
        padding: 8,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.foreground,
        marginBottom: 8,
        height: 40, // Fixed height for 2 lines
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 8,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.foreground,
    },
    originalPrice: {
        fontSize: 12,
        color: Colors.mutedForeground,
        textDecorationLine: 'line-through',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weight: {
        fontSize: 12,
        color: Colors.mutedForeground,
    },
    addButton: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
});
