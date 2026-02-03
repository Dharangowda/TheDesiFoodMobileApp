import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Layout } from '../../constants/theme';
import { Accordion, AccordionItem } from '../../components/ui/accordion';
import { Separator } from '../../components/ui/separator';

const faqSections = [
    {
        title: "Shipping & Delivery",
        icon: "cube-outline" as const,
        items: [
            {
                question: "Where do you deliver?",
                answer: "We proudly deliver authentic Indian products to 80+ countries worldwide, including the USA, UK, Canada, Australia, and across Europe."
            },
            {
                question: "How are your products sourced and shipped?",
                answer: "All our products are sourced and shipped directly from trusted local vendors from India to ensure authenticity and quality."
            },
            {
                question: "How do I know the shipping charges?",
                answer: "Shipping charges and delivery times vary by location. You can go through our shipping policy to know the delivery charges for your country."
            },
            {
                question: "How long does delivery take?",
                answer: "Express Shipping: 4-6 business days (USA, UK, Canada, & Europe). Standard Shipping: 7-10 business days. All orders are dispatched within 1-3 business days."
            },
            {
                question: "Which shipping carriers do you use?",
                answer: "We use carriers such as DHL, UPS, DPD, FedEx, Aramex, and others."
            },
            {
                question: "What are your shipping charges?",
                answer: "We offer Free Standard Shipping on all orders over $69 (approx) to the USA, UK, and Canada. For others, it is calculated at checkout."
            },
            {
                question: "Are there any additional charges for taxes or customs?",
                answer: "No hidden fees here! For most major destinations, our order value already includes all applicable taxes and customs fees."
            }
        ]
    },
    {
        title: "Product Sourcing & Quality",
        icon: "cube-outline" as const, // Reusing cube as generic package icon
        items: [
            {
                question: "How are your products sourced?",
                answer: "Authenticity is our guarantee. Our extensive catalog features over 50,000+ unique products sourced directly from more than 500+ official brand partners and regional suppliers across 10+ states in India."
            }
        ]
    },
    {
        title: "Ordering Process",
        icon: "chatbubble-ellipses-outline" as const,
        items: [
            {
                question: "How do I place an order?",
                answer: "1. Select your delivery country and currency.\n2. Browse products or use search.\n3. Add to cart.\n4. Enter shipping details.\n5. Complete payment."
            },
            {
                question: "Can I track my order?",
                answer: "Yes, once your order is shipped, we'll send you a tracking link via email and Whatsapp."
            },
            {
                question: "What is the acknowledgment for the order placed?",
                answer: "You will receive an order confirmation to your registered email address and Whatsapp with the items in the order."
            }
        ]
    },
    {
        title: "Ethical Sourcing & Values",
        icon: "leaf-outline" as const,
        items: [
            {
                question: "What is TheDesiFood's commitment to ethical and sustainable practices?",
                answer: "We partner directly with local farms, women-led co-ops, and certified organic producers to ensure that every product is high-quality and socially responsible."
            },
            {
                question: "How do you ensure fair-trade pricing for your producers?",
                answer: "We cut out unnecessary middlemen to partner directly with producers, guaranteeing fair-trade pricing and fair compensation."
            },
            {
                question: "Is your packaging eco-friendly?",
                answer: "Yes. We prioritize sustainable packaging solutions (recyclable, biodegradable, or compostable) to minimize our environmental footprint."
            },
            {
                question: "Are your products cruelty-free?",
                answer: "Absolutely. We maintain a strict policy for cruelty-free products."
            }
        ]
    },
    {
        title: "Payments & Security",
        icon: "card-outline" as const,
        items: [
            {
                question: "What payment methods do you accept?",
                answer: "We accept major credit/debit cards, and other secure payment methods."
            },
            {
                question: "Are my payment details secure?",
                answer: "Absolutely. We use secure payment gateways and encryption to protect your information."
            }
        ]
    },
    {
        title: "Returns & Support",
        icon: "refresh-circle-outline" as const,
        items: [
            {
                question: "What is your return policy?",
                answer: "If you receive a damaged or incorrect product, you can request a return or exchange within 2 days of delivery."
            },
            {
                question: "What should I do if I have a problem with my order?",
                answer: "Please contact us at support@thedesifood.com immediately with your order details."
            },
            {
                question: "How do I contact customer service?",
                answer: "You can reach us via email at support@thedesifood.com or Whatsapp on +91 91567 56788."
            }
        ]
    },
    {
        title: "Offers & Programs",
        icon: "gift-outline" as const,
        items: [
            {
                question: "Do you have a price match program?",
                answer: "Yes, if you find a lower price on an identical product from a known online seller who ships from India, we will match that price."
            },
            {
                question: "Do you take bulk orders?",
                answer: "For bulk orders, please contact us for special discounted pricing."
            },
            {
                question: "Are there any referral programs?",
                answer: "Yes, you can refer friends and earn rewards."
            }
        ]
    },
    {
        title: "Product Suggestions & Disclaimer",
        icon: "information-circle-outline" as const,
        items: [
            {
                question: "If we have suggestions for new items, where can we share them?",
                answer: "Visit the 'Suggest a Product' page and share details about the product you need."
            },
            {
                question: "Disclaimer",
                answer: "The Desi Food is an online store dedicated to bringing authentic Indian products to you. We source our products from trusted Indian vendors. Any issues with product quality should be directed to the source brand."
            }
        ]
    }
];

export default function FAQScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'FAQs' }} />
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>

                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="help-circle-outline" size={32} color={Colors.primary} />
                    </View>
                    <Text style={styles.title}>FAQs for Shopping at The Desi Food</Text>
                    <Text style={styles.subtitle}>
                        Find answers to all your questions about our products, shipping, payment methods, return policy, bulk orders, and more.
                    </Text>
                </View>

                <Separator style={styles.separator} />

                {faqSections.map((section, index) => (
                    <View key={index} style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name={section.icon} size={24} color={Colors.primary} />
                            <Text style={styles.sectionTitle}>{section.title}</Text>
                        </View>

                        <Accordion>
                            {section.items.map((item, idx) => (
                                <AccordionItem
                                    key={idx}
                                    value={`item-${idx}`}
                                    trigger={item.question}
                                >
                                    <Text style={styles.answer}>{item.answer}</Text>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        {index < faqSections.length - 1 && <Separator style={styles.separator} />}
                    </View>
                ))}

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
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.foreground,
        textAlign: 'center',
        marginBottom: 12,
        fontFamily: 'serif',
    },
    subtitle: {
        fontSize: 14,
        color: Colors.mutedForeground,
        textAlign: 'center',
        lineHeight: 20,
        paddingHorizontal: 16,
    },
    separator: {
        marginVertical: 24,
    },
    section: {
        marginBottom: 8,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.foreground,
        fontFamily: 'serif',
    },
    answer: {
        fontSize: 14,
        color: Colors.foreground,
        lineHeight: 22,
    },
});
