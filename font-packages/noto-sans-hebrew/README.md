# @expo-google-fonts/noto-sans-hebrew

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-hebrew)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-hebrew)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-hebrew)

This package lets you use the [**Noto Sans Hebrew**](https://fonts.google.com/specimen/Noto+Sans+Hebrew) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Hebrew

![Noto Sans Hebrew](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansHebrew_100Thin`
- `NotoSansHebrew_200ExtraLight`
- `NotoSansHebrew_300Light`
- `NotoSansHebrew_400Regular`
- `NotoSansHebrew_500Medium`
- `NotoSansHebrew_600SemiBold`
- `NotoSansHebrew_700Bold`
- `NotoSansHebrew_800ExtraBold`
- `NotoSansHebrew_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-hebrew expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSansHebrew_100Thin, NotoSansHebrew_200ExtraLight, NotoSansHebrew_300Light, NotoSansHebrew_400Regular, NotoSansHebrew_500Medium, NotoSansHebrew_600SemiBold, NotoSansHebrew_700Bold, NotoSansHebrew_800ExtraBold, NotoSansHebrew_900Black } from '@expo-google-fonts/noto-sans-hebrew';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansHebrew_100Thin, 
    NotoSansHebrew_200ExtraLight, 
    NotoSansHebrew_300Light, 
    NotoSansHebrew_400Regular, 
    NotoSansHebrew_500Medium, 
    NotoSansHebrew_600SemiBold, 
    NotoSansHebrew_700Bold, 
    NotoSansHebrew_800ExtraBold, 
    NotoSansHebrew_900Black
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
          fontFamily: "NotoSansHebrew_100Thin"
        }}>
          Noto Sans Hebrew Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansHebrew_200ExtraLight"
        }}>
          Noto Sans Hebrew Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansHebrew_300Light"
        }}>
          Noto Sans Hebrew Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansHebrew_400Regular"
        }}>
          Noto Sans Hebrew Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansHebrew_500Medium"
        }}>
          Noto Sans Hebrew Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansHebrew_600SemiBold"
        }}>
          Noto Sans Hebrew Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansHebrew_700Bold"
        }}>
          Noto Sans Hebrew Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansHebrew_800ExtraBold"
        }}>
          Noto Sans Hebrew Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansHebrew_900Black"
        }}>
          Noto Sans Hebrew Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansHebrew_100Thin](./NotoSansHebrew_100Thin.ttf.png)|![NotoSansHebrew_200ExtraLight](./NotoSansHebrew_200ExtraLight.ttf.png)|![NotoSansHebrew_300Light](./NotoSansHebrew_300Light.ttf.png)||
|![NotoSansHebrew_400Regular](./NotoSansHebrew_400Regular.ttf.png)|![NotoSansHebrew_500Medium](./NotoSansHebrew_500Medium.ttf.png)|![NotoSansHebrew_600SemiBold](./NotoSansHebrew_600SemiBold.ttf.png)||
|![NotoSansHebrew_700Bold](./NotoSansHebrew_700Bold.ttf.png)|![NotoSansHebrew_800ExtraBold](./NotoSansHebrew_800ExtraBold.ttf.png)|![NotoSansHebrew_900Black](./NotoSansHebrew_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-hebrew` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Hebrew page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Hebrew) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Hebrew on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Hebrew)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-hebrew)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-hebrew)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
