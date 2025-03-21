# @expo-google-fonts/playwrite-za

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playwrite-za)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playwrite-za)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playwrite-za)

This package lets you use the [**Playwrite ZA**](https://fonts.google.com/specimen/Playwrite+ZA) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playwrite ZA

![Playwrite ZA](./font-family.png)

This font family contains [4 styles](#-gallery).

- `PlaywriteZA_100Thin`
- `PlaywriteZA_200ExtraLight`
- `PlaywriteZA_300Light`
- `PlaywriteZA_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playwrite-za expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, PlaywriteZA_100Thin, PlaywriteZA_200ExtraLight, PlaywriteZA_300Light, PlaywriteZA_400Regular } from '@expo-google-fonts/playwrite-za';

export default () => {

  let [fontsLoaded] = useFonts({
    PlaywriteZA_100Thin, 
    PlaywriteZA_200ExtraLight, 
    PlaywriteZA_300Light, 
    PlaywriteZA_400Regular
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
          fontFamily: "PlaywriteZA_100Thin"
        }}>
          Playwrite ZA Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteZA_200ExtraLight"
        }}>
          Playwrite ZA Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteZA_300Light"
        }}>
          Playwrite ZA Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteZA_400Regular"
        }}>
          Playwrite ZA Regular
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PlaywriteZA_100Thin](./PlaywriteZA_100Thin.ttf.png)|![PlaywriteZA_200ExtraLight](./PlaywriteZA_200ExtraLight.ttf.png)|![PlaywriteZA_300Light](./PlaywriteZA_300Light.ttf.png)||
|![PlaywriteZA_400Regular](./PlaywriteZA_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playwrite-za` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playwrite ZA page on Google Fonts](https://fonts.google.com/specimen/Playwrite+ZA) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playwrite ZA on Google Fonts](https://fonts.google.com/specimen/Playwrite+ZA)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playwrite-za)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playwrite-za)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
