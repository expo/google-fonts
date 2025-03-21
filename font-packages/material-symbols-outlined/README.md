# @expo-google-fonts/material-symbols-outlined

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/material-symbols-outlined)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/material-symbols-outlined)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/material-symbols-outlined)

This package lets you use the [**Material Symbols Outlined**](https://fonts.google.com/specimen/Material+Symbols+Outlined) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Material Symbols Outlined

![Material Symbols Outlined](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MaterialSymbolsOutlined_100Thin`
- `MaterialSymbolsOutlined_200ExtraLight`
- `MaterialSymbolsOutlined_300Light`
- `MaterialSymbolsOutlined_400Regular`
- `MaterialSymbolsOutlined_500Medium`
- `MaterialSymbolsOutlined_600SemiBold`
- `MaterialSymbolsOutlined_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/material-symbols-outlined expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, MaterialSymbolsOutlined_100Thin, MaterialSymbolsOutlined_200ExtraLight, MaterialSymbolsOutlined_300Light, MaterialSymbolsOutlined_400Regular, MaterialSymbolsOutlined_500Medium, MaterialSymbolsOutlined_600SemiBold, MaterialSymbolsOutlined_700Bold } from '@expo-google-fonts/material-symbols-outlined';

export default () => {

  let [fontsLoaded] = useFonts({
    MaterialSymbolsOutlined_100Thin, 
    MaterialSymbolsOutlined_200ExtraLight, 
    MaterialSymbolsOutlined_300Light, 
    MaterialSymbolsOutlined_400Regular, 
    MaterialSymbolsOutlined_500Medium, 
    MaterialSymbolsOutlined_600SemiBold, 
    MaterialSymbolsOutlined_700Bold
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
          fontFamily: "MaterialSymbolsOutlined_100Thin"
        }}>
          Material Symbols Outlined Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsOutlined_200ExtraLight"
        }}>
          Material Symbols Outlined Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsOutlined_300Light"
        }}>
          Material Symbols Outlined Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsOutlined_400Regular"
        }}>
          Material Symbols Outlined Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsOutlined_500Medium"
        }}>
          Material Symbols Outlined Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsOutlined_600SemiBold"
        }}>
          Material Symbols Outlined Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MaterialSymbolsOutlined_700Bold"
        }}>
          Material Symbols Outlined Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MaterialSymbolsOutlined_100Thin](./MaterialSymbolsOutlined_100Thin.ttf.png)|![MaterialSymbolsOutlined_200ExtraLight](./MaterialSymbolsOutlined_200ExtraLight.ttf.png)|![MaterialSymbolsOutlined_300Light](./MaterialSymbolsOutlined_300Light.ttf.png)||
|![MaterialSymbolsOutlined_400Regular](./MaterialSymbolsOutlined_400Regular.ttf.png)|![MaterialSymbolsOutlined_500Medium](./MaterialSymbolsOutlined_500Medium.ttf.png)|![MaterialSymbolsOutlined_600SemiBold](./MaterialSymbolsOutlined_600SemiBold.ttf.png)||
|![MaterialSymbolsOutlined_700Bold](./MaterialSymbolsOutlined_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/material-symbols-outlined` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Material Symbols Outlined page on Google Fonts](https://fonts.google.com/specimen/Material+Symbols+Outlined) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Material Symbols Outlined on Google Fonts](https://fonts.google.com/specimen/Material+Symbols+Outlined)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/material-symbols-outlined)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/material-symbols-outlined)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
