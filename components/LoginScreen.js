import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Invalid email format.');
      return;
    }
    Alert.alert('Login Info', `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TestApp</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={hidePassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Text style={styles.toggle}>{hidePassword ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.signup}>New user? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  logo: { fontSize: 40, fontWeight: 'bold', marginBottom: 40 },
  input: {
    width: width * 0.9, padding: 15, borderRadius: 10,
    marginBottom: 15, borderWidth: 1, borderColor: '#ccc'
  },
  passwordContainer: {
    flexDirection: 'row', alignItems: 'center', width: width * 0.9,
    borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#ccc', paddingRight: 10
  },
  passwordInput: { flex: 1, padding: 15 },
  toggle: { color: '#007bff', fontWeight: '500' },
  loginBtn: {
    backgroundColor: '#007bff', padding: 15, borderRadius: 10,
    width: width * 0.9, alignItems: 'center', marginTop: 10
  },
  loginText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  forgot: { color: '#007bff', marginTop: 15 },
  signup: { color: '#007bff', marginTop: 10 }
});

export default LoginScreen;
