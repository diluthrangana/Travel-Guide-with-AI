import { View, Text } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "expo-router";
import tw from "twrnc";
import LottieView from "lottie-react-native";
import CreateTripContext from "./../../context/CreateTripContext";
import chatSession from "./../../configs/gemini";
import { auth, db } from "./../../configs/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function GenerateTrip() {
  const { tripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    const GenerateAITrip = async () => {
      setLoading(true);
      try {
        const AI_COMMAND = `I am in Sri Lanka and need to generate a detailed travel plan for the ${tripData.Area} area in Sri Lanka for ${tripData.traveller} travelers, starting from ${tripData.startDate} until ${tripData.endDate}. The budget for this trip is ${tripData.budget} Rs.

        Please provide a comprehensive plan that includes:

        Places to visit in the ${tripData.area} area, along with photo links for each place.
        Activities to do at each location, including the cost of each activity and ticket prices.
        Hotels to stay in for ${tripData.traveller} travelers, with prices, addresses, and photo links for each hotel.
        A well-managed itinerary to make the most of the available time within the budget of ${tripData.budget} Rs.
        Please provide this information in JSON format.`;

        console.log(AI_COMMAND);

        const result = await chatSession.sendMessage(AI_COMMAND);
        const tripResp = JSON.parse(result.response.text());

        const docId = Date.now().toString();
        await setDoc(doc(db, "UserTrips", docId), {
          userEmail: user.email,
          tripData: tripResp,
        });

        router.push("(tabs)/mytrip");
        console.log(tripResp);
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setLoading(false);
      }
    };

    GenerateAITrip();
  }, []);

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      {loading ? (
        <LottieView
          source={require("./../../assets/images/loading.json")}
          autoPlay
          loop
          style={{ width: 400, height: 400 }}
        />
      ) : (
        <Text style={tw`text-lg`}>Generate Trip</Text>
      )}
    </View>
  );
}
