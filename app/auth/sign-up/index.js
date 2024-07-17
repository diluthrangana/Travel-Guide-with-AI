import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import tw from 'twrnc';
import { useRouter } from 'expo-router';



export default function Signup() {
    const router=useRouter();
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
        />
        <TextInput
          style={tw`w-full p-3 mb-4 border border-gray-300 rounded-md`}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={tw`w-full p-3 mb-4 border border-gray-300 rounded-md`}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity style={tw`w-full p-3 bg-blue-500 rounded-md`}
        onPress={()=>router.push('auth/sign-in/')}>
          <Text style={tw`text-center text-white text-lg`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
