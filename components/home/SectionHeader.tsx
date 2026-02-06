import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/theme';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    showSeeAll?: boolean;
    onSeeAllPress?: () => void;
    icon?: string;
    timer?: string;
}

export function SectionHeader({ 
    title, 
    subtitle, 
    showSeeAll = true, 
    onSeeAllPress,
    icon,
    timer 
}: SectionHeaderProps) {
    return (
        <View>
            <View style={styles.sectionHeader}>
                <View style={styles.sectionTitleRow}>
                    {icon && <Ionicons name={icon as any} size={20} color={Colors.primary} />}
                    <Text style={styles.sectionTitle}>{title}</Text>
                    {timer && (
                        <View style={styles.timerContainer}>
                            <Text style={styles.timerText}>{timer}</Text>
                        </View>
                    )}
                </View>
                {showSeeAll && (
                    <TouchableOpacity onPress={onSeeAllPress}>
                        <Text style={styles.seeAll}>See All</Text>
                    </TouchableOpacity>
                )}
            </View>
            {subtitle && <Text style={styles.sectionSubtitle}>{subtitle}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    sectionTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.foreground,
    },
    timerContainer: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    timerText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    seeAll: {
        fontSize: 14,
        color: Colors.primary,
        fontWeight: '600',
    },
    sectionSubtitle: {
        fontSize: 14,
        color: Colors.mutedForeground,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
});