# @expo-google-fonts/lexend-giga

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lexend-giga)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lexend-giga)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lexend-giga)

This package lets you use the [**Lexend Giga**](https://fonts.google.com/specimen/Lexend+Giga) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lexend Giga

![Lexend Giga](./font-family.png)

This font family contains [9 styles](#-gallery).

- `LexendGiga_100Thin`
- `LexendGiga_200ExtraLight`
- `LexendGiga_300Light`
- `LexendGiga_400Regular`
- `LexendGiga_500Medium`
- `LexendGiga_600SemiBold`
- `LexendGiga_700Bold`
- `LexendGiga_800ExtraBold`
- `LexendGiga_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/lexend-giga expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, LexendGiga_100Thin, LexendGiga_200ExtraLight, LexendGiga_300Light, LexendGiga_400Regular, LexendGiga_500Medium, LexendGiga_600SemiBold, LexendGiga_700Bold, LexendGiga_800ExtraBold, LexendGiga_900Black } from '@expo-google-fonts/lexend-giga';

export default () => {

  let [fontsLoaded] = useFonts({
    LexendGiga_100Thin, 
    LexendGiga_200ExtraLight, 
    LexendGiga_300Light, 
    LexendGiga_400Regular, 
    LexendGiga_500Medium, 
    LexendGiga_600SemiBold, 
    LexendGiga_700Bold, 
    LexendGiga_800ExtraBold, 
    LexendGiga_900Black
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
          fontFamily: "LexendGiga_100Thin"
        }}>
          Lexend Giga Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendGiga_200ExtraLight"
        }}>
          Lexend Giga Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendGiga_300Light"
        }}>
          Lexend Giga Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendGiga_400Regular"
        }}>
          Lexend Giga Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendGiga_500Medium"
        }}>
          Lexend Giga Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendGiga_600SemiBold"
        }}>
          Lexend Giga Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendGiga_700Bold"
        }}>
          Lexend Giga Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendGiga_800ExtraBold"
        }}>
          Lexend Giga Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendGiga_900Black"
        }}>
          Lexend Giga Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![LexendGiga_100Thin](./LexendGiga_100Thin.ttf.png)|![LexendGiga_200ExtraLight](./LexendGiga_200ExtraLight.ttf.png)|![LexendGiga_300Light](./LexendGiga_300Light.ttf.png)||
|![LexendGiga_400Regular](./LexendGiga_400Regular.ttf.png)|![LexendGiga_500Medium](./LexendGiga_500Medium.ttf.png)|![LexendGiga_600SemiBold](./LexendGiga_600SemiBold.ttf.png)||
|![LexendGiga_700Bold](./LexendGiga_700Bold.ttf.png)|![LexendGiga_800ExtraBold](./LexendGiga_800ExtraBold.ttf.png)|![LexendGiga_900Black](./LexendGiga_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/lexend-giga` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lexend Giga page on Google Fonts](https://fonts.google.com/specimen/Lexend+Giga) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lexend Giga on Google Fonts](https://fonts.google.com/specimen/Lexend+Giga)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lexend-giga)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lexend-giga)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
