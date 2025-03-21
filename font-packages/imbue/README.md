# @expo-google-fonts/imbue

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/imbue)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/imbue)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/imbue)

This package lets you use the [**Imbue**](https://fonts.google.com/specimen/Imbue) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Imbue

![Imbue](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Imbue_100Thin`
- `Imbue_200ExtraLight`
- `Imbue_300Light`
- `Imbue_400Regular`
- `Imbue_500Medium`
- `Imbue_600SemiBold`
- `Imbue_700Bold`
- `Imbue_800ExtraBold`
- `Imbue_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/imbue expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Imbue_100Thin, Imbue_200ExtraLight, Imbue_300Light, Imbue_400Regular, Imbue_500Medium, Imbue_600SemiBold, Imbue_700Bold, Imbue_800ExtraBold, Imbue_900Black } from '@expo-google-fonts/imbue';

export default () => {

  let [fontsLoaded] = useFonts({
    Imbue_100Thin, 
    Imbue_200ExtraLight, 
    Imbue_300Light, 
    Imbue_400Regular, 
    Imbue_500Medium, 
    Imbue_600SemiBold, 
    Imbue_700Bold, 
    Imbue_800ExtraBold, 
    Imbue_900Black
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
          fontFamily: "Imbue_100Thin"
        }}>
          Imbue Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Imbue_200ExtraLight"
        }}>
          Imbue Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Imbue_300Light"
        }}>
          Imbue Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Imbue_400Regular"
        }}>
          Imbue Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Imbue_500Medium"
        }}>
          Imbue Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Imbue_600SemiBold"
        }}>
          Imbue Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Imbue_700Bold"
        }}>
          Imbue Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Imbue_800ExtraBold"
        }}>
          Imbue Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Imbue_900Black"
        }}>
          Imbue Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Imbue_100Thin](./Imbue_100Thin.ttf.png)|![Imbue_200ExtraLight](./Imbue_200ExtraLight.ttf.png)|![Imbue_300Light](./Imbue_300Light.ttf.png)||
|![Imbue_400Regular](./Imbue_400Regular.ttf.png)|![Imbue_500Medium](./Imbue_500Medium.ttf.png)|![Imbue_600SemiBold](./Imbue_600SemiBold.ttf.png)||
|![Imbue_700Bold](./Imbue_700Bold.ttf.png)|![Imbue_800ExtraBold](./Imbue_800ExtraBold.ttf.png)|![Imbue_900Black](./Imbue_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/imbue` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Imbue page on Google Fonts](https://fonts.google.com/specimen/Imbue) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Imbue on Google Fonts](https://fonts.google.com/specimen/Imbue)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/imbue)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/imbue)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
