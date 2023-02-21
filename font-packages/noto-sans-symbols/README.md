# @expo-google-fonts/noto-sans-symbols

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-symbols)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-symbols)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-symbols)

This package lets you use the [**Noto Sans Symbols**](https://fonts.google.com/specimen/Noto+Sans+Symbols) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Symbols

![Noto Sans Symbols](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansSymbols_100Thin`
- `NotoSansSymbols_200ExtraLight`
- `NotoSansSymbols_300Light`
- `NotoSansSymbols_400Regular`
- `NotoSansSymbols_500Medium`
- `NotoSansSymbols_600SemiBold`
- `NotoSansSymbols_700Bold`
- `NotoSansSymbols_800ExtraBold`
- `NotoSansSymbols_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-sans-symbols expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansSymbols_100Thin,
  NotoSansSymbols_200ExtraLight,
  NotoSansSymbols_300Light,
  NotoSansSymbols_400Regular,
  NotoSansSymbols_500Medium,
  NotoSansSymbols_600SemiBold,
  NotoSansSymbols_700Bold,
  NotoSansSymbols_800ExtraBold,
  NotoSansSymbols_900Black,
} from '@expo-google-fonts/noto-sans-symbols';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansSymbols_100Thin,
    NotoSansSymbols_200ExtraLight,
    NotoSansSymbols_300Light,
    NotoSansSymbols_400Regular,
    NotoSansSymbols_500Medium,
    NotoSansSymbols_600SemiBold,
    NotoSansSymbols_700Bold,
    NotoSansSymbols_800ExtraBold,
    NotoSansSymbols_900Black,
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
            fontFamily: 'NotoSansSymbols_100Thin',
          }}>
          Noto Sans Symbols Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSymbols_200ExtraLight',
          }}>
          Noto Sans Symbols Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSymbols_300Light',
          }}>
          Noto Sans Symbols Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSymbols_400Regular',
          }}>
          Noto Sans Symbols Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSymbols_500Medium',
          }}>
          Noto Sans Symbols Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSymbols_600SemiBold',
          }}>
          Noto Sans Symbols Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSymbols_700Bold',
          }}>
          Noto Sans Symbols Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSymbols_800ExtraBold',
          }}>
          Noto Sans Symbols Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSymbols_900Black',
          }}>
          Noto Sans Symbols Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansSymbols_100Thin](./NotoSansSymbols_100Thin.ttf.png)|![NotoSansSymbols_200ExtraLight](./NotoSansSymbols_200ExtraLight.ttf.png)|![NotoSansSymbols_300Light](./NotoSansSymbols_300Light.ttf.png)||
|![NotoSansSymbols_400Regular](./NotoSansSymbols_400Regular.ttf.png)|![NotoSansSymbols_500Medium](./NotoSansSymbols_500Medium.ttf.png)|![NotoSansSymbols_600SemiBold](./NotoSansSymbols_600SemiBold.ttf.png)||
|![NotoSansSymbols_700Bold](./NotoSansSymbols_700Bold.ttf.png)|![NotoSansSymbols_800ExtraBold](./NotoSansSymbols_800ExtraBold.ttf.png)|![NotoSansSymbols_900Black](./NotoSansSymbols_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-symbols` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Symbols page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Symbols) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Symbols on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Symbols)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-symbols)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-symbols)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
