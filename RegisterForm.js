import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const RegisterForm = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Kiểm tra dữ liệu
        if (username === '' || password === '') {
            Alert.alert('Thông báo', 'Vui lòng nhập tên người dùng và mật khẩu.');
            return;
        }

        // Thực hiện logic đăng ký (có thể là gửi yêu cầu đăng ký đến server)
        console.log('Đăng ký thành công với tên người dùng:', username);

        // Sau khi đăng ký thành công, bạn có thể điều hướng người dùng đến trang đăng nhập hoặc trang chính
        navigation.navigate('Login');
    };
    const handleLogin = ()=> {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
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
            <Button title="Đăng ký" onPress={handleRegister} />
            <Button title="Đăng nhập" onPress={handleLogin} />
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

export default RegisterForm;
