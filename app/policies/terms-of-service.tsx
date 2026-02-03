import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Layout } from '../../constants/theme';
import { Card, CardContent } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';

export default function TermsOfServiceScreen() {
    const handleEmail = () => {
        Linking.openURL('mailto:support@thedesifood.com');
    };

    const sections = [
        {
            title: "Privacy",
            icon: "shield-checkmark-outline" as const,
            content: "To protect your personal information, please review our Privacy Policy, which governs the use of all information shared with The Desi Food, whether it's personal or public."
        },
        {
            title: "Electronic Communications",
            icon: "chatbox-ellipses-outline" as const,
            content: "When you use our services or send us emails, you agree to receive electronic communications from us. We will communicate with you by email or text message, and all legal requirements for written communication will be satisfied by these electronic communications."
        },
        {
            title: "Copyright",
            icon: "information-circle-outline" as const,
            content: "The content available on our website, including text, graphics, logos, button icons, images, audio clips, and data compilations, is the property of The Desi Food or its content suppliers and is protected by Indian laws. Copying any content without permission is strictly prohibited and illegal."
        },
        {
            title: "Trademarks",
            icon: "ribbon-outline" as const,
            content: "The Desi Food's logos, designs, and other symbols are special and can't be copied or used by anyone else."
        },
        {
            title: "Your Account",
            icon: "person-circle-outline" as const,
            content: "If you create an account on the website, you need to keep your login information safe and not let anyone else use it. If someone does use your account, it's your responsibility. TheDesiFood has the right to stop offering you service if they need to."
        },
        {
            title: "Risk of Losing Items",
            icon: "cube-outline" as const,
            content: "If you buy something on the website, it becomes your responsibility once it's given to the delivery company to bring to you."
        },
        {
            title: "Returns, Refunds, and Expiration Dates",
            icon: "refresh-circle-outline" as const,
            content: "If you get an expired product, The Desi Food will give you a refund minus the shipping charge as store credit. If you have other complaints, you can send an email with all the details to support@thedesifood.com. The Desi Food will look into your complaint and answer you by email."
        },
        {
            title: "Disclaimer of Warranties and Limitation of Liability",
            icon: "warning-outline" as const,
            content: `The services provided by The Desi Food and all information, content, materials, products (including software), and other services available through the website are provided "as is" and "as available," unless otherwise specified in writing. The Desi Food makes no representations or warranties of any kind, express or implied, regarding the operation of the services or the information, content, materials, products (including software), or other services available through the services, unless otherwise specified in writing. You agree that your use of the services is at your own risk.\n\nTo the fullest extent permitted by applicable law, The Desi Food disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose. The Desi Food does not warrant that the services, information, content, materials, products (including software), or other services available through the Services, The Desi Food servers, or electronic communications sent from The Desi Food are free of viruses or other harmful components. The Desi Food will not be liable for any damages of any kind arising from the use of any The Desi Food service, or from any information, content, materials, products (including software), or other services available through any The Desi Food service, including direct, indirect, incidental, punitive, and consequential damages, unless otherwise specified in writing.`
        },
        {
            title: "Disputes",
            icon: "hammer-outline" as const,
            content: "If you have any problem or complaint related to any The Desi Food product or service you have used or purchased online at thedesifood.com, the issue will be resolved by our customer care support service."
        },
        {
            title: "Minimum order",
            icon: "cart-outline" as const,
            content: "We accept orders of any amount, which includes certain taxes, packaging and shipping charges depending on location."
        },
        {
            title: "Payments",
            icon: "card-outline" as const,
            content: "You can pay for your order using any of the following methods: Credit Card, Debit Card, or Net banking. You will only be charged for the amount shown in your order summary during checkout. If you see any unusual charges on your credit or debit card, please check with family members or business colleagues who may have made the purchase on your behalf. If you still don't recognize the charge, please let us know within 30 days so we can investigate. If your payment fails, please double-check that all your information is correct and your internet connection is stable. If your account has been charged but the payment failed, we will return the money to your account within 7 business days. Please email us at support@thedesifood.com if you have any questions about your payment or order."
        }
    ];

    return (
        <>
            <Stack.Screen options={{ title: 'Terms of Service' }} />
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>

                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="document-text-outline" size={32} color={Colors.primary} />
                    </View>
                    <Text style={styles.title}>Terms of Service</Text>
                    <Text style={styles.subtitle}>Please read these terms carefully.</Text>
                </View>

                <Separator style={styles.separator} />

                {/* Introduction */}
                <Card style={styles.introCard}>
                    <CardContent>
                        <Text style={styles.introTitle}>Introduction</Text>
                        <Text style={styles.text}>
                            Welcome to The Desi Food and its affiliates' website, www.The Desi Food.com, where we offer a range of products and services. By using our website and services, you agree to comply with the terms and conditions outlined below.
                        </Text>
                    </CardContent>
                </Card>

                {/* Sections */}
                <View style={styles.sectionsContainer}>
                    {sections.map((section, index) => (
                        <View key={index}>
                            <View style={styles.sectionHeader}>
                                <Ionicons name={section.icon} size={24} color={Colors.primary} />
                                <Text style={styles.sectionTitle}>{section.title}</Text>
                            </View>
                            <Text style={styles.text}>{section.content}</Text>
                            {index < sections.length - 1 && <Separator style={styles.separator} />}
                        </View>
                    ))}
                </View>

                <Separator style={styles.separator} />

                {/* Contact Section */}
                <View style={styles.contactSection}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="mail-outline" size={24} color={Colors.primary} />
                        <Text style={styles.sectionTitle}>Questions?</Text>
                    </View>
                    <Text style={styles.text}>
                        If you have any questions about these Terms of Service, please contact us at:
                    </Text>
                    <TouchableOpacity onPress={handleEmail}>
                        <Text style={styles.link}>support@thedesifood.com</Text>
                    </TouchableOpacity>
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
        fontFamily: 'serif',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: Colors.mutedForeground,
        textAlign: 'center',
    },
    separator: {
        marginVertical: 24,
    },
    introCard: {
        marginBottom: 24,
        backgroundColor: Colors.card,
    },
    introTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: Colors.foreground,
        marginBottom: 12,
        fontFamily: 'serif',
    },
    sectionsContainer: {
        marginTop: 8,
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
    contactSection: {
        backgroundColor: Colors.muted,
        padding: 24,
        borderRadius: Layout.borderRadius,
    },
    link: {
        color: Colors.primary,
        fontWeight: '600',
        fontSize: 15,
        marginTop: 4,
    },
});
