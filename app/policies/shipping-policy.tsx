import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Layout } from '../../constants/theme';
import { Card, CardContent } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { SHIPPING_DATA, ShippingRule } from '../../constants/shippingData';

export default function ShippingPolicyScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRule, setSelectedRule] = useState<ShippingRule | null>(null);

    const filteredData = SHIPPING_DATA.filter(item =>
        item.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderCountryItem = ({ item }: { item: ShippingRule }) => (
        <TouchableOpacity
            style={styles.countryItem}
            onPress={() => setSelectedRule(item)}
        >
            <View style={styles.countryRow}>
                <Ionicons name="location-outline" size={20} color={Colors.primary} />
                <Text style={styles.countryName}>{item.country}</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color={Colors.mutedForeground} />
        </TouchableOpacity>
    );

    return (
        <>
            <Stack.Screen options={{ title: 'Shipping Policy' }} />
            <View style={styles.container}>

                {/* Header Content */}
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="cube-outline" size={32} color={Colors.primary} />
                    </View>
                    <Text style={styles.title}>Shipping Policy</Text>
                    <Text style={styles.subtitle}>
                        Express shipping to over 50+ countries. Search for your country below to see dispatch and delivery times.
                    </Text>

                    {/* Search Bar */}
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={20} color={Colors.mutedForeground} />
                        <TextInput
                            style={styles.input}
                            placeholder="Search country..."
                            placeholderTextColor={Colors.mutedForeground}
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>
                </View>

                {/* Country List */}
                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.country}
                    renderItem={renderCountryItem}
                    contentContainerStyle={styles.listContent}
                    initialNumToRender={15}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>No countries found.</Text>
                    }
                />

                {/* Details Modal */}
                <Modal
                    visible={!!selectedRule}
                    animationType="slide"
                    presentationStyle="pageSheet"
                    onRequestClose={() => setSelectedRule(null)}
                >
                    {selectedRule && (
                        <View style={styles.modalContainer}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalTitle}>{selectedRule.country}</Text>
                                <TouchableOpacity onPress={() => setSelectedRule(null)} style={styles.closeBtn}>
                                    <Ionicons name="close" size={24} color={Colors.foreground} />
                                </TouchableOpacity>
                            </View>

                            <ScrollView contentContainerStyle={styles.modalContent}>
                                <View style={styles.infoGrid}>
                                    <Card style={styles.infoCard}>
                                        <CardContent style={styles.cardContent}>
                                            <View style={styles.infoIcon}>
                                                <Ionicons name="time-outline" size={24} color={Colors.primary} />
                                            </View>
                                            <View>
                                                <Text style={styles.label}>Dispatch Time</Text>
                                                <Text style={styles.value}>{selectedRule.dispatchDays}</Text>
                                            </View>
                                        </CardContent>
                                    </Card>

                                    <Card style={styles.infoCard}>
                                        <CardContent style={styles.cardContent}>
                                            <View style={styles.infoIcon}>
                                                <Ionicons name="cube-outline" size={24} color={Colors.primary} />
                                            </View>
                                            <View>
                                                <Text style={styles.label}>Estimated Delivery</Text>
                                                <Text style={styles.value}>{selectedRule.deliveryDays}</Text>
                                            </View>
                                        </CardContent>
                                    </Card>
                                </View>

                                <Separator style={styles.separator} />

                                <Text style={styles.sectionTitle}>Shipping Charges</Text>
                                <View style={styles.pricingList}>
                                    {selectedRule.pricing.map((price, index) => (
                                        <View key={index} style={styles.priceRow}>
                                            <View style={styles.bullet} />
                                            <Text style={styles.priceText}>{price}</Text>
                                        </View>
                                    ))}
                                </View>

                                <View style={styles.noteBox}>
                                    <Text style={styles.noteText}>
                                        <Text style={{ fontWeight: 'bold' }}>Note:</Text> Delivery times may vary during peak seasons or due to custom processing.
                                    </Text>
                                </View>
                            </ScrollView>
                        </View>
                    )}
                </Modal>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        padding: Layout.padding,
        alignItems: 'center',
        backgroundColor: Colors.background,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    iconContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: `${Colors.primary}1A`,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: 8,
        fontFamily: 'serif',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: Colors.mutedForeground,
        textAlign: 'center',
        marginBottom: 16,
        lineHeight: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.card, // or a lighter gray
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 48,
        width: '100%',
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16,
        color: Colors.foreground,
    },
    listContent: {
        padding: Layout.padding,
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    countryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    countryName: {
        fontSize: 16,
        color: Colors.foreground,
        fontWeight: '500',
    },
    emptyText: {
        textAlign: 'center',
        color: Colors.mutedForeground,
        marginTop: 32,
    },

    // Modal Styles
    modalContainer: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.foreground,
        fontFamily: 'serif',
    },
    closeBtn: {
        padding: 4,
    },
    modalContent: {
        padding: 20,
    },
    infoGrid: {
        gap: 16,
        marginBottom: 24,
    },
    infoCard: {
        marginBottom: 0,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    infoIcon: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: Colors.muted,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 14,
        color: Colors.mutedForeground,
        marginBottom: 4,
    },
    value: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.foreground,
    },
    separator: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.foreground,
        marginBottom: 16,
    },
    pricingList: {
        gap: 12,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    bullet: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: Colors.primary,
        marginTop: 8,
        marginRight: 12,
    },
    priceText: {
        flex: 1,
        fontSize: 15,
        color: Colors.foreground,
        lineHeight: 22,
    },
    noteBox: {
        marginTop: 32,
        padding: 16,
        backgroundColor: Colors.muted,
        borderRadius: 8,
    },
    noteText: {
        fontSize: 14,
        color: Colors.mutedForeground,
        textAlign: 'center',
        lineHeight: 20,
    },
});
