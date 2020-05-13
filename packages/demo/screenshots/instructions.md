### Shell
```sh
expo install @expo-google-fonts/inter expo-font
```

### Code
```js
import {
  useFonts,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
```
...

```js
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
```
...

```js

    <Text style={{ fontFamily: 'Inter_400Regular'}}>
      Hello Expo Google Fonts
    </Text>

```
