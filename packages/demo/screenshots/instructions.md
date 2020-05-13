```sh
expo install @expo-google-fonts/inter expo-font
```

```js
import {
  useFonts,
  Inter_400Regular,
} from '@expo-google-fonts/inter';

    ...

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

    ...

    <Text style={{ fontFamily: 'Inter_400Regular'}}>
      Hello Expo Google Fonts
    </Text>

```