# @expo-google-fonts/noto-sans-thai-looped

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-thai-looped)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-thai-looped)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-thai-looped)

This package lets you use the [**Noto Sans Thai Looped**](https://fonts.google.com/specimen/Noto+Sans+Thai+Looped) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Thai Looped

![Noto Sans Thai Looped](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansThaiLooped_100Thin`
- `NotoSansThaiLooped_200ExtraLight`
- `NotoSansThaiLooped_300Light`
- `NotoSansThaiLooped_400Regular`
- `NotoSansThaiLooped_500Medium`
- `NotoSansThaiLooped_600SemiBold`
- `NotoSansThaiLooped_700Bold`
- `NotoSansThaiLooped_800ExtraBold`
- `NotoSansThaiLooped_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-thai-looped expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSansThaiLooped_100Thin, NotoSansThaiLooped_200ExtraLight, NotoSansThaiLooped_300Light, NotoSansThaiLooped_400Regular, NotoSansThaiLooped_500Medium, NotoSansThaiLooped_600SemiBold, NotoSansThaiLooped_700Bold, NotoSansThaiLooped_800ExtraBold, NotoSansThaiLooped_900Black } from '@expo-google-fonts/noto-sans-thai-looped';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansThaiLooped_100Thin, 
    NotoSansThaiLooped_200ExtraLight, 
    NotoSansThaiLooped_300Light, 
    NotoSansThaiLooped_400Regular, 
    NotoSansThaiLooped_500Medium, 
    NotoSansThaiLooped_600SemiBold, 
    NotoSansThaiLooped_700Bold, 
    NotoSansThaiLooped_800ExtraBold, 
    NotoSansThaiLooped_900Black
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
          fontFamily: "NotoSansThaiLooped_100Thin"
        }}>
          Noto Sans Thai Looped Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansThaiLooped_200ExtraLight"
        }}>
          Noto Sans Thai Looped Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansThaiLooped_300Light"
        }}>
          Noto Sans Thai Looped Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansThaiLooped_400Regular"
        }}>
          Noto Sans Thai Looped Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansThaiLooped_500Medium"
        }}>
          Noto Sans Thai Looped Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansThaiLooped_600SemiBold"
        }}>
          Noto Sans Thai Looped Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansThaiLooped_700Bold"
        }}>
          Noto Sans Thai Looped Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansThaiLooped_800ExtraBold"
        }}>
          Noto Sans Thai Looped Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansThaiLooped_900Black"
        }}>
          Noto Sans Thai Looped Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansThaiLooped_100Thin](./NotoSansThaiLooped_100Thin.ttf.png)|![NotoSansThaiLooped_200ExtraLight](./NotoSansThaiLooped_200ExtraLight.ttf.png)|![NotoSansThaiLooped_300Light](./NotoSansThaiLooped_300Light.ttf.png)||
|![NotoSansThaiLooped_400Regular](./NotoSansThaiLooped_400Regular.ttf.png)|![NotoSansThaiLooped_500Medium](./NotoSansThaiLooped_500Medium.ttf.png)|![NotoSansThaiLooped_600SemiBold](./NotoSansThaiLooped_600SemiBold.ttf.png)||
|![NotoSansThaiLooped_700Bold](./NotoSansThaiLooped_700Bold.ttf.png)|![NotoSansThaiLooped_800ExtraBold](./NotoSansThaiLooped_800ExtraBold.ttf.png)|![NotoSansThaiLooped_900Black](./NotoSansThaiLooped_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-thai-looped` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Thai Looped page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Thai+Looped) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Thai Looped on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Thai+Looped)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-thai-looped)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-thai-looped)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
