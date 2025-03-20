# @expo-google-fonts/noto-sans-syriac-eastern

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-syriac-eastern)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-syriac-eastern)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-syriac-eastern)

This package lets you use the [**Noto Sans Syriac Eastern**](https://fonts.google.com/specimen/Noto+Sans+Syriac+Eastern) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Syriac Eastern

![Noto Sans Syriac Eastern](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansSyriacEastern_100Thin`
- `NotoSansSyriacEastern_200ExtraLight`
- `NotoSansSyriacEastern_300Light`
- `NotoSansSyriacEastern_400Regular`
- `NotoSansSyriacEastern_500Medium`
- `NotoSansSyriacEastern_600SemiBold`
- `NotoSansSyriacEastern_700Bold`
- `NotoSansSyriacEastern_800ExtraBold`
- `NotoSansSyriacEastern_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-sans-syriac-eastern expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansSyriacEastern_100Thin,
  NotoSansSyriacEastern_200ExtraLight,
  NotoSansSyriacEastern_300Light,
  NotoSansSyriacEastern_400Regular,
  NotoSansSyriacEastern_500Medium,
  NotoSansSyriacEastern_600SemiBold,
  NotoSansSyriacEastern_700Bold,
  NotoSansSyriacEastern_800ExtraBold,
  NotoSansSyriacEastern_900Black,
} from '@expo-google-fonts/noto-sans-syriac-eastern';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansSyriacEastern_100Thin,
    NotoSansSyriacEastern_200ExtraLight,
    NotoSansSyriacEastern_300Light,
    NotoSansSyriacEastern_400Regular,
    NotoSansSyriacEastern_500Medium,
    NotoSansSyriacEastern_600SemiBold,
    NotoSansSyriacEastern_700Bold,
    NotoSansSyriacEastern_800ExtraBold,
    NotoSansSyriacEastern_900Black,
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
            fontFamily: 'NotoSansSyriacEastern_100Thin',
          }}>
          Noto Sans Syriac Eastern Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriacEastern_200ExtraLight',
          }}>
          Noto Sans Syriac Eastern Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriacEastern_300Light',
          }}>
          Noto Sans Syriac Eastern Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriacEastern_400Regular',
          }}>
          Noto Sans Syriac Eastern Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriacEastern_500Medium',
          }}>
          Noto Sans Syriac Eastern Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriacEastern_600SemiBold',
          }}>
          Noto Sans Syriac Eastern Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriacEastern_700Bold',
          }}>
          Noto Sans Syriac Eastern Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriacEastern_800ExtraBold',
          }}>
          Noto Sans Syriac Eastern Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriacEastern_900Black',
          }}>
          Noto Sans Syriac Eastern Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansSyriacEastern_100Thin](./NotoSansSyriacEastern_100Thin.ttf.png)|![NotoSansSyriacEastern_200ExtraLight](./NotoSansSyriacEastern_200ExtraLight.ttf.png)|![NotoSansSyriacEastern_300Light](./NotoSansSyriacEastern_300Light.ttf.png)||
|![NotoSansSyriacEastern_400Regular](./NotoSansSyriacEastern_400Regular.ttf.png)|![NotoSansSyriacEastern_500Medium](./NotoSansSyriacEastern_500Medium.ttf.png)|![NotoSansSyriacEastern_600SemiBold](./NotoSansSyriacEastern_600SemiBold.ttf.png)||
|![NotoSansSyriacEastern_700Bold](./NotoSansSyriacEastern_700Bold.ttf.png)|![NotoSansSyriacEastern_800ExtraBold](./NotoSansSyriacEastern_800ExtraBold.ttf.png)|![NotoSansSyriacEastern_900Black](./NotoSansSyriacEastern_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-syriac-eastern` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Syriac Eastern page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Syriac+Eastern) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Syriac Eastern on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Syriac+Eastern)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-syriac-eastern)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-syriac-eastern)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
