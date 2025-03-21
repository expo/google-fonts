# @expo-google-fonts/noto-serif-ethiopic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-ethiopic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-ethiopic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-ethiopic)

This package lets you use the [**Noto Serif Ethiopic**](https://fonts.google.com/specimen/Noto+Serif+Ethiopic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Ethiopic

![Noto Serif Ethiopic](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifEthiopic_100Thin`
- `NotoSerifEthiopic_200ExtraLight`
- `NotoSerifEthiopic_300Light`
- `NotoSerifEthiopic_400Regular`
- `NotoSerifEthiopic_500Medium`
- `NotoSerifEthiopic_600SemiBold`
- `NotoSerifEthiopic_700Bold`
- `NotoSerifEthiopic_800ExtraBold`
- `NotoSerifEthiopic_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/noto-serif-ethiopic expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSerifEthiopic_100Thin,
  NotoSerifEthiopic_200ExtraLight,
  NotoSerifEthiopic_300Light,
  NotoSerifEthiopic_400Regular,
  NotoSerifEthiopic_500Medium,
  NotoSerifEthiopic_600SemiBold,
  NotoSerifEthiopic_700Bold,
  NotoSerifEthiopic_800ExtraBold,
  NotoSerifEthiopic_900Black,
} from '@expo-google-fonts/noto-serif-ethiopic';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerifEthiopic_100Thin,
    NotoSerifEthiopic_200ExtraLight,
    NotoSerifEthiopic_300Light,
    NotoSerifEthiopic_400Regular,
    NotoSerifEthiopic_500Medium,
    NotoSerifEthiopic_600SemiBold,
    NotoSerifEthiopic_700Bold,
    NotoSerifEthiopic_800ExtraBold,
    NotoSerifEthiopic_900Black,
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
            fontFamily: 'NotoSerifEthiopic_100Thin',
          }}>
          Noto Serif Ethiopic Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifEthiopic_200ExtraLight',
          }}>
          Noto Serif Ethiopic Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifEthiopic_300Light',
          }}>
          Noto Serif Ethiopic Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifEthiopic_400Regular',
          }}>
          Noto Serif Ethiopic Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifEthiopic_500Medium',
          }}>
          Noto Serif Ethiopic Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifEthiopic_600SemiBold',
          }}>
          Noto Serif Ethiopic Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifEthiopic_700Bold',
          }}>
          Noto Serif Ethiopic Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifEthiopic_800ExtraBold',
          }}>
          Noto Serif Ethiopic Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifEthiopic_900Black',
          }}>
          Noto Serif Ethiopic Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifEthiopic_100Thin](./NotoSerifEthiopic_100Thin.ttf.png)|![NotoSerifEthiopic_200ExtraLight](./NotoSerifEthiopic_200ExtraLight.ttf.png)|![NotoSerifEthiopic_300Light](./NotoSerifEthiopic_300Light.ttf.png)||
|![NotoSerifEthiopic_400Regular](./NotoSerifEthiopic_400Regular.ttf.png)|![NotoSerifEthiopic_500Medium](./NotoSerifEthiopic_500Medium.ttf.png)|![NotoSerifEthiopic_600SemiBold](./NotoSerifEthiopic_600SemiBold.ttf.png)||
|![NotoSerifEthiopic_700Bold](./NotoSerifEthiopic_700Bold.ttf.png)|![NotoSerifEthiopic_800ExtraBold](./NotoSerifEthiopic_800ExtraBold.ttf.png)|![NotoSerifEthiopic_900Black](./NotoSerifEthiopic_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-serif-ethiopic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Ethiopic page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Ethiopic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Ethiopic on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Ethiopic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-ethiopic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-ethiopic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
