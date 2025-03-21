# @expo-google-fonts/doto

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/doto)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/doto)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/doto)

This package lets you use the [**Doto**](https://fonts.google.com/specimen/Doto) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Doto

![Doto](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Doto_100Thin`
- `Doto_200ExtraLight`
- `Doto_300Light`
- `Doto_400Regular`
- `Doto_500Medium`
- `Doto_600SemiBold`
- `Doto_700Bold`
- `Doto_800ExtraBold`
- `Doto_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/doto expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Doto_100Thin, Doto_200ExtraLight, Doto_300Light, Doto_400Regular, Doto_500Medium, Doto_600SemiBold, Doto_700Bold, Doto_800ExtraBold, Doto_900Black } from '@expo-google-fonts/doto';

export default () => {

  let [fontsLoaded] = useFonts({
    Doto_100Thin, 
    Doto_200ExtraLight, 
    Doto_300Light, 
    Doto_400Regular, 
    Doto_500Medium, 
    Doto_600SemiBold, 
    Doto_700Bold, 
    Doto_800ExtraBold, 
    Doto_900Black
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
          fontFamily: "Doto_100Thin"
        }}>
          Doto Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Doto_200ExtraLight"
        }}>
          Doto Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Doto_300Light"
        }}>
          Doto Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Doto_400Regular"
        }}>
          Doto Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Doto_500Medium"
        }}>
          Doto Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Doto_600SemiBold"
        }}>
          Doto Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Doto_700Bold"
        }}>
          Doto Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Doto_800ExtraBold"
        }}>
          Doto Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Doto_900Black"
        }}>
          Doto Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Doto_100Thin](./Doto_100Thin.ttf.png)|![Doto_200ExtraLight](./Doto_200ExtraLight.ttf.png)|![Doto_300Light](./Doto_300Light.ttf.png)||
|![Doto_400Regular](./Doto_400Regular.ttf.png)|![Doto_500Medium](./Doto_500Medium.ttf.png)|![Doto_600SemiBold](./Doto_600SemiBold.ttf.png)||
|![Doto_700Bold](./Doto_700Bold.ttf.png)|![Doto_800ExtraBold](./Doto_800ExtraBold.ttf.png)|![Doto_900Black](./Doto_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/doto` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Doto page on Google Fonts](https://fonts.google.com/specimen/Doto) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Doto on Google Fonts](https://fonts.google.com/specimen/Doto)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/doto)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/doto)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
