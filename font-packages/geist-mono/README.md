# @expo-google-fonts/geist-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/geist-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/geist-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/geist-mono)

This package lets you use the [**Geist Mono**](https://fonts.google.com/specimen/Geist+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Geist Mono

![Geist Mono](./font-family.png)

This font family contains [9 styles](#-gallery).

- `GeistMono_100Thin`
- `GeistMono_200ExtraLight`
- `GeistMono_300Light`
- `GeistMono_400Regular`
- `GeistMono_500Medium`
- `GeistMono_600SemiBold`
- `GeistMono_700Bold`
- `GeistMono_800ExtraBold`
- `GeistMono_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/geist-mono expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, GeistMono_100Thin, GeistMono_200ExtraLight, GeistMono_300Light, GeistMono_400Regular, GeistMono_500Medium, GeistMono_600SemiBold, GeistMono_700Bold, GeistMono_800ExtraBold, GeistMono_900Black } from '@expo-google-fonts/geist-mono';

export default () => {

  let [fontsLoaded] = useFonts({
    GeistMono_100Thin, 
    GeistMono_200ExtraLight, 
    GeistMono_300Light, 
    GeistMono_400Regular, 
    GeistMono_500Medium, 
    GeistMono_600SemiBold, 
    GeistMono_700Bold, 
    GeistMono_800ExtraBold, 
    GeistMono_900Black
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
          fontFamily: "GeistMono_100Thin"
        }}>
          Geist Mono Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GeistMono_200ExtraLight"
        }}>
          Geist Mono Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GeistMono_300Light"
        }}>
          Geist Mono Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GeistMono_400Regular"
        }}>
          Geist Mono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GeistMono_500Medium"
        }}>
          Geist Mono Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GeistMono_600SemiBold"
        }}>
          Geist Mono Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GeistMono_700Bold"
        }}>
          Geist Mono Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GeistMono_800ExtraBold"
        }}>
          Geist Mono Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GeistMono_900Black"
        }}>
          Geist Mono Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![GeistMono_100Thin](./GeistMono_100Thin.ttf.png)|![GeistMono_200ExtraLight](./GeistMono_200ExtraLight.ttf.png)|![GeistMono_300Light](./GeistMono_300Light.ttf.png)||
|![GeistMono_400Regular](./GeistMono_400Regular.ttf.png)|![GeistMono_500Medium](./GeistMono_500Medium.ttf.png)|![GeistMono_600SemiBold](./GeistMono_600SemiBold.ttf.png)||
|![GeistMono_700Bold](./GeistMono_700Bold.ttf.png)|![GeistMono_800ExtraBold](./GeistMono_800ExtraBold.ttf.png)|![GeistMono_900Black](./GeistMono_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/geist-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Geist Mono page on Google Fonts](https://fonts.google.com/specimen/Geist+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Geist Mono on Google Fonts](https://fonts.google.com/specimen/Geist+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/geist-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/geist-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
