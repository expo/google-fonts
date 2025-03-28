# @expo-google-fonts/big-shoulders-inline-text

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/big-shoulders-inline-text)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/big-shoulders-inline-text)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/big-shoulders-inline-text)

This package lets you use the [**Big Shoulders Inline Text**](https://fonts.google.com/specimen/Big+Shoulders+Inline+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Big Shoulders Inline Text

![Big Shoulders Inline Text](./font-family.png)

This font family contains [9 styles](#-gallery).

- `BigShouldersInlineText_100Thin`
- `BigShouldersInlineText_200ExtraLight`
- `BigShouldersInlineText_300Light`
- `BigShouldersInlineText_400Regular`
- `BigShouldersInlineText_500Medium`
- `BigShouldersInlineText_600SemiBold`
- `BigShouldersInlineText_700Bold`
- `BigShouldersInlineText_800ExtraBold`
- `BigShouldersInlineText_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/big-shoulders-inline-text expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BigShouldersInlineText_100Thin,
  BigShouldersInlineText_200ExtraLight,
  BigShouldersInlineText_300Light,
  BigShouldersInlineText_400Regular,
  BigShouldersInlineText_500Medium,
  BigShouldersInlineText_600SemiBold,
  BigShouldersInlineText_700Bold,
  BigShouldersInlineText_800ExtraBold,
  BigShouldersInlineText_900Black,
} from '@expo-google-fonts/big-shoulders-inline-text';

export default () => {
  let [fontsLoaded] = useFonts({
    BigShouldersInlineText_100Thin,
    BigShouldersInlineText_200ExtraLight,
    BigShouldersInlineText_300Light,
    BigShouldersInlineText_400Regular,
    BigShouldersInlineText_500Medium,
    BigShouldersInlineText_600SemiBold,
    BigShouldersInlineText_700Bold,
    BigShouldersInlineText_800ExtraBold,
    BigShouldersInlineText_900Black,
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
            fontFamily: 'BigShouldersInlineText_100Thin',
          }}>
          Big Shoulders Inline Text Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineText_200ExtraLight',
          }}>
          Big Shoulders Inline Text Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineText_300Light',
          }}>
          Big Shoulders Inline Text Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineText_400Regular',
          }}>
          Big Shoulders Inline Text Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineText_500Medium',
          }}>
          Big Shoulders Inline Text Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineText_600SemiBold',
          }}>
          Big Shoulders Inline Text Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineText_700Bold',
          }}>
          Big Shoulders Inline Text Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineText_800ExtraBold',
          }}>
          Big Shoulders Inline Text Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersInlineText_900Black',
          }}>
          Big Shoulders Inline Text Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![BigShouldersInlineText_100Thin](./BigShouldersInlineText_100Thin.ttf.png)|![BigShouldersInlineText_200ExtraLight](./BigShouldersInlineText_200ExtraLight.ttf.png)|![BigShouldersInlineText_300Light](./BigShouldersInlineText_300Light.ttf.png)||
|![BigShouldersInlineText_400Regular](./BigShouldersInlineText_400Regular.ttf.png)|![BigShouldersInlineText_500Medium](./BigShouldersInlineText_500Medium.ttf.png)|![BigShouldersInlineText_600SemiBold](./BigShouldersInlineText_600SemiBold.ttf.png)||
|![BigShouldersInlineText_700Bold](./BigShouldersInlineText_700Bold.ttf.png)|![BigShouldersInlineText_800ExtraBold](./BigShouldersInlineText_800ExtraBold.ttf.png)|![BigShouldersInlineText_900Black](./BigShouldersInlineText_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/big-shoulders-inline-text` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Big Shoulders Inline Text page on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Inline+Text) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Big Shoulders Inline Text on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Inline+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/big-shoulders-inline-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/big-shoulders-inline-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
