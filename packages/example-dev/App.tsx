import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import {
  BalsamiqSans_400Regular,
  Bangers_400Regular,
  MerriweatherSans_700Bold_Italic,
  Lora_400Regular,
  Slabo27px_400Regular,
  CrimsonText_600SemiBold,
  Bitter_400Regular,
  CabinSketch_400Regular,
} from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    Bangers_400Regular,
    MerriweatherSans_700Bold_Italic,
    Lora_400Regular,
    Slabo27px_400Regular,
    CrimsonText_600SemiBold,
    Bitter_400Regular,
    CabinSketch_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        {[
          'BalsamiqSans_400Regular',
          'Bangers_400Regular',
          'MerriweatherSans_700Bold_Italic',
          'Lora_400Regular',
          'Slabo27px_400Regular',
          'CrimsonText_600SemiBold',
          'Bitter_400Regular',
          'CabinSketch_400Regular',
        ].map((fontFamily) => (
          <Text key={'text_' + fontFamily} style={[styles.text, { fontFamily }]}>
            {fontFamily
              .replace(/_/g, ' ')
              .replace(/[0-9]00/, '')
              .replace(/([a-z0-9])([A-Z])/, '$1 $2')}
          </Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#222222',
    paddingVertical: 10,
  },
});
