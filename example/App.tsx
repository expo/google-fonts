import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, BalsamiqSans_400Regular } from '@expo-google-fonts/balsamiq-sans';
import {
  SourceSansPro_400Regular_Italic,
  SourceSansPro_700Bold,
} from '@expo-google-fonts/source-sans-pro';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    SourceSansPro_400Regular_Italic,
    SourceSansPro_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
    paddingVertical: 10,
  },
});
