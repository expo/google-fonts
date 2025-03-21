# @expo-google-fonts/noto-serif-hebrew

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-hebrew)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-hebrew)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-hebrew)

This package lets you use the [**Noto Serif Hebrew**](https://fonts.google.com/specimen/Noto+Serif+Hebrew) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Hebrew

![Noto Serif Hebrew](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifHebrew_100Thin`
- `NotoSerifHebrew_200ExtraLight`
- `NotoSerifHebrew_300Light`
- `NotoSerifHebrew_400Regular`
- `NotoSerifHebrew_500Medium`
- `NotoSerifHebrew_600SemiBold`
- `NotoSerifHebrew_700Bold`
- `NotoSerifHebrew_800ExtraBold`
- `NotoSerifHebrew_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/noto-serif-hebrew expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSerifHebrew_100Thin,
  NotoSerifHebrew_200ExtraLight,
  NotoSerifHebrew_300Light,
  NotoSerifHebrew_400Regular,
  NotoSerifHebrew_500Medium,
  NotoSerifHebrew_600SemiBold,
  NotoSerifHebrew_700Bold,
  NotoSerifHebrew_800ExtraBold,
  NotoSerifHebrew_900Black,
} from '@expo-google-fonts/noto-serif-hebrew';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerifHebrew_100Thin,
    NotoSerifHebrew_200ExtraLight,
    NotoSerifHebrew_300Light,
    NotoSerifHebrew_400Regular,
    NotoSerifHebrew_500Medium,
    NotoSerifHebrew_600SemiBold,
    NotoSerifHebrew_700Bold,
    NotoSerifHebrew_800ExtraBold,
    NotoSerifHebrew_900Black,
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
            fontFamily: 'NotoSerifHebrew_100Thin',
          }}>
          Noto Serif Hebrew Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHebrew_200ExtraLight',
          }}>
          Noto Serif Hebrew Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHebrew_300Light',
          }}>
          Noto Serif Hebrew Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHebrew_400Regular',
          }}>
          Noto Serif Hebrew Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHebrew_500Medium',
          }}>
          Noto Serif Hebrew Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHebrew_600SemiBold',
          }}>
          Noto Serif Hebrew Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHebrew_700Bold',
          }}>
          Noto Serif Hebrew Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHebrew_800ExtraBold',
          }}>
          Noto Serif Hebrew Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHebrew_900Black',
          }}>
          Noto Serif Hebrew Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifHebrew_100Thin](./NotoSerifHebrew_100Thin.ttf.png)|![NotoSerifHebrew_200ExtraLight](./NotoSerifHebrew_200ExtraLight.ttf.png)|![NotoSerifHebrew_300Light](./NotoSerifHebrew_300Light.ttf.png)||
|![NotoSerifHebrew_400Regular](./NotoSerifHebrew_400Regular.ttf.png)|![NotoSerifHebrew_500Medium](./NotoSerifHebrew_500Medium.ttf.png)|![NotoSerifHebrew_600SemiBold](./NotoSerifHebrew_600SemiBold.ttf.png)||
|![NotoSerifHebrew_700Bold](./NotoSerifHebrew_700Bold.ttf.png)|![NotoSerifHebrew_800ExtraBold](./NotoSerifHebrew_800ExtraBold.ttf.png)|![NotoSerifHebrew_900Black](./NotoSerifHebrew_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-serif-hebrew` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Hebrew page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Hebrew) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Hebrew on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Hebrew)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-hebrew)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-hebrew)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
