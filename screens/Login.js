import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Image,} from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('User Type');

  const handleLogin = () => {
    // Handle login based on userType
    switch (userType) {
      case 'Admin':
        // Navigate to Admin page
        navigation.navigate('Home');
        break;
      case 'Lecturer':
        // Navigate to Lecturer page
        navigation.navigate('LecturerHome');
        break;
      case 'Student':
        // Navigate to Student page
        navigation.navigate('StudentHome');
        break;
      default:
        break;
    }
  };

  const handleForgot = () => {
    navigation.navigate('Forgot');
  };

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image source={require('../assets/log.png')} style={styles.img} />
        <Text style={styles.title}>Welcome to CMS App</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#e3d5ff"
          value={username}
          onChangeText={(text) => setUsername(text)}
          accessibilityLabel="Username Input"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#e3d5ff"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          accessibilityLabel="Password Input"
        />
        <Picker
          selectedValue={userType}
          style={styles.picker}
          onValueChange={(itemValue) => setUserType(itemValue)}>
          <Picker.Item label="Admin" value="Admin" />
          <Picker.Item label="Lecturer" value="Lecturer" />
          <Picker.Item label="Student" value="Student" />
        </Picker>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPassword} onPress={handleForgot}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b246b',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: '#3b246b',
  },
  picker: {
    height: 40,
    marginBottom: 20,
    color: '#3b246b',
  },
  loginButton: {
    backgroundColor: '#3b246b',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    height: 45,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 120, 
    height: 120,  
    aspectRatio: 1, 
  },
  forgotPassword: {
    alignSelf: 'center',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#3b246b',
  },
});
