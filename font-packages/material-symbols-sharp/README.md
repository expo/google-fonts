# @expo-google-fonts/material-symbols-sharp

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/material-symbols-sharp)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/material-symbols-sharp)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/material-symbols-sharp)

This package lets you use the [**Material Symbols Sharp**](https://fonts.google.com/specimen/Material+Symbols+Sharp) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Material Symbols Sharp

![Material Symbols Sharp](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MaterialSymbolsSharp_100Thin`
- `MaterialSymbolsSharp_200ExtraLight`
- `MaterialSymbolsSharp_300Light`
- `MaterialSymbolsSharp_400Regular`
- `MaterialSymbolsSharp_500Medium`
- `MaterialSymbolsSharp_600SemiBold`
- `MaterialSymbolsSharp_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/material-symbols-sharp expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, MaterialSymbolsSharp_100Thin, MaterialSymbolsSharp_200ExtraLight, MaterialSymbolsSharp_300Light, MaterialSymbolsSharp_400Regular, MaterialSymbolsSharp_500Medium, MaterialSymbolsSharp_600SemiBold, MaterialSymbolsSharp_700Bold } from '@expo-google-fonts/material-symbols-sharp';

export default () => {

  let [fontsLoaded] = useFonts({
    MaterialSymbolsSharp_100Thin, 
    MaterialSymbolsSharp_200ExtraLight, 
    MaterialSymbolsSharp_300Light, 
    MaterialSymbolsSharp_400Regular, 
    MaterialSymbolsSharp_500Medium, 
    MaterialSymbolsSharp_600SemiBold, 
    MaterialSymbolsSharp_700Bold
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
          fontFamily: "MaterialSymbolsSharp_100Thin"
        }}>
          Material Symbols Sharp Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsSharp_200ExtraLight"
        }}>
          Material Symbols Sharp Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsSharp_300Light"
        }}>
          Material Symbols Sharp Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsSharp_400Regular"
        }}>
          Material Symbols Sharp Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsSharp_500Medium"
        }}>
          Material Symbols Sharp Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsSharp_600SemiBold"
        }}>
          Material Symbols Sharp Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsSharp_700Bold"
        }}>
          Material Symbols Sharp Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MaterialSymbolsSharp_100Thin](./MaterialSymbolsSharp_100Thin.ttf.png)|![MaterialSymbolsSharp_200ExtraLight](./MaterialSymbolsSharp_200ExtraLight.ttf.png)|![MaterialSymbolsSharp_300Light](./MaterialSymbolsSharp_300Light.ttf.png)||
|![MaterialSymbolsSharp_400Regular](./MaterialSymbolsSharp_400Regular.ttf.png)|![MaterialSymbolsSharp_500Medium](./MaterialSymbolsSharp_500Medium.ttf.png)|![MaterialSymbolsSharp_600SemiBold](./MaterialSymbolsSharp_600SemiBold.ttf.png)||
|![MaterialSymbolsSharp_700Bold](./MaterialSymbolsSharp_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/material-symbols-sharp` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Material Symbols Sharp page on Google Fonts](https://fonts.google.com/specimen/Material+Symbols+Sharp) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Material Symbols Sharp on Google Fonts](https://fonts.google.com/specimen/Material+Symbols+Sharp)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/material-symbols-sharp)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/material-symbols-sharp)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
