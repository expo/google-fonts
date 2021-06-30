# @expo-google-fonts/texturina

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/texturina)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/texturina)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/texturina)

This package lets you use the [**Texturina**](https://fonts.google.com/specimen/Texturina) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Texturina

![Texturina](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Texturina_100Thin`
- `Texturina_200ExtraLight`
- `Texturina_300Light`
- `Texturina_400Regular`
- `Texturina_500Medium`
- `Texturina_600SemiBold`
- `Texturina_700Bold`
- `Texturina_800ExtraBold`
- `Texturina_900Black`
- `Texturina_100Thin_Italic`
- `Texturina_200ExtraLight_Italic`
- `Texturina_300Light_Italic`
- `Texturina_400Regular_Italic`
- `Texturina_500Medium_Italic`
- `Texturina_600SemiBold_Italic`
- `Texturina_700Bold_Italic`
- `Texturina_800ExtraBold_Italic`
- `Texturina_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/texturina expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Texturina_100Thin,
  Texturina_200ExtraLight,
  Texturina_300Light,
  Texturina_400Regular,
  Texturina_500Medium,
  Texturina_600SemiBold,
  Texturina_700Bold,
  Texturina_800ExtraBold,
  Texturina_900Black,
  Texturina_100Thin_Italic,
  Texturina_200ExtraLight_Italic,
  Texturina_300Light_Italic,
  Texturina_400Regular_Italic,
  Texturina_500Medium_Italic,
  Texturina_600SemiBold_Italic,
  Texturina_700Bold_Italic,
  Texturina_800ExtraBold_Italic,
  Texturina_900Black_Italic,
} from '@expo-google-fonts/texturina';

export default () => {
  let [fontsLoaded] = useFonts({
    Texturina_100Thin,
    Texturina_200ExtraLight,
    Texturina_300Light,
    Texturina_400Regular,
    Texturina_500Medium,
    Texturina_600SemiBold,
    Texturina_700Bold,
    Texturina_800ExtraBold,
    Texturina_900Black,
    Texturina_100Thin_Italic,
    Texturina_200ExtraLight_Italic,
    Texturina_300Light_Italic,
    Texturina_400Regular_Italic,
    Texturina_500Medium_Italic,
    Texturina_600SemiBold_Italic,
    Texturina_700Bold_Italic,
    Texturina_800ExtraBold_Italic,
    Texturina_900Black_Italic,
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
            fontFamily: 'Texturina_100Thin',
          }}>
          Texturina Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_200ExtraLight',
          }}>
          Texturina Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_300Light',
          }}>
          Texturina Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_400Regular',
          }}>
          Texturina Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_500Medium',
          }}>
          Texturina Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_600SemiBold',
          }}>
          Texturina Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_700Bold',
          }}>
          Texturina Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_800ExtraBold',
          }}>
          Texturina Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_900Black',
          }}>
          Texturina Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_100Thin_Italic',
          }}>
          Texturina Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_200ExtraLight_Italic',
          }}>
          Texturina Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_300Light_Italic',
          }}>
          Texturina Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_400Regular_Italic',
          }}>
          Texturina Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_500Medium_Italic',
          }}>
          Texturina Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_600SemiBold_Italic',
          }}>
          Texturina Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_700Bold_Italic',
          }}>
          Texturina Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_800ExtraBold_Italic',
          }}>
          Texturina Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Texturina_900Black_Italic',
          }}>
          Texturina Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Texturina_100Thin](./Texturina_100Thin.ttf.png)|![Texturina_200ExtraLight](./Texturina_200ExtraLight.ttf.png)|![Texturina_300Light](./Texturina_300Light.ttf.png)||
|![Texturina_400Regular](./Texturina_400Regular.ttf.png)|![Texturina_500Medium](./Texturina_500Medium.ttf.png)|![Texturina_600SemiBold](./Texturina_600SemiBold.ttf.png)||
|![Texturina_700Bold](./Texturina_700Bold.ttf.png)|![Texturina_800ExtraBold](./Texturina_800ExtraBold.ttf.png)|![Texturina_900Black](./Texturina_900Black.ttf.png)||
|![Texturina_100Thin_Italic](./Texturina_100Thin_Italic.ttf.png)|![Texturina_200ExtraLight_Italic](./Texturina_200ExtraLight_Italic.ttf.png)|![Texturina_300Light_Italic](./Texturina_300Light_Italic.ttf.png)||
|![Texturina_400Regular_Italic](./Texturina_400Regular_Italic.ttf.png)|![Texturina_500Medium_Italic](./Texturina_500Medium_Italic.ttf.png)|![Texturina_600SemiBold_Italic](./Texturina_600SemiBold_Italic.ttf.png)||
|![Texturina_700Bold_Italic](./Texturina_700Bold_Italic.ttf.png)|![Texturina_800ExtraBold_Italic](./Texturina_800ExtraBold_Italic.ttf.png)|![Texturina_900Black_Italic](./Texturina_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/texturina` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Texturina page on Google Fonts](https://fonts.google.com/specimen/Texturina) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Texturina on Google Fonts](https://fonts.google.com/specimen/Texturina)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/texturina)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/texturina)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
