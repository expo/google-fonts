import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import { Limelight_Regular400 } from '@expo-google-fonts/limelight';
import { Inter_Black900, Inter_ExtraLight200 } from '@expo-google-fonts/inter';
import {
  SourceSansPro_Bold700,
  SourceSansPro_Regular400_Italic,
  SourceSansPro_ExtraLight200,
} from '@expo-google-fonts/source-sans-pro';

let fontSize = 24;

export default function App() {
  let [fontsLoaded] = useFonts({
    Limelight_Regular400,
    Inter_Black900,
    Inter_ExtraLight200,
    SourceSansPro_Bold700,
    SourceSansPro_ExtraLight200,
    SourceSansPro_Regular400_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: 'Limelight_Regular400', fontSize }}>Limelight_Regular400</Text>
        <Text style={{ fontFamily: 'Inter_Black900', fontSize, fontWeight: '900' }}>
          Inter_Black900
        </Text>
        <Text style={{ fontFamily: 'Inter_ExtraLight200', fontSize }}>Inter_ExtraLight200</Text>
        <Text style={{ fontFamily: 'SourceSansPro_Bold700', fontSize }}>
          SourceSansPro_Bold700
        </Text>
        <Text style={{ fontFamily: 'SourceSansPro_ExtraLight200', fontSize }}>
          SourceSansPro_ExtraLight200
        </Text>
        <Text style={{ fontFamily: 'SourceSansPro_Regular400_Italic', fontSize }}>
          SourceSansPro_Regular400_Italic
        </Text>
        <Text style={{ fontSize }}>Platform Default</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
