# @expo-google-fonts/montserrat-alternates

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/montserrat-alternates)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/montserrat-alternates)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/montserrat-alternates)

This package lets you use the [**Montserrat Alternates**](https://fonts.google.com/specimen/Montserrat+Alternates) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Montserrat Alternates

![Montserrat Alternates](./font-family.png)

This font family contains [18 styles](#-gallery).

- `MontserratAlternates_100Thin`
- `MontserratAlternates_100Thin_Italic`
- `MontserratAlternates_200ExtraLight`
- `MontserratAlternates_200ExtraLight_Italic`
- `MontserratAlternates_300Light`
- `MontserratAlternates_300Light_Italic`
- `MontserratAlternates_400Regular`
- `MontserratAlternates_400Regular_Italic`
- `MontserratAlternates_500Medium`
- `MontserratAlternates_500Medium_Italic`
- `MontserratAlternates_600SemiBold`
- `MontserratAlternates_600SemiBold_Italic`
- `MontserratAlternates_700Bold`
- `MontserratAlternates_700Bold_Italic`
- `MontserratAlternates_800ExtraBold`
- `MontserratAlternates_800ExtraBold_Italic`
- `MontserratAlternates_900Black`
- `MontserratAlternates_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/montserrat-alternates expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  MontserratAlternates_100Thin,
  MontserratAlternates_100Thin_Italic,
  MontserratAlternates_200ExtraLight,
  MontserratAlternates_200ExtraLight_Italic,
  MontserratAlternates_300Light,
  MontserratAlternates_300Light_Italic,
  MontserratAlternates_400Regular,
  MontserratAlternates_400Regular_Italic,
  MontserratAlternates_500Medium,
  MontserratAlternates_500Medium_Italic,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_600SemiBold_Italic,
  MontserratAlternates_700Bold,
  MontserratAlternates_700Bold_Italic,
  MontserratAlternates_800ExtraBold,
  MontserratAlternates_800ExtraBold_Italic,
  MontserratAlternates_900Black,
  MontserratAlternates_900Black_Italic,
} from '@expo-google-fonts/montserrat-alternates';

export default () => {
  let [fontsLoaded] = useFonts({
    MontserratAlternates_100Thin,
    MontserratAlternates_100Thin_Italic,
    MontserratAlternates_200ExtraLight,
    MontserratAlternates_200ExtraLight_Italic,
    MontserratAlternates_300Light,
    MontserratAlternates_300Light_Italic,
    MontserratAlternates_400Regular,
    MontserratAlternates_400Regular_Italic,
    MontserratAlternates_500Medium,
    MontserratAlternates_500Medium_Italic,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_600SemiBold_Italic,
    MontserratAlternates_700Bold,
    MontserratAlternates_700Bold_Italic,
    MontserratAlternates_800ExtraBold,
    MontserratAlternates_800ExtraBold_Italic,
    MontserratAlternates_900Black,
    MontserratAlternates_900Black_Italic,
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
            fontFamily: 'MontserratAlternates_100Thin',
          }}>
          Montserrat Alternates Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_100Thin_Italic',
          }}>
          Montserrat Alternates Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_200ExtraLight',
          }}>
          Montserrat Alternates Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_200ExtraLight_Italic',
          }}>
          Montserrat Alternates Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_300Light',
          }}>
          Montserrat Alternates Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_300Light_Italic',
          }}>
          Montserrat Alternates Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_400Regular',
          }}>
          Montserrat Alternates Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_400Regular_Italic',
          }}>
          Montserrat Alternates Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_500Medium',
          }}>
          Montserrat Alternates Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_500Medium_Italic',
          }}>
          Montserrat Alternates Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_600SemiBold',
          }}>
          Montserrat Alternates Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_600SemiBold_Italic',
          }}>
          Montserrat Alternates Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_700Bold',
          }}>
          Montserrat Alternates Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_700Bold_Italic',
          }}>
          Montserrat Alternates Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_800ExtraBold',
          }}>
          Montserrat Alternates Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_800ExtraBold_Italic',
          }}>
          Montserrat Alternates Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_900Black',
          }}>
          Montserrat Alternates Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MontserratAlternates_900Black_Italic',
          }}>
          Montserrat Alternates Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![MontserratAlternates_100Thin](./MontserratAlternates_100Thin.ttf.png)|![MontserratAlternates_100Thin_Italic](./MontserratAlternates_100Thin_Italic.ttf.png)|![MontserratAlternates_200ExtraLight](./MontserratAlternates_200ExtraLight.ttf.png)||
|![MontserratAlternates_200ExtraLight_Italic](./MontserratAlternates_200ExtraLight_Italic.ttf.png)|![MontserratAlternates_300Light](./MontserratAlternates_300Light.ttf.png)|![MontserratAlternates_300Light_Italic](./MontserratAlternates_300Light_Italic.ttf.png)||
|![MontserratAlternates_400Regular](./MontserratAlternates_400Regular.ttf.png)|![MontserratAlternates_400Regular_Italic](./MontserratAlternates_400Regular_Italic.ttf.png)|![MontserratAlternates_500Medium](./MontserratAlternates_500Medium.ttf.png)||
|![MontserratAlternates_500Medium_Italic](./MontserratAlternates_500Medium_Italic.ttf.png)|![MontserratAlternates_600SemiBold](./MontserratAlternates_600SemiBold.ttf.png)|![MontserratAlternates_600SemiBold_Italic](./MontserratAlternates_600SemiBold_Italic.ttf.png)||
|![MontserratAlternates_700Bold](./MontserratAlternates_700Bold.ttf.png)|![MontserratAlternates_700Bold_Italic](./MontserratAlternates_700Bold_Italic.ttf.png)|![MontserratAlternates_800ExtraBold](./MontserratAlternates_800ExtraBold.ttf.png)||
|![MontserratAlternates_800ExtraBold_Italic](./MontserratAlternates_800ExtraBold_Italic.ttf.png)|![MontserratAlternates_900Black](./MontserratAlternates_900Black.ttf.png)|![MontserratAlternates_900Black_Italic](./MontserratAlternates_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/montserrat-alternates` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Montserrat Alternates page on Google Fonts](https://fonts.google.com/specimen/Montserrat+Alternates) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Montserrat Alternates on Google Fonts](https://fonts.google.com/specimen/Montserrat+Alternates)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/montserrat-alternates)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/montserrat-alternates)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
