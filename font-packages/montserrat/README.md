# @expo-google-fonts/montserrat

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/montserrat)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/montserrat)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/montserrat)

This package lets you use the [**Montserrat**](https://fonts.google.com/specimen/Montserrat) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Montserrat

![Montserrat](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Montserrat_100Thin`
- `Montserrat_200ExtraLight`
- `Montserrat_300Light`
- `Montserrat_400Regular`
- `Montserrat_500Medium`
- `Montserrat_600SemiBold`
- `Montserrat_700Bold`
- `Montserrat_800ExtraBold`
- `Montserrat_900Black`
- `Montserrat_100Thin_Italic`
- `Montserrat_200ExtraLight_Italic`
- `Montserrat_300Light_Italic`
- `Montserrat_400Regular_Italic`
- `Montserrat_500Medium_Italic`
- `Montserrat_600SemiBold_Italic`
- `Montserrat_700Bold_Italic`
- `Montserrat_800ExtraBold_Italic`
- `Montserrat_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/montserrat expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

export default () => {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
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
            fontFamily: 'Montserrat_100Thin',
          }}>
          Montserrat Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_200ExtraLight',
          }}>
          Montserrat Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_300Light',
          }}>
          Montserrat Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_400Regular',
          }}>
          Montserrat Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_500Medium',
          }}>
          Montserrat Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_600SemiBold',
          }}>
          Montserrat Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_700Bold',
          }}>
          Montserrat Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_800ExtraBold',
          }}>
          Montserrat Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_900Black',
          }}>
          Montserrat Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_100Thin_Italic',
          }}>
          Montserrat Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_200ExtraLight_Italic',
          }}>
          Montserrat Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_300Light_Italic',
          }}>
          Montserrat Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_400Regular_Italic',
          }}>
          Montserrat Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_500Medium_Italic',
          }}>
          Montserrat Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_600SemiBold_Italic',
          }}>
          Montserrat Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_700Bold_Italic',
          }}>
          Montserrat Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_800ExtraBold_Italic',
          }}>
          Montserrat Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Montserrat_900Black_Italic',
          }}>
          Montserrat Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Montserrat_100Thin](./Montserrat_100Thin.ttf.png)|![Montserrat_200ExtraLight](./Montserrat_200ExtraLight.ttf.png)|![Montserrat_300Light](./Montserrat_300Light.ttf.png)||
|![Montserrat_400Regular](./Montserrat_400Regular.ttf.png)|![Montserrat_500Medium](./Montserrat_500Medium.ttf.png)|![Montserrat_600SemiBold](./Montserrat_600SemiBold.ttf.png)||
|![Montserrat_700Bold](./Montserrat_700Bold.ttf.png)|![Montserrat_800ExtraBold](./Montserrat_800ExtraBold.ttf.png)|![Montserrat_900Black](./Montserrat_900Black.ttf.png)||
|![Montserrat_100Thin_Italic](./Montserrat_100Thin_Italic.ttf.png)|![Montserrat_200ExtraLight_Italic](./Montserrat_200ExtraLight_Italic.ttf.png)|![Montserrat_300Light_Italic](./Montserrat_300Light_Italic.ttf.png)||
|![Montserrat_400Regular_Italic](./Montserrat_400Regular_Italic.ttf.png)|![Montserrat_500Medium_Italic](./Montserrat_500Medium_Italic.ttf.png)|![Montserrat_600SemiBold_Italic](./Montserrat_600SemiBold_Italic.ttf.png)||
|![Montserrat_700Bold_Italic](./Montserrat_700Bold_Italic.ttf.png)|![Montserrat_800ExtraBold_Italic](./Montserrat_800ExtraBold_Italic.ttf.png)|![Montserrat_900Black_Italic](./Montserrat_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/montserrat` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Montserrat page on Google Fonts](https://fonts.google.com/specimen/Montserrat) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Montserrat on Google Fonts](https://fonts.google.com/specimen/Montserrat)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/montserrat)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/montserrat)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
