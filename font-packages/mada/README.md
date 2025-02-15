# @expo-google-fonts/mada

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mada)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mada)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mada)

This package lets you use the [**Mada**](https://fonts.google.com/specimen/Mada) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Mada

![Mada](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Mada_200ExtraLight`
- `Mada_300Light`
- `Mada_400Regular`
- `Mada_500Medium`
- `Mada_600SemiBold`
- `Mada_700Bold`
- `Mada_800ExtraBold`
- `Mada_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/mada expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Mada_200ExtraLight,
  Mada_300Light,
  Mada_400Regular,
  Mada_500Medium,
  Mada_600SemiBold,
  Mada_700Bold,
  Mada_800ExtraBold,
  Mada_900Black,
} from '@expo-google-fonts/mada';

export default () => {
  let [fontsLoaded] = useFonts({
    Mada_200ExtraLight,
    Mada_300Light,
    Mada_400Regular,
    Mada_500Medium,
    Mada_600SemiBold,
    Mada_700Bold,
    Mada_800ExtraBold,
    Mada_900Black,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mada_200ExtraLight',
          }}>
          Mada Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mada_300Light',
          }}>
          Mada Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mada_400Regular',
          }}>
          Mada Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mada_500Medium',
          }}>
          Mada Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mada_600SemiBold',
          }}>
          Mada Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mada_700Bold',
          }}>
          Mada Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mada_800ExtraBold',
          }}>
          Mada Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Mada_900Black',
          }}>
          Mada Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Mada_200ExtraLight](./Mada_200ExtraLight.ttf.png)|![Mada_300Light](./Mada_300Light.ttf.png)|![Mada_400Regular](./Mada_400Regular.ttf.png)||
|![Mada_500Medium](./Mada_500Medium.ttf.png)|![Mada_600SemiBold](./Mada_600SemiBold.ttf.png)|![Mada_700Bold](./Mada_700Bold.ttf.png)||
|![Mada_800ExtraBold](./Mada_800ExtraBold.ttf.png)|![Mada_900Black](./Mada_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/mada` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mada page on Google Fonts](https://fonts.google.com/specimen/Mada) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mada on Google Fonts](https://fonts.google.com/specimen/Mada)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mada)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mada)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
