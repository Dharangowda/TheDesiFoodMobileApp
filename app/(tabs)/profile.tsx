import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Colors, Layout } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';

export default function ProfileScreen() {
    const MenuItem = ({ title, icon, href }: { title: string, icon: keyof typeof Ionicons.glyphMap, href: string }) => (
        <Link href={href as any} asChild>
            <Button
                title={title}
                onPress={() => { }}
                variant="ghost"
                style={styles.menuItem}
                textStyle={styles.menuText}
            />
        </Link>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatar}>
                    <Ionicons name="person" size={40} color={Colors.primary} />
                </View>
                <Text style={styles.title}>Guest User</Text>
                <Text style={styles.subtitle}>Log in to view your profile</Text>
                <Button title="Login / Signup" onPress={() => { }} style={styles.loginBtn} />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Information</Text>
                <MenuItem title="About Us" icon="information-circle-outline" href="/pages/about-us" />
                <MenuItem title="Contact Us" icon="mail-outline" href="/pages/contact" />
                <MenuItem title="FAQ" icon="help-circle-outline" href="/pages/faq" />
            </View>

            <Separator />

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Policies</Text>
                <MenuItem title="Privacy Policy" icon="shield-checkmark-outline" href="/policies/privacy-policy" />
                <MenuItem title="Return & Refund Policy" icon="refresh-circle-outline" href="/policies/refund-policy" />
                <MenuItem title="Shipping Policy" icon="airplane-outline" href="/policies/shipping-policy" />
                <MenuItem title="Terms of Service" icon="document-text-outline" href="/policies/terms-of-service" />
                <MenuItem title="Copyright Policy" icon="alert-circle-outline" href="/policies/copyright-policy" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        alignItems: 'center',
        padding: 32,
        backgroundColor: Colors.card,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: Colors.lightGray,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.mutedForeground,
        marginBottom: 16,
    },
    loginBtn: {
        minWidth: 160,
    },
    section: {
        padding: Layout.padding,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.mutedForeground,
        marginBottom: 8,
        marginTop: 8,
        textTransform: 'uppercase',
    },
    menuItem: {
        justifyContent: 'flex-start',
        paddingHorizontal: 0,
        paddingVertical: 12,
    },
    menuText: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: '400',
    },
});
