import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import tw from 'twrnc';

export default function MyTrip() {
  const [userTrip, setUserTrip] = useState([]);
  
  return (
    <View style={tw`flex-1`}>
      <View>
        
      {userTrip?.length === 0 ? (
        <View style={tw`items-center mt-4`}>
          <Image
            source={require('./../../assets/images/travel.jpg')}
            style={[tw`w-full h-100 mt-4`, { transform: [{ scale: 0.9 }] }]} // Scale down by 10%
            resizeMode="contain" // Ensure the image is scaled properly
          />
        </View>
        ):null}

        {userTrip?.length === 0 ? (
          <View style={tw`mt-2`}>
            <StartNewTripCard />
          </View>
        ) : null}
      </View>
    </View>
  );
}
