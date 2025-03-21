# @expo-google-fonts/onest

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/onest)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/onest)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/onest)

This package lets you use the [**Onest**](https://fonts.google.com/specimen/Onest) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Onest

![Onest](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Onest_100Thin`
- `Onest_200ExtraLight`
- `Onest_300Light`
- `Onest_400Regular`
- `Onest_500Medium`
- `Onest_600SemiBold`
- `Onest_700Bold`
- `Onest_800ExtraBold`
- `Onest_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/onest expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Onest_100Thin, Onest_200ExtraLight, Onest_300Light, Onest_400Regular, Onest_500Medium, Onest_600SemiBold, Onest_700Bold, Onest_800ExtraBold, Onest_900Black } from '@expo-google-fonts/onest';

export default () => {

  let [fontsLoaded] = useFonts({
    Onest_100Thin, 
    Onest_200ExtraLight, 
    Onest_300Light, 
    Onest_400Regular, 
    Onest_500Medium, 
    Onest_600SemiBold, 
    Onest_700Bold, 
    Onest_800ExtraBold, 
    Onest_900Black
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
          fontFamily: "Onest_100Thin"
        }}>
          Onest Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Onest_200ExtraLight"
        }}>
          Onest Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Onest_300Light"
        }}>
          Onest Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Onest_400Regular"
        }}>
          Onest Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Onest_500Medium"
        }}>
          Onest Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Onest_600SemiBold"
        }}>
          Onest Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Onest_700Bold"
        }}>
          Onest Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Onest_800ExtraBold"
        }}>
          Onest Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Onest_900Black"
        }}>
          Onest Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Onest_100Thin](./Onest_100Thin.ttf.png)|![Onest_200ExtraLight](./Onest_200ExtraLight.ttf.png)|![Onest_300Light](./Onest_300Light.ttf.png)||
|![Onest_400Regular](./Onest_400Regular.ttf.png)|![Onest_500Medium](./Onest_500Medium.ttf.png)|![Onest_600SemiBold](./Onest_600SemiBold.ttf.png)||
|![Onest_700Bold](./Onest_700Bold.ttf.png)|![Onest_800ExtraBold](./Onest_800ExtraBold.ttf.png)|![Onest_900Black](./Onest_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/onest` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Onest page on Google Fonts](https://fonts.google.com/specimen/Onest) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Onest on Google Fonts](https://fonts.google.com/specimen/Onest)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/onest)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/onest)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
