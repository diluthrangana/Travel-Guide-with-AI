import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

export default function UserTripList({ userTrips }) {
  // Render a single trip item
  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.tripAreaText}>Trip Plan for {item.tripData?.Area || 'Unknown Area'}</Text>
      
      <Text style={styles.sectionTitle}>Itinerary:</Text>
      {item.tripPlan?.itinerary?.map((dayPlan, index) => (
        <View key={index} style={styles.itineraryContainer}>
          <Text style={styles.dayText}>Day {index + 1}: {dayPlan.day}</Text>
          {dayPlan.activities.map((activity, activityIndex) => (
            <Text key={activityIndex} style={styles.activityText}>
              - {activity.name}: {activity.cost}
            </Text>
          ))}
        </View>
      ))}
      
      <Text style={styles.sectionTitle}>Trip Details:</Text>
      <Text style={styles.detailText}>Budget: {item.tripPlan?.trip_details?.budget || 'Unknown'}</Text>
      <Text style={styles.detailText}>Destination: {item.tripPlan?.trip_details?.destination || 'Unknown'}</Text>
      <Text style={styles.detailText}>Duration: {item.tripPlan?.trip_details?.duration || 'Unknown'}</Text>
      <Text style={styles.detailText}>Interests: {item.tripPlan?.trip_details?.interests?.join(', ') || 'Unknown'}</Text>
      <Text style={styles.detailText}>Start Location: {item.tripPlan?.trip_details?.start_location || 'Unknown'}</Text>
    </View>
  );

  return (
    <FlatList
      data={userTrips}
      renderItem={renderItem}
      keyExtractor={(item) => item.docId}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 30,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  tripAreaText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 4,
  },
  itineraryContainer: {
    marginLeft: 8,
    marginBottom: 8,
  },
  dayText: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
  },
  activityText: {
    fontSize: 14,
    marginLeft: 16,
    marginBottom: 2,
  },
  detailText: {
    fontSize: 14,
    marginBottom: 4,
  },
});
