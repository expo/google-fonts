# @expo-google-fonts/gabarito

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/gabarito)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/gabarito)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/gabarito)

This package lets you use the [**Gabarito**](https://fonts.google.com/specimen/Gabarito) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Gabarito

![Gabarito](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Gabarito_400Regular`
- `Gabarito_500Medium`
- `Gabarito_600SemiBold`
- `Gabarito_700Bold`
- `Gabarito_800ExtraBold`
- `Gabarito_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/gabarito expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Gabarito_400Regular, Gabarito_500Medium, Gabarito_600SemiBold, Gabarito_700Bold, Gabarito_800ExtraBold, Gabarito_900Black } from '@expo-google-fonts/gabarito';

export default () => {

  let [fontsLoaded] = useFonts({
    Gabarito_400Regular, 
    Gabarito_500Medium, 
    Gabarito_600SemiBold, 
    Gabarito_700Bold, 
    Gabarito_800ExtraBold, 
    Gabarito_900Black
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
          fontFamily: "Gabarito_400Regular"
        }}>
          Gabarito Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Gabarito_500Medium"
        }}>
          Gabarito Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Gabarito_600SemiBold"
        }}>
          Gabarito Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Gabarito_700Bold"
        }}>
          Gabarito Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Gabarito_800ExtraBold"
        }}>
          Gabarito Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Gabarito_900Black"
        }}>
          Gabarito Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Gabarito_400Regular](./Gabarito_400Regular.ttf.png)|![Gabarito_500Medium](./Gabarito_500Medium.ttf.png)|![Gabarito_600SemiBold](./Gabarito_600SemiBold.ttf.png)||
|![Gabarito_700Bold](./Gabarito_700Bold.ttf.png)|![Gabarito_800ExtraBold](./Gabarito_800ExtraBold.ttf.png)|![Gabarito_900Black](./Gabarito_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/gabarito` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Gabarito page on Google Fonts](https://fonts.google.com/specimen/Gabarito) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Gabarito on Google Fonts](https://fonts.google.com/specimen/Gabarito)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gabarito)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gabarito)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
