import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Layout } from '../../constants/theme';
import { Card, CardContent } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';

export default function RefundPolicyScreen() {
    const handleEmail = () => {
        Linking.openURL('mailto:support@thedesifood.com');
    };

    const renderBulletList = (items: string[]) => (
        <View style={styles.list}>
            {items.map((item, index) => (
                <View key={index} style={styles.listItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.text}>{item}</Text>
                </View>
            ))}
        </View>
    );

    return (
        <>
            <Stack.Screen options={{ title: 'Return & Refund Policy' }} />
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>

                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="refresh-outline" size={32} color={Colors.primary} />
                    </View>
                    <Text style={styles.title}>Return & Refund Policy</Text>
                    <Text style={styles.subtitle}>Your satisfaction matters to us.</Text>
                </View>

                <Separator style={styles.separator} />

                {/* Introduction */}
                <Card style={styles.introCard}>
                    <CardContent>
                        <Text style={styles.text}>
                            At The Desi Food we aim to make your shopping experience seamless and satisfying. If you face any issues with your delivery or product, we do accept returns under the conditions outlined below. Please read our policy carefully.
                        </Text>
                    </CardContent>
                </Card>

                {/* 1. Eligibility */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="checkmark-circle-outline" size={24} color={Colors.primary} />
                        <Text style={styles.sectionTitle}>1. Eligibility for Returns</Text>
                    </View>
                    <Text style={styles.text}>We accept returns under the following conditions:</Text>
                    {renderBulletList([
                        'The item must be in its original condition: unused, unworn, with tags, and in the original packaging.',
                        'A proof of purchase is required for all returns.',
                        'Returns must be initiated and shipped within 7 days of product delivery.'
                    ])}

                    <Text style={[styles.text, styles.bold]}>Non-Returnable Items:</Text>
                    <Text style={styles.text}>The following items are not eligible for returns:</Text>
                    {renderBulletList([
                        'Perishable goods, such as food items.',
                        'Custom or personalized products.',
                        'Personal care and beauty products.',
                        'Sale items or gift cards.'
                    ])}
                    <Text style={styles.text}>
                        For food items, while returns are not accepted, we will review complaints on a case-by-case basis and offer refunds if deemed appropriate.
                    </Text>
                </View>

                <Separator style={styles.separator} />

                {/* 2. Damaged or Defective */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="alert-circle-outline" size={24} color={Colors.primary} />
                        <Text style={styles.sectionTitle}>2. Damaged or Defective Products</Text>
                    </View>
                    <Text style={styles.text}>
                        If your order is damaged during shipping or defective, we will issue a full refund. To qualify:
                    </Text>
                    {renderBulletList([
                        'Provide proof of damage (photos or videos) within 3 days of delivery.',
                        'Contact us immediately at support@thedesifood.com for assistance.'
                    ])}
                </View>

                <Separator style={styles.separator} />

                {/* 3. Return Process */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="arrow-undo-outline" size={24} color={Colors.primary} />
                        <Text style={styles.sectionTitle}>3. Return Process</Text>
                    </View>
                    <Text style={styles.text}>To initiate a return:</Text>
                    {renderBulletList([
                        'Contact our customer support team at support@thedesifood.com.',
                        'Provide the reason for the return along with proof of purchase.'
                    ])}
                    <Text style={[styles.text, styles.bold]}>Return Shipping Options:</Text>
                    {renderBulletList([
                        'You have to pay for the return shipping and send the items to our Returns Center. Address will be provided once the return is approved.',
                        'We will refund the product price minus the original shipping charges from India.'
                    ])}
                </View>

                <Separator style={styles.separator} />

                {/* 4. Refund Timeline */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="time-outline" size={24} color={Colors.primary} />
                        <Text style={styles.sectionTitle}>4. Refund Timeline</Text>
                    </View>
                    {renderBulletList([
                        'Refunds will be processed to your original payment method within 10 business days of receiving and inspecting the returned items.',
                        'If more than 15 business days have passed since the refund was approved, and you haven\'t received it, contact us at support@thedesifood.com.'
                    ])}
                </View>

                <Separator style={styles.separator} />

                {/* 5. Abuse Policy */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="warning-outline" size={24} color={Colors.primary} />
                        <Text style={styles.sectionTitle}>5. Abuse of the Return Policy</Text>
                    </View>
                    <Text style={styles.text}>
                        To ensure fairness, we reserve the right to refuse service to buyers who abuse the return policy or repeatedly make unjustified return requests.
                    </Text>
                </View>

                <Separator style={styles.separator} />

                {/* 6. Order Cancellation */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="close-circle-outline" size={24} color={Colors.primary} />
                        <Text style={styles.sectionTitle}>6. Order Cancellation</Text>
                    </View>
                    {renderBulletList([
                        'You may cancel your order before it has shipped for a full refund.',
                        'If the item has already been delivered, please initiate a return request as per our return policy.'
                    ])}
                </View>

                <Separator style={styles.separator} />

                {/* 7. Food Items */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="restaurant-outline" size={24} color={Colors.primary} />
                        <Text style={styles.sectionTitle}>7. Additional Information for Food Items</Text>
                    </View>
                    <Text style={styles.text}>
                        Due to the perishable nature of food products, we do not offer returns or exchanges on food items. However:
                    </Text>
                    {renderBulletList([
                        'If you are dissatisfied with the product, contact us within 3 days of delivery at support@thedesifood.com.',
                        'Our team will review the issue and may initiate a refund on a case-by-case basis.'
                    ])}
                </View>

                <Separator style={styles.separator} />

                {/* 8. Missing Products */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="search-outline" size={24} color={Colors.primary} />
                        <Text style={styles.sectionTitle}>8. Missing Products</Text>
                    </View>
                    <Text style={styles.text}>
                        In the case of missing products, inspect your package within 24 hours of delivery and report the issue to support@thedesifood.com with photos and a list of missing items. Genuine cases will be resolved with replacements or credits.
                    </Text>
                </View>

                <Separator style={styles.separator} />

                {/* Contact Section */}
                <View style={styles.contactSection}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="mail-outline" size={24} color={Colors.primary} />
                        <Text style={styles.sectionTitle}>Need Help?</Text>
                    </View>
                    <Text style={styles.text}>
                        For any further assistance, feel free to contact our customer support team at:
                    </Text>
                    <TouchableOpacity onPress={handleEmail}>
                        <Text style={[styles.text, styles.link]}>support@thedesifood.com</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>
                        We're here to help!
                    </Text>
                </View>

            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        padding: Layout.padding,
        paddingBottom: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 24,
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
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: 8,
        textAlign: 'center',
        fontFamily: 'serif',
    },
    subtitle: {
        fontSize: 16,
        color: Colors.mutedForeground,
    },
    separator: {
        marginVertical: 24,
    },
    introCard: {
        marginBottom: 24,
        backgroundColor: Colors.card,
    },
    section: {
        marginBottom: 8,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
        marginBottom: 12,
        paddingRight: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.foreground,
        fontFamily: 'serif',
        flex: 1,
        marginTop: -2,
    },
    text: {
        fontSize: 15,
        color: Colors.foreground,
        lineHeight: 24,
        marginBottom: 8,
    },
    bold: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    list: {
        marginLeft: 8,
        marginBottom: 16,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
        paddingRight: 16,
    },
    bullet: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: Colors.foreground,
        marginRight: 12,
        marginTop: 8, // Align with text top line
    },
    contactSection: {
        backgroundColor: Colors.muted,
        padding: 24,
        borderRadius: Layout.borderRadius,
    },
    link: {
        color: Colors.primary,
        fontWeight: '600',
        marginVertical: 4,
    },
});
