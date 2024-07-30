import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useContext } from 'react';
import { useNavigation } from 'expo-router';
import tw from 'twrnc';
import CreateTripContext from './../../context/CreateTripContext';

export default function SelectBudget() {
  const navigation = useNavigation();

  const { tripData, setTripData } = useContext(CreateTripContext);

  const selectBudgetList = [
    { title: 'Budget 1', amount:'10000', desc: 'Description for budget 1' },
    { title: 'Budget 2', amount:'50000', desc: 'Description for budget 2' },
    { title: 'Budget 3', amount:'100000', desc: 'Description for budget 3' },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Select Budget',
      headerTransparent: true,
    });
  }, [navigation]);

  const handlePress = () => {
    console.log(tripData);
  };

  const handleBudgetSelect = (amount) => {
    setTripData({ ...tripData, budget: amount });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={selectBudgetList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}
          onPress={() => handleBudgetSelect(item.amount)}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
      />
      <View>
        <TouchableOpacity
          style={tw`bg-blue-500 rounded-full py-2 px-4 mt-4`}
          onPress={handlePress}
        >
          <Text style={tw`text-white text-center font-semibold`}>Start Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  amount: {
    fontSize: 14,
    color: '#999',
  },
});
