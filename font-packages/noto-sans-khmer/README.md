# @expo-google-fonts/noto-sans-khmer

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-khmer)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-khmer)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-khmer)

This package lets you use the [**Noto Sans Khmer**](https://fonts.google.com/specimen/Noto+Sans+Khmer) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Khmer

![Noto Sans Khmer](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansKhmer_100Thin`
- `NotoSansKhmer_200ExtraLight`
- `NotoSansKhmer_300Light`
- `NotoSansKhmer_400Regular`
- `NotoSansKhmer_500Medium`
- `NotoSansKhmer_600SemiBold`
- `NotoSansKhmer_700Bold`
- `NotoSansKhmer_800ExtraBold`
- `NotoSansKhmer_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-sans-khmer expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansKhmer_100Thin,
  NotoSansKhmer_200ExtraLight,
  NotoSansKhmer_300Light,
  NotoSansKhmer_400Regular,
  NotoSansKhmer_500Medium,
  NotoSansKhmer_600SemiBold,
  NotoSansKhmer_700Bold,
  NotoSansKhmer_800ExtraBold,
  NotoSansKhmer_900Black,
} from '@expo-google-fonts/noto-sans-khmer';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansKhmer_100Thin,
    NotoSansKhmer_200ExtraLight,
    NotoSansKhmer_300Light,
    NotoSansKhmer_400Regular,
    NotoSansKhmer_500Medium,
    NotoSansKhmer_600SemiBold,
    NotoSansKhmer_700Bold,
    NotoSansKhmer_800ExtraBold,
    NotoSansKhmer_900Black,
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
            fontFamily: 'NotoSansKhmer_100Thin',
          }}>
          Noto Sans Khmer Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKhmer_200ExtraLight',
          }}>
          Noto Sans Khmer Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKhmer_300Light',
          }}>
          Noto Sans Khmer Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKhmer_400Regular',
          }}>
          Noto Sans Khmer Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKhmer_500Medium',
          }}>
          Noto Sans Khmer Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKhmer_600SemiBold',
          }}>
          Noto Sans Khmer Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKhmer_700Bold',
          }}>
          Noto Sans Khmer Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKhmer_800ExtraBold',
          }}>
          Noto Sans Khmer Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKhmer_900Black',
          }}>
          Noto Sans Khmer Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansKhmer_100Thin](./NotoSansKhmer_100Thin.ttf.png)|![NotoSansKhmer_200ExtraLight](./NotoSansKhmer_200ExtraLight.ttf.png)|![NotoSansKhmer_300Light](./NotoSansKhmer_300Light.ttf.png)||
|![NotoSansKhmer_400Regular](./NotoSansKhmer_400Regular.ttf.png)|![NotoSansKhmer_500Medium](./NotoSansKhmer_500Medium.ttf.png)|![NotoSansKhmer_600SemiBold](./NotoSansKhmer_600SemiBold.ttf.png)||
|![NotoSansKhmer_700Bold](./NotoSansKhmer_700Bold.ttf.png)|![NotoSansKhmer_800ExtraBold](./NotoSansKhmer_800ExtraBold.ttf.png)|![NotoSansKhmer_900Black](./NotoSansKhmer_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-khmer` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Khmer page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Khmer) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Khmer on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Khmer)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-khmer)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-khmer)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
