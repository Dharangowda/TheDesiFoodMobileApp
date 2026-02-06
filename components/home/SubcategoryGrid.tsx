import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../../constants/theme';

interface SubcategorySection {
    id: string;
    name: string;
    items: string[];
}

interface SubcategoryGridProps {
    subcategories: SubcategorySection[];
    onItemPress?: (item: string) => void;
}

export function SubcategoryGrid({ subcategories, onItemPress }: SubcategoryGridProps) {
    return (
        <ScrollView 
            style={styles.container}
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
                                onPress={() => onItemPress?.(item)}
                            >
                                <Text style={styles.itemText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 12,
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary,
    },
    item: {
        paddingVertical: 8,
    },
    itemText: {
        fontSize: 14,
        color: Colors.foreground,
        lineHeight: 20,
    },
});