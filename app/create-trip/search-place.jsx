import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, Text, Pressable, SafeAreaView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Autocomplete from 'react-native-autocomplete-input';
import tw from 'twrnc';
import { useRouter, useNavigation } from 'expo-router';
import { placesInSriLanka } from './../../data/places';
import CreateTripContext from './../../context/CreateTripContext';

const SearchPlace = () => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const router = useRouter();
  const navigation = useNavigation()
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Select Traveller',
      headerTransparent: true,
    });
  }, [navigation]);

  const findData = (query) => {
    const regex = new RegExp(`${query.trim()}`, 'i');
    setFilteredData(query === '' ? [] : placesInSriLanka.filter(item => item.name.search(regex) >= 0));
  };

  const handleInputChange = (text) => {
    setQuery(text);
    findData(text); 
  };

  const PressContinueSearchPlace = () => {
    router.push('/create-trip/select-traveller')
    setTripData({ ...tripData, Area: query })
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1,marginTop:100 }}>
          <Autocomplete
            data={filteredData}
            defaultValue={query}
            onChangeText={handleInputChange}
            placeholder="Enter a place"
            renderTextInput={(props) => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons name="search" size={20} style={{ marginRight: 10,paddingLeft:10 }} />
                <TextInput
                  {...props}
                  style={{
                    height: 40,
                    borderColor: '#ccc',
                    borderWidth: 0,
                    flex: 1,
                    paddingLeft: 8,
                  }}
                />
              </View>
            )}
            flatListProps={{
              keyExtractor: (_, idx) => idx.toString(),
              renderItem: ({ item }) => (
                <Pressable
                  onPress={() => {
                    setQuery(item.name);
                    setFilteredData([]);
                  }}
                  style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                >
                  <Text>{item.name}</Text>
                </Pressable>
              ),
            }}
          />
          <View>
            <TouchableOpacity
              style={tw`bg-blue-500 rounded-full py-2 px-4`}
              onPress={PressContinueSearchPlace}
            >
              <Text style={tw`text-white text-center font-semibold`}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SearchPlace;
