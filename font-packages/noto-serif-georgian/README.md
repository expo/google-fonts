# @expo-google-fonts/noto-serif-georgian

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-georgian)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-georgian)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-georgian)

This package lets you use the [**Noto Serif Georgian**](https://fonts.google.com/specimen/Noto+Serif+Georgian) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Georgian

![Noto Serif Georgian](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifGeorgian_100Thin`
- `NotoSerifGeorgian_200ExtraLight`
- `NotoSerifGeorgian_300Light`
- `NotoSerifGeorgian_400Regular`
- `NotoSerifGeorgian_500Medium`
- `NotoSerifGeorgian_600SemiBold`
- `NotoSerifGeorgian_700Bold`
- `NotoSerifGeorgian_800ExtraBold`
- `NotoSerifGeorgian_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/noto-serif-georgian expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSerifGeorgian_100Thin,
  NotoSerifGeorgian_200ExtraLight,
  NotoSerifGeorgian_300Light,
  NotoSerifGeorgian_400Regular,
  NotoSerifGeorgian_500Medium,
  NotoSerifGeorgian_600SemiBold,
  NotoSerifGeorgian_700Bold,
  NotoSerifGeorgian_800ExtraBold,
  NotoSerifGeorgian_900Black,
} from '@expo-google-fonts/noto-serif-georgian';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerifGeorgian_100Thin,
    NotoSerifGeorgian_200ExtraLight,
    NotoSerifGeorgian_300Light,
    NotoSerifGeorgian_400Regular,
    NotoSerifGeorgian_500Medium,
    NotoSerifGeorgian_600SemiBold,
    NotoSerifGeorgian_700Bold,
    NotoSerifGeorgian_800ExtraBold,
    NotoSerifGeorgian_900Black,
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
            fontFamily: 'NotoSerifGeorgian_100Thin',
          }}>
          Noto Serif Georgian Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifGeorgian_200ExtraLight',
          }}>
          Noto Serif Georgian Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifGeorgian_300Light',
          }}>
          Noto Serif Georgian Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifGeorgian_400Regular',
          }}>
          Noto Serif Georgian Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifGeorgian_500Medium',
          }}>
          Noto Serif Georgian Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifGeorgian_600SemiBold',
          }}>
          Noto Serif Georgian Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifGeorgian_700Bold',
          }}>
          Noto Serif Georgian Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifGeorgian_800ExtraBold',
          }}>
          Noto Serif Georgian Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifGeorgian_900Black',
          }}>
          Noto Serif Georgian Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifGeorgian_100Thin](./NotoSerifGeorgian_100Thin.ttf.png)|![NotoSerifGeorgian_200ExtraLight](./NotoSerifGeorgian_200ExtraLight.ttf.png)|![NotoSerifGeorgian_300Light](./NotoSerifGeorgian_300Light.ttf.png)||
|![NotoSerifGeorgian_400Regular](./NotoSerifGeorgian_400Regular.ttf.png)|![NotoSerifGeorgian_500Medium](./NotoSerifGeorgian_500Medium.ttf.png)|![NotoSerifGeorgian_600SemiBold](./NotoSerifGeorgian_600SemiBold.ttf.png)||
|![NotoSerifGeorgian_700Bold](./NotoSerifGeorgian_700Bold.ttf.png)|![NotoSerifGeorgian_800ExtraBold](./NotoSerifGeorgian_800ExtraBold.ttf.png)|![NotoSerifGeorgian_900Black](./NotoSerifGeorgian_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-serif-georgian` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Georgian page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Georgian) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Georgian on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Georgian)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-georgian)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-georgian)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
