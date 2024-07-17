import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function Login() {

const router=useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/images/background1.png')}
        style={{ width: '100%', height: 400 }}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Travel Guide</Text>
        <Text style={styles.subtitle}>
        Welcome to Travel Guide, your AI-powered travel companion! Discover personalized itineraries, hidden gems, and local insights. Make every journey memorable with tailored recommendations and seamless travel experiences. Let AI enhance your adventures effortlessly.
        </Text>

        <TouchableOpacity style={styles.button}
        onPress={()=>router.push('auth/sign-up/')}>
          <Text style={styles.buttonText}>Sign In With Google</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    height: '100%',
    width: '100%',
  },
  innerContainer: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'outfit-regular',
    fontSize: 15,
    textAlign: 'center',
    color: '#A9A9A9',
  },
  button: {
    padding: 15,
    backgroundColor: '#000000',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
