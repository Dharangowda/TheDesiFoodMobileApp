import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Layout } from '../../constants/theme';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';
import { MOCK_PRODUCTS } from '../../constants/mockData';

export default function CartScreen() {
    const router = useRouter();

    // Mock cart items (using first 2 mock products as example)
    const cartItems = [
        { ...MOCK_PRODUCTS[0], quantity: 1 },
        { ...MOCK_PRODUCTS[1], quantity: 2 },
        { ...MOCK_PRODUCTS[3], quantity: 1 }
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 50; // Mock shipping
    const total = subtotal + shipping;

    return (
        <>
            <Stack.Screen options={{ title: 'Shopping Cart', headerShadowVisible: false }} />
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.content}>

                    {cartItems.map((item) => (
                        <View key={item.id} style={styles.cartItem}>
                            <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode="cover" />

                            <View style={styles.itemDetails}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.itemTitle} numberOfLines={2}>{item.name}</Text>
                                    <TouchableOpacity>
                                        <Ionicons name="trash-outline" size={20} color={Colors.error} />
                                    </TouchableOpacity>
                                </View>

                                <Text style={styles.itemVariant}>{item.weight}</Text>

                                <View style={styles.itemFooter}>
                                    <Text style={styles.itemPrice}>₹ {item.price.toLocaleString()}</Text>

                                    <View style={styles.quantityControl}>
                                        <TouchableOpacity style={styles.qtyBtn}>
                                            <Ionicons name="remove" size={16} color={Colors.foreground} />
                                        </TouchableOpacity>
                                        <Text style={styles.qtyValue}>{item.quantity}</Text>
                                        <TouchableOpacity style={styles.qtyBtn}>
                                            <Ionicons name="add" size={16} color={Colors.foreground} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}

                    {cartItems.length === 0 && (
                        <View style={styles.emptyCart}>
                            <Ionicons name="cart-outline" size={64} color={Colors.mutedForeground} />
                            <Text style={styles.emptyText}>Your cart is empty</Text>
                            <Button
                                title="Start Shopping"
                                onPress={() => router.push('/')}
                                variant="outline"
                                style={{ marginTop: 16 }}
                            />
                        </View>
                    )}

                </ScrollView>

                {/* Checkout Summary */}
                {cartItems.length > 0 && (
                    <View style={styles.footer}>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Subtotal</Text>
                            <Text style={styles.summaryValue}>₹ {subtotal.toLocaleString()}</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Shipping</Text>
                            <Text style={styles.summaryValue}>₹ {shipping.toLocaleString()}</Text>
                        </View>
                        <Separator />
                        <View style={[styles.summaryRow, { marginTop: 12, marginBottom: 16 }]}>
                            <Text style={styles.totalLabel}>Total</Text>
                            <Text style={styles.totalValue}>₹ {total.toLocaleString()}</Text>
                        </View>

                        <Button title="Proceed to Checkout" onPress={() => { }} />
                    </View>
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        padding: 16,
        paddingBottom: 100,
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    itemDetails: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.foreground,
        flex: 1,
        marginRight: 8,
    },
    itemVariant: {
        fontSize: 12,
        color: Colors.mutedForeground,
        marginTop: 4,
    },
    itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    quantityControl: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 4,
    },
    qtyBtn: {
        padding: 4,
        width: 28,
        alignItems: 'center',
    },
    qtyValue: {
        fontSize: 14,
        fontWeight: '600',
        paddingHorizontal: 8,
    },
    emptyCart: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
    },
    emptyText: {
        fontSize: 18,
        color: Colors.mutedForeground,
        marginTop: 16,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 16,
        paddingBottom: 24, // Safe area
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 4,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    summaryLabel: {
        fontSize: 14,
        color: Colors.mutedForeground,
    },
    summaryValue: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.foreground,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.foreground,
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary,
    },
});
