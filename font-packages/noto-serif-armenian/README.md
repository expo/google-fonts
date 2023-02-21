# @expo-google-fonts/noto-serif-armenian

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-armenian)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-armenian)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-armenian)

This package lets you use the [**Noto Serif Armenian**](https://fonts.google.com/specimen/Noto+Serif+Armenian) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Armenian

![Noto Serif Armenian](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifArmenian_100Thin`
- `NotoSerifArmenian_200ExtraLight`
- `NotoSerifArmenian_300Light`
- `NotoSerifArmenian_400Regular`
- `NotoSerifArmenian_500Medium`
- `NotoSerifArmenian_600SemiBold`
- `NotoSerifArmenian_700Bold`
- `NotoSerifArmenian_800ExtraBold`
- `NotoSerifArmenian_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-serif-armenian expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSerifArmenian_100Thin,
  NotoSerifArmenian_200ExtraLight,
  NotoSerifArmenian_300Light,
  NotoSerifArmenian_400Regular,
  NotoSerifArmenian_500Medium,
  NotoSerifArmenian_600SemiBold,
  NotoSerifArmenian_700Bold,
  NotoSerifArmenian_800ExtraBold,
  NotoSerifArmenian_900Black,
} from '@expo-google-fonts/noto-serif-armenian';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerifArmenian_100Thin,
    NotoSerifArmenian_200ExtraLight,
    NotoSerifArmenian_300Light,
    NotoSerifArmenian_400Regular,
    NotoSerifArmenian_500Medium,
    NotoSerifArmenian_600SemiBold,
    NotoSerifArmenian_700Bold,
    NotoSerifArmenian_800ExtraBold,
    NotoSerifArmenian_900Black,
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
            fontFamily: 'NotoSerifArmenian_100Thin',
          }}>
          Noto Serif Armenian Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifArmenian_200ExtraLight',
          }}>
          Noto Serif Armenian Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifArmenian_300Light',
          }}>
          Noto Serif Armenian Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifArmenian_400Regular',
          }}>
          Noto Serif Armenian Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifArmenian_500Medium',
          }}>
          Noto Serif Armenian Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifArmenian_600SemiBold',
          }}>
          Noto Serif Armenian Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifArmenian_700Bold',
          }}>
          Noto Serif Armenian Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifArmenian_800ExtraBold',
          }}>
          Noto Serif Armenian Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifArmenian_900Black',
          }}>
          Noto Serif Armenian Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifArmenian_100Thin](./NotoSerifArmenian_100Thin.ttf.png)|![NotoSerifArmenian_200ExtraLight](./NotoSerifArmenian_200ExtraLight.ttf.png)|![NotoSerifArmenian_300Light](./NotoSerifArmenian_300Light.ttf.png)||
|![NotoSerifArmenian_400Regular](./NotoSerifArmenian_400Regular.ttf.png)|![NotoSerifArmenian_500Medium](./NotoSerifArmenian_500Medium.ttf.png)|![NotoSerifArmenian_600SemiBold](./NotoSerifArmenian_600SemiBold.ttf.png)||
|![NotoSerifArmenian_700Bold](./NotoSerifArmenian_700Bold.ttf.png)|![NotoSerifArmenian_800ExtraBold](./NotoSerifArmenian_800ExtraBold.ttf.png)|![NotoSerifArmenian_900Black](./NotoSerifArmenian_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-serif-armenian` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Armenian page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Armenian) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Armenian on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Armenian)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-armenian)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-armenian)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
