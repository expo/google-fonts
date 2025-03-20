# @expo-google-fonts/noto-sans-syriac

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-syriac)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-syriac)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-syriac)

This package lets you use the [**Noto Sans Syriac**](https://fonts.google.com/specimen/Noto+Sans+Syriac) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Syriac

![Noto Sans Syriac](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansSyriac_100Thin`
- `NotoSansSyriac_200ExtraLight`
- `NotoSansSyriac_300Light`
- `NotoSansSyriac_400Regular`
- `NotoSansSyriac_500Medium`
- `NotoSansSyriac_600SemiBold`
- `NotoSansSyriac_700Bold`
- `NotoSansSyriac_800ExtraBold`
- `NotoSansSyriac_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-sans-syriac expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansSyriac_100Thin,
  NotoSansSyriac_200ExtraLight,
  NotoSansSyriac_300Light,
  NotoSansSyriac_400Regular,
  NotoSansSyriac_500Medium,
  NotoSansSyriac_600SemiBold,
  NotoSansSyriac_700Bold,
  NotoSansSyriac_800ExtraBold,
  NotoSansSyriac_900Black,
} from '@expo-google-fonts/noto-sans-syriac';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansSyriac_100Thin,
    NotoSansSyriac_200ExtraLight,
    NotoSansSyriac_300Light,
    NotoSansSyriac_400Regular,
    NotoSansSyriac_500Medium,
    NotoSansSyriac_600SemiBold,
    NotoSansSyriac_700Bold,
    NotoSansSyriac_800ExtraBold,
    NotoSansSyriac_900Black,
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
            fontFamily: 'NotoSansSyriac_100Thin',
          }}>
          Noto Sans Syriac Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriac_200ExtraLight',
          }}>
          Noto Sans Syriac Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriac_300Light',
          }}>
          Noto Sans Syriac Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriac_400Regular',
          }}>
          Noto Sans Syriac Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriac_500Medium',
          }}>
          Noto Sans Syriac Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriac_600SemiBold',
          }}>
          Noto Sans Syriac Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriac_700Bold',
          }}>
          Noto Sans Syriac Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriac_800ExtraBold',
          }}>
          Noto Sans Syriac Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansSyriac_900Black',
          }}>
          Noto Sans Syriac Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansSyriac_100Thin](./NotoSansSyriac_100Thin.ttf.png)|![NotoSansSyriac_200ExtraLight](./NotoSansSyriac_200ExtraLight.ttf.png)|![NotoSansSyriac_300Light](./NotoSansSyriac_300Light.ttf.png)||
|![NotoSansSyriac_400Regular](./NotoSansSyriac_400Regular.ttf.png)|![NotoSansSyriac_500Medium](./NotoSansSyriac_500Medium.ttf.png)|![NotoSansSyriac_600SemiBold](./NotoSansSyriac_600SemiBold.ttf.png)||
|![NotoSansSyriac_700Bold](./NotoSansSyriac_700Bold.ttf.png)|![NotoSansSyriac_800ExtraBold](./NotoSansSyriac_800ExtraBold.ttf.png)|![NotoSansSyriac_900Black](./NotoSansSyriac_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-syriac` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Syriac page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Syriac) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Syriac on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Syriac)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-syriac)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-syriac)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
