# @expo-google-fonts/noto-sans-gujarati

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-gujarati)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-gujarati)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-gujarati)

This package lets you use the [**Noto Sans Gujarati**](https://fonts.google.com/specimen/Noto+Sans+Gujarati) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Gujarati

![Noto Sans Gujarati](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansGujarati_100Thin`
- `NotoSansGujarati_200ExtraLight`
- `NotoSansGujarati_300Light`
- `NotoSansGujarati_400Regular`
- `NotoSansGujarati_500Medium`
- `NotoSansGujarati_600SemiBold`
- `NotoSansGujarati_700Bold`
- `NotoSansGujarati_800ExtraBold`
- `NotoSansGujarati_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/noto-sans-gujarati expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansGujarati_100Thin,
  NotoSansGujarati_200ExtraLight,
  NotoSansGujarati_300Light,
  NotoSansGujarati_400Regular,
  NotoSansGujarati_500Medium,
  NotoSansGujarati_600SemiBold,
  NotoSansGujarati_700Bold,
  NotoSansGujarati_800ExtraBold,
  NotoSansGujarati_900Black,
} from '@expo-google-fonts/noto-sans-gujarati';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansGujarati_100Thin,
    NotoSansGujarati_200ExtraLight,
    NotoSansGujarati_300Light,
    NotoSansGujarati_400Regular,
    NotoSansGujarati_500Medium,
    NotoSansGujarati_600SemiBold,
    NotoSansGujarati_700Bold,
    NotoSansGujarati_800ExtraBold,
    NotoSansGujarati_900Black,
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
            fontFamily: 'NotoSansGujarati_100Thin',
          }}>
          Noto Sans Gujarati Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansGujarati_200ExtraLight',
          }}>
          Noto Sans Gujarati Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansGujarati_300Light',
          }}>
          Noto Sans Gujarati Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansGujarati_400Regular',
          }}>
          Noto Sans Gujarati Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansGujarati_500Medium',
          }}>
          Noto Sans Gujarati Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansGujarati_600SemiBold',
          }}>
          Noto Sans Gujarati Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansGujarati_700Bold',
          }}>
          Noto Sans Gujarati Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansGujarati_800ExtraBold',
          }}>
          Noto Sans Gujarati Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansGujarati_900Black',
          }}>
          Noto Sans Gujarati Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansGujarati_100Thin](./NotoSansGujarati_100Thin.ttf.png)|![NotoSansGujarati_200ExtraLight](./NotoSansGujarati_200ExtraLight.ttf.png)|![NotoSansGujarati_300Light](./NotoSansGujarati_300Light.ttf.png)||
|![NotoSansGujarati_400Regular](./NotoSansGujarati_400Regular.ttf.png)|![NotoSansGujarati_500Medium](./NotoSansGujarati_500Medium.ttf.png)|![NotoSansGujarati_600SemiBold](./NotoSansGujarati_600SemiBold.ttf.png)||
|![NotoSansGujarati_700Bold](./NotoSansGujarati_700Bold.ttf.png)|![NotoSansGujarati_800ExtraBold](./NotoSansGujarati_800ExtraBold.ttf.png)|![NotoSansGujarati_900Black](./NotoSansGujarati_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-gujarati` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Gujarati page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Gujarati) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Gujarati on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Gujarati)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-gujarati)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-gujarati)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
