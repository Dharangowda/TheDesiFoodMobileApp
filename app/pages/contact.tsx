import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Layout } from '../../constants/theme';
import { Card, CardContent } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';

export default function ContactScreen() {
    const handleCall = () => {
        Linking.openURL('tel:+919156756788');
    };

    const handleEmail = () => {
        Linking.openURL('mailto:admin@thedesifood.com');
    };

    const handleOpenMap = () => {
        // Open native maps or google maps
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = '12.8746733,77.6090344';
        const label = 'The Desi Food';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });

        // Fallback to web link if scheme fails or for specific browser behavior
        const webUrl = 'https://www.google.com/maps/search/?api=1&query=12.8746733,77.6090344';

        Linking.canOpenURL(url!).then(supported => {
            if (supported) {
                Linking.openURL(url!);
            } else {
                Linking.openURL(webUrl);
            }
        });
    };

    return (
        <>
            <Stack.Screen options={{ title: 'Contact Us' }} />
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>

                <View style={styles.header}>
                    <Text style={styles.title}>Contact Us</Text>
                    <Text style={styles.subtitle}>We're here to help with any questions</Text>
                </View>

                <Separator style={styles.separator} />

                <View style={styles.grid}>
                    {/* Address Card */}
                    <Card style={styles.card}>
                        <CardContent style={styles.cardContent}>
                            <View style={styles.iconBox}>
                                <Ionicons name="location-outline" size={24} color={Colors.primary} />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>Address</Text>
                                <Text style={styles.value}>
                                    B-2301, Lake Verandahs, Hiranandani,{'\n'}
                                    Akshaya Nagar, Begur,{'\n'}
                                    Bangalore - 560068
                                </Text>
                            </View>
                        </CardContent>
                    </Card>

                    {/* Phone Card */}
                    <Card style={styles.card}>
                        <CardContent style={styles.cardContent}>
                            <View style={styles.iconBox}>
                                <Ionicons name="call-outline" size={24} color={Colors.primary} />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>Phone</Text>
                                <TouchableOpacity onPress={handleCall}>
                                    <Text style={[styles.value, styles.link]}>+91 91567 56788</Text>
                                </TouchableOpacity>
                            </View>
                        </CardContent>
                    </Card>

                    {/* Email Card */}
                    <Card style={styles.card}>
                        <CardContent style={styles.cardContent}>
                            <View style={styles.iconBox}>
                                <Ionicons name="mail-outline" size={24} color={Colors.primary} />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>Email</Text>
                                <TouchableOpacity onPress={handleEmail}>
                                    <Text style={[styles.value, styles.link]}>admin@thedesifood.com</Text>
                                </TouchableOpacity>
                            </View>
                        </CardContent>
                    </Card>

                    {/* Map Section */}
                    <TouchableOpacity onPress={handleOpenMap} activeOpacity={0.9}>
                        <Card style={styles.mapCard}>
                            <CardContent style={styles.mapContent}>
                                <View style={styles.mapOverlay}>
                                    <Ionicons name="map" size={48} color={Colors.primary} />
                                    <Text style={styles.mapText}>View on Google Maps</Text>
                                    <Text style={styles.mapSubText}>Click to Navigate</Text>
                                </View>
                            </CardContent>
                        </Card>
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
    },
    header: {
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: 8,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'serif',
    },
    subtitle: {
        fontSize: 16,
        color: Colors.mutedForeground,
    },
    separator: {
        marginBottom: 24,
    },
    grid: {
        gap: 16,
    },
    card: {
        marginBottom: 0,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 16,
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: `${Colors.primary}1A`,
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        flex: 1,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.foreground,
        marginBottom: 4,
    },
    value: {
        fontSize: 14,
        color: Colors.mutedForeground,
        lineHeight: 20,
    },
    link: {
        color: Colors.primary,
        fontWeight: '500',
    },
    mapCard: {
        height: 200,
        backgroundColor: '#e6e6e6', // Placeholder map color
        overflow: 'hidden',
    },
    mapContent: {
        flex: 1,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapOverlay: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapText: {
        marginTop: 12,
        fontSize: 18,
        fontWeight: '600',
        color: Colors.primary,
    },
    mapSubText: {
        marginTop: 4,
        fontSize: 14,
        color: Colors.mutedForeground,
    },
});
