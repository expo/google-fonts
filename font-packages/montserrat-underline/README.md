# @expo-google-fonts/montserrat-underline

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/montserrat-underline)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/montserrat-underline)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/montserrat-underline)

This package lets you use the [**Montserrat Underline**](https://fonts.google.com/specimen/Montserrat+Underline) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Montserrat Underline

![Montserrat Underline](./font-family.png)

This font family contains [18 styles](#-gallery).

- `MontserratUnderline_100Thin`
- `MontserratUnderline_200ExtraLight`
- `MontserratUnderline_300Light`
- `MontserratUnderline_400Regular`
- `MontserratUnderline_500Medium`
- `MontserratUnderline_600SemiBold`
- `MontserratUnderline_700Bold`
- `MontserratUnderline_800ExtraBold`
- `MontserratUnderline_900Black`
- `MontserratUnderline_100Thin_Italic`
- `MontserratUnderline_200ExtraLight_Italic`
- `MontserratUnderline_300Light_Italic`
- `MontserratUnderline_400Regular_Italic`
- `MontserratUnderline_500Medium_Italic`
- `MontserratUnderline_600SemiBold_Italic`
- `MontserratUnderline_700Bold_Italic`
- `MontserratUnderline_800ExtraBold_Italic`
- `MontserratUnderline_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/montserrat-underline expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  MontserratUnderline_100Thin,
  MontserratUnderline_200ExtraLight,
  MontserratUnderline_300Light,
  MontserratUnderline_400Regular,
  MontserratUnderline_500Medium,
  MontserratUnderline_600SemiBold,
  MontserratUnderline_700Bold,
  MontserratUnderline_800ExtraBold,
  MontserratUnderline_900Black,
  MontserratUnderline_100Thin_Italic,
  MontserratUnderline_200ExtraLight_Italic,
  MontserratUnderline_300Light_Italic,
  MontserratUnderline_400Regular_Italic,
  MontserratUnderline_500Medium_Italic,
  MontserratUnderline_600SemiBold_Italic,
  MontserratUnderline_700Bold_Italic,
  MontserratUnderline_800ExtraBold_Italic,
  MontserratUnderline_900Black_Italic,
} from '@expo-google-fonts/montserrat-underline';

export default () => {
  let [fontsLoaded] = useFonts({
    MontserratUnderline_100Thin,
    MontserratUnderline_200ExtraLight,
    MontserratUnderline_300Light,
    MontserratUnderline_400Regular,
    MontserratUnderline_500Medium,
    MontserratUnderline_600SemiBold,
    MontserratUnderline_700Bold,
    MontserratUnderline_800ExtraBold,
    MontserratUnderline_900Black,
    MontserratUnderline_100Thin_Italic,
    MontserratUnderline_200ExtraLight_Italic,
    MontserratUnderline_300Light_Italic,
    MontserratUnderline_400Regular_Italic,
    MontserratUnderline_500Medium_Italic,
    MontserratUnderline_600SemiBold_Italic,
    MontserratUnderline_700Bold_Italic,
    MontserratUnderline_800ExtraBold_Italic,
    MontserratUnderline_900Black_Italic,
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
            fontFamily: 'MontserratUnderline_100Thin',
          }}>
          Montserrat Underline Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_200ExtraLight',
          }}>
          Montserrat Underline Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_300Light',
          }}>
          Montserrat Underline Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_400Regular',
          }}>
          Montserrat Underline Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_500Medium',
          }}>
          Montserrat Underline Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_600SemiBold',
          }}>
          Montserrat Underline Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_700Bold',
          }}>
          Montserrat Underline Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_800ExtraBold',
          }}>
          Montserrat Underline Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_900Black',
          }}>
          Montserrat Underline Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_100Thin_Italic',
          }}>
          Montserrat Underline Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_200ExtraLight_Italic',
          }}>
          Montserrat Underline Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_300Light_Italic',
          }}>
          Montserrat Underline Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_400Regular_Italic',
          }}>
          Montserrat Underline Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_500Medium_Italic',
          }}>
          Montserrat Underline Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_600SemiBold_Italic',
          }}>
          Montserrat Underline Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_700Bold_Italic',
          }}>
          Montserrat Underline Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_800ExtraBold_Italic',
          }}>
          Montserrat Underline Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratUnderline_900Black_Italic',
          }}>
          Montserrat Underline Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![MontserratUnderline_100Thin](./MontserratUnderline_100Thin.ttf.png)|![MontserratUnderline_200ExtraLight](./MontserratUnderline_200ExtraLight.ttf.png)|![MontserratUnderline_300Light](./MontserratUnderline_300Light.ttf.png)||
|![MontserratUnderline_400Regular](./MontserratUnderline_400Regular.ttf.png)|![MontserratUnderline_500Medium](./MontserratUnderline_500Medium.ttf.png)|![MontserratUnderline_600SemiBold](./MontserratUnderline_600SemiBold.ttf.png)||
|![MontserratUnderline_700Bold](./MontserratUnderline_700Bold.ttf.png)|![MontserratUnderline_800ExtraBold](./MontserratUnderline_800ExtraBold.ttf.png)|![MontserratUnderline_900Black](./MontserratUnderline_900Black.ttf.png)||
|![MontserratUnderline_100Thin_Italic](./MontserratUnderline_100Thin_Italic.ttf.png)|![MontserratUnderline_200ExtraLight_Italic](./MontserratUnderline_200ExtraLight_Italic.ttf.png)|![MontserratUnderline_300Light_Italic](./MontserratUnderline_300Light_Italic.ttf.png)||
|![MontserratUnderline_400Regular_Italic](./MontserratUnderline_400Regular_Italic.ttf.png)|![MontserratUnderline_500Medium_Italic](./MontserratUnderline_500Medium_Italic.ttf.png)|![MontserratUnderline_600SemiBold_Italic](./MontserratUnderline_600SemiBold_Italic.ttf.png)||
|![MontserratUnderline_700Bold_Italic](./MontserratUnderline_700Bold_Italic.ttf.png)|![MontserratUnderline_800ExtraBold_Italic](./MontserratUnderline_800ExtraBold_Italic.ttf.png)|![MontserratUnderline_900Black_Italic](./MontserratUnderline_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/montserrat-underline` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Montserrat Underline page on Google Fonts](https://fonts.google.com/specimen/Montserrat+Underline) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Montserrat Underline on Google Fonts](https://fonts.google.com/specimen/Montserrat+Underline)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/montserrat-underline)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/montserrat-underline)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
