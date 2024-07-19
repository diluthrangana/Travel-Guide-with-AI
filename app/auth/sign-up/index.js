import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../configs/firebase';

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');

  const onCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('User signed up:', user);
        // Navigate to another screen if desired
        router.push('auth/sign-in');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing up:', errorCode, errorMessage);
      });
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <Image
        source={require('./../../../assets/images/background1.png')}
        style={{ width: '100%', height: '50%' }}
      />
      <View style={tw`flex-1 justify-center items-center p-4`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Sign Up</Text>
        <TextInput
          style={tw`w-full p-3 mb-4 border border-gray-300 rounded-md`}
          placeholder="Username"
          value={username}
          onChangeText={setUserName}
        />
        <TextInput
          style={tw`w-full p-3 mb-4 border border-gray-300 rounded-md`}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={tw`w-full p-3 mb-4 border border-gray-300 rounded-md`}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={tw`w-full p-3 bg-blue-500 rounded-md`}
          onPress={onCreateAccount}
        >
          <Text style={tw`text-center text-white text-lg`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
