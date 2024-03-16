import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const LoginForm = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        navigation.navigate('Chats'); 
    };

    const handleRegister = () => {
        navigation.navigate('Register'); // Navigate to the Register screen
    };

    return (
        <View style={styles.container}>
            {/* Your existing login form */}
            <TextInput
                style={styles.input}
                placeholder="Tên người dùng"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button title="Đăng nhập" onPress={handleLogin} />
            
            {/* New register button */}
            <Button title="Đăng ký" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});

export default LoginForm;
