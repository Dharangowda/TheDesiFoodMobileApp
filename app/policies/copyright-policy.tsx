import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Layout } from '../../constants/theme';
import { Card, CardContent } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';

export default function CopyrightPolicyScreen() {
    const handleEmail = () => {
        Linking.openURL('mailto:support@thedesifood.com');
    };

    return (
        <>
            <Stack.Screen options={{ title: 'Copyright Policy' }} />
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>

                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="alert-circle-outline" size={32} color={Colors.primary} />
                    </View>
                    <Text style={styles.title}>Copyright Policy</Text>
                </View>

                <Separator style={styles.separator} />

                {/* Content Card */}
                <Card style={styles.card}>
                    <CardContent>
                        <Text style={styles.text}>
                            © 2023 Thedesifood Inc. All images, texts, audio, and video content featured on this website are protected by copyright law. Reproduction or distribution of these materials without explicit permission is strictly prohibited.
                        </Text>
                    </CardContent>
                </Card>

                {/* Contact Section */}
                <View style={styles.contactSection}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="mail-outline" size={24} color={Colors.primary} />
                        <Text style={styles.sectionTitle}>Questions?</Text>
                    </View>
                    <Text style={styles.text}>
                        If you have any questions about this Copyright Policy, please contact us at:
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
    separator: {
        marginVertical: 24,
    },
    card: {
        marginBottom: 24,
        backgroundColor: Colors.card,
    },
    text: {
        fontSize: 16,
        color: Colors.foreground,
        lineHeight: 24,
    },
    contactSection: {
        backgroundColor: Colors.muted,
        padding: 24,
        borderRadius: Layout.borderRadius,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.foreground,
        fontFamily: 'serif',
    },
    link: {
        color: Colors.primary,
        fontWeight: '600',
        fontSize: 16,
        marginTop: 4,
    },
});
