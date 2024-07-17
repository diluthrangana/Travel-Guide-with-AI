import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from 'expo-router';



export default function SignIn() {
    const navigation = useNavigation()
    const router= useRouter()

    useEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    },[])

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
        />
        <TextInput
          style={tw`w-full p-3 mb-4 border border-gray-300 rounded-md`}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity onPress={()=>router.replace(auth/sign-up)} style={tw`w-full p-3 bg-blue-500 rounded-md`}>
          <Text style={tw`text-center text-white text-lg`}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
