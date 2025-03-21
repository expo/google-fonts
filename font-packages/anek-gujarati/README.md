# @expo-google-fonts/anek-gujarati

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/anek-gujarati)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/anek-gujarati)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/anek-gujarati)

This package lets you use the [**Anek Gujarati**](https://fonts.google.com/specimen/Anek+Gujarati) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Anek Gujarati

![Anek Gujarati](./font-family.png)

This font family contains [8 styles](#-gallery).

- `AnekGujarati_100Thin`
- `AnekGujarati_200ExtraLight`
- `AnekGujarati_300Light`
- `AnekGujarati_400Regular`
- `AnekGujarati_500Medium`
- `AnekGujarati_600SemiBold`
- `AnekGujarati_700Bold`
- `AnekGujarati_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/anek-gujarati expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  AnekGujarati_100Thin,
  AnekGujarati_200ExtraLight,
  AnekGujarati_300Light,
  AnekGujarati_400Regular,
  AnekGujarati_500Medium,
  AnekGujarati_600SemiBold,
  AnekGujarati_700Bold,
  AnekGujarati_800ExtraBold,
} from '@expo-google-fonts/anek-gujarati';

export default () => {
  let [fontsLoaded] = useFonts({
    AnekGujarati_100Thin,
    AnekGujarati_200ExtraLight,
    AnekGujarati_300Light,
    AnekGujarati_400Regular,
    AnekGujarati_500Medium,
    AnekGujarati_600SemiBold,
    AnekGujarati_700Bold,
    AnekGujarati_800ExtraBold,
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
            fontFamily: 'AnekGujarati_100Thin',
          }}>
          Anek Gujarati Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGujarati_200ExtraLight',
          }}>
          Anek Gujarati Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGujarati_300Light',
          }}>
          Anek Gujarati Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGujarati_400Regular',
          }}>
          Anek Gujarati Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGujarati_500Medium',
          }}>
          Anek Gujarati Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGujarati_600SemiBold',
          }}>
          Anek Gujarati Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGujarati_700Bold',
          }}>
          Anek Gujarati Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'AnekGujarati_800ExtraBold',
          }}>
          Anek Gujarati Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![AnekGujarati_100Thin](./AnekGujarati_100Thin.ttf.png)|![AnekGujarati_200ExtraLight](./AnekGujarati_200ExtraLight.ttf.png)|![AnekGujarati_300Light](./AnekGujarati_300Light.ttf.png)||
|![AnekGujarati_400Regular](./AnekGujarati_400Regular.ttf.png)|![AnekGujarati_500Medium](./AnekGujarati_500Medium.ttf.png)|![AnekGujarati_600SemiBold](./AnekGujarati_600SemiBold.ttf.png)||
|![AnekGujarati_700Bold](./AnekGujarati_700Bold.ttf.png)|![AnekGujarati_800ExtraBold](./AnekGujarati_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/anek-gujarati` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Anek Gujarati page on Google Fonts](https://fonts.google.com/specimen/Anek+Gujarati) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Anek Gujarati on Google Fonts](https://fonts.google.com/specimen/Anek+Gujarati)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/anek-gujarati)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/anek-gujarati)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
