# @expo-google-fonts/big-shoulders-stencil-text

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/big-shoulders-stencil-text)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/big-shoulders-stencil-text)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/big-shoulders-stencil-text)

This package lets you use the [**Big Shoulders Stencil Text**](https://fonts.google.com/specimen/Big+Shoulders+Stencil+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Big Shoulders Stencil Text

![Big Shoulders Stencil Text](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BigShouldersStencilText_100Thin`
- `BigShouldersStencilText_200ExtraLight`
- `BigShouldersStencilText_300Light`
- `BigShouldersStencilText_400Regular`
- `BigShouldersStencilText_500Medium`
- `BigShouldersStencilText_600SemiBold`
- `BigShouldersStencilText_700Bold`
- `BigShouldersStencilText_800ExtraBold`
- `BigShouldersStencilText_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/big-shoulders-stencil-text expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BigShouldersStencilText_100Thin,
  BigShouldersStencilText_200ExtraLight,
  BigShouldersStencilText_300Light,
  BigShouldersStencilText_400Regular,
  BigShouldersStencilText_500Medium,
  BigShouldersStencilText_600SemiBold,
  BigShouldersStencilText_700Bold,
  BigShouldersStencilText_800ExtraBold,
  BigShouldersStencilText_900Black,
} from '@expo-google-fonts/big-shoulders-stencil-text';

export default () => {
  let [fontsLoaded] = useFonts({
    BigShouldersStencilText_100Thin,
    BigShouldersStencilText_200ExtraLight,
    BigShouldersStencilText_300Light,
    BigShouldersStencilText_400Regular,
    BigShouldersStencilText_500Medium,
    BigShouldersStencilText_600SemiBold,
    BigShouldersStencilText_700Bold,
    BigShouldersStencilText_800ExtraBold,
    BigShouldersStencilText_900Black,
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
            fontFamily: 'BigShouldersStencilText_100Thin',
          }}>
          Big Shoulders Stencil Text Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilText_200ExtraLight',
          }}>
          Big Shoulders Stencil Text Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilText_300Light',
          }}>
          Big Shoulders Stencil Text Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilText_400Regular',
          }}>
          Big Shoulders Stencil Text Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilText_500Medium',
          }}>
          Big Shoulders Stencil Text Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilText_600SemiBold',
          }}>
          Big Shoulders Stencil Text Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilText_700Bold',
          }}>
          Big Shoulders Stencil Text Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilText_800ExtraBold',
          }}>
          Big Shoulders Stencil Text Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilText_900Black',
          }}>
          Big Shoulders Stencil Text Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![BigShouldersStencilText_100Thin](./BigShouldersStencilText_100Thin.ttf.png)|![BigShouldersStencilText_200ExtraLight](./BigShouldersStencilText_200ExtraLight.ttf.png)|![BigShouldersStencilText_300Light](./BigShouldersStencilText_300Light.ttf.png)||
|![BigShouldersStencilText_400Regular](./BigShouldersStencilText_400Regular.ttf.png)|![BigShouldersStencilText_500Medium](./BigShouldersStencilText_500Medium.ttf.png)|![BigShouldersStencilText_600SemiBold](./BigShouldersStencilText_600SemiBold.ttf.png)||
|![BigShouldersStencilText_700Bold](./BigShouldersStencilText_700Bold.ttf.png)|![BigShouldersStencilText_800ExtraBold](./BigShouldersStencilText_800ExtraBold.ttf.png)|![BigShouldersStencilText_900Black](./BigShouldersStencilText_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/big-shoulders-stencil-text` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Big Shoulders Stencil Text page on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Stencil+Text) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Big Shoulders Stencil Text on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Stencil+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/big-shoulders-stencil-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/big-shoulders-stencil-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
