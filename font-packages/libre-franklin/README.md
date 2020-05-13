# @expo-google-fonts/libre-franklin

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/libre-franklin)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/libre-franklin)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/libre-franklin)

This package lets you use the [**Libre Franklin**](https://fonts.google.com/specimen/Libre+Franklin) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Libre Franklin

![Libre Franklin](./font-family.png)

This font family contains [18 styles](#-gallery).

- `LibreFranklin_100Thin`
- `LibreFranklin_100Thin_Italic`
- `LibreFranklin_200ExtraLight`
- `LibreFranklin_200ExtraLight_Italic`
- `LibreFranklin_300Light`
- `LibreFranklin_300Light_Italic`
- `LibreFranklin_400Regular`
- `LibreFranklin_400Regular_Italic`
- `LibreFranklin_500Medium`
- `LibreFranklin_500Medium_Italic`
- `LibreFranklin_600SemiBold`
- `LibreFranklin_600SemiBold_Italic`
- `LibreFranklin_700Bold`
- `LibreFranklin_700Bold_Italic`
- `LibreFranklin_800ExtraBold`
- `LibreFranklin_800ExtraBold_Italic`
- `LibreFranklin_900Black`
- `LibreFranklin_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/libre-franklin expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  LibreFranklin_100Thin,
  LibreFranklin_100Thin_Italic,
  LibreFranklin_200ExtraLight,
  LibreFranklin_200ExtraLight_Italic,
  LibreFranklin_300Light,
  LibreFranklin_300Light_Italic,
  LibreFranklin_400Regular,
  LibreFranklin_400Regular_Italic,
  LibreFranklin_500Medium,
  LibreFranklin_500Medium_Italic,
  LibreFranklin_600SemiBold,
  LibreFranklin_600SemiBold_Italic,
  LibreFranklin_700Bold,
  LibreFranklin_700Bold_Italic,
  LibreFranklin_800ExtraBold,
  LibreFranklin_800ExtraBold_Italic,
  LibreFranklin_900Black,
  LibreFranklin_900Black_Italic,
} from '@expo-google-fonts/libre-franklin';

export default () => {
  let [fontsLoaded] = useFonts({
    LibreFranklin_100Thin,
    LibreFranklin_100Thin_Italic,
    LibreFranklin_200ExtraLight,
    LibreFranklin_200ExtraLight_Italic,
    LibreFranklin_300Light,
    LibreFranklin_300Light_Italic,
    LibreFranklin_400Regular,
    LibreFranklin_400Regular_Italic,
    LibreFranklin_500Medium,
    LibreFranklin_500Medium_Italic,
    LibreFranklin_600SemiBold,
    LibreFranklin_600SemiBold_Italic,
    LibreFranklin_700Bold,
    LibreFranklin_700Bold_Italic,
    LibreFranklin_800ExtraBold,
    LibreFranklin_800ExtraBold_Italic,
    LibreFranklin_900Black,
    LibreFranklin_900Black_Italic,
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
            fontFamily: 'LibreFranklin_100Thin',
          }}>
          Libre Franklin Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_100Thin_Italic',
          }}>
          Libre Franklin Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_200ExtraLight',
          }}>
          Libre Franklin Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_200ExtraLight_Italic',
          }}>
          Libre Franklin Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_300Light',
          }}>
          Libre Franklin Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_300Light_Italic',
          }}>
          Libre Franklin Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_400Regular',
          }}>
          Libre Franklin Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_400Regular_Italic',
          }}>
          Libre Franklin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_500Medium',
          }}>
          Libre Franklin Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_500Medium_Italic',
          }}>
          Libre Franklin Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_600SemiBold',
          }}>
          Libre Franklin Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_600SemiBold_Italic',
          }}>
          Libre Franklin Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_700Bold',
          }}>
          Libre Franklin Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_700Bold_Italic',
          }}>
          Libre Franklin Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_800ExtraBold',
          }}>
          Libre Franklin Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_800ExtraBold_Italic',
          }}>
          Libre Franklin Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_900Black',
          }}>
          Libre Franklin Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'LibreFranklin_900Black_Italic',
          }}>
          Libre Franklin Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![LibreFranklin_100Thin](./LibreFranklin_100Thin.ttf.png)|![LibreFranklin_100Thin_Italic](./LibreFranklin_100Thin_Italic.ttf.png)|![LibreFranklin_200ExtraLight](./LibreFranklin_200ExtraLight.ttf.png)||
|![LibreFranklin_200ExtraLight_Italic](./LibreFranklin_200ExtraLight_Italic.ttf.png)|![LibreFranklin_300Light](./LibreFranklin_300Light.ttf.png)|![LibreFranklin_300Light_Italic](./LibreFranklin_300Light_Italic.ttf.png)||
|![LibreFranklin_400Regular](./LibreFranklin_400Regular.ttf.png)|![LibreFranklin_400Regular_Italic](./LibreFranklin_400Regular_Italic.ttf.png)|![LibreFranklin_500Medium](./LibreFranklin_500Medium.ttf.png)||
|![LibreFranklin_500Medium_Italic](./LibreFranklin_500Medium_Italic.ttf.png)|![LibreFranklin_600SemiBold](./LibreFranklin_600SemiBold.ttf.png)|![LibreFranklin_600SemiBold_Italic](./LibreFranklin_600SemiBold_Italic.ttf.png)||
|![LibreFranklin_700Bold](./LibreFranklin_700Bold.ttf.png)|![LibreFranklin_700Bold_Italic](./LibreFranklin_700Bold_Italic.ttf.png)|![LibreFranklin_800ExtraBold](./LibreFranklin_800ExtraBold.ttf.png)||
|![LibreFranklin_800ExtraBold_Italic](./LibreFranklin_800ExtraBold_Italic.ttf.png)|![LibreFranklin_900Black](./LibreFranklin_900Black.ttf.png)|![LibreFranklin_900Black_Italic](./LibreFranklin_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/libre-franklin` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Libre Franklin page on Google Fonts](https://fonts.google.com/specimen/Libre+Franklin) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Libre Franklin on Google Fonts](https://fonts.google.com/specimen/Libre+Franklin)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/libre-franklin)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/libre-franklin)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
