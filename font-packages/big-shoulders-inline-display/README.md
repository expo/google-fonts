# @expo-google-fonts/big-shoulders-inline-display

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/big-shoulders-inline-display)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/big-shoulders-inline-display)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/big-shoulders-inline-display)

This package lets you use the [**Big Shoulders Inline Display**](https://fonts.google.com/specimen/Big+Shoulders+Inline+Display) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Big Shoulders Inline Display

![Big Shoulders Inline Display](./font-family.png)

This font family contains [8 styles](#-gallery).

- `BigShouldersInlineDisplay_100Thin`
- `BigShouldersInlineDisplay_300Light`
- `BigShouldersInlineDisplay_400Regular`
- `BigShouldersInlineDisplay_500Medium`
- `BigShouldersInlineDisplay_600SemiBold`
- `BigShouldersInlineDisplay_700Bold`
- `BigShouldersInlineDisplay_800ExtraBold`
- `BigShouldersInlineDisplay_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/big-shoulders-inline-display expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BigShouldersInlineDisplay_100Thin,
  BigShouldersInlineDisplay_300Light,
  BigShouldersInlineDisplay_400Regular,
  BigShouldersInlineDisplay_500Medium,
  BigShouldersInlineDisplay_600SemiBold,
  BigShouldersInlineDisplay_700Bold,
  BigShouldersInlineDisplay_800ExtraBold,
  BigShouldersInlineDisplay_900Black,
} from '@expo-google-fonts/big-shoulders-inline-display';

export default () => {
  let [fontsLoaded] = useFonts({
    BigShouldersInlineDisplay_100Thin,
    BigShouldersInlineDisplay_300Light,
    BigShouldersInlineDisplay_400Regular,
    BigShouldersInlineDisplay_500Medium,
    BigShouldersInlineDisplay_600SemiBold,
    BigShouldersInlineDisplay_700Bold,
    BigShouldersInlineDisplay_800ExtraBold,
    BigShouldersInlineDisplay_900Black,
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
            fontFamily: 'BigShouldersInlineDisplay_100Thin',
          }}>
          Big Shoulders Inline Display Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineDisplay_300Light',
          }}>
          Big Shoulders Inline Display Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineDisplay_400Regular',
          }}>
          Big Shoulders Inline Display Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineDisplay_500Medium',
          }}>
          Big Shoulders Inline Display Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineDisplay_600SemiBold',
          }}>
          Big Shoulders Inline Display Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineDisplay_700Bold',
          }}>
          Big Shoulders Inline Display Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineDisplay_800ExtraBold',
          }}>
          Big Shoulders Inline Display Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineDisplay_900Black',
          }}>
          Big Shoulders Inline Display Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![BigShouldersInlineDisplay_100Thin](./BigShouldersInlineDisplay_100Thin.ttf.png)|![BigShouldersInlineDisplay_300Light](./BigShouldersInlineDisplay_300Light.ttf.png)|![BigShouldersInlineDisplay_400Regular](./BigShouldersInlineDisplay_400Regular.ttf.png)||
|![BigShouldersInlineDisplay_500Medium](./BigShouldersInlineDisplay_500Medium.ttf.png)|![BigShouldersInlineDisplay_600SemiBold](./BigShouldersInlineDisplay_600SemiBold.ttf.png)|![BigShouldersInlineDisplay_700Bold](./BigShouldersInlineDisplay_700Bold.ttf.png)||
|![BigShouldersInlineDisplay_800ExtraBold](./BigShouldersInlineDisplay_800ExtraBold.ttf.png)|![BigShouldersInlineDisplay_900Black](./BigShouldersInlineDisplay_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/big-shoulders-inline-display` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Big Shoulders Inline Display page on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Inline+Display) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Big Shoulders Inline Display on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Inline+Display)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/big-shoulders-inline-display)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/big-shoulders-inline-display)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
