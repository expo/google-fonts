# @expo-google-fonts/afacad-flux

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/afacad-flux)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/afacad-flux)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/afacad-flux)

This package lets you use the [**Afacad Flux**](https://fonts.google.com/specimen/Afacad+Flux) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Afacad Flux

![Afacad Flux](./font-family.png)

This font family contains [9 styles](#-gallery).

- `AfacadFlux_100Thin`
- `AfacadFlux_200ExtraLight`
- `AfacadFlux_300Light`
- `AfacadFlux_400Regular`
- `AfacadFlux_500Medium`
- `AfacadFlux_600SemiBold`
- `AfacadFlux_700Bold`
- `AfacadFlux_800ExtraBold`
- `AfacadFlux_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/afacad-flux expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, AfacadFlux_100Thin, AfacadFlux_200ExtraLight, AfacadFlux_300Light, AfacadFlux_400Regular, AfacadFlux_500Medium, AfacadFlux_600SemiBold, AfacadFlux_700Bold, AfacadFlux_800ExtraBold, AfacadFlux_900Black } from '@expo-google-fonts/afacad-flux';

export default () => {

  let [fontsLoaded] = useFonts({
    AfacadFlux_100Thin, 
    AfacadFlux_200ExtraLight, 
    AfacadFlux_300Light, 
    AfacadFlux_400Regular, 
    AfacadFlux_500Medium, 
    AfacadFlux_600SemiBold, 
    AfacadFlux_700Bold, 
    AfacadFlux_800ExtraBold, 
    AfacadFlux_900Black
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
          fontFamily: "AfacadFlux_100Thin"
        }}>
          Afacad Flux Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AfacadFlux_200ExtraLight"
        }}>
          Afacad Flux Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AfacadFlux_300Light"
        }}>
          Afacad Flux Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AfacadFlux_400Regular"
        }}>
          Afacad Flux Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AfacadFlux_500Medium"
        }}>
          Afacad Flux Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AfacadFlux_600SemiBold"
        }}>
          Afacad Flux Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AfacadFlux_700Bold"
        }}>
          Afacad Flux Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AfacadFlux_800ExtraBold"
        }}>
          Afacad Flux Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AfacadFlux_900Black"
        }}>
          Afacad Flux Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AfacadFlux_100Thin](./AfacadFlux_100Thin.ttf.png)|![AfacadFlux_200ExtraLight](./AfacadFlux_200ExtraLight.ttf.png)|![AfacadFlux_300Light](./AfacadFlux_300Light.ttf.png)||
|![AfacadFlux_400Regular](./AfacadFlux_400Regular.ttf.png)|![AfacadFlux_500Medium](./AfacadFlux_500Medium.ttf.png)|![AfacadFlux_600SemiBold](./AfacadFlux_600SemiBold.ttf.png)||
|![AfacadFlux_700Bold](./AfacadFlux_700Bold.ttf.png)|![AfacadFlux_800ExtraBold](./AfacadFlux_800ExtraBold.ttf.png)|![AfacadFlux_900Black](./AfacadFlux_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/afacad-flux` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Afacad Flux page on Google Fonts](https://fonts.google.com/specimen/Afacad+Flux) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Afacad Flux on Google Fonts](https://fonts.google.com/specimen/Afacad+Flux)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/afacad-flux)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/afacad-flux)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
