import { View, Text } from 'react-native'
import { useContext, useEffect } from 'react';
import React from 'react'
import { useNavigation, useRouter } from 'expo-router'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TouchableOpacity } from 'react-native';
import CreateTripContext from './../../context/CreateTripContext'

export default function searchplace() {

const navigation=useNavigation();
const router=useRouter();

const {tripData,setTripData}=useContext(CreateTripContext)

useEffect(()=>{
    navigation.setOptions({
        headerShown: true,
        title: 'Search',
        headerTransparent:true,
    })
})

  return (
    <View >
        <View style={tw`mt-20`}>
      <GooglePlacesAutocomplete 
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />
    
    </View>

    <View >
      <TouchableOpacity style={tw`bg-blue-500 rounded-full py-2 px-4`}
        onPress={()=>router.push('/create-trip/select-traveller')}>
          <Text style={tw`text-white text-center font-semibold`}>Start Now</Text>
        </TouchableOpacity>
    </View>
      

    </View>
  )
}