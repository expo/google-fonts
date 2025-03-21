# @expo-google-fonts/gemunu-libre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/gemunu-libre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/gemunu-libre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/gemunu-libre)

This package lets you use the [**Gemunu Libre**](https://fonts.google.com/specimen/Gemunu+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Gemunu Libre

![Gemunu Libre](./font-family.png)

This font family contains [7 styles](#-gallery).

- `GemunuLibre_200ExtraLight`
- `GemunuLibre_300Light`
- `GemunuLibre_400Regular`
- `GemunuLibre_500Medium`
- `GemunuLibre_600SemiBold`
- `GemunuLibre_700Bold`
- `GemunuLibre_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/gemunu-libre expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, GemunuLibre_200ExtraLight, GemunuLibre_300Light, GemunuLibre_400Regular, GemunuLibre_500Medium, GemunuLibre_600SemiBold, GemunuLibre_700Bold, GemunuLibre_800ExtraBold } from '@expo-google-fonts/gemunu-libre';

export default () => {

  let [fontsLoaded] = useFonts({
    GemunuLibre_200ExtraLight, 
    GemunuLibre_300Light, 
    GemunuLibre_400Regular, 
    GemunuLibre_500Medium, 
    GemunuLibre_600SemiBold, 
    GemunuLibre_700Bold, 
    GemunuLibre_800ExtraBold
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
          fontFamily: "GemunuLibre_200ExtraLight"
        }}>
          Gemunu Libre Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GemunuLibre_300Light"
        }}>
          Gemunu Libre Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GemunuLibre_400Regular"
        }}>
          Gemunu Libre Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GemunuLibre_500Medium"
        }}>
          Gemunu Libre Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GemunuLibre_600SemiBold"
        }}>
          Gemunu Libre Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GemunuLibre_700Bold"
        }}>
          Gemunu Libre Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GemunuLibre_800ExtraBold"
        }}>
          Gemunu Libre Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![GemunuLibre_200ExtraLight](./GemunuLibre_200ExtraLight.ttf.png)|![GemunuLibre_300Light](./GemunuLibre_300Light.ttf.png)|![GemunuLibre_400Regular](./GemunuLibre_400Regular.ttf.png)||
|![GemunuLibre_500Medium](./GemunuLibre_500Medium.ttf.png)|![GemunuLibre_600SemiBold](./GemunuLibre_600SemiBold.ttf.png)|![GemunuLibre_700Bold](./GemunuLibre_700Bold.ttf.png)||
|![GemunuLibre_800ExtraBold](./GemunuLibre_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/gemunu-libre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Gemunu Libre page on Google Fonts](https://fonts.google.com/specimen/Gemunu+Libre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Gemunu Libre on Google Fonts](https://fonts.google.com/specimen/Gemunu+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gemunu-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gemunu-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
