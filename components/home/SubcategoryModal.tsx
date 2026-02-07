import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/theme';

const { height } = Dimensions.get('window');

interface SubcategorySection {
    id: string;
    name: string;
    items: string[];
}

interface SubcategoryModalProps {
    visible: boolean;
    categoryName: string;
    subcategories: SubcategorySection[];
    onClose: () => void;
    onItemPress?: (item: string) => void;
}

export function SubcategoryModal({ 
    visible, 
    categoryName, 
    subcategories, 
    onClose, 
    onItemPress 
}: SubcategoryModalProps) {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <TouchableOpacity 
                    style={styles.backdrop} 
                    activeOpacity={1} 
                    onPress={onClose}
                />
                
                <View style={styles.modalContainer}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>{categoryName}</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Ionicons name="close" size={24} color={Colors.foreground} />
                        </TouchableOpacity>
                    </View>

                    {/* All Products Link */}
                    <TouchableOpacity style={styles.allProductsLink}>
                        <Text style={styles.allProductsText}>All {categoryName} →</Text>
                    </TouchableOpacity>

                    {/* Subcategories */}
                    <ScrollView 
                        style={styles.content}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.grid}>
                            {subcategories.map((section) => (
                                <View key={section.id} style={styles.section}>
                                    <Text style={styles.sectionTitle}>{section.name}</Text>
                                    {section.items.map((item, index) => (
                                        <TouchableOpacity
                                            key={`${section.id}-${index}`}
                                            style={styles.item}
                                            onPress={() => {
                                                onItemPress?.(item);
                                                onClose();
                                            }}
                                        >
                                            <Text style={styles.itemText}>{item}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    backdrop: {
        flex: 1,
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: height * 0.85,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.foreground,
    },
    closeButton: {
        padding: 4,
    },
    allProductsLink: {
        padding: 16,
        backgroundColor: '#FFF3E0',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    allProductsText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    content: {
        flex: 1,
    },
    grid: {
        padding: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    section: {
        width: '48%',
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 12,
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary,
    },
    item: {
        paddingVertical: 6,
    },
    itemText: {
        fontSize: 13,
        color: Colors.foreground,
        lineHeight: 18,
    },
});