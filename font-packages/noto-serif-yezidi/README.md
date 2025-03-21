# @expo-google-fonts/noto-serif-yezidi

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-yezidi)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-yezidi)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-yezidi)

This package lets you use the [**Noto Serif Yezidi**](https://fonts.google.com/specimen/Noto+Serif+Yezidi) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Yezidi

![Noto Serif Yezidi](./font-family.png)

This font family contains [4 styles](#-gallery).

- `NotoSerifYezidi_400Regular`
- `NotoSerifYezidi_500Medium`
- `NotoSerifYezidi_600SemiBold`
- `NotoSerifYezidi_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/noto-serif-yezidi expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSerifYezidi_400Regular,
  NotoSerifYezidi_500Medium,
  NotoSerifYezidi_600SemiBold,
  NotoSerifYezidi_700Bold,
} from '@expo-google-fonts/noto-serif-yezidi';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerifYezidi_400Regular,
    NotoSerifYezidi_500Medium,
    NotoSerifYezidi_600SemiBold,
    NotoSerifYezidi_700Bold,
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
            fontFamily: 'NotoSerifYezidi_400Regular',
          }}>
          Noto Serif Yezidi Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifYezidi_500Medium',
          }}>
          Noto Serif Yezidi Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifYezidi_600SemiBold',
          }}>
          Noto Serif Yezidi Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifYezidi_700Bold',
          }}>
          Noto Serif Yezidi Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifYezidi_400Regular](./NotoSerifYezidi_400Regular.ttf.png)|![NotoSerifYezidi_500Medium](./NotoSerifYezidi_500Medium.ttf.png)|![NotoSerifYezidi_600SemiBold](./NotoSerifYezidi_600SemiBold.ttf.png)||
|![NotoSerifYezidi_700Bold](./NotoSerifYezidi_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-serif-yezidi` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Yezidi page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Yezidi) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Yezidi on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Yezidi)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-yezidi)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-yezidi)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
