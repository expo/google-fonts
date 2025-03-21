# @expo-google-fonts/noto-serif-khmer

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-khmer)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-khmer)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-khmer)

This package lets you use the [**Noto Serif Khmer**](https://fonts.google.com/specimen/Noto+Serif+Khmer) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Khmer

![Noto Serif Khmer](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifKhmer_100Thin`
- `NotoSerifKhmer_200ExtraLight`
- `NotoSerifKhmer_300Light`
- `NotoSerifKhmer_400Regular`
- `NotoSerifKhmer_500Medium`
- `NotoSerifKhmer_600SemiBold`
- `NotoSerifKhmer_700Bold`
- `NotoSerifKhmer_800ExtraBold`
- `NotoSerifKhmer_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-khmer expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSerifKhmer_100Thin, NotoSerifKhmer_200ExtraLight, NotoSerifKhmer_300Light, NotoSerifKhmer_400Regular, NotoSerifKhmer_500Medium, NotoSerifKhmer_600SemiBold, NotoSerifKhmer_700Bold, NotoSerifKhmer_800ExtraBold, NotoSerifKhmer_900Black } from '@expo-google-fonts/noto-serif-khmer';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifKhmer_100Thin, 
    NotoSerifKhmer_200ExtraLight, 
    NotoSerifKhmer_300Light, 
    NotoSerifKhmer_400Regular, 
    NotoSerifKhmer_500Medium, 
    NotoSerifKhmer_600SemiBold, 
    NotoSerifKhmer_700Bold, 
    NotoSerifKhmer_800ExtraBold, 
    NotoSerifKhmer_900Black
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
          fontFamily: "NotoSerifKhmer_100Thin"
        }}>
          Noto Serif Khmer Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifKhmer_200ExtraLight"
        }}>
          Noto Serif Khmer Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifKhmer_300Light"
        }}>
          Noto Serif Khmer Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifKhmer_400Regular"
        }}>
          Noto Serif Khmer Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifKhmer_500Medium"
        }}>
          Noto Serif Khmer Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifKhmer_600SemiBold"
        }}>
          Noto Serif Khmer Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifKhmer_700Bold"
        }}>
          Noto Serif Khmer Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifKhmer_800ExtraBold"
        }}>
          Noto Serif Khmer Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifKhmer_900Black"
        }}>
          Noto Serif Khmer Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifKhmer_100Thin](./NotoSerifKhmer_100Thin.ttf.png)|![NotoSerifKhmer_200ExtraLight](./NotoSerifKhmer_200ExtraLight.ttf.png)|![NotoSerifKhmer_300Light](./NotoSerifKhmer_300Light.ttf.png)||
|![NotoSerifKhmer_400Regular](./NotoSerifKhmer_400Regular.ttf.png)|![NotoSerifKhmer_500Medium](./NotoSerifKhmer_500Medium.ttf.png)|![NotoSerifKhmer_600SemiBold](./NotoSerifKhmer_600SemiBold.ttf.png)||
|![NotoSerifKhmer_700Bold](./NotoSerifKhmer_700Bold.ttf.png)|![NotoSerifKhmer_800ExtraBold](./NotoSerifKhmer_800ExtraBold.ttf.png)|![NotoSerifKhmer_900Black](./NotoSerifKhmer_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-khmer` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Khmer page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Khmer) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Khmer on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Khmer)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-khmer)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-khmer)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
