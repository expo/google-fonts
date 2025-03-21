# @expo-google-fonts/noto-sans-ethiopic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-ethiopic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-ethiopic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-ethiopic)

This package lets you use the [**Noto Sans Ethiopic**](https://fonts.google.com/specimen/Noto+Sans+Ethiopic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Ethiopic

![Noto Sans Ethiopic](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansEthiopic_100Thin`
- `NotoSansEthiopic_200ExtraLight`
- `NotoSansEthiopic_300Light`
- `NotoSansEthiopic_400Regular`
- `NotoSansEthiopic_500Medium`
- `NotoSansEthiopic_600SemiBold`
- `NotoSansEthiopic_700Bold`
- `NotoSansEthiopic_800ExtraBold`
- `NotoSansEthiopic_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/noto-sans-ethiopic expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansEthiopic_100Thin,
  NotoSansEthiopic_200ExtraLight,
  NotoSansEthiopic_300Light,
  NotoSansEthiopic_400Regular,
  NotoSansEthiopic_500Medium,
  NotoSansEthiopic_600SemiBold,
  NotoSansEthiopic_700Bold,
  NotoSansEthiopic_800ExtraBold,
  NotoSansEthiopic_900Black,
} from '@expo-google-fonts/noto-sans-ethiopic';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansEthiopic_100Thin,
    NotoSansEthiopic_200ExtraLight,
    NotoSansEthiopic_300Light,
    NotoSansEthiopic_400Regular,
    NotoSansEthiopic_500Medium,
    NotoSansEthiopic_600SemiBold,
    NotoSansEthiopic_700Bold,
    NotoSansEthiopic_800ExtraBold,
    NotoSansEthiopic_900Black,
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
            fontFamily: 'NotoSansEthiopic_100Thin',
          }}>
          Noto Sans Ethiopic Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansEthiopic_200ExtraLight',
          }}>
          Noto Sans Ethiopic Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansEthiopic_300Light',
          }}>
          Noto Sans Ethiopic Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansEthiopic_400Regular',
          }}>
          Noto Sans Ethiopic Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansEthiopic_500Medium',
          }}>
          Noto Sans Ethiopic Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansEthiopic_600SemiBold',
          }}>
          Noto Sans Ethiopic Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansEthiopic_700Bold',
          }}>
          Noto Sans Ethiopic Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansEthiopic_800ExtraBold',
          }}>
          Noto Sans Ethiopic Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansEthiopic_900Black',
          }}>
          Noto Sans Ethiopic Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansEthiopic_100Thin](./NotoSansEthiopic_100Thin.ttf.png)|![NotoSansEthiopic_200ExtraLight](./NotoSansEthiopic_200ExtraLight.ttf.png)|![NotoSansEthiopic_300Light](./NotoSansEthiopic_300Light.ttf.png)||
|![NotoSansEthiopic_400Regular](./NotoSansEthiopic_400Regular.ttf.png)|![NotoSansEthiopic_500Medium](./NotoSansEthiopic_500Medium.ttf.png)|![NotoSansEthiopic_600SemiBold](./NotoSansEthiopic_600SemiBold.ttf.png)||
|![NotoSansEthiopic_700Bold](./NotoSansEthiopic_700Bold.ttf.png)|![NotoSansEthiopic_800ExtraBold](./NotoSansEthiopic_800ExtraBold.ttf.png)|![NotoSansEthiopic_900Black](./NotoSansEthiopic_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-ethiopic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Ethiopic page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Ethiopic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Ethiopic on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Ethiopic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-ethiopic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-ethiopic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
