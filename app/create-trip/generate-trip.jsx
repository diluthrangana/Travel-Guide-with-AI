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

        Places to visit in the ${tripData.Area} area, along with photo links(i need one good photo link,not google search link,it must be possible to open the picture externally) for each place.
        Activities to do at each location, including the cost of each activity and ticket prices.
        Hotels to stay in for ${tripData.traveller} travelers, with prices, addresses and link of a photo(i need one good photo link,not google search link,it must be possible to open the picture externally) for each hotel.
        A well-managed itinerary to make the most of the available time within the budget of ${tripData.budget} Rs.
        Please provide this information in completely JSON format and as very simple.(i have to JSON.parse so give as completely json) structure should be like {
  tripDetails: {
    startDate: "17/12/24",
    endDate: "19/12/24",
    location: "Galle",
    travelerCount: 1,
    budget: 10000,
  },
  itinerary: [
    {
      date: "17/12/24",
      activities: [
        {
          place: "Galle Fort",
          photoLink:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Galle_Fort_from_the_sea.jpg/1280px-Galle_Fort_from_the_sea.jpg",
          description:
            "Explore the historical streets and buildings. Visit the Galle Lighthouse.",
          cost: "200",
        },
        {
          place: "Dutch Reformed Church",
          photoLink:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Dutch_Reformed_Church_Galle.jpg/1280px-Dutch_Reformed_Church_Galle.jpg",
          description: "Admire the architecture of this historical church.",
          cost: "0",
        },
      ],
    },
    {
      date: "18/12/24",
      activities: [
        {
          place: "Unawatuna Beach",
          photoLink:
            "https://www.unawatunabeachsrilanka.com/wp-content/uploads/2021/04/Unawatuna-Beach-Sri-Lanka.jpg",
          description: "Relax on the beach, swim, and snorkel.",
          cost: "1500",
        },
        {
          place: "Jungle Beach",
          photoLink:
            "https://www.srilankatourism.travel/sites/default/files/styles/featured_image_desktop/public/2020-01/Jungle_Beach.jpg",
          description: "Enjoy the secluded beach, swim.",
          cost: "0",
        },
      ],
    },
    {
      date: "19/12/24",
      activities: [
        {
          place: "Galle National Museum",
          photoLink:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Galle_National_Museum.jpg/1280px-Galle_National_Museum.jpg",
          description: "Learn about the history of Galle.",
          cost: "300",
        },
      ],
    },
  ],
  hotels: [
    {
      name: "The Fort Printers Galle",
      price: "5000",
      address: "No 26, Pedlar Street, Galle Fort, Galle 80000, Sri Lanka",
      photoLink:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/305117190.jpg?k=10b76e0f35213a0e6d34f4f673d6132c4f3d4d0d60c597a035385449f8812484&o=",
    },
  ],
  summary: {
    totalCost: "7000",
    notes:
      "Prices are estimates and may vary. Transportation costs are not included.",
  },
}`;

        //const AI_COMMAND = `give indian languages and religious like language:english,hindi and religious:hindu,islam.in json format`

        console.log(AI_COMMAND);

        const result = await chatSession.sendMessage(AI_COMMAND);
        console.log(result.response.text())
        const tripResp = JSON.parse(result.response.text());
        console.log(result.response.text())
        /*const tripResp = {
            "userT": [
              {
                "docId": "1722672516472",
                "tripData": {
                  "Area": "Kandy",
                  "traveller": "Just Me",
                  "startDate": "21/08/24",
                  "endDate": "22/08/24",
                  "budget": "600000"
                },
                "tripPlan": {
                  "itinerary": [
                    {
                      "day": "Day 1",
                      "activities": [
                        {
                          "name": "Visit Temple of the Tooth",
                          "cost": "1500 Rs"
                        },
                        {
                          "name": "Kandy Lake Walk",
                          "cost": "500 Rs"
                        }
                      ]
                    },
                    {
                      "day": "Day 2",
                      "activities": [
                        {
                          "name": "Hiking in Knuckles Range",
                          "cost": "3000 Rs"
                        },
                        {
                          "name": "Peradeniya Botanical Gardens",
                          "cost": "1000 Rs"
                        }
                      ]
                    }
                  ],
                  "trip_details": {
                    "budget": "100000 Rs",
                    "destination": "Kandy Area",
                    "duration": "2 days",
                    "interests": ["hiking", "sightseeing"],
                    "start_location": "Kandy"
                  }
                },
                "userEmail": "diluthranganajayasri@gmail.com"
              },
              {
                "docId": "1722672516473",
                "tripData": {
                  "Area": "Colombo",
                  "traveller": "Family",
                  "startDate": "15/09/24",
                  "endDate": "17/09/24",
                  "budget": "200000"
                },
                "tripPlan": {
                  "itinerary": [
                    {
                      "day": "Day 1",
                      "activities": [
                        {
                          "name": "Colombo City Tour",
                          "cost": "4000 Rs"
                        },
                        {
                          "name": "Galle Face Green",
                          "cost": "200 Rs"
                        }
                      ]
                    },
                    {
                      "day": "Day 2",
                      "activities": [
                        {
                          "name": "Mount Lavinia Beach",
                          "cost": "1000 Rs"
                        }
                      ]
                    },
                    {
                      "day": "Day 3",
                      "activities": [
                        {
                          "name": "National Museum",
                          "cost": "600 Rs"
                        }
                      ]
                    }
                  ],
                  "trip_details": {
                    "budget": "200000 Rs",
                    "destination": "Colombo Area",
                    "duration": "3 days",
                    "interests": ["history", "beaches"],
                    "start_location": "Colombo"
                  }
                },
                "userEmail": "janedoe@example.com"
              }
            ]
          }*/
                  

        const docId = Date.now().toString();
        await setDoc(doc(db, "UserTrips", docId), {
          userEmail: user.email,
          tripPlan: tripResp,
          tripData: tripData,
          docId:docId
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
