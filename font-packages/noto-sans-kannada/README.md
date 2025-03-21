# @expo-google-fonts/noto-sans-kannada

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-kannada)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-kannada)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-kannada)

This package lets you use the [**Noto Sans Kannada**](https://fonts.google.com/specimen/Noto+Sans+Kannada) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Kannada

![Noto Sans Kannada](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansKannada_100Thin`
- `NotoSansKannada_200ExtraLight`
- `NotoSansKannada_300Light`
- `NotoSansKannada_400Regular`
- `NotoSansKannada_500Medium`
- `NotoSansKannada_600SemiBold`
- `NotoSansKannada_700Bold`
- `NotoSansKannada_800ExtraBold`
- `NotoSansKannada_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/noto-sans-kannada expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSansKannada_100Thin,
  NotoSansKannada_200ExtraLight,
  NotoSansKannada_300Light,
  NotoSansKannada_400Regular,
  NotoSansKannada_500Medium,
  NotoSansKannada_600SemiBold,
  NotoSansKannada_700Bold,
  NotoSansKannada_800ExtraBold,
  NotoSansKannada_900Black,
} from '@expo-google-fonts/noto-sans-kannada';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansKannada_100Thin,
    NotoSansKannada_200ExtraLight,
    NotoSansKannada_300Light,
    NotoSansKannada_400Regular,
    NotoSansKannada_500Medium,
    NotoSansKannada_600SemiBold,
    NotoSansKannada_700Bold,
    NotoSansKannada_800ExtraBold,
    NotoSansKannada_900Black,
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
            fontFamily: 'NotoSansKannada_100Thin',
          }}>
          Noto Sans Kannada Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKannada_200ExtraLight',
          }}>
          Noto Sans Kannada Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKannada_300Light',
          }}>
          Noto Sans Kannada Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKannada_400Regular',
          }}>
          Noto Sans Kannada Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKannada_500Medium',
          }}>
          Noto Sans Kannada Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKannada_600SemiBold',
          }}>
          Noto Sans Kannada Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKannada_700Bold',
          }}>
          Noto Sans Kannada Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKannada_800ExtraBold',
          }}>
          Noto Sans Kannada Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSansKannada_900Black',
          }}>
          Noto Sans Kannada Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansKannada_100Thin](./NotoSansKannada_100Thin.ttf.png)|![NotoSansKannada_200ExtraLight](./NotoSansKannada_200ExtraLight.ttf.png)|![NotoSansKannada_300Light](./NotoSansKannada_300Light.ttf.png)||
|![NotoSansKannada_400Regular](./NotoSansKannada_400Regular.ttf.png)|![NotoSansKannada_500Medium](./NotoSansKannada_500Medium.ttf.png)|![NotoSansKannada_600SemiBold](./NotoSansKannada_600SemiBold.ttf.png)||
|![NotoSansKannada_700Bold](./NotoSansKannada_700Bold.ttf.png)|![NotoSansKannada_800ExtraBold](./NotoSansKannada_800ExtraBold.ttf.png)|![NotoSansKannada_900Black](./NotoSansKannada_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-kannada` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Kannada page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Kannada) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Kannada on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Kannada)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-kannada)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-kannada)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
