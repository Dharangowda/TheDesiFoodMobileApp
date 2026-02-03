import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/theme';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

interface AccordionItemProps {
    value: string;
    trigger: string;
    children: React.ReactNode;
}

export function Accordion({ children }: { children: React.ReactNode }) {
    return <View>{children}</View>;
}

export function AccordionItem({ value, trigger, children }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsOpen(!isOpen);
    };

    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={toggleOpen} style={styles.trigger}>
                <Text style={styles.triggerText}>{trigger}</Text>
                <Ionicons
                    name={isOpen ? "chevron-up" : "chevron-down"}
                    size={20}
                    color={Colors.mutedForeground}
                />
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.content}>
                    {children}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    trigger: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
    },
    triggerText: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.foreground,
        flex: 1,
        marginRight: 16,
    },
    content: {
        paddingBottom: 16,
    },
});
