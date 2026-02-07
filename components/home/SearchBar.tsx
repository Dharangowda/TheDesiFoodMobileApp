import { View, TextInput, StyleSheet, TouchableOpacity, Text, Modal, Linking } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/theme';

export function SearchBar() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleWhatsApp = () => {
        const phoneNumber = '1234567890'; // Replace with your WhatsApp business number
        const message = 'Hi, I would like to request an item from The Desi Food.';
        const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        
        Linking.openURL(url).catch(() => {
            alert('Make sure WhatsApp is installed on your device');
        });
        setModalVisible(false);
    };

    return (
        <>
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={20} color={Colors.mutedForeground} style={styles.icon} />
                    <TextInput
                        placeholder="Search for products, brands, and more..."
                        placeholderTextColor={Colors.mutedForeground}
                        style={styles.input}
                    />
                </View>
                
                <TouchableOpacity 
                    style={styles.requestButton}
                    onPress={() => setModalVisible(true)}
                >
                    <Ionicons name="document-text-outline" size={18} color="#FF9800" />
                    <Text style={styles.requestButtonText}>Request an Item</Text>
                </TouchableOpacity>
            </View>

            {/* Request Item Modal */}
            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        {/* Close Button */}
                        <TouchableOpacity 
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Ionicons name="close" size={24} color={Colors.mutedForeground} />
                        </TouchableOpacity>

                        {/* Title */}
                        <Text style={styles.modalTitle}>Request an Item</Text>

                        {/* Description */}
                        <Text style={styles.modalDescription}>
                            Please send an image or describe the product you want to source. Text us on WhatsApp and we will source it for you.
                        </Text>

                        {/* WhatsApp Button */}
                        <TouchableOpacity 
                            style={styles.whatsappButton}
                            onPress={handleWhatsApp}
                        >
                            <Ionicons name="logo-whatsapp" size={24} color="#fff" />
                            <Text style={styles.whatsappButtonText}>Proceed to WhatsApp</Text>
                        </TouchableOpacity>

                        {/* Cancel Button */}
                        <TouchableOpacity 
                            style={styles.cancelButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginVertical: 8,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.card || '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        paddingHorizontal: 12,
        height: 44,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: Colors.foreground,
    },
    requestButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF3E0',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
        gap: 6,
    },
    requestButtonText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#FF9800',
    },
    
    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        width: '100%',
        maxWidth: 400,
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 16,
        right: 16,
        padding: 4,
        zIndex: 1,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: 16,
        paddingRight: 32,
    },
    modalDescription: {
        fontSize: 15,
        color: Colors.mutedForeground,
        lineHeight: 22,
        marginBottom: 24,
    },
    whatsappButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25D366',
        paddingVertical: 14,
        borderRadius: 8,
        marginBottom: 12,
        gap: 8,
    },
    whatsappButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    cancelButton: {
        backgroundColor: '#f5f5f5',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    cancelButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.mutedForeground,
    },
});
