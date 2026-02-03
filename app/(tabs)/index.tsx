import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Colors } from '../../constants/theme';
import { SearchBar } from '../../components/home/SearchBar';
import { CategoryHeader } from '../../components/home/CategoryHeader';
import { ProductCard } from '../../components/home/ProductCard';
import { MOCK_PRODUCTS, MOCK_HIGHLIGHTS } from '../../constants/mockData';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.logoRow}>
                    {/* Logo Placeholder - assuming text for now */}
                    <Text style={styles.logoText}>The <Text style={{ color: Colors.primary }}>Desi</Text> Food</Text>

                    <View style={styles.headerActions}>
                        <TouchableOpacity style={styles.iconBtn}>
                            <Ionicons name="notifications-outline" size={24} color={Colors.foreground} />
                        </TouchableOpacity>
                    </View>
                </View>
                <SearchBar />
            </View>

            <ScrollView style={styles.container}>

                {/* Categories */}
                <CategoryHeader />

                {/* Hero Section (Placeholder for Banner) */}
                <View style={styles.heroBanner}>
                    <View style={styles.bannerContent}>
                        <Text style={styles.bannerTitle}>100% Authentic Indian Products</Text>
                        <Text style={styles.bannerSubtitle}>Delivered Worldwide</Text>
                    </View>
                </View>

                {/* Best Sellers Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Best Sellers</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.sectionSubtitle}>Discover our most loved products across all categories</Text>

                    {/* Tabs (Placeholder) */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
                        {['Bestsellers', 'Food', 'Wellness', 'Beauty', 'Baby & Kids'].map((tab, idx) => (
                            <TouchableOpacity key={tab} style={[styles.tab, idx === 0 && styles.activeTab]}>
                                <Text style={[styles.tabText, idx === 0 && styles.activeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {/* Product List Horizontal */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productList}>
                        {MOCK_PRODUCTS.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onPress={() => router.push(`/products/${product.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Highlights Section */}
                <View style={[styles.section, { backgroundColor: '#f9f9f9', paddingVertical: 20 }]}>
                    <Text style={[styles.sectionTitle, { paddingHorizontal: 16, marginBottom: 16 }]}>Top Categories in Wellness</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.highlightList}>
                        {MOCK_HIGHLIGHTS.map((item) => (
                            <View key={item.id} style={[styles.highlightCard, { backgroundColor: item.color }]}>
                                <Text style={styles.highlightTitle}>{item.title}</Text>
                                <TouchableOpacity style={styles.shopBtn}>
                                    <Text style={styles.shopBtnText}>{item.btnText}</Text>
                                </TouchableOpacity>
                                {/* Image would go here */}
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30, // Adjust for status bar
    },
    header: {
        paddingHorizontal: 16,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    logoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    logoText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    headerActions: {
        flexDirection: 'row',
    },
    iconBtn: {
        padding: 4,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heroBanner: {
        height: 120,
        backgroundColor: '#FFF3E0', // Soft orange
        marginHorizontal: 16,
        borderRadius: 12,
        justifyContent: 'center',
        padding: 20,
        marginBottom: 24,
    },
    bannerContent: {
        maxWidth: '70%',
    },
    bannerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E65100',
        marginBottom: 4,
    },
    bannerSubtitle: {
        fontSize: 14,
        color: '#EF6C00',
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.foreground,
    },
    seeAll: {
        fontSize: 14,
        color: Colors.primary,
        fontWeight: '600',
    },
    sectionSubtitle: {
        fontSize: 14,
        color: Colors.mutedForeground,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    tabsContainer: {
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    tab: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        marginRight: 8,
    },
    activeTab: {
        backgroundColor: Colors.primary,
    },
    tabText: {
        fontSize: 14,
        color: Colors.mutedForeground,
        fontWeight: '500',
    },
    activeTabText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    productList: {
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    highlightList: {
        paddingHorizontal: 16,
    },
    highlightCard: {
        width: 240,
        height: 140,
        borderRadius: 12,
        padding: 20,
        marginRight: 16,
        justifyContent: 'center',
    },
    highlightTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: 16,
    },
    shopBtn: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    shopBtnText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.foreground,
    },
});
