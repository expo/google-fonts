import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, BalsamiqSans_400Regular } from '@expo-google-fonts/balsamiq-sans';
import {
  SourceSansPro_400Regular_Italic,
  SourceSansPro_700Bold,
} from '@expo-google-fonts/source-sans-pro';

export default function App() {
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    SourceSansPro_400Regular_Italic,
    SourceSansPro_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, { fontFamily: 'SourceSansPro_400Regular_Italic' }]}>
          Source Sans Pro Italic
        </Text>
        <Text style={[styles.text, { fontFamily: 'SourceSansPro_700Bold' }]}>
          Source Sans Pro Bold
        </Text>
        <Text style={[styles.text, { fontFamily: 'BalsamiqSans_400Regular' }]}>
          Balsamiq Sans Regular
        </Text>
        <Text style={[styles.text]}>Platform Default</Text>
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
    color: 'black',
    paddingVertical: 10,
  },
});
