# @expo-google-fonts/lexend-mega

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lexend-mega)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lexend-mega)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lexend-mega)

This package lets you use the [**Lexend Mega**](https://fonts.google.com/specimen/Lexend+Mega) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lexend Mega

![Lexend Mega](./font-family.png)

This font family contains [9 styles](#-gallery).

- `LexendMega_100Thin`
- `LexendMega_200ExtraLight`
- `LexendMega_300Light`
- `LexendMega_400Regular`
- `LexendMega_500Medium`
- `LexendMega_600SemiBold`
- `LexendMega_700Bold`
- `LexendMega_800ExtraBold`
- `LexendMega_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/lexend-mega expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  LexendMega_100Thin,
  LexendMega_200ExtraLight,
  LexendMega_300Light,
  LexendMega_400Regular,
  LexendMega_500Medium,
  LexendMega_600SemiBold,
  LexendMega_700Bold,
  LexendMega_800ExtraBold,
  LexendMega_900Black,
} from '@expo-google-fonts/lexend-mega';

export default () => {
  let [fontsLoaded] = useFonts({
    LexendMega_100Thin,
    LexendMega_200ExtraLight,
    LexendMega_300Light,
    LexendMega_400Regular,
    LexendMega_500Medium,
    LexendMega_600SemiBold,
    LexendMega_700Bold,
    LexendMega_800ExtraBold,
    LexendMega_900Black,
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
            fontFamily: 'LexendMega_100Thin',
          }}>
          Lexend Mega Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendMega_200ExtraLight',
          }}>
          Lexend Mega Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendMega_300Light',
          }}>
          Lexend Mega Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendMega_400Regular',
          }}>
          Lexend Mega Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendMega_500Medium',
          }}>
          Lexend Mega Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendMega_600SemiBold',
          }}>
          Lexend Mega Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendMega_700Bold',
          }}>
          Lexend Mega Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendMega_800ExtraBold',
          }}>
          Lexend Mega Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendMega_900Black',
          }}>
          Lexend Mega Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![LexendMega_100Thin](./LexendMega_100Thin.ttf.png)|![LexendMega_200ExtraLight](./LexendMega_200ExtraLight.ttf.png)|![LexendMega_300Light](./LexendMega_300Light.ttf.png)||
|![LexendMega_400Regular](./LexendMega_400Regular.ttf.png)|![LexendMega_500Medium](./LexendMega_500Medium.ttf.png)|![LexendMega_600SemiBold](./LexendMega_600SemiBold.ttf.png)||
|![LexendMega_700Bold](./LexendMega_700Bold.ttf.png)|![LexendMega_800ExtraBold](./LexendMega_800ExtraBold.ttf.png)|![LexendMega_900Black](./LexendMega_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/lexend-mega` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lexend Mega page on Google Fonts](https://fonts.google.com/specimen/Lexend+Mega) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lexend Mega on Google Fonts](https://fonts.google.com/specimen/Lexend+Mega)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lexend-mega)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lexend-mega)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
