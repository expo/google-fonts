# @expo-google-fonts/source-serif-4

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/source-serif-4)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/source-serif-4)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/source-serif-4)

This package lets you use the [**Source Serif 4**](https://fonts.google.com/specimen/Source+Serif+4) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Source Serif 4

![Source Serif 4](./font-family.png)

This font family contains [16 styles](#-gallery).

- `SourceSerif4_200ExtraLight`
- `SourceSerif4_300Light`
- `SourceSerif4_400Regular`
- `SourceSerif4_500Medium`
- `SourceSerif4_600SemiBold`
- `SourceSerif4_700Bold`
- `SourceSerif4_800ExtraBold`
- `SourceSerif4_900Black`
- `SourceSerif4_200ExtraLight_Italic`
- `SourceSerif4_300Light_Italic`
- `SourceSerif4_400Regular_Italic`
- `SourceSerif4_500Medium_Italic`
- `SourceSerif4_600SemiBold_Italic`
- `SourceSerif4_700Bold_Italic`
- `SourceSerif4_800ExtraBold_Italic`
- `SourceSerif4_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/source-serif-4 expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SourceSerif4_200ExtraLight,
  SourceSerif4_300Light,
  SourceSerif4_400Regular,
  SourceSerif4_500Medium,
  SourceSerif4_600SemiBold,
  SourceSerif4_700Bold,
  SourceSerif4_800ExtraBold,
  SourceSerif4_900Black,
  SourceSerif4_200ExtraLight_Italic,
  SourceSerif4_300Light_Italic,
  SourceSerif4_400Regular_Italic,
  SourceSerif4_500Medium_Italic,
  SourceSerif4_600SemiBold_Italic,
  SourceSerif4_700Bold_Italic,
  SourceSerif4_800ExtraBold_Italic,
  SourceSerif4_900Black_Italic,
} from '@expo-google-fonts/source-serif-4';

export default () => {
  let [fontsLoaded] = useFonts({
    SourceSerif4_200ExtraLight,
    SourceSerif4_300Light,
    SourceSerif4_400Regular,
    SourceSerif4_500Medium,
    SourceSerif4_600SemiBold,
    SourceSerif4_700Bold,
    SourceSerif4_800ExtraBold,
    SourceSerif4_900Black,
    SourceSerif4_200ExtraLight_Italic,
    SourceSerif4_300Light_Italic,
    SourceSerif4_400Regular_Italic,
    SourceSerif4_500Medium_Italic,
    SourceSerif4_600SemiBold_Italic,
    SourceSerif4_700Bold_Italic,
    SourceSerif4_800ExtraBold_Italic,
    SourceSerif4_900Black_Italic,
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
            fontFamily: 'SourceSerif4_200ExtraLight',
          }}>
          Source Serif 4 Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_300Light',
          }}>
          Source Serif 4 Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_400Regular',
          }}>
          Source Serif 4 Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_500Medium',
          }}>
          Source Serif 4 Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_600SemiBold',
          }}>
          Source Serif 4 Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_700Bold',
          }}>
          Source Serif 4 Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_800ExtraBold',
          }}>
          Source Serif 4 Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_900Black',
          }}>
          Source Serif 4 Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_200ExtraLight_Italic',
          }}>
          Source Serif 4 Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_300Light_Italic',
          }}>
          Source Serif 4 Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_400Regular_Italic',
          }}>
          Source Serif 4 Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_500Medium_Italic',
          }}>
          Source Serif 4 Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_600SemiBold_Italic',
          }}>
          Source Serif 4 Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_700Bold_Italic',
          }}>
          Source Serif 4 Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_800ExtraBold_Italic',
          }}>
          Source Serif 4 Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerif4_900Black_Italic',
          }}>
          Source Serif 4 Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![SourceSerif4_200ExtraLight](./SourceSerif4_200ExtraLight.ttf.png)|![SourceSerif4_300Light](./SourceSerif4_300Light.ttf.png)|![SourceSerif4_400Regular](./SourceSerif4_400Regular.ttf.png)||
|![SourceSerif4_500Medium](./SourceSerif4_500Medium.ttf.png)|![SourceSerif4_600SemiBold](./SourceSerif4_600SemiBold.ttf.png)|![SourceSerif4_700Bold](./SourceSerif4_700Bold.ttf.png)||
|![SourceSerif4_800ExtraBold](./SourceSerif4_800ExtraBold.ttf.png)|![SourceSerif4_900Black](./SourceSerif4_900Black.ttf.png)|![SourceSerif4_200ExtraLight_Italic](./SourceSerif4_200ExtraLight_Italic.ttf.png)||
|![SourceSerif4_300Light_Italic](./SourceSerif4_300Light_Italic.ttf.png)|![SourceSerif4_400Regular_Italic](./SourceSerif4_400Regular_Italic.ttf.png)|![SourceSerif4_500Medium_Italic](./SourceSerif4_500Medium_Italic.ttf.png)||
|![SourceSerif4_600SemiBold_Italic](./SourceSerif4_600SemiBold_Italic.ttf.png)|![SourceSerif4_700Bold_Italic](./SourceSerif4_700Bold_Italic.ttf.png)|![SourceSerif4_800ExtraBold_Italic](./SourceSerif4_800ExtraBold_Italic.ttf.png)||
|![SourceSerif4_900Black_Italic](./SourceSerif4_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/source-serif-4` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Source Serif 4 page on Google Fonts](https://fonts.google.com/specimen/Source+Serif+4) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Source Serif 4 on Google Fonts](https://fonts.google.com/specimen/Source+Serif+4)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/source-serif-4)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/source-serif-4)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
