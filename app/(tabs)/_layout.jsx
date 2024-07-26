import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="mytrip" // The path to the screen
        options={{
          tabBarLabel: 'My Trip', // Display name
          tabBarIcon: ({ color }) => (
            <Entypo name="location" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarLabel: 'Discover', // Display name
          tabBarIcon: ({ color }) => (
            <Entypo name="compass" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile', // Display name
          tabBarIcon: ({ color }) => (
            <Entypo name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
