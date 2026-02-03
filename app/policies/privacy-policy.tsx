import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Layout } from '../../constants/theme';
import { Card, CardContent } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';

const sections = [
    {
        title: "What type of information we may collect from you?",
        icon: "server-outline" as const, // Database equivalent
        content: "When you sign up on our website, The Desi Food may ask for some personal information about you. This may include your name (first and last), email address, phone number, postal code, age, gender, occupation, education, and address. We may also collect data about the pages you visit, the links you click, and how often you access our site."
    },
    {
        title: "How do we collect the information?",
        icon: "analytics-outline" as const, // Cookie/Analytics equivalent
        content: "At The Desi Food, we will only ask for your personal information if you voluntarily register on our website or complete an online survey. Also, we use cookies, including ones from Google Analytics and DoubleClick, to better understand your website usage and preferences. This helps us optimize our website and show you ads based on your past visits to our site."
    },
    {
        title: "How the information is used The Desi Food",
        icon: "person-outline" as const, // UserCheck equivalent
        content: "At The Desi Food, we use your personal information to provide personalized features on our website and send you promotional offers through our site or other channels. We may also share your information with our business partners to fulfill your requests for services. Additionally, we use your information to comply with laws and policies, improve our products, and contact you as a survey respondent or contest winner. We may also use your contact information to send you promotional materials from our sponsors or advertisers. Finally, we use your information to display ads on third-party websites through the Google Ad network. But if you prefer not to see these ads, you can opt out of Google Analytics for Display Advertising and customize your preferences using the Ads Preferences Manager."
    },
    {
        title: "With whom your information will be shared?",
        icon: "share-social-outline" as const, // Share2 equivalent
        content: "We take your privacy seriously at The Desi Food. We won't use your financial information for anything other than completing transactions with you. Also, we won't sell, rent, or share your personal information with third parties without your consent. However, if you ask us to provide products or services, we may need to share your information with our business associates and partners to fulfill your request. We may also use your information for promotional offers or to investigate and prevent illegal activities or fraud. In rare cases, we may need to share your information to comply with legal requests from authorities, such as subpoenas or court orders. But please rest assured that we'll do our best to protect your information and privacy at all times."
    },
    {
        title: "What Choices are available to you regarding the collection, use and distribution of your information?",
        icon: "settings-outline" as const,
        content: "At The Desi Food, we take your privacy seriously and have measures in place to protect your information from loss, misuse, and alteration. Our servers are only accessible to authorized personnel, and we only share your information with employees who need it to complete transactions and provide requested services. While we make every effort to keep your information confidential, please note that transmissions over the internet may not be completely secure. By using our site, you understand and agree that we can't be held liable for any unauthorized disclosure of your information due to transmission errors or third-party acts. We want you to feel comfortable and secure when using our services, so if you have any questions or concerns, please let us know."
    }
];

export default function PrivacyPolicyScreen() {
    const handleEmail = () => {
        Linking.openURL('mailto:support@thedesifood.com');
    };

    return (
        <>
            <Stack.Screen options={{ title: 'Privacy Policy' }} />
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>

                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="shield-checkmark-outline" size={32} color={Colors.primary} />
                    </View>
                    <Text style={styles.title}>Privacy Policy</Text>
                    <Text style={styles.subtitle}>Your privacy matters to us.</Text>
                </View>

                <Separator style={styles.separator} />

                {/* Introduction Card */}
                <Card style={styles.introCard}>
                    <CardContent>
                        <Text style={styles.paragraph}>
                            At The Desi Food, we take your privacy seriously. Our Privacy Policy explains how we collect and use your data on our website. As a visitor or customer, we suggest you read this Privacy Policy carefully. By using our services, you agree to the way we collect and use your data as described in this Policy.
                        </Text>
                    </CardContent>
                </Card>

                {/* Sections */}
                {sections.map((section, index) => (
                    <View key={index}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name={section.icon} size={24} color={Colors.primary} />
                            <Text style={styles.sectionTitle}>{section.title}</Text>
                        </View>
                        <Text style={styles.sectionContent}>{section.content}</Text>
                        <Separator style={styles.separator} />
                    </View>
                ))}

                {/* Update & Correct Info */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="refresh-circle-outline" size={24} color={Colors.primary} />
                        <Text style={styles.sectionTitle}>How can you update or correct any inaccurate information?</Text>
                    </View>
                    <Text style={styles.sectionContent}>
                        If you need to correct or update any information you provided, you can easily do it online on the Site. However, if you lose your access details, you can send an email to <Text style={styles.link} onPress={handleEmail}>support@thedesifood.com</Text> for assistance.
                    </Text>
                    <Text style={[styles.sectionContent, styles.note]}>
                        <Text style={styles.bold}>Please note: </Text>
                        The Desi Food may update or change its policy from time to time, and any such changes will be effective immediately upon being posted on the Site.
                    </Text>
                </View>

                <Separator style={styles.separator} />

                {/* Contact Section */}
                <View style={styles.contactContainer}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="mail-outline" size={24} color={Colors.primary} />
                        <Text style={styles.contactTitle}>Contact Us</Text>
                    </View>
                    <Text style={styles.contactText}>
                        If you have any questions about this Privacy Policy, you can reach us at:
                    </Text>
                    <View style={styles.emailRow}>
                        <Text style={styles.contactText}>Email: </Text>
                        <TouchableOpacity onPress={handleEmail}>
                            <Text style={styles.link}>support@thedesifood.com</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ height: 40 }} />
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
        paddingVertical: 24,
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
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: 8,
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
        backgroundColor: Colors.card, // Ensure card background
    },
    paragraph: {
        fontSize: 15, // Slightly larger for readability
        color: Colors.foreground,
        lineHeight: 24,
    },
    section: {
        marginBottom: 8,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Align icon with top line of text
        gap: 12, // Increased gap
        marginBottom: 12,
        paddingRight: 16, // Prevent text touching edge
    },
    sectionTitle: {
        fontSize: 18, // Slightly larger
        fontWeight: '600',
        color: Colors.foreground,
        fontFamily: 'serif',
        flex: 1, // Allow text to wrap nicely
        marginTop: -2, // Optical alignment with icon
    },
    sectionContent: {
        fontSize: 15,
        color: Colors.foreground,
        lineHeight: 24,
        marginBottom: 8,
    },
    link: {
        color: Colors.primary,
        fontWeight: '600',
    },
    note: {
        marginTop: 12,
    },
    bold: {
        fontWeight: 'bold',
    },
    contactContainer: {
        backgroundColor: '#f5f5f5', // Muted background
        padding: 20,
        borderRadius: 12,
    },
    contactTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.foreground,
        fontFamily: 'serif',
    },
    contactText: {
        fontSize: 15,
        color: Colors.foreground,
        marginBottom: 4,
    },
    emailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
});
