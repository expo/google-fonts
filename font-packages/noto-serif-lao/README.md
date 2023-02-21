# @expo-google-fonts/noto-serif-lao

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-lao)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-lao)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-lao)

This package lets you use the [**Noto Serif Lao**](https://fonts.google.com/specimen/Noto+Serif+Lao) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Lao

![Noto Serif Lao](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifLao_100Thin`
- `NotoSerifLao_200ExtraLight`
- `NotoSerifLao_300Light`
- `NotoSerifLao_400Regular`
- `NotoSerifLao_500Medium`
- `NotoSerifLao_600SemiBold`
- `NotoSerifLao_700Bold`
- `NotoSerifLao_800ExtraBold`
- `NotoSerifLao_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-serif-lao expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSerifLao_100Thin,
  NotoSerifLao_200ExtraLight,
  NotoSerifLao_300Light,
  NotoSerifLao_400Regular,
  NotoSerifLao_500Medium,
  NotoSerifLao_600SemiBold,
  NotoSerifLao_700Bold,
  NotoSerifLao_800ExtraBold,
  NotoSerifLao_900Black,
} from '@expo-google-fonts/noto-serif-lao';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerifLao_100Thin,
    NotoSerifLao_200ExtraLight,
    NotoSerifLao_300Light,
    NotoSerifLao_400Regular,
    NotoSerifLao_500Medium,
    NotoSerifLao_600SemiBold,
    NotoSerifLao_700Bold,
    NotoSerifLao_800ExtraBold,
    NotoSerifLao_900Black,
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
            fontFamily: 'NotoSerifLao_100Thin',
          }}>
          Noto Serif Lao Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifLao_200ExtraLight',
          }}>
          Noto Serif Lao Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifLao_300Light',
          }}>
          Noto Serif Lao Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifLao_400Regular',
          }}>
          Noto Serif Lao Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifLao_500Medium',
          }}>
          Noto Serif Lao Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifLao_600SemiBold',
          }}>
          Noto Serif Lao Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifLao_700Bold',
          }}>
          Noto Serif Lao Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifLao_800ExtraBold',
          }}>
          Noto Serif Lao Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifLao_900Black',
          }}>
          Noto Serif Lao Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifLao_100Thin](./NotoSerifLao_100Thin.ttf.png)|![NotoSerifLao_200ExtraLight](./NotoSerifLao_200ExtraLight.ttf.png)|![NotoSerifLao_300Light](./NotoSerifLao_300Light.ttf.png)||
|![NotoSerifLao_400Regular](./NotoSerifLao_400Regular.ttf.png)|![NotoSerifLao_500Medium](./NotoSerifLao_500Medium.ttf.png)|![NotoSerifLao_600SemiBold](./NotoSerifLao_600SemiBold.ttf.png)||
|![NotoSerifLao_700Bold](./NotoSerifLao_700Bold.ttf.png)|![NotoSerifLao_800ExtraBold](./NotoSerifLao_800ExtraBold.ttf.png)|![NotoSerifLao_900Black](./NotoSerifLao_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-serif-lao` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Lao page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Lao) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Lao on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Lao)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-lao)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-lao)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
