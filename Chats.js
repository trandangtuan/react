import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Chat = ({ chatData, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.chatItem}>
            <Text style={styles.sender}>{chatData.sender}</Text>
            <Text>{chatData.message}</Text>
        </TouchableOpacity>
    );
};

const Chats = () => {
    const navigation = useNavigation();

    const mockChats = [
        { id: '1', sender: 'Alice', message: 'Hello, how are you?' },
        { id: '2', sender: 'Bob', message: 'I am good, thanks!' },
        { id: '3', sender: 'Alice', message: 'What are you doing today?' },
        { id: '4', sender: 'Bob', message: 'I have some work to do.' },
        { id: '5', sender: 'Alice', message: 'Okay, let me know if you need any help.' },
    ];

    const handleChatPress = (chatData) => {
        // Navigate to chat detail screen
        navigation.navigate('Messaging', chatData);
    };

    const renderItem = ({ item }) => (
        <Chat
            chatData={item}
            onPress={() => handleChatPress(item)}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={mockChats}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    chatItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    sender: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default Chats;
