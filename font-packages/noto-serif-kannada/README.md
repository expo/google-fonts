# @expo-google-fonts/noto-serif-kannada

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-kannada)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-kannada)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-kannada)

This package lets you use the [**Noto Serif Kannada**](https://fonts.google.com/specimen/Noto+Serif+Kannada) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Kannada

![Noto Serif Kannada](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifKannada_100Thin`
- `NotoSerifKannada_200ExtraLight`
- `NotoSerifKannada_300Light`
- `NotoSerifKannada_400Regular`
- `NotoSerifKannada_500Medium`
- `NotoSerifKannada_600SemiBold`
- `NotoSerifKannada_700Bold`
- `NotoSerifKannada_800ExtraBold`
- `NotoSerifKannada_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/noto-serif-kannada expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSerifKannada_100Thin,
  NotoSerifKannada_200ExtraLight,
  NotoSerifKannada_300Light,
  NotoSerifKannada_400Regular,
  NotoSerifKannada_500Medium,
  NotoSerifKannada_600SemiBold,
  NotoSerifKannada_700Bold,
  NotoSerifKannada_800ExtraBold,
  NotoSerifKannada_900Black,
} from '@expo-google-fonts/noto-serif-kannada';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerifKannada_100Thin,
    NotoSerifKannada_200ExtraLight,
    NotoSerifKannada_300Light,
    NotoSerifKannada_400Regular,
    NotoSerifKannada_500Medium,
    NotoSerifKannada_600SemiBold,
    NotoSerifKannada_700Bold,
    NotoSerifKannada_800ExtraBold,
    NotoSerifKannada_900Black,
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
            fontFamily: 'NotoSerifKannada_100Thin',
          }}>
          Noto Serif Kannada Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifKannada_200ExtraLight',
          }}>
          Noto Serif Kannada Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifKannada_300Light',
          }}>
          Noto Serif Kannada Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifKannada_400Regular',
          }}>
          Noto Serif Kannada Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifKannada_500Medium',
          }}>
          Noto Serif Kannada Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifKannada_600SemiBold',
          }}>
          Noto Serif Kannada Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifKannada_700Bold',
          }}>
          Noto Serif Kannada Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifKannada_800ExtraBold',
          }}>
          Noto Serif Kannada Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifKannada_900Black',
          }}>
          Noto Serif Kannada Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifKannada_100Thin](./NotoSerifKannada_100Thin.ttf.png)|![NotoSerifKannada_200ExtraLight](./NotoSerifKannada_200ExtraLight.ttf.png)|![NotoSerifKannada_300Light](./NotoSerifKannada_300Light.ttf.png)||
|![NotoSerifKannada_400Regular](./NotoSerifKannada_400Regular.ttf.png)|![NotoSerifKannada_500Medium](./NotoSerifKannada_500Medium.ttf.png)|![NotoSerifKannada_600SemiBold](./NotoSerifKannada_600SemiBold.ttf.png)||
|![NotoSerifKannada_700Bold](./NotoSerifKannada_700Bold.ttf.png)|![NotoSerifKannada_800ExtraBold](./NotoSerifKannada_800ExtraBold.ttf.png)|![NotoSerifKannada_900Black](./NotoSerifKannada_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-serif-kannada` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Kannada page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Kannada) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Kannada on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Kannada)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-kannada)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-kannada)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
