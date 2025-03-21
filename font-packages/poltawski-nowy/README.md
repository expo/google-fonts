# @expo-google-fonts/poltawski-nowy

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/poltawski-nowy)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/poltawski-nowy)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/poltawski-nowy)

This package lets you use the [**Poltawski Nowy**](https://fonts.google.com/specimen/Poltawski+Nowy) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Poltawski Nowy

![Poltawski Nowy](./font-family.png)

This font family contains [8 styles](#-gallery).

- `PoltawskiNowy_400Regular`
- `PoltawskiNowy_500Medium`
- `PoltawskiNowy_600SemiBold`
- `PoltawskiNowy_700Bold`
- `PoltawskiNowy_400Regular_Italic`
- `PoltawskiNowy_500Medium_Italic`
- `PoltawskiNowy_600SemiBold_Italic`
- `PoltawskiNowy_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/poltawski-nowy expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, PoltawskiNowy_400Regular, PoltawskiNowy_500Medium, PoltawskiNowy_600SemiBold, PoltawskiNowy_700Bold, PoltawskiNowy_400Regular_Italic, PoltawskiNowy_500Medium_Italic, PoltawskiNowy_600SemiBold_Italic, PoltawskiNowy_700Bold_Italic } from '@expo-google-fonts/poltawski-nowy';

export default () => {

  let [fontsLoaded] = useFonts({
    PoltawskiNowy_400Regular, 
    PoltawskiNowy_500Medium, 
    PoltawskiNowy_600SemiBold, 
    PoltawskiNowy_700Bold, 
    PoltawskiNowy_400Regular_Italic, 
    PoltawskiNowy_500Medium_Italic, 
    PoltawskiNowy_600SemiBold_Italic, 
    PoltawskiNowy_700Bold_Italic
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
          fontFamily: "PoltawskiNowy_400Regular"
        }}>
          Poltawski Nowy Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PoltawskiNowy_500Medium"
        }}>
          Poltawski Nowy Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PoltawskiNowy_600SemiBold"
        }}>
          Poltawski Nowy Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PoltawskiNowy_700Bold"
        }}>
          Poltawski Nowy Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PoltawskiNowy_400Regular_Italic"
        }}>
          Poltawski Nowy Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PoltawskiNowy_500Medium_Italic"
        }}>
          Poltawski Nowy Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PoltawskiNowy_600SemiBold_Italic"
        }}>
          Poltawski Nowy Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PoltawskiNowy_700Bold_Italic"
        }}>
          Poltawski Nowy Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PoltawskiNowy_400Regular](./PoltawskiNowy_400Regular.ttf.png)|![PoltawskiNowy_500Medium](./PoltawskiNowy_500Medium.ttf.png)|![PoltawskiNowy_600SemiBold](./PoltawskiNowy_600SemiBold.ttf.png)||
|![PoltawskiNowy_700Bold](./PoltawskiNowy_700Bold.ttf.png)|![PoltawskiNowy_400Regular_Italic](./PoltawskiNowy_400Regular_Italic.ttf.png)|![PoltawskiNowy_500Medium_Italic](./PoltawskiNowy_500Medium_Italic.ttf.png)||
|![PoltawskiNowy_600SemiBold_Italic](./PoltawskiNowy_600SemiBold_Italic.ttf.png)|![PoltawskiNowy_700Bold_Italic](./PoltawskiNowy_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/poltawski-nowy` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Poltawski Nowy page on Google Fonts](https://fonts.google.com/specimen/Poltawski+Nowy) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Poltawski Nowy on Google Fonts](https://fonts.google.com/specimen/Poltawski+Nowy)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/poltawski-nowy)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/poltawski-nowy)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
