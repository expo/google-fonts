# @expo-google-fonts/lexend-zetta

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lexend-zetta)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lexend-zetta)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lexend-zetta)

This package lets you use the [**Lexend Zetta**](https://fonts.google.com/specimen/Lexend+Zetta) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lexend Zetta

![Lexend Zetta](./font-family.png)

This font family contains [9 styles](#-gallery).

- `LexendZetta_100Thin`
- `LexendZetta_200ExtraLight`
- `LexendZetta_300Light`
- `LexendZetta_400Regular`
- `LexendZetta_500Medium`
- `LexendZetta_600SemiBold`
- `LexendZetta_700Bold`
- `LexendZetta_800ExtraBold`
- `LexendZetta_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/lexend-zetta expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  LexendZetta_100Thin,
  LexendZetta_200ExtraLight,
  LexendZetta_300Light,
  LexendZetta_400Regular,
  LexendZetta_500Medium,
  LexendZetta_600SemiBold,
  LexendZetta_700Bold,
  LexendZetta_800ExtraBold,
  LexendZetta_900Black,
} from '@expo-google-fonts/lexend-zetta';

export default () => {
  let [fontsLoaded] = useFonts({
    LexendZetta_100Thin,
    LexendZetta_200ExtraLight,
    LexendZetta_300Light,
    LexendZetta_400Regular,
    LexendZetta_500Medium,
    LexendZetta_600SemiBold,
    LexendZetta_700Bold,
    LexendZetta_800ExtraBold,
    LexendZetta_900Black,
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
            fontFamily: 'LexendZetta_100Thin',
          }}>
          Lexend Zetta Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendZetta_200ExtraLight',
          }}>
          Lexend Zetta Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendZetta_300Light',
          }}>
          Lexend Zetta Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendZetta_400Regular',
          }}>
          Lexend Zetta Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendZetta_500Medium',
          }}>
          Lexend Zetta Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendZetta_600SemiBold',
          }}>
          Lexend Zetta Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendZetta_700Bold',
          }}>
          Lexend Zetta Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendZetta_800ExtraBold',
          }}>
          Lexend Zetta Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendZetta_900Black',
          }}>
          Lexend Zetta Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![LexendZetta_100Thin](./LexendZetta_100Thin.ttf.png)|![LexendZetta_200ExtraLight](./LexendZetta_200ExtraLight.ttf.png)|![LexendZetta_300Light](./LexendZetta_300Light.ttf.png)||
|![LexendZetta_400Regular](./LexendZetta_400Regular.ttf.png)|![LexendZetta_500Medium](./LexendZetta_500Medium.ttf.png)|![LexendZetta_600SemiBold](./LexendZetta_600SemiBold.ttf.png)||
|![LexendZetta_700Bold](./LexendZetta_700Bold.ttf.png)|![LexendZetta_800ExtraBold](./LexendZetta_800ExtraBold.ttf.png)|![LexendZetta_900Black](./LexendZetta_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/lexend-zetta` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lexend Zetta page on Google Fonts](https://fonts.google.com/specimen/Lexend+Zetta) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lexend Zetta on Google Fonts](https://fonts.google.com/specimen/Lexend+Zetta)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lexend-zetta)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lexend-zetta)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
