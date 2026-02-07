import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/theme';
import { MOCK_CATEGORIES } from '../../constants/mockData';
import { getSubcategories } from '../../constants/subcategories';

const { width, height } = Dimensions.get('window');

interface CategoryDrawerProps {
    visible: boolean;
    onClose: () => void;
    onNavigate?: (category: string, subcategory?: string, item?: string) => void;
}

export function CategoryDrawer({ visible, onClose, onNavigate }: CategoryDrawerProps) {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);

    const toggleCategory = (categoryName: string) => {
        if (expandedCategory === categoryName) {
            setExpandedCategory(null);
            setExpandedSubcategory(null);
        } else {
            setExpandedCategory(categoryName);
            setExpandedSubcategory(null);
        }
    };

    const toggleSubcategory = (subcategoryId: string) => {
        if (expandedSubcategory === subcategoryId) {
            setExpandedSubcategory(null);
        } else {
            setExpandedSubcategory(subcategoryId);
        }
    };

    const handleItemPress = (category: string, subcategory: string, item: string) => {
        onNavigate?.(category, subcategory, item);
        onClose();
    };

    const handleAllCategoryPress = (category: string) => {
        onNavigate?.(category);
        onClose();
    };

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
                
                <View style={styles.drawerContainer}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Browse Categories</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Ionicons name="close" size={28} color={Colors.foreground} />
                        </TouchableOpacity>
                    </View>

                    {/* Categories List */}
                    <ScrollView 
                        style={styles.content}
                        showsVerticalScrollIndicator={false}
                    >
                        {MOCK_CATEGORIES.map((category) => {
                            const subcategories = getSubcategories(category.name);
                            const isExpanded = expandedCategory === category.name;
                            const hasSubcategories = subcategories.length > 0;

                            return (
                                <View key={category.id} style={styles.categorySection}>
                                    {/* Main Category */}
                                    <TouchableOpacity
                                        style={[
                                            styles.categoryItem,
                                            isExpanded && styles.categoryItemExpanded
                                        ]}
                                        onPress={() => hasSubcategories ? toggleCategory(category.name) : handleAllCategoryPress(category.name)}
                                    >
                                        <View style={styles.categoryLeft}>
                                            <Image 
                                                source={category.image} 
                                                style={styles.categoryImage}
                                                resizeMode="cover"
                                            />
                                            <Text style={styles.categoryName}>{category.name}</Text>
                                        </View>
                                        {hasSubcategories && (
                                            <Ionicons 
                                                name={isExpanded ? "chevron-up" : "chevron-down"} 
                                                size={24} 
                                                color={Colors.mutedForeground} 
                                            />
                                        )}
                                    </TouchableOpacity>

                                    {/* Subcategories */}
                                    {isExpanded && hasSubcategories && (
                                        <View style={styles.subcategoriesContainer}>
                                            {/* All [Category] Link */}
                                            <TouchableOpacity
                                                style={styles.allCategoryLink}
                                                onPress={() => handleAllCategoryPress(category.name)}
                                            >
                                                <Text style={styles.allCategoryText}>All {category.name}</Text>
                                                <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
                                            </TouchableOpacity>

                                            {/* Subcategory Sections */}
                                            {subcategories.map((subcat) => {
                                                const isSubExpanded = expandedSubcategory === subcat.id;

                                                return (
                                                    <View key={subcat.id} style={styles.subcategorySection}>
                                                        <TouchableOpacity
                                                            style={styles.subcategoryItem}
                                                            onPress={() => toggleSubcategory(subcat.id)}
                                                        >
                                                            <Text style={styles.subcategoryName}>{subcat.name}</Text>
                                                            <Ionicons 
                                                                name={isSubExpanded ? "chevron-up" : "chevron-down"} 
                                                                size={20} 
                                                                color={Colors.mutedForeground} 
                                                            />
                                                        </TouchableOpacity>

                                                        {/* Subcategory Items */}
                                                        {isSubExpanded && (
                                                            <View style={styles.itemsContainer}>
                                                                {subcat.items.map((item, index) => (
                                                                    <TouchableOpacity
                                                                        key={`${subcat.id}-${index}`}
                                                                        style={styles.itemButton}
                                                                        onPress={() => handleItemPress(category.name, subcat.name, item)}
                                                                    >
                                                                        <Text style={styles.itemText}>{item}</Text>
                                                                    </TouchableOpacity>
                                                                ))}
                                                            </View>
                                                        )}
                                                    </View>
                                                );
                                            })}
                                        </View>
                                    )}
                                </View>
                            );
                        })}
                        <View style={{ height: 40 }} />
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
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    drawerContainer: {
        width: width * 0.85,
        height: height,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingTop: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.foreground,
    },
    closeButton: {
        padding: 4,
    },
    content: {
        flex: 1,
    },
    categorySection: {
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    categoryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    categoryItemExpanded: {
        backgroundColor: '#f9f9f9',
    },
    categoryLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    categoryImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 12,
    },
    categoryName: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.foreground,
    },
    subcategoriesContainer: {
        backgroundColor: '#fafafa',
        paddingVertical: 8,
    },
    allCategoryLink: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FFF3E0',
        marginBottom: 8,
    },
    allCategoryText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    subcategorySection: {
        marginBottom: 4,
    },
    subcategoryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
    },
    subcategoryName: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.foreground,
    },
    itemsContainer: {
        backgroundColor: '#f9f9f9',
        paddingLeft: 32,
    },
    itemButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    itemText: {
        fontSize: 14,
        color: Colors.mutedForeground,
        lineHeight: 20,
    },
});