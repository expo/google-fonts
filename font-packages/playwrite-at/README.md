# @expo-google-fonts/playwrite-at

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playwrite-at)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playwrite-at)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playwrite-at)

This package lets you use the [**Playwrite AT**](https://fonts.google.com/specimen/Playwrite+AT) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playwrite AT

![Playwrite AT](./font-family.png)

This font family contains [8 styles](#-gallery).

- `PlaywriteAT_100Thin`
- `PlaywriteAT_200ExtraLight`
- `PlaywriteAT_300Light`
- `PlaywriteAT_400Regular`
- `PlaywriteAT_100Thin_Italic`
- `PlaywriteAT_200ExtraLight_Italic`
- `PlaywriteAT_300Light_Italic`
- `PlaywriteAT_400Regular_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/playwrite-at expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PlaywriteAT_100Thin,
  PlaywriteAT_200ExtraLight,
  PlaywriteAT_300Light,
  PlaywriteAT_400Regular,
  PlaywriteAT_100Thin_Italic,
  PlaywriteAT_200ExtraLight_Italic,
  PlaywriteAT_300Light_Italic,
  PlaywriteAT_400Regular_Italic,
} from '@expo-google-fonts/playwrite-at';

export default () => {
  let [fontsLoaded] = useFonts({
    PlaywriteAT_100Thin,
    PlaywriteAT_200ExtraLight,
    PlaywriteAT_300Light,
    PlaywriteAT_400Regular,
    PlaywriteAT_100Thin_Italic,
    PlaywriteAT_200ExtraLight_Italic,
    PlaywriteAT_300Light_Italic,
    PlaywriteAT_400Regular_Italic,
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
            fontFamily: 'PlaywriteAT_100Thin',
          }}>
          Playwrite AT Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteAT_200ExtraLight',
          }}>
          Playwrite AT Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteAT_300Light',
          }}>
          Playwrite AT Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteAT_400Regular',
          }}>
          Playwrite AT Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteAT_100Thin_Italic',
          }}>
          Playwrite AT Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteAT_200ExtraLight_Italic',
          }}>
          Playwrite AT Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteAT_300Light_Italic',
          }}>
          Playwrite AT Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteAT_400Regular_Italic',
          }}>
          Playwrite AT Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![PlaywriteAT_100Thin](./PlaywriteAT_100Thin.ttf.png)|![PlaywriteAT_200ExtraLight](./PlaywriteAT_200ExtraLight.ttf.png)|![PlaywriteAT_300Light](./PlaywriteAT_300Light.ttf.png)||
|![PlaywriteAT_400Regular](./PlaywriteAT_400Regular.ttf.png)|![PlaywriteAT_100Thin_Italic](./PlaywriteAT_100Thin_Italic.ttf.png)|![PlaywriteAT_200ExtraLight_Italic](./PlaywriteAT_200ExtraLight_Italic.ttf.png)||
|![PlaywriteAT_300Light_Italic](./PlaywriteAT_300Light_Italic.ttf.png)|![PlaywriteAT_400Regular_Italic](./PlaywriteAT_400Regular_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/playwrite-at` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playwrite AT page on Google Fonts](https://fonts.google.com/specimen/Playwrite+AT) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playwrite AT on Google Fonts](https://fonts.google.com/specimen/Playwrite+AT)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playwrite-at)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playwrite-at)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
