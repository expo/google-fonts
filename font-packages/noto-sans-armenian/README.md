# @expo-google-fonts/noto-sans-armenian

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-armenian)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-armenian)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-armenian)

This package lets you use the [**Noto Sans Armenian**](https://fonts.google.com/specimen/Noto+Sans+Armenian) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Armenian

![Noto Sans Armenian](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansArmenian_100Thin`
- `NotoSansArmenian_200ExtraLight`
- `NotoSansArmenian_300Light`
- `NotoSansArmenian_400Regular`
- `NotoSansArmenian_500Medium`
- `NotoSansArmenian_600SemiBold`
- `NotoSansArmenian_700Bold`
- `NotoSansArmenian_800ExtraBold`
- `NotoSansArmenian_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/noto-sans-armenian expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansArmenian_100Thin,
  NotoSansArmenian_200ExtraLight,
  NotoSansArmenian_300Light,
  NotoSansArmenian_400Regular,
  NotoSansArmenian_500Medium,
  NotoSansArmenian_600SemiBold,
  NotoSansArmenian_700Bold,
  NotoSansArmenian_800ExtraBold,
  NotoSansArmenian_900Black,
} from '@expo-google-fonts/noto-sans-armenian';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansArmenian_100Thin,
    NotoSansArmenian_200ExtraLight,
    NotoSansArmenian_300Light,
    NotoSansArmenian_400Regular,
    NotoSansArmenian_500Medium,
    NotoSansArmenian_600SemiBold,
    NotoSansArmenian_700Bold,
    NotoSansArmenian_800ExtraBold,
    NotoSansArmenian_900Black,
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
            fontFamily: 'NotoSansArmenian_100Thin',
          }}>
          Noto Sans Armenian Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansArmenian_200ExtraLight',
          }}>
          Noto Sans Armenian Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansArmenian_300Light',
          }}>
          Noto Sans Armenian Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansArmenian_400Regular',
          }}>
          Noto Sans Armenian Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansArmenian_500Medium',
          }}>
          Noto Sans Armenian Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansArmenian_600SemiBold',
          }}>
          Noto Sans Armenian Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansArmenian_700Bold',
          }}>
          Noto Sans Armenian Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansArmenian_800ExtraBold',
          }}>
          Noto Sans Armenian Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansArmenian_900Black',
          }}>
          Noto Sans Armenian Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansArmenian_100Thin](./NotoSansArmenian_100Thin.ttf.png)|![NotoSansArmenian_200ExtraLight](./NotoSansArmenian_200ExtraLight.ttf.png)|![NotoSansArmenian_300Light](./NotoSansArmenian_300Light.ttf.png)||
|![NotoSansArmenian_400Regular](./NotoSansArmenian_400Regular.ttf.png)|![NotoSansArmenian_500Medium](./NotoSansArmenian_500Medium.ttf.png)|![NotoSansArmenian_600SemiBold](./NotoSansArmenian_600SemiBold.ttf.png)||
|![NotoSansArmenian_700Bold](./NotoSansArmenian_700Bold.ttf.png)|![NotoSansArmenian_800ExtraBold](./NotoSansArmenian_800ExtraBold.ttf.png)|![NotoSansArmenian_900Black](./NotoSansArmenian_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-armenian` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Armenian page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Armenian) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Armenian on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Armenian)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-armenian)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-armenian)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
