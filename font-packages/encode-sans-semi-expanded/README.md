# @expo-google-fonts/encode-sans-semi-expanded

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/encode-sans-semi-expanded)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/encode-sans-semi-expanded)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/encode-sans-semi-expanded)

This package lets you use the [**Encode Sans Semi Expanded**](https://fonts.google.com/specimen/Encode+Sans+Semi+Expanded) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Encode Sans Semi Expanded

![Encode Sans Semi Expanded](./font-family.png)

This font family contains [9 styles](#-gallery).

- `EncodeSansSemiExpanded_100Thin`
- `EncodeSansSemiExpanded_200ExtraLight`
- `EncodeSansSemiExpanded_300Light`
- `EncodeSansSemiExpanded_400Regular`
- `EncodeSansSemiExpanded_500Medium`
- `EncodeSansSemiExpanded_600SemiBold`
- `EncodeSansSemiExpanded_700Bold`
- `EncodeSansSemiExpanded_800ExtraBold`
- `EncodeSansSemiExpanded_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/encode-sans-semi-expanded expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  EncodeSansSemiExpanded_100Thin,
  EncodeSansSemiExpanded_200ExtraLight,
  EncodeSansSemiExpanded_300Light,
  EncodeSansSemiExpanded_400Regular,
  EncodeSansSemiExpanded_500Medium,
  EncodeSansSemiExpanded_600SemiBold,
  EncodeSansSemiExpanded_700Bold,
  EncodeSansSemiExpanded_800ExtraBold,
  EncodeSansSemiExpanded_900Black,
} from '@expo-google-fonts/encode-sans-semi-expanded';

export default () => {
  let [fontsLoaded] = useFonts({
    EncodeSansSemiExpanded_100Thin,
    EncodeSansSemiExpanded_200ExtraLight,
    EncodeSansSemiExpanded_300Light,
    EncodeSansSemiExpanded_400Regular,
    EncodeSansSemiExpanded_500Medium,
    EncodeSansSemiExpanded_600SemiBold,
    EncodeSansSemiExpanded_700Bold,
    EncodeSansSemiExpanded_800ExtraBold,
    EncodeSansSemiExpanded_900Black,
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
            fontFamily: 'EncodeSansSemiExpanded_100Thin',
          }}>
          Encode Sans Semi Expanded Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansSemiExpanded_200ExtraLight',
          }}>
          Encode Sans Semi Expanded Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansSemiExpanded_300Light',
          }}>
          Encode Sans Semi Expanded Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansSemiExpanded_400Regular',
          }}>
          Encode Sans Semi Expanded Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansSemiExpanded_500Medium',
          }}>
          Encode Sans Semi Expanded Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansSemiExpanded_600SemiBold',
          }}>
          Encode Sans Semi Expanded Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansSemiExpanded_700Bold',
          }}>
          Encode Sans Semi Expanded Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansSemiExpanded_800ExtraBold',
          }}>
          Encode Sans Semi Expanded Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EncodeSansSemiExpanded_900Black',
          }}>
          Encode Sans Semi Expanded Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![EncodeSansSemiExpanded_100Thin](./EncodeSansSemiExpanded_100Thin.ttf.png)|![EncodeSansSemiExpanded_200ExtraLight](./EncodeSansSemiExpanded_200ExtraLight.ttf.png)|![EncodeSansSemiExpanded_300Light](./EncodeSansSemiExpanded_300Light.ttf.png)||
|![EncodeSansSemiExpanded_400Regular](./EncodeSansSemiExpanded_400Regular.ttf.png)|![EncodeSansSemiExpanded_500Medium](./EncodeSansSemiExpanded_500Medium.ttf.png)|![EncodeSansSemiExpanded_600SemiBold](./EncodeSansSemiExpanded_600SemiBold.ttf.png)||
|![EncodeSansSemiExpanded_700Bold](./EncodeSansSemiExpanded_700Bold.ttf.png)|![EncodeSansSemiExpanded_800ExtraBold](./EncodeSansSemiExpanded_800ExtraBold.ttf.png)|![EncodeSansSemiExpanded_900Black](./EncodeSansSemiExpanded_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/encode-sans-semi-expanded` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Encode Sans Semi Expanded page on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Semi+Expanded) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Encode Sans Semi Expanded on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Semi+Expanded)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/encode-sans-semi-expanded)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/encode-sans-semi-expanded)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
