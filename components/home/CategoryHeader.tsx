import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../constants/theme';
import { MOCK_CATEGORIES } from '../../constants/mockData';

export function CategoryHeader() {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            {MOCK_CATEGORIES.map((cat) => (
                <TouchableOpacity key={cat.id} style={styles.item}>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={cat.image} 
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                    <Text style={styles.label}>{cat.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 8,
    },
    item: {
        alignItems: 'center',
        marginHorizontal: 10,
        width: 60,
    },
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 12,
        backgroundColor: '#fff',
        marginBottom: 6,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        overflow: 'hidden',
        // Shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    label: {
        fontSize: 11,
        fontWeight: '500',
        color: Colors.foreground,
        textAlign: 'center',
    },
});
