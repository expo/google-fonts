# @expo-google-fonts/noto-sans-thai

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-thai)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-thai)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-thai)

This package lets you use the [**Noto Sans Thai**](https://fonts.google.com/specimen/Noto+Sans+Thai) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Thai

![Noto Sans Thai](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansThai_100Thin`
- `NotoSansThai_200ExtraLight`
- `NotoSansThai_300Light`
- `NotoSansThai_400Regular`
- `NotoSansThai_500Medium`
- `NotoSansThai_600SemiBold`
- `NotoSansThai_700Bold`
- `NotoSansThai_800ExtraBold`
- `NotoSansThai_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/noto-sans-thai expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansThai_100Thin,
  NotoSansThai_200ExtraLight,
  NotoSansThai_300Light,
  NotoSansThai_400Regular,
  NotoSansThai_500Medium,
  NotoSansThai_600SemiBold,
  NotoSansThai_700Bold,
  NotoSansThai_800ExtraBold,
  NotoSansThai_900Black,
} from '@expo-google-fonts/noto-sans-thai';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansThai_100Thin,
    NotoSansThai_200ExtraLight,
    NotoSansThai_300Light,
    NotoSansThai_400Regular,
    NotoSansThai_500Medium,
    NotoSansThai_600SemiBold,
    NotoSansThai_700Bold,
    NotoSansThai_800ExtraBold,
    NotoSansThai_900Black,
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
            fontFamily: 'NotoSansThai_100Thin',
          }}>
          Noto Sans Thai Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThai_200ExtraLight',
          }}>
          Noto Sans Thai Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThai_300Light',
          }}>
          Noto Sans Thai Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThai_400Regular',
          }}>
          Noto Sans Thai Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThai_500Medium',
          }}>
          Noto Sans Thai Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThai_600SemiBold',
          }}>
          Noto Sans Thai Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThai_700Bold',
          }}>
          Noto Sans Thai Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThai_800ExtraBold',
          }}>
          Noto Sans Thai Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansThai_900Black',
          }}>
          Noto Sans Thai Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansThai_100Thin](./NotoSansThai_100Thin.ttf.png)|![NotoSansThai_200ExtraLight](./NotoSansThai_200ExtraLight.ttf.png)|![NotoSansThai_300Light](./NotoSansThai_300Light.ttf.png)||
|![NotoSansThai_400Regular](./NotoSansThai_400Regular.ttf.png)|![NotoSansThai_500Medium](./NotoSansThai_500Medium.ttf.png)|![NotoSansThai_600SemiBold](./NotoSansThai_600SemiBold.ttf.png)||
|![NotoSansThai_700Bold](./NotoSansThai_700Bold.ttf.png)|![NotoSansThai_800ExtraBold](./NotoSansThai_800ExtraBold.ttf.png)|![NotoSansThai_900Black](./NotoSansThai_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-thai` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Thai page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Thai) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Thai on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Thai)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-thai)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-thai)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
