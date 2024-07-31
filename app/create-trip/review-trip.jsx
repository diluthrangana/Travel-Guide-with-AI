import { View, Text } from 'react-native'
import React, {useContext, useEffect} from 'react'
import CreateTripContext from './../../context/CreateTripContext';
import { useNavigation } from 'expo-router';

export default function reviewtrip() {

    const navigation=useNavigation()
    const { tripData, setTripData } = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
          headerShown: true,
          title: 'Review Trip',
          headerTransparent: true,
        });
      }, [navigation]);

  return (
    <View>
      <Text>{tripData.budget}</Text>
    </View>
  )
}