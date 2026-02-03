import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Layout } from '../../constants/theme';
import { MOCK_PRODUCTS } from '../../constants/mockData';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';

const { width } = Dimensions.get('window');

export default function ProductDetailScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    // Find product by ID (mock logic)
    const product = MOCK_PRODUCTS.find(p => p.id === Number(id)) || MOCK_PRODUCTS[0];

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
        <>
            <Stack.Screen
                options={{
                    title: '', // Custom header
                    headerTransparent: true,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} color={Colors.foreground} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={styles.cartButton}>
                            <Ionicons name="cart-outline" size={24} color={Colors.foreground} />
                        </TouchableOpacity>
                    )
                }}
            />
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>

                    {/* Product Image Carousel Placeholder */}
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
                    </View>

                    {/* Product Info */}
                    <View style={styles.detailsContainer}>
                        <View style={styles.headerRow}>
                            <View style={styles.badgesWrapper}>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{product.category}</Text>
                                </View>
                                <View style={styles.ratingBadge}>
                                    <Ionicons name="star" size={14} color="#FFD700" />
                                    <Text style={styles.ratingText}>{product.rating} ({product.reviewCount} Reviews)</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Ionicons name="heart-outline" size={24} color={Colors.primary} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.title}>{product.name}</Text>
                        <Text style={styles.weight}>{product.weight}</Text>

                        <View style={styles.priceRow}>
                            <Text style={styles.price}>₹ {product.price.toLocaleString()}</Text>
                            <Text style={styles.originalPrice}>₹ {product.originalPrice.toLocaleString()}</Text>
                            <Text style={styles.discount}>{discount}% OFF</Text>
                        </View>

                        <Separator />

                        <Text style={styles.sectionTitle}>Description</Text>
                        <Text style={styles.description}>
                            Experience the authentic taste of {product.name}. Sourced from the finest ingredients,
                            this product serves as a perfect addition to your pantry. High quality, 100% natural,
                            and made with traditional methods to retain maximum flavor and nutrition.
                        </Text>

                        <View style={styles.infoRow}>
                            <View style={styles.infoItem}>
                                <Ionicons name="leaf-outline" size={20} color={Colors.primary} />
                                <Text style={styles.infoText}>100% Organic</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Ionicons name="shield-checkmark-outline" size={20} color={Colors.primary} />
                                <Text style={styles.infoText}>Quality Assured</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                {/* Bottom Action Bar */}
                <View style={styles.actionBar}>
                    <View style={styles.quantityControl}>
                        <TouchableOpacity style={styles.qtyBtn}><Text style={styles.qtyText}>-</Text></TouchableOpacity>
                        <Text style={styles.qtyValue}>1</Text>
                        <TouchableOpacity style={styles.qtyBtn}><Text style={styles.qtyText}>+</Text></TouchableOpacity>
                    </View>
                    <Button
                        title="Add to Cart"
                        onPress={() => { }}
                        style={styles.addToCartBtn}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingBottom: 100,
    },
    backButton: {
        padding: 8,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 20,
        marginLeft: 8,
    },
    cartButton: {
        padding: 8,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 20,
        marginRight: 8,
    },
    imageContainer: {
        width: width,
        height: 350,
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: '80%',
    },
    detailsContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: -24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    badgesWrapper: {
        flexDirection: 'row',
        gap: 8,
    },
    badge: {
        backgroundColor: Colors.secondary + '20', // Opacity
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 4,
    },
    badgeText: {
        fontSize: 12,
        color: Colors.secondary,
        fontWeight: '600',
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#eee',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    ratingText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.foreground,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: 4,
    },
    weight: {
        fontSize: 16,
        color: Colors.mutedForeground,
        marginBottom: 16,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 12,
        marginBottom: 16,
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    originalPrice: {
        fontSize: 16,
        color: Colors.mutedForeground,
        textDecorationLine: 'line-through',
    },
    discount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.foreground,
        marginBottom: 8,
        marginTop: 8,
    },
    description: {
        fontSize: 16,
        color: Colors.mutedForeground,
        lineHeight: 24,
        marginBottom: 24,
    },
    infoRow: {
        flexDirection: 'row',
        gap: 24,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    infoText: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.foreground,
    },
    actionBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 16,
        paddingBottom: 24,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    quantityControl: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 8,
    },
    qtyBtn: {
        padding: 12,
        width: 44,
        alignItems: 'center',
    },
    qtyText: {
        fontSize: 18,
        fontWeight: '600',
    },
    qtyValue: {
        fontSize: 16,
        fontWeight: '600',
        width: 30,
        textAlign: 'center',
    },
    addToCartBtn: {
        flex: 1,
    },
});
