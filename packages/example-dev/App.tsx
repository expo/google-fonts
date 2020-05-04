import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import {
  Limelight_Regular400,
  SourceSansPro_Bold700,
  Lato_Regular400_Italic,
} from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded] = useFonts({
    Limelight_Regular400,
    SourceSansPro_Bold700,
    Lato_Regular400_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, { fontFamily: 'Limelight_Regular400' }]}>
          Limelight_Regular400
        </Text>
        <Text style={[styles.text, { fontFamily: 'SourceSansPro_Bold700' }]}>
          SourceSansPro_Bold700
        </Text>
        <Text style={[styles.text, { fontFamily: 'Lato_Regular400_Italic' }]}>
          Lato_Regular400_Italic
        </Text>
        <Text style={[styles.text]}>Platform Default</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccccff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#222222',
    paddingVertical: 10,
  },
});
