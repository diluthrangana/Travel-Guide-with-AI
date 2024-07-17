import { Stack } from "expo-router";
import { useFonts } from "expo-font";


export default function RootLayout() {

  useFonts({
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
  })
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
