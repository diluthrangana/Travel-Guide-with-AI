import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'expo-router';
import tw from 'twrnc';
import LottieView from 'lottie-react-native';
import CreateTripContext from './../../context/CreateTripContext';
import chatSession from './../../configs/gemini';

export default function GenerateTrip() {
  const { tripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    tripData&&GenerateAITrip();
  }, [tripData]);

  const GenerateAITrip = async () => {
    setLoading(true);
    try {
      const AI_COMMAND = `i am in srilanka and Generate travel plan for ${tripData.area} in srilanka for ${tripData.traveller} since ${tripData.startdate} untill ${tripData.enddate}. Budget is ${tripData.budget}.give full plan with places to visit that area,links for photos of each places, Activities to do,cost for each activities,cost of tickets, hotels to stay for ${tripData.traveller}, prices,andress,photo links for each hotels.well manage times and its nessacary to set budget ${tripData.budget}Rs.give in JSON format `;
      console.log(AI_COMMAND);


      const result = await chatSession.sendMessage(AI_COMMAND);
      setLoading(false);
      console.log(result.response.text())
      router.push('(tabs)/mytrip');
    } catch (error) {
      console.error("Error sending message:", error);
      setLoading(false);
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      {loading ? (
        <LottieView
          source={require('./../../assets/images/loading.json')}
          autoPlay
          loop
          style={{ width: 300, height: 300 }}
        />
      ) : (
        <Text style={tw`text-lg`}>Generate Trip</Text>
      )}
    </View>
  );
}
