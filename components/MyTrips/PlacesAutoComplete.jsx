// PlaceAutoComplete.js
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { placesInSriLanka } from './../../data/places'; // Assume you have a predefined list of places

const PlaceAutoComplete = () => {
  const [query, setQuery] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const handleInputChange = (text) => {
    setQuery(text);
    if (text) {
      const filteredData = placesInSriLanka.filter((place) =>
        place.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPlaces(filteredData);
    } else {
      setFilteredPlaces([]);
    }
  };

  const handlePlaceSelect = (place) => {
    setQuery(place);
    setFilteredPlaces([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter place"
        value={query}
        onChangeText={handleInputChange}
      />
      {filteredPlaces.length > 0 && (
        <FlatList
          data={filteredPlaces}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestionItem}
              onPress={() => handlePlaceSelect(item)}
            >
              <Text style={styles.suggestionText}>{item}</Text>
            </TouchableOpacity>
          )}
          style={styles.suggestionsContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  suggestionsContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    maxHeight: 150,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  suggestionText: {
    fontSize: 16,
  },
});

export default PlaceAutoComplete;
