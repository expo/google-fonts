# @expo-google-fonts/blinker

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/blinker)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/blinker)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/blinker)

This package lets you use the [**Blinker**](https://fonts.google.com/specimen/Blinker) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Blinker

![Blinker](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Blinker_100Thin`
- `Blinker_200ExtraLight`
- `Blinker_300Light`
- `Blinker_400Regular`
- `Blinker_600SemiBold`
- `Blinker_700Bold`
- `Blinker_800ExtraBold`
- `Blinker_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/blinker expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Blinker_100Thin,
  Blinker_200ExtraLight,
  Blinker_300Light,
  Blinker_400Regular,
  Blinker_600SemiBold,
  Blinker_700Bold,
  Blinker_800ExtraBold,
  Blinker_900Black,
} from '@expo-google-fonts/blinker';

export default () => {
  let [fontsLoaded] = useFonts({
    Blinker_100Thin,
    Blinker_200ExtraLight,
    Blinker_300Light,
    Blinker_400Regular,
    Blinker_600SemiBold,
    Blinker_700Bold,
    Blinker_800ExtraBold,
    Blinker_900Black,
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
            fontFamily: 'Blinker_100Thin',
          }}>
          Blinker Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Blinker_200ExtraLight',
          }}>
          Blinker Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Blinker_300Light',
          }}>
          Blinker Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Blinker_400Regular',
          }}>
          Blinker Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Blinker_600SemiBold',
          }}>
          Blinker Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Blinker_700Bold',
          }}>
          Blinker Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Blinker_800ExtraBold',
          }}>
          Blinker Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Blinker_900Black',
          }}>
          Blinker Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Blinker_100Thin](./Blinker_100Thin.ttf.png)|![Blinker_200ExtraLight](./Blinker_200ExtraLight.ttf.png)|![Blinker_300Light](./Blinker_300Light.ttf.png)||
|![Blinker_400Regular](./Blinker_400Regular.ttf.png)|![Blinker_600SemiBold](./Blinker_600SemiBold.ttf.png)|![Blinker_700Bold](./Blinker_700Bold.ttf.png)||
|![Blinker_800ExtraBold](./Blinker_800ExtraBold.ttf.png)|![Blinker_900Black](./Blinker_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/blinker` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Blinker page on Google Fonts](https://fonts.google.com/specimen/Blinker) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Blinker on Google Fonts](https://fonts.google.com/specimen/Blinker)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/blinker)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/blinker)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
