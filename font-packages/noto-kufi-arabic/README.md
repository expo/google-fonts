# @expo-google-fonts/noto-kufi-arabic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-kufi-arabic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-kufi-arabic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-kufi-arabic)

This package lets you use the [**Noto Kufi Arabic**](https://fonts.google.com/specimen/Noto+Kufi+Arabic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Kufi Arabic

![Noto Kufi Arabic](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoKufiArabic_100Thin`
- `NotoKufiArabic_200ExtraLight`
- `NotoKufiArabic_300Light`
- `NotoKufiArabic_400Regular`
- `NotoKufiArabic_500Medium`
- `NotoKufiArabic_600SemiBold`
- `NotoKufiArabic_700Bold`
- `NotoKufiArabic_800ExtraBold`
- `NotoKufiArabic_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-kufi-arabic expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoKufiArabic_100Thin,
  NotoKufiArabic_200ExtraLight,
  NotoKufiArabic_300Light,
  NotoKufiArabic_400Regular,
  NotoKufiArabic_500Medium,
  NotoKufiArabic_600SemiBold,
  NotoKufiArabic_700Bold,
  NotoKufiArabic_800ExtraBold,
  NotoKufiArabic_900Black,
} from '@expo-google-fonts/noto-kufi-arabic';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoKufiArabic_100Thin,
    NotoKufiArabic_200ExtraLight,
    NotoKufiArabic_300Light,
    NotoKufiArabic_400Regular,
    NotoKufiArabic_500Medium,
    NotoKufiArabic_600SemiBold,
    NotoKufiArabic_700Bold,
    NotoKufiArabic_800ExtraBold,
    NotoKufiArabic_900Black,
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
            fontFamily: 'NotoKufiArabic_100Thin',
          }}>
          Noto Kufi Arabic Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoKufiArabic_200ExtraLight',
          }}>
          Noto Kufi Arabic Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoKufiArabic_300Light',
          }}>
          Noto Kufi Arabic Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoKufiArabic_400Regular',
          }}>
          Noto Kufi Arabic Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoKufiArabic_500Medium',
          }}>
          Noto Kufi Arabic Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoKufiArabic_600SemiBold',
          }}>
          Noto Kufi Arabic Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoKufiArabic_700Bold',
          }}>
          Noto Kufi Arabic Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoKufiArabic_800ExtraBold',
          }}>
          Noto Kufi Arabic Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoKufiArabic_900Black',
          }}>
          Noto Kufi Arabic Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoKufiArabic_100Thin](./NotoKufiArabic_100Thin.ttf.png)|![NotoKufiArabic_200ExtraLight](./NotoKufiArabic_200ExtraLight.ttf.png)|![NotoKufiArabic_300Light](./NotoKufiArabic_300Light.ttf.png)||
|![NotoKufiArabic_400Regular](./NotoKufiArabic_400Regular.ttf.png)|![NotoKufiArabic_500Medium](./NotoKufiArabic_500Medium.ttf.png)|![NotoKufiArabic_600SemiBold](./NotoKufiArabic_600SemiBold.ttf.png)||
|![NotoKufiArabic_700Bold](./NotoKufiArabic_700Bold.ttf.png)|![NotoKufiArabic_800ExtraBold](./NotoKufiArabic_800ExtraBold.ttf.png)|![NotoKufiArabic_900Black](./NotoKufiArabic_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-kufi-arabic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Kufi Arabic page on Google Fonts](https://fonts.google.com/specimen/Noto+Kufi+Arabic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Kufi Arabic on Google Fonts](https://fonts.google.com/specimen/Noto+Kufi+Arabic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-kufi-arabic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-kufi-arabic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
