import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { useRouter, useNavigation } from 'expo-router';
import tw from 'twrnc';
import CreateTripContext from './../../context/CreateTripContext';

export default function reviewtrip() {

    const navigation=useNavigation()
    const router=useRouter()
    const { tripData, setTripData } = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
          headerShown: true,
          title: 'Review Trip',
          headerTransparent: true,
        });
      }, [navigation]);

  return (
    <View style={{marginTop:100}}>
      <TouchableOpacity
          style={tw`bg-blue-500 rounded-full py-2 px-4`}
          onPress={()=>router.push('/create-trip/generate-trip')}
        >
          <Text style={tw`text-white text-center font-semibold`}>Continue</Text>
        </TouchableOpacity>
    </View>
  )
}