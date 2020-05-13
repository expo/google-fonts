import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Limelight_400Regular } from '@expo-google-fonts/limelight';
import {
  SourceSansPro_400Regular_Italic,
  SourceSansPro_700Bold,
} from '@expo-google-fonts/source-sans-pro';

export default function App() {
  let [fontsLoaded] = useFonts({
    Limelight_400Regular,
    SourceSansPro_400Regular_Italic,
    SourceSansPro_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, { fontFamily: 'Limelight_400Regular' }]}>
          Limelight_400Regular
        </Text>
        <Text style={[styles.text, { fontFamily: 'SourceSansPro_400Regular_Italic' }]}>
          SourceSansPro_400Regular_Italic
        </Text>
        <Text style={[styles.text, { fontFamily: 'SourceSansPro_700Bold' }]}>
          SourceSansPro_700Bold
        </Text>
        <Text style={[styles.text]}>Platform Default</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffddaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#222222',
    paddingVertical: 10,
  },
});
