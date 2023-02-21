# @expo-google-fonts/noto-sans-thaana

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-thaana)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-thaana)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-thaana)

This package lets you use the [**Noto Sans Thaana**](https://fonts.google.com/specimen/Noto+Sans+Thaana) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Thaana

![Noto Sans Thaana](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansThaana_100Thin`
- `NotoSansThaana_200ExtraLight`
- `NotoSansThaana_300Light`
- `NotoSansThaana_400Regular`
- `NotoSansThaana_500Medium`
- `NotoSansThaana_600SemiBold`
- `NotoSansThaana_700Bold`
- `NotoSansThaana_800ExtraBold`
- `NotoSansThaana_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-sans-thaana expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansThaana_100Thin,
  NotoSansThaana_200ExtraLight,
  NotoSansThaana_300Light,
  NotoSansThaana_400Regular,
  NotoSansThaana_500Medium,
  NotoSansThaana_600SemiBold,
  NotoSansThaana_700Bold,
  NotoSansThaana_800ExtraBold,
  NotoSansThaana_900Black,
} from '@expo-google-fonts/noto-sans-thaana';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansThaana_100Thin,
    NotoSansThaana_200ExtraLight,
    NotoSansThaana_300Light,
    NotoSansThaana_400Regular,
    NotoSansThaana_500Medium,
    NotoSansThaana_600SemiBold,
    NotoSansThaana_700Bold,
    NotoSansThaana_800ExtraBold,
    NotoSansThaana_900Black,
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
            fontFamily: 'NotoSansThaana_100Thin',
          }}>
          Noto Sans Thaana Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThaana_200ExtraLight',
          }}>
          Noto Sans Thaana Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThaana_300Light',
          }}>
          Noto Sans Thaana Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThaana_400Regular',
          }}>
          Noto Sans Thaana Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThaana_500Medium',
          }}>
          Noto Sans Thaana Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThaana_600SemiBold',
          }}>
          Noto Sans Thaana Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThaana_700Bold',
          }}>
          Noto Sans Thaana Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThaana_800ExtraBold',
          }}>
          Noto Sans Thaana Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThaana_900Black',
          }}>
          Noto Sans Thaana Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansThaana_100Thin](./NotoSansThaana_100Thin.ttf.png)|![NotoSansThaana_200ExtraLight](./NotoSansThaana_200ExtraLight.ttf.png)|![NotoSansThaana_300Light](./NotoSansThaana_300Light.ttf.png)||
|![NotoSansThaana_400Regular](./NotoSansThaana_400Regular.ttf.png)|![NotoSansThaana_500Medium](./NotoSansThaana_500Medium.ttf.png)|![NotoSansThaana_600SemiBold](./NotoSansThaana_600SemiBold.ttf.png)||
|![NotoSansThaana_700Bold](./NotoSansThaana_700Bold.ttf.png)|![NotoSansThaana_800ExtraBold](./NotoSansThaana_800ExtraBold.ttf.png)|![NotoSansThaana_900Black](./NotoSansThaana_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-thaana` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Thaana page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Thaana) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Thaana on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Thaana)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-thaana)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-thaana)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
