# @expo-google-fonts/lexend-tera

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lexend-tera)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lexend-tera)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lexend-tera)

This package lets you use the [**Lexend Tera**](https://fonts.google.com/specimen/Lexend+Tera) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lexend Tera

![Lexend Tera](./font-family.png)

This font family contains [9 styles](#-gallery).

- `LexendTera_100Thin`
- `LexendTera_200ExtraLight`
- `LexendTera_300Light`
- `LexendTera_400Regular`
- `LexendTera_500Medium`
- `LexendTera_600SemiBold`
- `LexendTera_700Bold`
- `LexendTera_800ExtraBold`
- `LexendTera_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/lexend-tera expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  LexendTera_100Thin,
  LexendTera_200ExtraLight,
  LexendTera_300Light,
  LexendTera_400Regular,
  LexendTera_500Medium,
  LexendTera_600SemiBold,
  LexendTera_700Bold,
  LexendTera_800ExtraBold,
  LexendTera_900Black,
} from '@expo-google-fonts/lexend-tera';

export default () => {
  let [fontsLoaded] = useFonts({
    LexendTera_100Thin,
    LexendTera_200ExtraLight,
    LexendTera_300Light,
    LexendTera_400Regular,
    LexendTera_500Medium,
    LexendTera_600SemiBold,
    LexendTera_700Bold,
    LexendTera_800ExtraBold,
    LexendTera_900Black,
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
            fontFamily: 'LexendTera_100Thin',
          }}>
          Lexend Tera Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendTera_200ExtraLight',
          }}>
          Lexend Tera Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendTera_300Light',
          }}>
          Lexend Tera Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendTera_400Regular',
          }}>
          Lexend Tera Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendTera_500Medium',
          }}>
          Lexend Tera Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendTera_600SemiBold',
          }}>
          Lexend Tera Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendTera_700Bold',
          }}>
          Lexend Tera Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendTera_800ExtraBold',
          }}>
          Lexend Tera Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LexendTera_900Black',
          }}>
          Lexend Tera Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![LexendTera_100Thin](./LexendTera_100Thin.ttf.png)|![LexendTera_200ExtraLight](./LexendTera_200ExtraLight.ttf.png)|![LexendTera_300Light](./LexendTera_300Light.ttf.png)||
|![LexendTera_400Regular](./LexendTera_400Regular.ttf.png)|![LexendTera_500Medium](./LexendTera_500Medium.ttf.png)|![LexendTera_600SemiBold](./LexendTera_600SemiBold.ttf.png)||
|![LexendTera_700Bold](./LexendTera_700Bold.ttf.png)|![LexendTera_800ExtraBold](./LexendTera_800ExtraBold.ttf.png)|![LexendTera_900Black](./LexendTera_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/lexend-tera` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lexend Tera page on Google Fonts](https://fonts.google.com/specimen/Lexend+Tera) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lexend Tera on Google Fonts](https://fonts.google.com/specimen/Lexend+Tera)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lexend-tera)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lexend-tera)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
