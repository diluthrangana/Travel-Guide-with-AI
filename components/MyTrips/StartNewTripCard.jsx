import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {

const router= useRouter();

  return (
    <View style={tw`p-4`}>
      <View style={tw`bg-white rounded-lg shadow-lg p-6`}>
        <Text style={tw`text-xl font-bold mb-2`}>Start New Trip</Text>
        <Text style={tw`text-gray-700 mb-4`}>
          Plan your next adventure and explore new destinations. Click below to get started!
        </Text>
        <TouchableOpacity style={tw`bg-blue-500 rounded-full py-2 px-4`}
        onPress={()=>router.push('/create-trip/search-place')}>
          <Text style={tw`text-white text-center font-semibold`}>Start Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
