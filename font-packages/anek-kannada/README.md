# @expo-google-fonts/anek-kannada

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/anek-kannada)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/anek-kannada)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/anek-kannada)

This package lets you use the [**Anek Kannada**](https://fonts.google.com/specimen/Anek+Kannada) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Anek Kannada

![Anek Kannada](./font-family.png)

This font family contains [8 styles](#-gallery).

- `AnekKannada_100Thin`
- `AnekKannada_200ExtraLight`
- `AnekKannada_300Light`
- `AnekKannada_400Regular`
- `AnekKannada_500Medium`
- `AnekKannada_600SemiBold`
- `AnekKannada_700Bold`
- `AnekKannada_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/anek-kannada expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, AnekKannada_100Thin, AnekKannada_200ExtraLight, AnekKannada_300Light, AnekKannada_400Regular, AnekKannada_500Medium, AnekKannada_600SemiBold, AnekKannada_700Bold, AnekKannada_800ExtraBold } from '@expo-google-fonts/anek-kannada';

export default () => {

  let [fontsLoaded] = useFonts({
    AnekKannada_100Thin, 
    AnekKannada_200ExtraLight, 
    AnekKannada_300Light, 
    AnekKannada_400Regular, 
    AnekKannada_500Medium, 
    AnekKannada_600SemiBold, 
    AnekKannada_700Bold, 
    AnekKannada_800ExtraBold
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
          fontFamily: "AnekKannada_100Thin"
        }}>
          Anek Kannada Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekKannada_200ExtraLight"
        }}>
          Anek Kannada Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekKannada_300Light"
        }}>
          Anek Kannada Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekKannada_400Regular"
        }}>
          Anek Kannada Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekKannada_500Medium"
        }}>
          Anek Kannada Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekKannada_600SemiBold"
        }}>
          Anek Kannada Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekKannada_700Bold"
        }}>
          Anek Kannada Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekKannada_800ExtraBold"
        }}>
          Anek Kannada Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AnekKannada_100Thin](./AnekKannada_100Thin.ttf.png)|![AnekKannada_200ExtraLight](./AnekKannada_200ExtraLight.ttf.png)|![AnekKannada_300Light](./AnekKannada_300Light.ttf.png)||
|![AnekKannada_400Regular](./AnekKannada_400Regular.ttf.png)|![AnekKannada_500Medium](./AnekKannada_500Medium.ttf.png)|![AnekKannada_600SemiBold](./AnekKannada_600SemiBold.ttf.png)||
|![AnekKannada_700Bold](./AnekKannada_700Bold.ttf.png)|![AnekKannada_800ExtraBold](./AnekKannada_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/anek-kannada` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Anek Kannada page on Google Fonts](https://fonts.google.com/specimen/Anek+Kannada) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Anek Kannada on Google Fonts](https://fonts.google.com/specimen/Anek+Kannada)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/anek-kannada)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/anek-kannada)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
