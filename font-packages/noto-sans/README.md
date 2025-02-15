# @expo-google-fonts/noto-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans)

This package lets you use the [**Noto Sans**](https://fonts.google.com/specimen/Noto+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans

![Noto Sans](./font-family.png)

This font family contains [18 styles](#-gallery).

- `NotoSans_100Thin`
- `NotoSans_200ExtraLight`
- `NotoSans_300Light`
- `NotoSans_400Regular`
- `NotoSans_500Medium`
- `NotoSans_600SemiBold`
- `NotoSans_700Bold`
- `NotoSans_800ExtraBold`
- `NotoSans_900Black`
- `NotoSans_100Thin_Italic`
- `NotoSans_200ExtraLight_Italic`
- `NotoSans_300Light_Italic`
- `NotoSans_400Regular_Italic`
- `NotoSans_500Medium_Italic`
- `NotoSans_600SemiBold_Italic`
- `NotoSans_700Bold_Italic`
- `NotoSans_800ExtraBold_Italic`
- `NotoSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-sans expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSans_100Thin,
  NotoSans_200ExtraLight,
  NotoSans_300Light,
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_600SemiBold,
  NotoSans_700Bold,
  NotoSans_800ExtraBold,
  NotoSans_900Black,
  NotoSans_100Thin_Italic,
  NotoSans_200ExtraLight_Italic,
  NotoSans_300Light_Italic,
  NotoSans_400Regular_Italic,
  NotoSans_500Medium_Italic,
  NotoSans_600SemiBold_Italic,
  NotoSans_700Bold_Italic,
  NotoSans_800ExtraBold_Italic,
  NotoSans_900Black_Italic,
} from '@expo-google-fonts/noto-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSans_100Thin,
    NotoSans_200ExtraLight,
    NotoSans_300Light,
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_600SemiBold,
    NotoSans_700Bold,
    NotoSans_800ExtraBold,
    NotoSans_900Black,
    NotoSans_100Thin_Italic,
    NotoSans_200ExtraLight_Italic,
    NotoSans_300Light_Italic,
    NotoSans_400Regular_Italic,
    NotoSans_500Medium_Italic,
    NotoSans_600SemiBold_Italic,
    NotoSans_700Bold_Italic,
    NotoSans_800ExtraBold_Italic,
    NotoSans_900Black_Italic,
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
            fontFamily: 'NotoSans_100Thin',
          }}>
          Noto Sans Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_200ExtraLight',
          }}>
          Noto Sans Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_300Light',
          }}>
          Noto Sans Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_400Regular',
          }}>
          Noto Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_500Medium',
          }}>
          Noto Sans Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_600SemiBold',
          }}>
          Noto Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_700Bold',
          }}>
          Noto Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_800ExtraBold',
          }}>
          Noto Sans Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_900Black',
          }}>
          Noto Sans Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_100Thin_Italic',
          }}>
          Noto Sans Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_200ExtraLight_Italic',
          }}>
          Noto Sans Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_300Light_Italic',
          }}>
          Noto Sans Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_400Regular_Italic',
          }}>
          Noto Sans Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_500Medium_Italic',
          }}>
          Noto Sans Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_600SemiBold_Italic',
          }}>
          Noto Sans Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_700Bold_Italic',
          }}>
          Noto Sans Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_800ExtraBold_Italic',
          }}>
          Noto Sans Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSans_900Black_Italic',
          }}>
          Noto Sans Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSans_100Thin](./NotoSans_100Thin.ttf.png)|![NotoSans_200ExtraLight](./NotoSans_200ExtraLight.ttf.png)|![NotoSans_300Light](./NotoSans_300Light.ttf.png)||
|![NotoSans_400Regular](./NotoSans_400Regular.ttf.png)|![NotoSans_500Medium](./NotoSans_500Medium.ttf.png)|![NotoSans_600SemiBold](./NotoSans_600SemiBold.ttf.png)||
|![NotoSans_700Bold](./NotoSans_700Bold.ttf.png)|![NotoSans_800ExtraBold](./NotoSans_800ExtraBold.ttf.png)|![NotoSans_900Black](./NotoSans_900Black.ttf.png)||
|![NotoSans_100Thin_Italic](./NotoSans_100Thin_Italic.ttf.png)|![NotoSans_200ExtraLight_Italic](./NotoSans_200ExtraLight_Italic.ttf.png)|![NotoSans_300Light_Italic](./NotoSans_300Light_Italic.ttf.png)||
|![NotoSans_400Regular_Italic](./NotoSans_400Regular_Italic.ttf.png)|![NotoSans_500Medium_Italic](./NotoSans_500Medium_Italic.ttf.png)|![NotoSans_600SemiBold_Italic](./NotoSans_600SemiBold_Italic.ttf.png)||
|![NotoSans_700Bold_Italic](./NotoSans_700Bold_Italic.ttf.png)|![NotoSans_800ExtraBold_Italic](./NotoSans_800ExtraBold_Italic.ttf.png)|![NotoSans_900Black_Italic](./NotoSans_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans on Google Fonts](https://fonts.google.com/specimen/Noto+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
