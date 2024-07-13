import { StyleSheet, Text, View } from "react-native";
import React from 'react';

const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
       fontFamily:'outfit-bold',
     },
   });

   const styles2 = StyleSheet.create({
    container: {
        fontFamily: 'outfit-bold',
    },
   });

export default function Index() {

  return (
    <View style={styles.container}>
    
      <Text style={styles2.container}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
