# @expo-google-fonts/archivo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/archivo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/archivo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/archivo)

This package lets you use the [**Archivo**](https://fonts.google.com/specimen/Archivo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Archivo

![Archivo](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Archivo_100Thin`
- `Archivo_200ExtraLight`
- `Archivo_300Light`
- `Archivo_400Regular`
- `Archivo_500Medium`
- `Archivo_600SemiBold`
- `Archivo_700Bold`
- `Archivo_800ExtraBold`
- `Archivo_900Black`
- `Archivo_100Thin_Italic`
- `Archivo_200ExtraLight_Italic`
- `Archivo_300Light_Italic`
- `Archivo_400Regular_Italic`
- `Archivo_500Medium_Italic`
- `Archivo_600SemiBold_Italic`
- `Archivo_700Bold_Italic`
- `Archivo_800ExtraBold_Italic`
- `Archivo_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/archivo expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Archivo_100Thin,
  Archivo_200ExtraLight,
  Archivo_300Light,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
  Archivo_700Bold,
  Archivo_800ExtraBold,
  Archivo_900Black,
  Archivo_100Thin_Italic,
  Archivo_200ExtraLight_Italic,
  Archivo_300Light_Italic,
  Archivo_400Regular_Italic,
  Archivo_500Medium_Italic,
  Archivo_600SemiBold_Italic,
  Archivo_700Bold_Italic,
  Archivo_800ExtraBold_Italic,
  Archivo_900Black_Italic,
} from '@expo-google-fonts/archivo';

export default () => {
  let [fontsLoaded] = useFonts({
    Archivo_100Thin,
    Archivo_200ExtraLight,
    Archivo_300Light,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_700Bold,
    Archivo_800ExtraBold,
    Archivo_900Black,
    Archivo_100Thin_Italic,
    Archivo_200ExtraLight_Italic,
    Archivo_300Light_Italic,
    Archivo_400Regular_Italic,
    Archivo_500Medium_Italic,
    Archivo_600SemiBold_Italic,
    Archivo_700Bold_Italic,
    Archivo_800ExtraBold_Italic,
    Archivo_900Black_Italic,
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
            fontFamily: 'Archivo_100Thin',
          }}>
          Archivo Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_200ExtraLight',
          }}>
          Archivo Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_300Light',
          }}>
          Archivo Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_400Regular',
          }}>
          Archivo Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_500Medium',
          }}>
          Archivo Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_600SemiBold',
          }}>
          Archivo Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_700Bold',
          }}>
          Archivo Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_800ExtraBold',
          }}>
          Archivo Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_900Black',
          }}>
          Archivo Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_100Thin_Italic',
          }}>
          Archivo Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_200ExtraLight_Italic',
          }}>
          Archivo Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_300Light_Italic',
          }}>
          Archivo Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_400Regular_Italic',
          }}>
          Archivo Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_500Medium_Italic',
          }}>
          Archivo Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_600SemiBold_Italic',
          }}>
          Archivo Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_700Bold_Italic',
          }}>
          Archivo Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_800ExtraBold_Italic',
          }}>
          Archivo Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Archivo_900Black_Italic',
          }}>
          Archivo Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Archivo_100Thin](./Archivo_100Thin.ttf.png)|![Archivo_200ExtraLight](./Archivo_200ExtraLight.ttf.png)|![Archivo_300Light](./Archivo_300Light.ttf.png)||
|![Archivo_400Regular](./Archivo_400Regular.ttf.png)|![Archivo_500Medium](./Archivo_500Medium.ttf.png)|![Archivo_600SemiBold](./Archivo_600SemiBold.ttf.png)||
|![Archivo_700Bold](./Archivo_700Bold.ttf.png)|![Archivo_800ExtraBold](./Archivo_800ExtraBold.ttf.png)|![Archivo_900Black](./Archivo_900Black.ttf.png)||
|![Archivo_100Thin_Italic](./Archivo_100Thin_Italic.ttf.png)|![Archivo_200ExtraLight_Italic](./Archivo_200ExtraLight_Italic.ttf.png)|![Archivo_300Light_Italic](./Archivo_300Light_Italic.ttf.png)||
|![Archivo_400Regular_Italic](./Archivo_400Regular_Italic.ttf.png)|![Archivo_500Medium_Italic](./Archivo_500Medium_Italic.ttf.png)|![Archivo_600SemiBold_Italic](./Archivo_600SemiBold_Italic.ttf.png)||
|![Archivo_700Bold_Italic](./Archivo_700Bold_Italic.ttf.png)|![Archivo_800ExtraBold_Italic](./Archivo_800ExtraBold_Italic.ttf.png)|![Archivo_900Black_Italic](./Archivo_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/archivo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Archivo page on Google Fonts](https://fonts.google.com/specimen/Archivo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Archivo on Google Fonts](https://fonts.google.com/specimen/Archivo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/archivo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/archivo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
