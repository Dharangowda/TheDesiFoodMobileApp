import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/theme';
import { MOCK_PRODUCTS } from '../../constants/mockData';
import { ProductCard } from '../../components/home/ProductCard';

export default function CategoryDetailScreen() {
    const { name } = useLocalSearchParams<{ name: string }>();
    const router = useRouter();
    
    // Filter products by category
    const categoryProducts = MOCK_PRODUCTS.filter(
        product => product.category === name || 
        (name === 'Foods' && product.category === 'Food')
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack.Screen 
                options={{ 
                    headerShown: true,
                    title: name || 'Category',
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: Colors.foreground,
                }} 
            />

            <View style={styles.container}>
                {/* Featured Products Section */}
                {categoryProducts.length > 0 ? (
                    <FlatList
                        data={categoryProducts}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        contentContainerStyle={styles.productGrid}
                        columnWrapperStyle={styles.row}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={
                            <View style={styles.header}>
                                <Text style={styles.headerTitle}>Featured Products</Text>
                                <Text style={styles.headerSubtitle}>
                                    {categoryProducts.length} products available
                                </Text>
                            </View>
                        }
                        renderItem={({ item }) => (
                            <View style={styles.productWrapper}>
                                <ProductCard
                                    product={item}
                                    onPress={() => router.push(`/products/${item.id}`)}
                                />
                            </View>
                        )}
                    />
                ) : (
                    <View style={styles.emptyContainer}>
                        <Ionicons name="cube-outline" size={64} color={Colors.mutedForeground} />
                        <Text style={styles.emptyText}>No products found</Text>
                        <Text style={styles.emptySubtext}>
                            Check back soon for new products in this category
                        </Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 16,
        paddingBottom: 8,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 14,
        color: Colors.mutedForeground,
    },
    productGrid: {
        paddingHorizontal: 8,
        paddingBottom: 16,
    },
    row: {
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    productWrapper: {
        width: '48%',
        marginBottom: 16,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.foreground,
        marginTop: 16,
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: Colors.mutedForeground,
        textAlign: 'center',
    },
});