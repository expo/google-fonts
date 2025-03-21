import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false, title: 'Home' }} />
        <Stack.Screen name="dev" options={{ title: '@expo-google-fonts/dev' }} />
        <Stack.Screen name="packages" options={{ title: '@expo-google-fonts/*' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
