import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const GroupMessaging = () => {
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');
    const [users, setUsers] = useState([]);

    const sendMessage = () => {
        if (messageText.trim() !== '') {
            const newMessage = {
                id: Date.now(),
                text: messageText,
                sender: 'User', // Replace with the actual sender (e.g., username)
            };

            const newUser = {
                id: 'User', // Replace with the actual user ID
                name: 'User', // Replace with the actual username
                firstMessage: messageText,
            };

            setMessages(prevMessages => [...prevMessages, newMessage]);
            setMessageText('');

            // Check if the user already exists
            if (!users.some(user => user.id === 'User')) {
                setUsers(prevUsers => [...prevUsers, newUser]);
            }
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={styles.userContainer}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <Text style={styles.userMessage}>{item.firstMessage}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <View style={item.sender === 'User' ? styles.userMessageContainer : styles.otherMessageContainer}>
                        <Text style={styles.messageText}>{item.text}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
                inverted
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    value={messageText}
                    onChangeText={text => setMessageText(text)}
                />
                <Button title="Send" onPress={sendMessage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    userContainer: {
        backgroundColor: '#f0f0f0', // Gray color for user container
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userMessage: {
        fontSize: 16,
    },
    userMessageContainer: {
        alignSelf: 'flex-end',
        backgroundColor: '#007AFF', // Blue color for user messages
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    otherMessageContainer: {
        alignSelf: 'flex-start',
        backgroundColor: '#f0f0f0', // Gray color for other users' messages
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    messageText: {
        fontSize: 16,
        color: '#fff', // White color for user messages
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        flex: 1,
        marginRight: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
    },
});

export default GroupMessaging;
