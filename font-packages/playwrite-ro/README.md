# @expo-google-fonts/playwrite-ro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playwrite-ro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playwrite-ro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playwrite-ro)

This package lets you use the [**Playwrite RO**](https://fonts.google.com/specimen/Playwrite+RO) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playwrite RO

![Playwrite RO](./font-family.png)

This font family contains [4 styles](#-gallery).

- `PlaywriteRO_100Thin`
- `PlaywriteRO_200ExtraLight`
- `PlaywriteRO_300Light`
- `PlaywriteRO_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/playwrite-ro expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PlaywriteRO_100Thin,
  PlaywriteRO_200ExtraLight,
  PlaywriteRO_300Light,
  PlaywriteRO_400Regular,
} from '@expo-google-fonts/playwrite-ro';

export default () => {
  let [fontsLoaded] = useFonts({
    PlaywriteRO_100Thin,
    PlaywriteRO_200ExtraLight,
    PlaywriteRO_300Light,
    PlaywriteRO_400Regular,
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
            fontFamily: 'PlaywriteRO_100Thin',
          }}>
          Playwrite RO Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteRO_200ExtraLight',
          }}>
          Playwrite RO Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteRO_300Light',
          }}>
          Playwrite RO Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PlaywriteRO_400Regular',
          }}>
          Playwrite RO Regular
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![PlaywriteRO_100Thin](./PlaywriteRO_100Thin.ttf.png)|![PlaywriteRO_200ExtraLight](./PlaywriteRO_200ExtraLight.ttf.png)|![PlaywriteRO_300Light](./PlaywriteRO_300Light.ttf.png)||
|![PlaywriteRO_400Regular](./PlaywriteRO_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/playwrite-ro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playwrite RO page on Google Fonts](https://fonts.google.com/specimen/Playwrite+RO) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playwrite RO on Google Fonts](https://fonts.google.com/specimen/Playwrite+RO)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playwrite-ro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playwrite-ro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
