# @expo-google-fonts/noto-serif-sinhala

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-sinhala)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-sinhala)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-sinhala)

This package lets you use the [**Noto Serif Sinhala**](https://fonts.google.com/specimen/Noto+Serif+Sinhala) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Sinhala

![Noto Serif Sinhala](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifSinhala_100Thin`
- `NotoSerifSinhala_200ExtraLight`
- `NotoSerifSinhala_300Light`
- `NotoSerifSinhala_400Regular`
- `NotoSerifSinhala_500Medium`
- `NotoSerifSinhala_600SemiBold`
- `NotoSerifSinhala_700Bold`
- `NotoSerifSinhala_800ExtraBold`
- `NotoSerifSinhala_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-sinhala expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSerifSinhala_100Thin, NotoSerifSinhala_200ExtraLight, NotoSerifSinhala_300Light, NotoSerifSinhala_400Regular, NotoSerifSinhala_500Medium, NotoSerifSinhala_600SemiBold, NotoSerifSinhala_700Bold, NotoSerifSinhala_800ExtraBold, NotoSerifSinhala_900Black } from '@expo-google-fonts/noto-serif-sinhala';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifSinhala_100Thin, 
    NotoSerifSinhala_200ExtraLight, 
    NotoSerifSinhala_300Light, 
    NotoSerifSinhala_400Regular, 
    NotoSerifSinhala_500Medium, 
    NotoSerifSinhala_600SemiBold, 
    NotoSerifSinhala_700Bold, 
    NotoSerifSinhala_800ExtraBold, 
    NotoSerifSinhala_900Black
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
          fontFamily: "NotoSerifSinhala_100Thin"
        }}>
          Noto Serif Sinhala Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifSinhala_200ExtraLight"
        }}>
          Noto Serif Sinhala Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifSinhala_300Light"
        }}>
          Noto Serif Sinhala Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifSinhala_400Regular"
        }}>
          Noto Serif Sinhala Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifSinhala_500Medium"
        }}>
          Noto Serif Sinhala Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifSinhala_600SemiBold"
        }}>
          Noto Serif Sinhala Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifSinhala_700Bold"
        }}>
          Noto Serif Sinhala Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifSinhala_800ExtraBold"
        }}>
          Noto Serif Sinhala Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifSinhala_900Black"
        }}>
          Noto Serif Sinhala Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifSinhala_100Thin](./NotoSerifSinhala_100Thin.ttf.png)|![NotoSerifSinhala_200ExtraLight](./NotoSerifSinhala_200ExtraLight.ttf.png)|![NotoSerifSinhala_300Light](./NotoSerifSinhala_300Light.ttf.png)||
|![NotoSerifSinhala_400Regular](./NotoSerifSinhala_400Regular.ttf.png)|![NotoSerifSinhala_500Medium](./NotoSerifSinhala_500Medium.ttf.png)|![NotoSerifSinhala_600SemiBold](./NotoSerifSinhala_600SemiBold.ttf.png)||
|![NotoSerifSinhala_700Bold](./NotoSerifSinhala_700Bold.ttf.png)|![NotoSerifSinhala_800ExtraBold](./NotoSerifSinhala_800ExtraBold.ttf.png)|![NotoSerifSinhala_900Black](./NotoSerifSinhala_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-sinhala` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Sinhala page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Sinhala) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Sinhala on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Sinhala)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-sinhala)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-sinhala)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
