# @expo-google-fonts/noto-sans-bengali

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-bengali)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-bengali)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-bengali)

This package lets you use the [**Noto Sans Bengali**](https://fonts.google.com/specimen/Noto+Sans+Bengali) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Bengali

![Noto Sans Bengali](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansBengali_100Thin`
- `NotoSansBengali_200ExtraLight`
- `NotoSansBengali_300Light`
- `NotoSansBengali_400Regular`
- `NotoSansBengali_500Medium`
- `NotoSansBengali_600SemiBold`
- `NotoSansBengali_700Bold`
- `NotoSansBengali_800ExtraBold`
- `NotoSansBengali_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-sans-bengali expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansBengali_100Thin,
  NotoSansBengali_200ExtraLight,
  NotoSansBengali_300Light,
  NotoSansBengali_400Regular,
  NotoSansBengali_500Medium,
  NotoSansBengali_600SemiBold,
  NotoSansBengali_700Bold,
  NotoSansBengali_800ExtraBold,
  NotoSansBengali_900Black,
} from '@expo-google-fonts/noto-sans-bengali';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansBengali_100Thin,
    NotoSansBengali_200ExtraLight,
    NotoSansBengali_300Light,
    NotoSansBengali_400Regular,
    NotoSansBengali_500Medium,
    NotoSansBengali_600SemiBold,
    NotoSansBengali_700Bold,
    NotoSansBengali_800ExtraBold,
    NotoSansBengali_900Black,
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
            fontFamily: 'NotoSansBengali_100Thin',
          }}>
          Noto Sans Bengali Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansBengali_200ExtraLight',
          }}>
          Noto Sans Bengali Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansBengali_300Light',
          }}>
          Noto Sans Bengali Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansBengali_400Regular',
          }}>
          Noto Sans Bengali Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansBengali_500Medium',
          }}>
          Noto Sans Bengali Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansBengali_600SemiBold',
          }}>
          Noto Sans Bengali Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansBengali_700Bold',
          }}>
          Noto Sans Bengali Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansBengali_800ExtraBold',
          }}>
          Noto Sans Bengali Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansBengali_900Black',
          }}>
          Noto Sans Bengali Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansBengali_100Thin](./NotoSansBengali_100Thin.ttf.png)|![NotoSansBengali_200ExtraLight](./NotoSansBengali_200ExtraLight.ttf.png)|![NotoSansBengali_300Light](./NotoSansBengali_300Light.ttf.png)||
|![NotoSansBengali_400Regular](./NotoSansBengali_400Regular.ttf.png)|![NotoSansBengali_500Medium](./NotoSansBengali_500Medium.ttf.png)|![NotoSansBengali_600SemiBold](./NotoSansBengali_600SemiBold.ttf.png)||
|![NotoSansBengali_700Bold](./NotoSansBengali_700Bold.ttf.png)|![NotoSansBengali_800ExtraBold](./NotoSansBengali_800ExtraBold.ttf.png)|![NotoSansBengali_900Black](./NotoSansBengali_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-bengali` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Bengali page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Bengali) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Bengali on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Bengali)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-bengali)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-bengali)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
