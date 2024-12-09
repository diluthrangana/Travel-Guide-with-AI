import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

export default function UserTripList({ userTrips }) {
  // Sort the trips in descending order by docId
  const sortedTrips = [...(userTrips || [])].sort((a, b) => b.docId - a.docId);

  // Render a single trip item
  const renderItem = ({ item }) => {
    const tripData = item?.tripData || {};
    const tripPlan = item?.tripPlan || {};
    const itinerary = tripPlan?.itinerary || [];
    const hotels = tripPlan?.hotels || [];
    const summary = tripPlan?.summary || {};
    const tripDetails = tripPlan?.tripDetails || {};

    return (
      <View style={styles.cardContaSiner}>
        <Text style={styles.tripAreaText}>
          Trip Plan for {tripData?.Area || 'Unknown Area'}
        </Text>

        <Text style={styles.sectionTitle}>Itinerary:</Text>
        {itinerary.length > 0 ? (
          itinerary.map((dayPlan, index) => (
            <View key={index} style={styles.itineraryContainer}>
              <Text style={styles.dayText}>Day {index + 1}</Text>
              {dayPlan.activities?.length > 0 ? (
                dayPlan.activities.map((activity, activityIndex) => (
                  <Text key={activityIndex} style={styles.activityText}>
                    {activity.place || 'Unknown Place'} -{' '}
                    {activity.description || 'No Description'}: {activity.cost || 'N/A'}
                  </Text>
                ))
              ) : (
                <Text style={styles.activityText}>No activities available</Text>
              )}
            </View>
          ))
        ) : (
          <Text style={styles.detailText}>No itinerary available</Text>
        )}

        <Text style={styles.sectionTitle}>Hotel Details:</Text>
        {hotels.length > 0 ? (
          <>
            <Text style={styles.detailText}>
              Address: {hotels[0]?.address || 'Unknown'}
            </Text>
            <Text style={styles.detailText}>
              Name: {hotels[0]?.name || 'Unknown'}
            </Text>
            <Text style={styles.detailText}>
              Price: {hotels[0]?.price || 'Unknown'}
            </Text>
          </>
        ) : (
          <Text style={styles.detailText}>No hotel information available</Text>
        )}

        <Text style={styles.sectionTitle}>Summary:</Text>
        <Text style={styles.detailText}>
          Note: {summary?.notes || 'No notes available'}
        </Text>
        <Text style={styles.detailText}>
          Total Cost: {hotels?.totalCost || 'Unknown'}
        </Text>

        <Text style={styles.sectionTitle}>Trip Details:</Text>
        <Text style={styles.detailText}>
          Budget: {tripDetails?.budget || 'Unknown'}
        </Text>
        <Text style={styles.detailText}>
          Travellers: {tripDetails?.travelerCount || 'Unknown'}
        </Text>
        <Text style={styles.detailText}>
          Start Date: {tripDetails?.startDate || 'Unknown'}
        </Text>
        <Text style={styles.detailText}>
          End Date: {tripDetails?.endDate || 'Unknown'}
        </Text>
        <Text style={styles.detailText}>
          Location: {tripDetails?.location || 'Unknown'}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={sortedTrips}
      renderItem={renderItem}
      keyExtractor={(item) => item?.docId || Math.random().toString()} // Fallback key if docId is missing
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={
        <Text style={styles.emptyText}>No trips available</Text>
      }
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
  emptyText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
});
