# @expo-google-fonts/material-symbols

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/material-symbols)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/material-symbols)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/material-symbols)

This package lets you use the [**Material Symbols**](https://fonts.google.com/specimen/Material+Symbols) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Material Symbols

![Material Symbols](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MaterialSymbols_100Thin`
- `MaterialSymbols_200ExtraLight`
- `MaterialSymbols_300Light`
- `MaterialSymbols_400Regular`
- `MaterialSymbols_500Medium`
- `MaterialSymbols_600SemiBold`
- `MaterialSymbols_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/material-symbols expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, MaterialSymbols_100Thin, MaterialSymbols_200ExtraLight, MaterialSymbols_300Light, MaterialSymbols_400Regular, MaterialSymbols_500Medium, MaterialSymbols_600SemiBold, MaterialSymbols_700Bold } from '@expo-google-fonts/material-symbols';

export default () => {

  let [fontsLoaded] = useFonts({
    MaterialSymbols_100Thin, 
    MaterialSymbols_200ExtraLight, 
    MaterialSymbols_300Light, 
    MaterialSymbols_400Regular, 
    MaterialSymbols_500Medium, 
    MaterialSymbols_600SemiBold, 
    MaterialSymbols_700Bold
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
          fontFamily: "MaterialSymbols_100Thin"
        }}>
          Material Symbols Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbols_200ExtraLight"
        }}>
          Material Symbols Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbols_300Light"
        }}>
          Material Symbols Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbols_400Regular"
        }}>
          Material Symbols Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbols_500Medium"
        }}>
          Material Symbols Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbols_600SemiBold"
        }}>
          Material Symbols Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbols_700Bold"
        }}>
          Material Symbols Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MaterialSymbols_100Thin](./MaterialSymbols_100Thin.ttf.png)|![MaterialSymbols_200ExtraLight](./MaterialSymbols_200ExtraLight.ttf.png)|![MaterialSymbols_300Light](./MaterialSymbols_300Light.ttf.png)||
|![MaterialSymbols_400Regular](./MaterialSymbols_400Regular.ttf.png)|![MaterialSymbols_500Medium](./MaterialSymbols_500Medium.ttf.png)|![MaterialSymbols_600SemiBold](./MaterialSymbols_600SemiBold.ttf.png)||
|![MaterialSymbols_700Bold](./MaterialSymbols_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/material-symbols` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Material Symbols page on Google Fonts](https://fonts.google.com/specimen/Material+Symbols) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Material Symbols on Google Fonts](https://fonts.google.com/specimen/Material+Symbols)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/material-symbols)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/material-symbols)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
