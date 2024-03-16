import React, { useState, useRef } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Messaging = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello there!' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'I hope you are doing well.' },
        { id: 4, text: 'Hello again!' },
        { id: 5, text: 'I am fine, thank you.' },
        { id: 6, text: 'And how about you?' },
        { id: 7, text: 'Everything is good.' },
        { id: 8, text: 'That\'s great to hear!' },
        { id: 9, text: 'Indeed!' },
        { id: 10, text: 'Take care!' },
        { id: 11, text: 'You too!' },
        { id: 12, text: 'Goodbye!' },
        { id: 13, text: 'See you later!' },
        { id: 14, text: 'Bye!' },
        { id: 15, text: 'Goodbye!' },
        { id: 16, text: 'Have a nice day!' },
        { id: 17, text: 'Thanks, you too!' },
        { id: 18, text: 'Goodnight!' },
        { id: 19, text: 'Sweet dreams!' },
        { id: 20, text: 'Goodnight!' },
        { id: 21, text: 'Sleep tight!' },
        { id: 22, text: 'Don\'t let the bed bugs bite!' },
        { id: 23, text: 'Haha, good one!' },
        { id: 24, text: 'Goodnight!' },
        { id: 25, text: 'Goodnight!' },
        { id: 26, text: 'Goodnight!' },
        { id: 27, text: 'Goodnight!' },
        { id: 28, text: 'Goodnight!' },
        { id: 29, text: 'Goodnight!' },
        { id: 30, text: 'Goodnight!' },
        { id: 31, text: 'Goodnight!' },
        { id: 32, text: 'Goodnight!' },
        { id: 33, text: 'Goodnight!' },
        { id: 34, text: 'Goodnight!' },
        { id: 35, text: 'Goodnight!' },
        { id: 36, text: 'Goodnight!' },
        { id: 37, text: 'Goodnight!' },
        { id: 38, text: 'Goodnight!' },
        { id: 39, text: 'Goodnight!' },
        { id: 40, text: 'Goodnight!' },
    ]);
    
    const [messageText, setMessageText] = useState('');
    const scrollViewRef = useRef();

    const sendMessage = () => {
        if (messageText.trim() !== '') {
            setMessages(prevMessages => [...prevMessages, { id: Date.now(), text: messageText }]);
            setMessageText('');
        }
        
        scrollViewRef.current.scrollToEnd({ animated: true });
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={[styles.container, {paddingBottom: 20}]}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
            extraHeight={80}
            keyboardShouldPersistTaps="always" 
            ref={scrollViewRef}
        >
            {messages.map(message => (
                <View key={message.id} style={styles.messageContainer}>
                    <Text style={styles.messageText}>{message.text}</Text>
                </View>
            ))}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    value={messageText}
                    onChangeText={text => setMessageText(text)}
                />
                <Button title="Send" onPress={sendMessage} />
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingVertical: 10,
    },
    messageContainer: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    messageText: {
        fontSize: 16,
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

export default Messaging;
