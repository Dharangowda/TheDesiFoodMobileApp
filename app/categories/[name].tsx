import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/theme';
import { SubcategoryGrid } from '../../components/home/SubcategoryGrid';
import { getSubcategories } from '../../constants/subcategories';
import { MOCK_PRODUCTS } from '../../constants/mockData';
import { ProductCard } from '../../components/home/ProductCard';

export default function CategoryDetailScreen() {
    const { name } = useLocalSearchParams<{ name: string }>();
    const router = useRouter();
    const subcategories = getSubcategories(name || '');
    
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

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {/* All Products Link */}
                <TouchableOpacity style={styles.allProductsLink}>
                    <Text style={styles.allProductsText}>All {name} →</Text>
                </TouchableOpacity>

                {/* Subcategories Grid */}
                {subcategories.length > 0 && (
                    <View style={styles.subcategoriesSection}>
                        <SubcategoryGrid 
                            subcategories={subcategories}
                            onItemPress={(item) => {
                                console.log('Selected:', item);
                                // Navigate to subcategory products
                            }}
                        />
                    </View>
                )}

                {/* Featured Products */}
                {categoryProducts.length > 0 && (
                    <View style={styles.productsSection}>
                        <Text style={styles.sectionTitle}>Featured Products</Text>
                        <ScrollView 
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.productsList}
                        >
                            {categoryProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onPress={() => router.push(`/products/${product.id}`)}
                                />
                            ))}
                        </ScrollView>
                    </View>
                )}

                <View style={{ height: 40 }} />
            </ScrollView>
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
    allProductsLink: {
        padding: 16,
        backgroundColor: '#FFF3E0',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    allProductsText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    subcategoriesSection: {
        flex: 1,
    },
    productsSection: {
        marginTop: 24,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.foreground,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    productsList: {
        paddingHorizontal: 16,
    },
});