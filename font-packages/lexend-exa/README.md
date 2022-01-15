# @expo-google-fonts/lexend-exa

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lexend-exa)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lexend-exa)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lexend-exa)

This package lets you use the [**Lexend Exa**](https://fonts.google.com/specimen/Lexend+Exa) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lexend Exa

![Lexend Exa](./font-family.png)

This font family contains [9 styles](#-gallery).

- `LexendExa_100Thin`
- `LexendExa_200ExtraLight`
- `LexendExa_300Light`
- `LexendExa_400Regular`
- `LexendExa_500Medium`
- `LexendExa_600SemiBold`
- `LexendExa_700Bold`
- `LexendExa_800ExtraBold`
- `LexendExa_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/lexend-exa expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  LexendExa_100Thin,
  LexendExa_200ExtraLight,
  LexendExa_300Light,
  LexendExa_400Regular,
  LexendExa_500Medium,
  LexendExa_600SemiBold,
  LexendExa_700Bold,
  LexendExa_800ExtraBold,
  LexendExa_900Black,
} from '@expo-google-fonts/lexend-exa';

export default () => {
  let [fontsLoaded] = useFonts({
    LexendExa_100Thin,
    LexendExa_200ExtraLight,
    LexendExa_300Light,
    LexendExa_400Regular,
    LexendExa_500Medium,
    LexendExa_600SemiBold,
    LexendExa_700Bold,
    LexendExa_800ExtraBold,
    LexendExa_900Black,
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
            fontFamily: 'LexendExa_100Thin',
          }}>
          Lexend Exa Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendExa_200ExtraLight',
          }}>
          Lexend Exa Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendExa_300Light',
          }}>
          Lexend Exa Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendExa_400Regular',
          }}>
          Lexend Exa Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendExa_500Medium',
          }}>
          Lexend Exa Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendExa_600SemiBold',
          }}>
          Lexend Exa Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendExa_700Bold',
          }}>
          Lexend Exa Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendExa_800ExtraBold',
          }}>
          Lexend Exa Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendExa_900Black',
          }}>
          Lexend Exa Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![LexendExa_100Thin](./LexendExa_100Thin.ttf.png)|![LexendExa_200ExtraLight](./LexendExa_200ExtraLight.ttf.png)|![LexendExa_300Light](./LexendExa_300Light.ttf.png)||
|![LexendExa_400Regular](./LexendExa_400Regular.ttf.png)|![LexendExa_500Medium](./LexendExa_500Medium.ttf.png)|![LexendExa_600SemiBold](./LexendExa_600SemiBold.ttf.png)||
|![LexendExa_700Bold](./LexendExa_700Bold.ttf.png)|![LexendExa_800ExtraBold](./LexendExa_800ExtraBold.ttf.png)|![LexendExa_900Black](./LexendExa_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/lexend-exa` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lexend Exa page on Google Fonts](https://fonts.google.com/specimen/Lexend+Exa) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lexend Exa on Google Fonts](https://fonts.google.com/specimen/Lexend+Exa)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lexend-exa)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lexend-exa)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
