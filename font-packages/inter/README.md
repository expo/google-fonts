# @expo-google-fonts/inter

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/inter)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/inter)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/inter)

This package lets you use the [**Inter**](https://fonts.google.com/specimen/Inter) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Inter

![Inter](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Inter_100Thin`
- `Inter_200ExtraLight`
- `Inter_300Light`
- `Inter_400Regular`
- `Inter_500Medium`
- `Inter_600SemiBold`
- `Inter_700Bold`
- `Inter_800ExtraBold`
- `Inter_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/inter expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

export default () => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
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
            fontFamily: 'Inter_100Thin',
          }}>
          Inter Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Inter_200ExtraLight',
          }}>
          Inter Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Inter_300Light',
          }}>
          Inter Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Inter_400Regular',
          }}>
          Inter Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Inter_500Medium',
          }}>
          Inter Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Inter_600SemiBold',
          }}>
          Inter Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Inter_700Bold',
          }}>
          Inter Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Inter_800ExtraBold',
          }}>
          Inter Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Inter_900Black',
          }}>
          Inter Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Inter_100Thin](./Inter_100Thin.ttf.png)|![Inter_200ExtraLight](./Inter_200ExtraLight.ttf.png)|![Inter_300Light](./Inter_300Light.ttf.png)||
|![Inter_400Regular](./Inter_400Regular.ttf.png)|![Inter_500Medium](./Inter_500Medium.ttf.png)|![Inter_600SemiBold](./Inter_600SemiBold.ttf.png)||
|![Inter_700Bold](./Inter_700Bold.ttf.png)|![Inter_800ExtraBold](./Inter_800ExtraBold.ttf.png)|![Inter_900Black](./Inter_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/inter` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Inter page on Google Fonts](https://fonts.google.com/specimen/Inter) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Inter on Google Fonts](https://fonts.google.com/specimen/Inter)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/inter)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/inter)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
