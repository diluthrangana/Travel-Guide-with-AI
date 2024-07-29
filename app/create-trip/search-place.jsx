import { View, Text } from 'react-native'
import { useEffect } from 'react';
import React from 'react'
import { useNavigation } from 'expo-router'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function searchplace() {

const navigation=useNavigation();

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
    </View>
  )
}