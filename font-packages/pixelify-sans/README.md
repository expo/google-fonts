# @expo-google-fonts/pixelify-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/pixelify-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/pixelify-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/pixelify-sans)

This package lets you use the [**Pixelify Sans**](https://fonts.google.com/specimen/Pixelify+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Pixelify Sans

![Pixelify Sans](./font-family.png)

This font family contains [4 styles](#-gallery).

- `PixelifySans_400Regular`
- `PixelifySans_500Medium`
- `PixelifySans_600SemiBold`
- `PixelifySans_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/pixelify-sans expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PixelifySans_400Regular,
  PixelifySans_500Medium,
  PixelifySans_600SemiBold,
  PixelifySans_700Bold,
} from '@expo-google-fonts/pixelify-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    PixelifySans_400Regular,
    PixelifySans_500Medium,
    PixelifySans_600SemiBold,
    PixelifySans_700Bold,
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
            fontFamily: 'PixelifySans_400Regular',
          }}>
          Pixelify Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PixelifySans_500Medium',
          }}>
          Pixelify Sans Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PixelifySans_600SemiBold',
          }}>
          Pixelify Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'PixelifySans_700Bold',
          }}>
          Pixelify Sans Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![PixelifySans_400Regular](./PixelifySans_400Regular.ttf.png)|![PixelifySans_500Medium](./PixelifySans_500Medium.ttf.png)|![PixelifySans_600SemiBold](./PixelifySans_600SemiBold.ttf.png)||
|![PixelifySans_700Bold](./PixelifySans_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/pixelify-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Pixelify Sans page on Google Fonts](https://fonts.google.com/specimen/Pixelify+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Pixelify Sans on Google Fonts](https://fonts.google.com/specimen/Pixelify+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/pixelify-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/pixelify-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
