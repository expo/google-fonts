import { BalsamiqSans_400Regular } from '@expo-google-fonts/balsamiq-sans';
import { Bangers_400Regular } from '@expo-google-fonts/bangers';
import { Bitter_400Regular } from '@expo-google-fonts/bitter';
import { CabinSketch_400Regular } from '@expo-google-fonts/cabin-sketch';
import { CrimsonText_600SemiBold } from '@expo-google-fonts/crimson-text';
import { Lora_400Regular } from '@expo-google-fonts/lora';
import { MerriweatherSans_700Bold_Italic } from '@expo-google-fonts/merriweather-sans';
import { Slabo27px_400Regular } from '@expo-google-fonts/slabo-27px';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

const importedFonts = {
  BalsamiqSans_400Regular,
  Bangers_400Regular,
  MerriweatherSans_700Bold_Italic,
  Lora_400Regular,
  Slabo27px_400Regular,
  CrimsonText_600SemiBold,
  Bitter_400Regular,
  CabinSketch_400Regular,
};

export default function Dev() {
  const [fontsLoaded] = useFonts(importedFonts);
  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading fonts...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {Object.keys(importedFonts).map((fontFamily) => (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#222222',
    paddingVertical: 10,
  },
});
