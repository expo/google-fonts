# @expo-google-fonts/material-symbols-rounded

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/material-symbols-rounded)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/material-symbols-rounded)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/material-symbols-rounded)

This package lets you use the [**Material Symbols Rounded**](https://fonts.google.com/specimen/Material+Symbols+Rounded) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Material Symbols Rounded

![Material Symbols Rounded](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MaterialSymbolsRounded_100Thin`
- `MaterialSymbolsRounded_200ExtraLight`
- `MaterialSymbolsRounded_300Light`
- `MaterialSymbolsRounded_400Regular`
- `MaterialSymbolsRounded_500Medium`
- `MaterialSymbolsRounded_600SemiBold`
- `MaterialSymbolsRounded_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/material-symbols-rounded expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, MaterialSymbolsRounded_100Thin, MaterialSymbolsRounded_200ExtraLight, MaterialSymbolsRounded_300Light, MaterialSymbolsRounded_400Regular, MaterialSymbolsRounded_500Medium, MaterialSymbolsRounded_600SemiBold, MaterialSymbolsRounded_700Bold } from '@expo-google-fonts/material-symbols-rounded';

export default () => {

  let [fontsLoaded] = useFonts({
    MaterialSymbolsRounded_100Thin, 
    MaterialSymbolsRounded_200ExtraLight, 
    MaterialSymbolsRounded_300Light, 
    MaterialSymbolsRounded_400Regular, 
    MaterialSymbolsRounded_500Medium, 
    MaterialSymbolsRounded_600SemiBold, 
    MaterialSymbolsRounded_700Bold
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
          fontFamily: "MaterialSymbolsRounded_100Thin"
        }}>
          Material Symbols Rounded Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsRounded_200ExtraLight"
        }}>
          Material Symbols Rounded Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsRounded_300Light"
        }}>
          Material Symbols Rounded Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsRounded_400Regular"
        }}>
          Material Symbols Rounded Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsRounded_500Medium"
        }}>
          Material Symbols Rounded Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsRounded_600SemiBold"
        }}>
          Material Symbols Rounded Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsRounded_700Bold"
        }}>
          Material Symbols Rounded Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MaterialSymbolsRounded_100Thin](./MaterialSymbolsRounded_100Thin.ttf.png)|![MaterialSymbolsRounded_200ExtraLight](./MaterialSymbolsRounded_200ExtraLight.ttf.png)|![MaterialSymbolsRounded_300Light](./MaterialSymbolsRounded_300Light.ttf.png)||
|![MaterialSymbolsRounded_400Regular](./MaterialSymbolsRounded_400Regular.ttf.png)|![MaterialSymbolsRounded_500Medium](./MaterialSymbolsRounded_500Medium.ttf.png)|![MaterialSymbolsRounded_600SemiBold](./MaterialSymbolsRounded_600SemiBold.ttf.png)||
|![MaterialSymbolsRounded_700Bold](./MaterialSymbolsRounded_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/material-symbols-rounded` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Material Symbols Rounded page on Google Fonts](https://fonts.google.com/specimen/Material+Symbols+Rounded) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Material Symbols Rounded on Google Fonts](https://fonts.google.com/specimen/Material+Symbols+Rounded)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/material-symbols-rounded)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/material-symbols-rounded)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
