# @expo-google-fonts/42dot-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/42dot-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/42dot-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/42dot-sans)

This package lets you use the [**42dot Sans**](https://fonts.google.com/specimen/42dot+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## 42dot Sans

![42dot Sans](./font-family.png)

This font family contains [6 styles](#-gallery).

- `font42dotSans_300Light`
- `font42dotSans_400Regular`
- `font42dotSans_500Medium`
- `font42dotSans_600SemiBold`
- `font42dotSans_700Bold`
- `font42dotSans_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/42dot-sans expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, font42dotSans_300Light, font42dotSans_400Regular, font42dotSans_500Medium, font42dotSans_600SemiBold, font42dotSans_700Bold, font42dotSans_800ExtraBold } from '@expo-google-fonts/42dot-sans';

export default () => {

  let [fontsLoaded] = useFonts({
    font42dotSans_300Light, 
    font42dotSans_400Regular, 
    font42dotSans_500Medium, 
    font42dotSans_600SemiBold, 
    font42dotSans_700Bold, 
    font42dotSans_800ExtraBold
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
          fontFamily: "font42dotSans_300Light"
        }}>
          42dot Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "font42dotSans_400Regular"
        }}>
          42dot Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "font42dotSans_500Medium"
        }}>
          42dot Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "font42dotSans_600SemiBold"
        }}>
          42dot Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "font42dotSans_700Bold"
        }}>
          42dot Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "font42dotSans_800ExtraBold"
        }}>
          42dot Sans Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![font42dotSans_300Light](./font42dotSans_300Light.ttf.png)|![font42dotSans_400Regular](./font42dotSans_400Regular.ttf.png)|![font42dotSans_500Medium](./font42dotSans_500Medium.ttf.png)||
|![font42dotSans_600SemiBold](./font42dotSans_600SemiBold.ttf.png)|![font42dotSans_700Bold](./font42dotSans_700Bold.ttf.png)|![font42dotSans_800ExtraBold](./font42dotSans_800ExtraBold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/42dot-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [42dot Sans page on Google Fonts](https://fonts.google.com/specimen/42dot+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [42dot Sans on Google Fonts](https://fonts.google.com/specimen/42dot+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/42dot-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/42dot-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
