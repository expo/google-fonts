# @expo-google-fonts/noto-serif-hk

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-hk)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-hk)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-hk)

This package lets you use the [**Noto Serif HK**](https://fonts.google.com/specimen/Noto+Serif+HK) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif HK

![Noto Serif HK](./font-family.png)

This font family contains [8 styles](#-gallery).

- `NotoSerifHK_200ExtraLight`
- `NotoSerifHK_300Light`
- `NotoSerifHK_400Regular`
- `NotoSerifHK_500Medium`
- `NotoSerifHK_600SemiBold`
- `NotoSerifHK_700Bold`
- `NotoSerifHK_800ExtraBold`
- `NotoSerifHK_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/noto-serif-hk expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSerifHK_200ExtraLight,
  NotoSerifHK_300Light,
  NotoSerifHK_400Regular,
  NotoSerifHK_500Medium,
  NotoSerifHK_600SemiBold,
  NotoSerifHK_700Bold,
  NotoSerifHK_800ExtraBold,
  NotoSerifHK_900Black,
} from '@expo-google-fonts/noto-serif-hk';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerifHK_200ExtraLight,
    NotoSerifHK_300Light,
    NotoSerifHK_400Regular,
    NotoSerifHK_500Medium,
    NotoSerifHK_600SemiBold,
    NotoSerifHK_700Bold,
    NotoSerifHK_800ExtraBold,
    NotoSerifHK_900Black,
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
            fontFamily: 'NotoSerifHK_200ExtraLight',
          }}>
          Noto Serif HK Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHK_300Light',
          }}>
          Noto Serif HK Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHK_400Regular',
          }}>
          Noto Serif HK Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHK_500Medium',
          }}>
          Noto Serif HK Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHK_600SemiBold',
          }}>
          Noto Serif HK Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHK_700Bold',
          }}>
          Noto Serif HK Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHK_800ExtraBold',
          }}>
          Noto Serif HK Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifHK_900Black',
          }}>
          Noto Serif HK Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifHK_200ExtraLight](./NotoSerifHK_200ExtraLight.ttf.png)|![NotoSerifHK_300Light](./NotoSerifHK_300Light.ttf.png)|![NotoSerifHK_400Regular](./NotoSerifHK_400Regular.ttf.png)||
|![NotoSerifHK_500Medium](./NotoSerifHK_500Medium.ttf.png)|![NotoSerifHK_600SemiBold](./NotoSerifHK_600SemiBold.ttf.png)|![NotoSerifHK_700Bold](./NotoSerifHK_700Bold.ttf.png)||
|![NotoSerifHK_800ExtraBold](./NotoSerifHK_800ExtraBold.ttf.png)|![NotoSerifHK_900Black](./NotoSerifHK_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-serif-hk` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif HK page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+HK) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif HK on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+HK)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-hk)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-hk)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
