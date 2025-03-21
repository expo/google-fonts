# @expo-google-fonts/ibm-plex-sans-thai

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-sans-thai)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-sans-thai)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-sans-thai)

This package lets you use the [**IBM Plex Sans Thai**](https://fonts.google.com/specimen/IBM+Plex+Sans+Thai) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## IBM Plex Sans Thai

![IBM Plex Sans Thai](./font-family.png)

This font family contains [7 styles](#-gallery).

- `IBMPlexSansThai_100Thin`
- `IBMPlexSansThai_200ExtraLight`
- `IBMPlexSansThai_300Light`
- `IBMPlexSansThai_400Regular`
- `IBMPlexSansThai_500Medium`
- `IBMPlexSansThai_600SemiBold`
- `IBMPlexSansThai_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ibm-plex-sans-thai expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, IBMPlexSansThai_100Thin, IBMPlexSansThai_200ExtraLight, IBMPlexSansThai_300Light, IBMPlexSansThai_400Regular, IBMPlexSansThai_500Medium, IBMPlexSansThai_600SemiBold, IBMPlexSansThai_700Bold } from '@expo-google-fonts/ibm-plex-sans-thai';

export default () => {

  let [fontsLoaded] = useFonts({
    IBMPlexSansThai_100Thin, 
    IBMPlexSansThai_200ExtraLight, 
    IBMPlexSansThai_300Light, 
    IBMPlexSansThai_400Regular, 
    IBMPlexSansThai_500Medium, 
    IBMPlexSansThai_600SemiBold, 
    IBMPlexSansThai_700Bold
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
          fontFamily: "IBMPlexSansThai_100Thin"
        }}>
          IBM Plex Sans Thai Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansThai_200ExtraLight"
        }}>
          IBM Plex Sans Thai Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansThai_300Light"
        }}>
          IBM Plex Sans Thai Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansThai_400Regular"
        }}>
          IBM Plex Sans Thai Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansThai_500Medium"
        }}>
          IBM Plex Sans Thai Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansThai_600SemiBold"
        }}>
          IBM Plex Sans Thai Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansThai_700Bold"
        }}>
          IBM Plex Sans Thai Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![IBMPlexSansThai_100Thin](./IBMPlexSansThai_100Thin.ttf.png)|![IBMPlexSansThai_200ExtraLight](./IBMPlexSansThai_200ExtraLight.ttf.png)|![IBMPlexSansThai_300Light](./IBMPlexSansThai_300Light.ttf.png)||
|![IBMPlexSansThai_400Regular](./IBMPlexSansThai_400Regular.ttf.png)|![IBMPlexSansThai_500Medium](./IBMPlexSansThai_500Medium.ttf.png)|![IBMPlexSansThai_600SemiBold](./IBMPlexSansThai_600SemiBold.ttf.png)||
|![IBMPlexSansThai_700Bold](./IBMPlexSansThai_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ibm-plex-sans-thai` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Sans Thai page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Thai) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Sans Thai on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Thai)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-sans-thai)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-sans-thai)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
