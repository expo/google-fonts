# @expo-google-fonts/geist

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/geist)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/geist)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/geist)

This package lets you use the [**Geist**](https://fonts.google.com/specimen/Geist) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Geist

![Geist](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Geist_100Thin`
- `Geist_200ExtraLight`
- `Geist_300Light`
- `Geist_400Regular`
- `Geist_500Medium`
- `Geist_600SemiBold`
- `Geist_700Bold`
- `Geist_800ExtraBold`
- `Geist_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/geist expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Geist_100Thin, Geist_200ExtraLight, Geist_300Light, Geist_400Regular, Geist_500Medium, Geist_600SemiBold, Geist_700Bold, Geist_800ExtraBold, Geist_900Black } from '@expo-google-fonts/geist';

export default () => {

  let [fontsLoaded] = useFonts({
    Geist_100Thin, 
    Geist_200ExtraLight, 
    Geist_300Light, 
    Geist_400Regular, 
    Geist_500Medium, 
    Geist_600SemiBold, 
    Geist_700Bold, 
    Geist_800ExtraBold, 
    Geist_900Black
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
          fontFamily: "Geist_100Thin"
        }}>
          Geist Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geist_200ExtraLight"
        }}>
          Geist Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geist_300Light"
        }}>
          Geist Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geist_400Regular"
        }}>
          Geist Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geist_500Medium"
        }}>
          Geist Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geist_600SemiBold"
        }}>
          Geist Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geist_700Bold"
        }}>
          Geist Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geist_800ExtraBold"
        }}>
          Geist Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geist_900Black"
        }}>
          Geist Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Geist_100Thin](./Geist_100Thin.ttf.png)|![Geist_200ExtraLight](./Geist_200ExtraLight.ttf.png)|![Geist_300Light](./Geist_300Light.ttf.png)||
|![Geist_400Regular](./Geist_400Regular.ttf.png)|![Geist_500Medium](./Geist_500Medium.ttf.png)|![Geist_600SemiBold](./Geist_600SemiBold.ttf.png)||
|![Geist_700Bold](./Geist_700Bold.ttf.png)|![Geist_800ExtraBold](./Geist_800ExtraBold.ttf.png)|![Geist_900Black](./Geist_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/geist` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Geist page on Google Fonts](https://fonts.google.com/specimen/Geist) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Geist on Google Fonts](https://fonts.google.com/specimen/Geist)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/geist)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/geist)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
