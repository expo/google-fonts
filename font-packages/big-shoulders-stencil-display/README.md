# @expo-google-fonts/big-shoulders-stencil-display

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/big-shoulders-stencil-display)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/big-shoulders-stencil-display)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/big-shoulders-stencil-display)

This package lets you use the [**Big Shoulders Stencil Display**](https://fonts.google.com/specimen/Big+Shoulders+Stencil+Display) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Big Shoulders Stencil Display

![Big Shoulders Stencil Display](./font-family.png)

This font family contains [8 styles](#-gallery).

- `BigShouldersStencilDisplay_100Thin`
- `BigShouldersStencilDisplay_300Light`
- `BigShouldersStencilDisplay_400Regular`
- `BigShouldersStencilDisplay_500Medium`
- `BigShouldersStencilDisplay_600SemiBold`
- `BigShouldersStencilDisplay_700Bold`
- `BigShouldersStencilDisplay_800ExtraBold`
- `BigShouldersStencilDisplay_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/big-shoulders-stencil-display expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  BigShouldersStencilDisplay_100Thin,
  BigShouldersStencilDisplay_300Light,
  BigShouldersStencilDisplay_400Regular,
  BigShouldersStencilDisplay_500Medium,
  BigShouldersStencilDisplay_600SemiBold,
  BigShouldersStencilDisplay_700Bold,
  BigShouldersStencilDisplay_800ExtraBold,
  BigShouldersStencilDisplay_900Black,
} from '@expo-google-fonts/big-shoulders-stencil-display';

export default () => {
  let [fontsLoaded] = useFonts({
    BigShouldersStencilDisplay_100Thin,
    BigShouldersStencilDisplay_300Light,
    BigShouldersStencilDisplay_400Regular,
    BigShouldersStencilDisplay_500Medium,
    BigShouldersStencilDisplay_600SemiBold,
    BigShouldersStencilDisplay_700Bold,
    BigShouldersStencilDisplay_800ExtraBold,
    BigShouldersStencilDisplay_900Black,
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
            fontFamily: 'BigShouldersStencilDisplay_100Thin',
          }}>
          Big Shoulders Stencil Display Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilDisplay_300Light',
          }}>
          Big Shoulders Stencil Display Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilDisplay_400Regular',
          }}>
          Big Shoulders Stencil Display Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilDisplay_500Medium',
          }}>
          Big Shoulders Stencil Display Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilDisplay_600SemiBold',
          }}>
          Big Shoulders Stencil Display Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilDisplay_700Bold',
          }}>
          Big Shoulders Stencil Display Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilDisplay_800ExtraBold',
          }}>
          Big Shoulders Stencil Display Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencilDisplay_900Black',
          }}>
          Big Shoulders Stencil Display Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![BigShouldersStencilDisplay_100Thin](./BigShouldersStencilDisplay_100Thin.ttf.png)|![BigShouldersStencilDisplay_300Light](./BigShouldersStencilDisplay_300Light.ttf.png)|![BigShouldersStencilDisplay_400Regular](./BigShouldersStencilDisplay_400Regular.ttf.png)||
|![BigShouldersStencilDisplay_500Medium](./BigShouldersStencilDisplay_500Medium.ttf.png)|![BigShouldersStencilDisplay_600SemiBold](./BigShouldersStencilDisplay_600SemiBold.ttf.png)|![BigShouldersStencilDisplay_700Bold](./BigShouldersStencilDisplay_700Bold.ttf.png)||
|![BigShouldersStencilDisplay_800ExtraBold](./BigShouldersStencilDisplay_800ExtraBold.ttf.png)|![BigShouldersStencilDisplay_900Black](./BigShouldersStencilDisplay_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/big-shoulders-stencil-display` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Big Shoulders Stencil Display page on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Stencil+Display) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Big Shoulders Stencil Display on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Stencil+Display)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/big-shoulders-stencil-display)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/big-shoulders-stencil-display)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
