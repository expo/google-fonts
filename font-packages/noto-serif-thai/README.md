# @expo-google-fonts/noto-serif-thai

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-thai)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-thai)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-thai)

This package lets you use the [**Noto Serif Thai**](https://fonts.google.com/specimen/Noto+Serif+Thai) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Thai

![Noto Serif Thai](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifThai_100Thin`
- `NotoSerifThai_200ExtraLight`
- `NotoSerifThai_300Light`
- `NotoSerifThai_400Regular`
- `NotoSerifThai_500Medium`
- `NotoSerifThai_600SemiBold`
- `NotoSerifThai_700Bold`
- `NotoSerifThai_800ExtraBold`
- `NotoSerifThai_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-thai expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSerifThai_100Thin, NotoSerifThai_200ExtraLight, NotoSerifThai_300Light, NotoSerifThai_400Regular, NotoSerifThai_500Medium, NotoSerifThai_600SemiBold, NotoSerifThai_700Bold, NotoSerifThai_800ExtraBold, NotoSerifThai_900Black } from '@expo-google-fonts/noto-serif-thai';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifThai_100Thin, 
    NotoSerifThai_200ExtraLight, 
    NotoSerifThai_300Light, 
    NotoSerifThai_400Regular, 
    NotoSerifThai_500Medium, 
    NotoSerifThai_600SemiBold, 
    NotoSerifThai_700Bold, 
    NotoSerifThai_800ExtraBold, 
    NotoSerifThai_900Black
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
          fontFamily: "NotoSerifThai_100Thin"
        }}>
          Noto Serif Thai Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifThai_200ExtraLight"
        }}>
          Noto Serif Thai Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifThai_300Light"
        }}>
          Noto Serif Thai Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifThai_400Regular"
        }}>
          Noto Serif Thai Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifThai_500Medium"
        }}>
          Noto Serif Thai Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifThai_600SemiBold"
        }}>
          Noto Serif Thai Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifThai_700Bold"
        }}>
          Noto Serif Thai Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifThai_800ExtraBold"
        }}>
          Noto Serif Thai Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifThai_900Black"
        }}>
          Noto Serif Thai Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifThai_100Thin](./NotoSerifThai_100Thin.ttf.png)|![NotoSerifThai_200ExtraLight](./NotoSerifThai_200ExtraLight.ttf.png)|![NotoSerifThai_300Light](./NotoSerifThai_300Light.ttf.png)||
|![NotoSerifThai_400Regular](./NotoSerifThai_400Regular.ttf.png)|![NotoSerifThai_500Medium](./NotoSerifThai_500Medium.ttf.png)|![NotoSerifThai_600SemiBold](./NotoSerifThai_600SemiBold.ttf.png)||
|![NotoSerifThai_700Bold](./NotoSerifThai_700Bold.ttf.png)|![NotoSerifThai_800ExtraBold](./NotoSerifThai_800ExtraBold.ttf.png)|![NotoSerifThai_900Black](./NotoSerifThai_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-thai` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Thai page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Thai) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Thai on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Thai)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-thai)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-thai)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
