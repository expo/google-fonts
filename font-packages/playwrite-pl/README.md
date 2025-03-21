# @expo-google-fonts/playwrite-pl

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playwrite-pl)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playwrite-pl)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playwrite-pl)

This package lets you use the [**Playwrite PL**](https://fonts.google.com/specimen/Playwrite+PL) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playwrite PL

![Playwrite PL](./font-family.png)

This font family contains [4 styles](#-gallery).

- `PlaywritePL_100Thin`
- `PlaywritePL_200ExtraLight`
- `PlaywritePL_300Light`
- `PlaywritePL_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playwrite-pl expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, PlaywritePL_100Thin, PlaywritePL_200ExtraLight, PlaywritePL_300Light, PlaywritePL_400Regular } from '@expo-google-fonts/playwrite-pl';

export default () => {

  let [fontsLoaded] = useFonts({
    PlaywritePL_100Thin, 
    PlaywritePL_200ExtraLight, 
    PlaywritePL_300Light, 
    PlaywritePL_400Regular
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywritePL_100Thin"
        }}>
          Playwrite PL Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywritePL_200ExtraLight"
        }}>
          Playwrite PL Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywritePL_300Light"
        }}>
          Playwrite PL Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywritePL_400Regular"
        }}>
          Playwrite PL Regular
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PlaywritePL_100Thin](./PlaywritePL_100Thin.ttf.png)|![PlaywritePL_200ExtraLight](./PlaywritePL_200ExtraLight.ttf.png)|![PlaywritePL_300Light](./PlaywritePL_300Light.ttf.png)||
|![PlaywritePL_400Regular](./PlaywritePL_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playwrite-pl` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playwrite PL page on Google Fonts](https://fonts.google.com/specimen/Playwrite+PL) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playwrite PL on Google Fonts](https://fonts.google.com/specimen/Playwrite+PL)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playwrite-pl)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playwrite-pl)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
