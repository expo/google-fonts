import { Link } from 'expo-router';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/title.gif')}
        style={styles.logo}
        resizeMode="center"
      />
      <Link href="/dev" style={styles.link}>
        <Text style={styles.text}>Dev</Text>
      </Link>
      <Link href="/packages" style={styles.link}>
        <Text style={styles.text}>Packages</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    marginVertical: 150,
    width: Platform.OS === 'web' ? '100%' : '200%',
  },
  link: {
    padding: 16,
  },
  text: {
    fontSize: 24,
    color: '#222222',
  },
});
