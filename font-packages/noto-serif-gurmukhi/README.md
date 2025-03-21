# @expo-google-fonts/noto-serif-gurmukhi

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-gurmukhi)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-gurmukhi)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-gurmukhi)

This package lets you use the [**Noto Serif Gurmukhi**](https://fonts.google.com/specimen/Noto+Serif+Gurmukhi) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Gurmukhi

![Noto Serif Gurmukhi](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifGurmukhi_100Thin`
- `NotoSerifGurmukhi_200ExtraLight`
- `NotoSerifGurmukhi_300Light`
- `NotoSerifGurmukhi_400Regular`
- `NotoSerifGurmukhi_500Medium`
- `NotoSerifGurmukhi_600SemiBold`
- `NotoSerifGurmukhi_700Bold`
- `NotoSerifGurmukhi_800ExtraBold`
- `NotoSerifGurmukhi_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-gurmukhi expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSerifGurmukhi_100Thin, NotoSerifGurmukhi_200ExtraLight, NotoSerifGurmukhi_300Light, NotoSerifGurmukhi_400Regular, NotoSerifGurmukhi_500Medium, NotoSerifGurmukhi_600SemiBold, NotoSerifGurmukhi_700Bold, NotoSerifGurmukhi_800ExtraBold, NotoSerifGurmukhi_900Black } from '@expo-google-fonts/noto-serif-gurmukhi';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifGurmukhi_100Thin, 
    NotoSerifGurmukhi_200ExtraLight, 
    NotoSerifGurmukhi_300Light, 
    NotoSerifGurmukhi_400Regular, 
    NotoSerifGurmukhi_500Medium, 
    NotoSerifGurmukhi_600SemiBold, 
    NotoSerifGurmukhi_700Bold, 
    NotoSerifGurmukhi_800ExtraBold, 
    NotoSerifGurmukhi_900Black
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
          fontFamily: "NotoSerifGurmukhi_100Thin"
        }}>
          Noto Serif Gurmukhi Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGurmukhi_200ExtraLight"
        }}>
          Noto Serif Gurmukhi Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGurmukhi_300Light"
        }}>
          Noto Serif Gurmukhi Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGurmukhi_400Regular"
        }}>
          Noto Serif Gurmukhi Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGurmukhi_500Medium"
        }}>
          Noto Serif Gurmukhi Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGurmukhi_600SemiBold"
        }}>
          Noto Serif Gurmukhi Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGurmukhi_700Bold"
        }}>
          Noto Serif Gurmukhi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGurmukhi_800ExtraBold"
        }}>
          Noto Serif Gurmukhi Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifGurmukhi_900Black"
        }}>
          Noto Serif Gurmukhi Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifGurmukhi_100Thin](./NotoSerifGurmukhi_100Thin.ttf.png)|![NotoSerifGurmukhi_200ExtraLight](./NotoSerifGurmukhi_200ExtraLight.ttf.png)|![NotoSerifGurmukhi_300Light](./NotoSerifGurmukhi_300Light.ttf.png)||
|![NotoSerifGurmukhi_400Regular](./NotoSerifGurmukhi_400Regular.ttf.png)|![NotoSerifGurmukhi_500Medium](./NotoSerifGurmukhi_500Medium.ttf.png)|![NotoSerifGurmukhi_600SemiBold](./NotoSerifGurmukhi_600SemiBold.ttf.png)||
|![NotoSerifGurmukhi_700Bold](./NotoSerifGurmukhi_700Bold.ttf.png)|![NotoSerifGurmukhi_800ExtraBold](./NotoSerifGurmukhi_800ExtraBold.ttf.png)|![NotoSerifGurmukhi_900Black](./NotoSerifGurmukhi_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-gurmukhi` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Gurmukhi page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Gurmukhi) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Gurmukhi on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Gurmukhi)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-gurmukhi)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-gurmukhi)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
