# @expo-google-fonts/noto-sans-cham

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-cham)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-cham)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-cham)

This package lets you use the [**Noto Sans Cham**](https://fonts.google.com/specimen/Noto+Sans+Cham) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Cham

![Noto Sans Cham](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansCham_100Thin`
- `NotoSansCham_200ExtraLight`
- `NotoSansCham_300Light`
- `NotoSansCham_400Regular`
- `NotoSansCham_500Medium`
- `NotoSansCham_600SemiBold`
- `NotoSansCham_700Bold`
- `NotoSansCham_800ExtraBold`
- `NotoSansCham_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-sans-cham expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansCham_100Thin,
  NotoSansCham_200ExtraLight,
  NotoSansCham_300Light,
  NotoSansCham_400Regular,
  NotoSansCham_500Medium,
  NotoSansCham_600SemiBold,
  NotoSansCham_700Bold,
  NotoSansCham_800ExtraBold,
  NotoSansCham_900Black,
} from '@expo-google-fonts/noto-sans-cham';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansCham_100Thin,
    NotoSansCham_200ExtraLight,
    NotoSansCham_300Light,
    NotoSansCham_400Regular,
    NotoSansCham_500Medium,
    NotoSansCham_600SemiBold,
    NotoSansCham_700Bold,
    NotoSansCham_800ExtraBold,
    NotoSansCham_900Black,
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
            fontFamily: 'NotoSansCham_100Thin',
          }}>
          Noto Sans Cham Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCham_200ExtraLight',
          }}>
          Noto Sans Cham Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCham_300Light',
          }}>
          Noto Sans Cham Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCham_400Regular',
          }}>
          Noto Sans Cham Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCham_500Medium',
          }}>
          Noto Sans Cham Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCham_600SemiBold',
          }}>
          Noto Sans Cham Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCham_700Bold',
          }}>
          Noto Sans Cham Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCham_800ExtraBold',
          }}>
          Noto Sans Cham Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansCham_900Black',
          }}>
          Noto Sans Cham Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansCham_100Thin](./NotoSansCham_100Thin.ttf.png)|![NotoSansCham_200ExtraLight](./NotoSansCham_200ExtraLight.ttf.png)|![NotoSansCham_300Light](./NotoSansCham_300Light.ttf.png)||
|![NotoSansCham_400Regular](./NotoSansCham_400Regular.ttf.png)|![NotoSansCham_500Medium](./NotoSansCham_500Medium.ttf.png)|![NotoSansCham_600SemiBold](./NotoSansCham_600SemiBold.ttf.png)||
|![NotoSansCham_700Bold](./NotoSansCham_700Bold.ttf.png)|![NotoSansCham_800ExtraBold](./NotoSansCham_800ExtraBold.ttf.png)|![NotoSansCham_900Black](./NotoSansCham_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-cham` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Cham page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Cham) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Cham on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Cham)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-cham)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-cham)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
