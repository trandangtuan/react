import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatDetail = ({ route }) => {
    const { sender, message } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.sender}>{sender}</Text>
            <Text>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    sender: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ChatDetail;
