# @expo-google-fonts/petrona

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/petrona)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/petrona)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/petrona)

This package lets you use the [**Petrona**](https://fonts.google.com/specimen/Petrona) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Petrona

![Petrona](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Petrona_100Thin`
- `Petrona_200ExtraLight`
- `Petrona_300Light`
- `Petrona_400Regular`
- `Petrona_500Medium`
- `Petrona_600SemiBold`
- `Petrona_700Bold`
- `Petrona_800ExtraBold`
- `Petrona_900Black`
- `Petrona_100Thin_Italic`
- `Petrona_200ExtraLight_Italic`
- `Petrona_300Light_Italic`
- `Petrona_400Regular_Italic`
- `Petrona_500Medium_Italic`
- `Petrona_600SemiBold_Italic`
- `Petrona_700Bold_Italic`
- `Petrona_800ExtraBold_Italic`
- `Petrona_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/petrona expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Petrona_100Thin,
  Petrona_200ExtraLight,
  Petrona_300Light,
  Petrona_400Regular,
  Petrona_500Medium,
  Petrona_600SemiBold,
  Petrona_700Bold,
  Petrona_800ExtraBold,
  Petrona_900Black,
  Petrona_100Thin_Italic,
  Petrona_200ExtraLight_Italic,
  Petrona_300Light_Italic,
  Petrona_400Regular_Italic,
  Petrona_500Medium_Italic,
  Petrona_600SemiBold_Italic,
  Petrona_700Bold_Italic,
  Petrona_800ExtraBold_Italic,
  Petrona_900Black_Italic,
} from '@expo-google-fonts/petrona';

export default () => {
  let [fontsLoaded] = useFonts({
    Petrona_100Thin,
    Petrona_200ExtraLight,
    Petrona_300Light,
    Petrona_400Regular,
    Petrona_500Medium,
    Petrona_600SemiBold,
    Petrona_700Bold,
    Petrona_800ExtraBold,
    Petrona_900Black,
    Petrona_100Thin_Italic,
    Petrona_200ExtraLight_Italic,
    Petrona_300Light_Italic,
    Petrona_400Regular_Italic,
    Petrona_500Medium_Italic,
    Petrona_600SemiBold_Italic,
    Petrona_700Bold_Italic,
    Petrona_800ExtraBold_Italic,
    Petrona_900Black_Italic,
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
            fontFamily: 'Petrona_100Thin',
          }}>
          Petrona Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_200ExtraLight',
          }}>
          Petrona Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_300Light',
          }}>
          Petrona Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_400Regular',
          }}>
          Petrona Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_500Medium',
          }}>
          Petrona Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_600SemiBold',
          }}>
          Petrona Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_700Bold',
          }}>
          Petrona Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_800ExtraBold',
          }}>
          Petrona Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_900Black',
          }}>
          Petrona Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_100Thin_Italic',
          }}>
          Petrona Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_200ExtraLight_Italic',
          }}>
          Petrona Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_300Light_Italic',
          }}>
          Petrona Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_400Regular_Italic',
          }}>
          Petrona Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_500Medium_Italic',
          }}>
          Petrona Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_600SemiBold_Italic',
          }}>
          Petrona Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_700Bold_Italic',
          }}>
          Petrona Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_800ExtraBold_Italic',
          }}>
          Petrona Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Petrona_900Black_Italic',
          }}>
          Petrona Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Petrona_100Thin](./Petrona_100Thin.ttf.png)|![Petrona_200ExtraLight](./Petrona_200ExtraLight.ttf.png)|![Petrona_300Light](./Petrona_300Light.ttf.png)||
|![Petrona_400Regular](./Petrona_400Regular.ttf.png)|![Petrona_500Medium](./Petrona_500Medium.ttf.png)|![Petrona_600SemiBold](./Petrona_600SemiBold.ttf.png)||
|![Petrona_700Bold](./Petrona_700Bold.ttf.png)|![Petrona_800ExtraBold](./Petrona_800ExtraBold.ttf.png)|![Petrona_900Black](./Petrona_900Black.ttf.png)||
|![Petrona_100Thin_Italic](./Petrona_100Thin_Italic.ttf.png)|![Petrona_200ExtraLight_Italic](./Petrona_200ExtraLight_Italic.ttf.png)|![Petrona_300Light_Italic](./Petrona_300Light_Italic.ttf.png)||
|![Petrona_400Regular_Italic](./Petrona_400Regular_Italic.ttf.png)|![Petrona_500Medium_Italic](./Petrona_500Medium_Italic.ttf.png)|![Petrona_600SemiBold_Italic](./Petrona_600SemiBold_Italic.ttf.png)||
|![Petrona_700Bold_Italic](./Petrona_700Bold_Italic.ttf.png)|![Petrona_800ExtraBold_Italic](./Petrona_800ExtraBold_Italic.ttf.png)|![Petrona_900Black_Italic](./Petrona_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/petrona` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Petrona page on Google Fonts](https://fonts.google.com/specimen/Petrona) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Petrona on Google Fonts](https://fonts.google.com/specimen/Petrona)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/petrona)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/petrona)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
