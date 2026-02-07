import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Colors } from '../../constants/theme';
import { SearchBar } from '../../components/home/SearchBar';
import { CategoryHeader } from '../../components/home/CategoryHeader';
import { TrustBanner } from '../../components/home/TrustBanner';
import { ProductCard } from '../../components/home/ProductCard';
import { HeroBanner } from '../../components/home/HeroBanner';
import { PromoBanners } from '../../components/home/PromoBanners';
import { SectionHeader } from '../../components/home/SectionHeader';
import { CategoryDrawer } from '../../components/navigation/CategoryDrawer';
import { MOCK_PRODUCTS, MOCK_HIGHLIGHTS, MOCK_DEALS, MOCK_BRANDS, MOCK_TESTIMONIALS } from '../../constants/mockData';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
    const router = useRouter();
    const [drawerVisible, setDrawerVisible] = useState(false);
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    {/* Hamburger Menu */}
                    <TouchableOpacity 
                        style={styles.hamburgerButton}
                        onPress={() => setDrawerVisible(true)}
                    >
                        <Ionicons name="menu" size={28} color={Colors.foreground} />
                    </TouchableOpacity>

                    {/* Logo - Centered */}
                    <View style={styles.logoContainer}>
                        <Image 
                            source={require('../../assets/images/logo-desifood.png')} 
                            style={styles.logoImage}
                            resizeMode="contain"
                        />
                    </View>

                    {/* Right Actions */}
                    <View style={styles.headerActions}>
                        <TouchableOpacity style={styles.iconBtn}>
                            <Ionicons name="notifications-outline" size={24} color={Colors.foreground} />
                        </TouchableOpacity>
                    </View>
                </View>
                <SearchBar />
            </View>

            {/* Category Drawer */}
            <CategoryDrawer
                visible={drawerVisible}
                onClose={() => setDrawerVisible(false)}
                onNavigate={(category, subcategory, item) => {
                    console.log('Navigate to:', category, subcategory, item);
                    // Navigate to appropriate page
                    router.push(`/categories/${category}`);
                }}
            />

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                {/* Categories */}
                <CategoryHeader />

                {/* Trust Banner */}
                <TrustBanner />

                {/* Hero Banner */}
                <HeroBanner />

                {/* Best Sellers Section */}
                <View style={styles.section}>
                    <SectionHeader 
                        title="Best Sellers" 
                        subtitle="Discover our most loved products across all categories"
                        onSeeAllPress={() => {/* Navigate to bestsellers */}}
                    />

                    {/* Tabs */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
                        {['Bestsellers', 'Food', 'Wellness', 'Beauty', 'Baby & Kids', 'Home', 'Fashion', 'Spirituality', 'Books & Games'].map((tab, idx) => (
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

                {/* Foods Section */}
                <View style={styles.section}>
                    <SectionHeader 
                        title="Foods" 
                        subtitle="Authentic Indian foods and spices"
                        onSeeAllPress={() => {/* Navigate to foods */}}
                    />

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
                        {['All Foods', 'Spices', 'Rice & Grains', 'Oils & Ghee', 'Snacks', 'Sweets'].map((tab, idx) => (
                            <TouchableOpacity key={tab} style={[styles.tab, idx === 0 && styles.activeTab]}>
                                <Text style={[styles.tabText, idx === 0 && styles.activeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productList}>
                        {MOCK_PRODUCTS.filter(p => p.category === 'Food').map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onPress={() => router.push(`/products/${product.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Wellness Section */}
                <View style={styles.section}>
                    <SectionHeader 
                        title="Wellness" 
                        subtitle="Natural health and wellness products"
                        onSeeAllPress={() => {/* Navigate to wellness */}}
                    />

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
                        {['All Wellness', 'Ayurveda', 'Supplements', 'Herbal', 'Immunity', 'Fitness'].map((tab, idx) => (
                            <TouchableOpacity key={tab} style={[styles.tab, idx === 0 && styles.activeTab]}>
                                <Text style={[styles.tabText, idx === 0 && styles.activeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productList}>
                        {MOCK_PRODUCTS.filter(p => p.category === 'Wellness').map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onPress={() => router.push(`/products/${product.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Beauty Section */}
                <View style={styles.section}>
                    <SectionHeader 
                        title="Beauty & Personal Care" 
                        subtitle="Natural beauty and personal care products"
                        onSeeAllPress={() => {/* Navigate to beauty */}}
                    />

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
                        {['All Beauty', 'Skincare', 'Haircare', 'Makeup', 'Personal Care', 'Fragrances'].map((tab, idx) => (
                            <TouchableOpacity key={tab} style={[styles.tab, idx === 0 && styles.activeTab]}>
                                <Text style={[styles.tabText, idx === 0 && styles.activeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productList}>
                        {MOCK_PRODUCTS.filter(p => p.category === 'Beauty').map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onPress={() => router.push(`/products/${product.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Baby & Kids Section */}
                <View style={styles.section}>
                    <SectionHeader 
                        title="Baby & Kids" 
                        subtitle="Safe and natural products for children"
                        onSeeAllPress={() => {/* Navigate to baby */}}
                    />

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
                        {['All Kids', 'Baby Care', 'Kids Food', 'Toys & Games', 'Clothing', 'Health'].map((tab, idx) => (
                            <TouchableOpacity key={tab} style={[styles.tab, idx === 0 && styles.activeTab]}>
                                <Text style={[styles.tabText, idx === 0 && styles.activeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productList}>
                        {MOCK_PRODUCTS.slice(0, 3).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onPress={() => router.push(`/products/${product.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Home Section */}
                <View style={styles.section}>
                    <SectionHeader 
                        title="Home & Kitchen" 
                        subtitle="Essential items for your home"
                        onSeeAllPress={() => {/* Navigate to home */}}
                    />

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
                        {['All Home', 'Kitchen', 'Cookware', 'Storage', 'Decor', 'Appliances'].map((tab, idx) => (
                            <TouchableOpacity key={tab} style={[styles.tab, idx === 0 && styles.activeTab]}>
                                <Text style={[styles.tabText, idx === 0 && styles.activeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productList}>
                        {MOCK_PRODUCTS.slice(1, 4).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onPress={() => router.push(`/products/${product.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Fashion Section */}
                <View style={styles.section}>
                    <SectionHeader 
                        title="Fashion" 
                        subtitle="Traditional and modern clothing"
                        onSeeAllPress={() => {/* Navigate to fashion */}}
                    />

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
                        {['All Fashion', 'Traditional', 'Modern', 'Accessories', 'Footwear', 'Jewelry'].map((tab, idx) => (
                            <TouchableOpacity key={tab} style={[styles.tab, idx === 0 && styles.activeTab]}>
                                <Text style={[styles.tabText, idx === 0 && styles.activeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productList}>
                        {MOCK_PRODUCTS.slice(2, 5).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onPress={() => router.push(`/products/${product.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Spirituality Section */}
                <View style={styles.section}>
                    <SectionHeader 
                        title="Spirituality" 
                        subtitle="Items for spiritual practices and meditation"
                        onSeeAllPress={() => {/* Navigate to spirituality */}}
                    />

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
                        {['All Spiritual', 'Pooja Items', 'Incense', 'Books', 'Meditation', 'Idols'].map((tab, idx) => (
                            <TouchableOpacity key={tab} style={[styles.tab, idx === 0 && styles.activeTab]}>
                                <Text style={[styles.tabText, idx === 0 && styles.activeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productList}>
                        {MOCK_PRODUCTS.slice(0, 4).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onPress={() => router.push(`/products/${product.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Books & Games Section */}
                <View style={styles.section}>
                    <SectionHeader 
                        title="Books & Games" 
                        subtitle="Educational books and traditional games"
                        onSeeAllPress={() => {/* Navigate to books */}}
                    />

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
                        {['All Books', 'Religious Books', 'Educational', 'Children Books', 'Board Games', 'Puzzles'].map((tab, idx) => (
                            <TouchableOpacity key={tab} style={[styles.tab, idx === 0 && styles.activeTab]}>
                                <Text style={[styles.tabText, idx === 0 && styles.activeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productList}>
                        {MOCK_PRODUCTS.filter(p => p.category === 'Books & Games').map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onPress={() => router.push(`/products/${product.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Promotional Banners */}
                <PromoBanners />

                {/* Top Categories in Wellness */}
                <View style={[styles.section, { backgroundColor: '#f9f9f9', paddingVertical: 20 }]}>
                    <Text style={[styles.sectionTitle, { paddingHorizontal: 16, marginBottom: 16 }]}>Top Categories in Wellness</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.highlightList}>
                        {MOCK_HIGHLIGHTS.map((item) => (
                            <TouchableOpacity key={item.id} style={[styles.highlightCard, { backgroundColor: item.color }]}>
                                <Text style={styles.highlightTitle}>{item.title}</Text>
                                <TouchableOpacity style={styles.shopBtn}>
                                    <Text style={styles.shopBtnText}>{item.btnText}</Text>
                                </TouchableOpacity>
                                <View style={styles.highlightImagePlaceholder}>
                                    <Ionicons name="leaf" size={30} color={Colors.foreground} />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Featured Brands */}
                <View style={styles.section}>
                    <SectionHeader 
                        title="Featured Brands" 
                        subtitle="Trusted brands loved by millions"
                        onSeeAllPress={() => {/* Navigate to brands */}}
                    />
                    
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandsList}>
                        {(MOCK_BRANDS || [
                            { id: 1, name: 'Patanjali', logo: 'leaf' },
                            { id: 2, name: 'Dabur', logo: 'medical' },
                            { id: 3, name: 'Himalaya', logo: 'flower' },
                            { id: 4, name: 'Organic India', logo: 'nutrition' },
                            { id: 5, name: 'Forest Essentials', logo: 'rose' }
                        ]).map((brand) => (
                            <TouchableOpacity key={brand.id} style={styles.brandCard}>
                                <View style={styles.brandLogo}>
                                    <Ionicons name={brand.logo as any} size={24} color={Colors.primary} />
                                </View>
                                <Text style={styles.brandName}>{brand.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Customer Reviews */}
                <View style={[styles.section, { backgroundColor: Colors.background }]}>
                    <Text style={[styles.sectionTitle, { paddingHorizontal: 16, marginBottom: 16 }]}>What Our Customers Say</Text>
                    
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.reviewsList}>
                        {(MOCK_TESTIMONIALS || [
                            { id: 1, name: 'Priya Sharma', rating: 5, review: 'Amazing quality products! Fast delivery and authentic items.', location: 'Mumbai' },
                            { id: 2, name: 'Rajesh Kumar', rating: 5, review: 'Best place for Indian groceries. Highly recommended!', location: 'Delhi' },
                            { id: 3, name: 'Anita Patel', rating: 4, review: 'Great variety and competitive prices. Love shopping here.', location: 'Ahmedabad' }
                        ]).map((review) => (
                            <View key={review.id} style={styles.reviewCard}>
                                <View style={styles.reviewHeader}>
                                    <View style={styles.reviewerInfo}>
                                        <View style={styles.reviewerAvatar}>
                                            <Text style={styles.reviewerInitial}>{review.name.charAt(0)}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.reviewerName}>{review.name}</Text>
                                            <Text style={styles.reviewerLocation}>{review.location}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.ratingContainer}>
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Ionicons key={i} name="star" size={12} color="#FFD700" />
                                        ))}
                                    </View>
                                </View>
                                <Text style={styles.reviewText}>{review.review}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Why Choose Us */}
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { paddingHorizontal: 16, marginBottom: 20 }]}>Why Choose The Desi Food?</Text>
                    
                    <View style={styles.featuresGrid}>
                        {[
                            { icon: 'shield-checkmark', title: 'Authentic Products', desc: '100% genuine Indian products' },
                            { icon: 'flash', title: 'Fast Delivery', desc: 'Quick & secure worldwide shipping' },
                            { icon: 'card', title: 'Secure Payment', desc: 'Safe & encrypted transactions' },
                            { icon: 'headset', title: '24/7 Support', desc: 'Always here to help you' }
                        ].map((feature, idx) => (
                            <View key={idx} style={styles.featureCard}>
                                <View style={styles.featureIcon}>
                                    <Ionicons name={feature.icon as any} size={24} color={Colors.primary} />
                                </View>
                                <Text style={styles.featureTitle}>{feature.title}</Text>
                                <Text style={styles.featureDesc}>{feature.desc}</Text>
                            </View>
                        ))}
                    </View>
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
        paddingTop: 30,
    },
    header: {
        paddingHorizontal: 16,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    hamburgerButton: {
        padding: 4,
        width: 40,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage: {
        width: 120,
        height: 40,
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
    
    // Sections
    section: {
        marginBottom: 24,
    },
    
    // Tabs
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
    
    // Product Lists
    productList: {
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    
    // Highlights
    highlightList: {
        paddingHorizontal: 16,
    },
    highlightCard: {
        width: 240,
        height: 140,
        borderRadius: 12,
        padding: 20,
        marginRight: 16,
        justifyContent: 'space-between',
        position: 'relative',
    },
    highlightTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.foreground,
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
    highlightImagePlaceholder: {
        position: 'absolute',
        right: 20,
        top: 20,
        opacity: 0.3,
    },
    
    // Brands
    brandsList: {
        paddingHorizontal: 16,
    },
    brandCard: {
        alignItems: 'center',
        marginRight: 20,
        width: 80,
    },
    brandLogo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    brandName: {
        fontSize: 12,
        fontWeight: '500',
        color: Colors.foreground,
        textAlign: 'center',
    },
    
    // Reviews
    reviewsList: {
        paddingHorizontal: 16,
    },
    reviewCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginRight: 16,
        width: 280,
        borderWidth: 1,
        borderColor: '#f0f0f0',
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    reviewerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    reviewerAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    reviewerInitial: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    reviewerName: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.foreground,
    },
    reviewerLocation: {
        fontSize: 12,
        color: Colors.mutedForeground,
    },
    ratingContainer: {
        flexDirection: 'row',
        gap: 2,
    },
    reviewText: {
        fontSize: 14,
        color: Colors.foreground,
        lineHeight: 20,
    },
    
    // Features Grid
    featuresGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
        gap: 16,
    },
    featureCard: {
        width: (width - 64) / 2,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#f0f0f0',
    },
    featureIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    featureTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: 4,
        textAlign: 'center',
    },
    featureDesc: {
        fontSize: 12,
        color: Colors.mutedForeground,
        textAlign: 'center',
        lineHeight: 16,
    },
});
