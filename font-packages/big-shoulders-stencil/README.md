# @expo-google-fonts/big-shoulders-stencil

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/big-shoulders-stencil)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/big-shoulders-stencil)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/big-shoulders-stencil)

This package lets you use the [**Big Shoulders Stencil**](https://fonts.google.com/specimen/Big+Shoulders+Stencil) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Big Shoulders Stencil

![Big Shoulders Stencil](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BigShouldersStencil_100Thin`
- `BigShouldersStencil_200ExtraLight`
- `BigShouldersStencil_300Light`
- `BigShouldersStencil_400Regular`
- `BigShouldersStencil_500Medium`
- `BigShouldersStencil_600SemiBold`
- `BigShouldersStencil_700Bold`
- `BigShouldersStencil_800ExtraBold`
- `BigShouldersStencil_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/big-shoulders-stencil expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BigShouldersStencil_100Thin,
  BigShouldersStencil_200ExtraLight,
  BigShouldersStencil_300Light,
  BigShouldersStencil_400Regular,
  BigShouldersStencil_500Medium,
  BigShouldersStencil_600SemiBold,
  BigShouldersStencil_700Bold,
  BigShouldersStencil_800ExtraBold,
  BigShouldersStencil_900Black,
} from '@expo-google-fonts/big-shoulders-stencil';

export default () => {
  let [fontsLoaded] = useFonts({
    BigShouldersStencil_100Thin,
    BigShouldersStencil_200ExtraLight,
    BigShouldersStencil_300Light,
    BigShouldersStencil_400Regular,
    BigShouldersStencil_500Medium,
    BigShouldersStencil_600SemiBold,
    BigShouldersStencil_700Bold,
    BigShouldersStencil_800ExtraBold,
    BigShouldersStencil_900Black,
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
            fontFamily: 'BigShouldersStencil_100Thin',
          }}>
          Big Shoulders Stencil Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencil_200ExtraLight',
          }}>
          Big Shoulders Stencil Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencil_300Light',
          }}>
          Big Shoulders Stencil Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencil_400Regular',
          }}>
          Big Shoulders Stencil Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencil_500Medium',
          }}>
          Big Shoulders Stencil Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencil_600SemiBold',
          }}>
          Big Shoulders Stencil Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencil_700Bold',
          }}>
          Big Shoulders Stencil Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencil_800ExtraBold',
          }}>
          Big Shoulders Stencil Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersStencil_900Black',
          }}>
          Big Shoulders Stencil Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![BigShouldersStencil_100Thin](./BigShouldersStencil_100Thin.ttf.png)|![BigShouldersStencil_200ExtraLight](./BigShouldersStencil_200ExtraLight.ttf.png)|![BigShouldersStencil_300Light](./BigShouldersStencil_300Light.ttf.png)||
|![BigShouldersStencil_400Regular](./BigShouldersStencil_400Regular.ttf.png)|![BigShouldersStencil_500Medium](./BigShouldersStencil_500Medium.ttf.png)|![BigShouldersStencil_600SemiBold](./BigShouldersStencil_600SemiBold.ttf.png)||
|![BigShouldersStencil_700Bold](./BigShouldersStencil_700Bold.ttf.png)|![BigShouldersStencil_800ExtraBold](./BigShouldersStencil_800ExtraBold.ttf.png)|![BigShouldersStencil_900Black](./BigShouldersStencil_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/big-shoulders-stencil` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Big Shoulders Stencil page on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Stencil) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Big Shoulders Stencil on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Stencil)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/big-shoulders-stencil)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/big-shoulders-stencil)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
