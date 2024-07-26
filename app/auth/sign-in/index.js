import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { useNavigation, useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../configs/firebase';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('User signed in:', user);
        router.push('/mytrip');
        // Redirect to the desired page
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing in:', errorCode, errorMessage);
      });
  };

  useEffect(() => {
    navigation.setOptions({
      
    });
  }, []);

  return (
    <View style={tw`flex-1 bg-white`}>
      <Image
        source={require('./../../../assets/images/background1.png')}
        style={{ width: '100%', height: '50%' }}
      />
      <View style={tw`flex-1 justify-center items-center p-4`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Login</Text>
        <TextInput
          style={tw`w-full p-3 mb-4 border border-gray-300 rounded-md`}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <TextInput
          style={tw`w-full p-3 mb-4 border border-gray-300 rounded-md`}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={onSignIn} style={tw`w-full p-3 bg-blue-500 rounded-md`}>
          <Text style={tw`text-center text-white text-lg`}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
