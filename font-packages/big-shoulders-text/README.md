# @expo-google-fonts/big-shoulders-text

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/big-shoulders-text)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/big-shoulders-text)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/big-shoulders-text)

This package lets you use the [**Big Shoulders Text**](https://fonts.google.com/specimen/Big+Shoulders+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Big Shoulders Text

![Big Shoulders Text](./font-family.png)

This font family contains [8 styles](#-gallery).

- `BigShouldersText_100Thin`
- `BigShouldersText_300Light`
- `BigShouldersText_400Regular`
- `BigShouldersText_500Medium`
- `BigShouldersText_600SemiBold`
- `BigShouldersText_700Bold`
- `BigShouldersText_800ExtraBold`
- `BigShouldersText_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/big-shoulders-text expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  BigShouldersText_100Thin,
  BigShouldersText_300Light,
  BigShouldersText_400Regular,
  BigShouldersText_500Medium,
  BigShouldersText_600SemiBold,
  BigShouldersText_700Bold,
  BigShouldersText_800ExtraBold,
  BigShouldersText_900Black,
} from '@expo-google-fonts/big-shoulders-text';

export default () => {
  let [fontsLoaded] = useFonts({
    BigShouldersText_100Thin,
    BigShouldersText_300Light,
    BigShouldersText_400Regular,
    BigShouldersText_500Medium,
    BigShouldersText_600SemiBold,
    BigShouldersText_700Bold,
    BigShouldersText_800ExtraBold,
    BigShouldersText_900Black,
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
            fontFamily: 'BigShouldersText_100Thin',
          }}>
          Big Shoulders Text Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersText_300Light',
          }}>
          Big Shoulders Text Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersText_400Regular',
          }}>
          Big Shoulders Text Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersText_500Medium',
          }}>
          Big Shoulders Text Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersText_600SemiBold',
          }}>
          Big Shoulders Text Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersText_700Bold',
          }}>
          Big Shoulders Text Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersText_800ExtraBold',
          }}>
          Big Shoulders Text Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BigShouldersText_900Black',
          }}>
          Big Shoulders Text Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![BigShouldersText_100Thin](./BigShouldersText_100Thin.ttf.png)|![BigShouldersText_300Light](./BigShouldersText_300Light.ttf.png)|![BigShouldersText_400Regular](./BigShouldersText_400Regular.ttf.png)||
|![BigShouldersText_500Medium](./BigShouldersText_500Medium.ttf.png)|![BigShouldersText_600SemiBold](./BigShouldersText_600SemiBold.ttf.png)|![BigShouldersText_700Bold](./BigShouldersText_700Bold.ttf.png)||
|![BigShouldersText_800ExtraBold](./BigShouldersText_800ExtraBold.ttf.png)|![BigShouldersText_900Black](./BigShouldersText_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/big-shoulders-text` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Big Shoulders Text page on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Text) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Big Shoulders Text on Google Fonts](https://fonts.google.com/specimen/Big+Shoulders+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/big-shoulders-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/big-shoulders-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
