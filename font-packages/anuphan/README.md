# @expo-google-fonts/anuphan

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/anuphan)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/anuphan)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/anuphan)

This package lets you use the [**Anuphan**](https://fonts.google.com/specimen/Anuphan) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Anuphan

![Anuphan](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Anuphan_100Thin`
- `Anuphan_200ExtraLight`
- `Anuphan_300Light`
- `Anuphan_400Regular`
- `Anuphan_500Medium`
- `Anuphan_600SemiBold`
- `Anuphan_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/anuphan expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Anuphan_100Thin, Anuphan_200ExtraLight, Anuphan_300Light, Anuphan_400Regular, Anuphan_500Medium, Anuphan_600SemiBold, Anuphan_700Bold } from '@expo-google-fonts/anuphan';

export default () => {

  let [fontsLoaded] = useFonts({
    Anuphan_100Thin, 
    Anuphan_200ExtraLight, 
    Anuphan_300Light, 
    Anuphan_400Regular, 
    Anuphan_500Medium, 
    Anuphan_600SemiBold, 
    Anuphan_700Bold
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
          fontFamily: "Anuphan_100Thin"
        }}>
          Anuphan Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anuphan_200ExtraLight"
        }}>
          Anuphan Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anuphan_300Light"
        }}>
          Anuphan Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anuphan_400Regular"
        }}>
          Anuphan Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anuphan_500Medium"
        }}>
          Anuphan Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anuphan_600SemiBold"
        }}>
          Anuphan Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anuphan_700Bold"
        }}>
          Anuphan Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Anuphan_100Thin](./Anuphan_100Thin.ttf.png)|![Anuphan_200ExtraLight](./Anuphan_200ExtraLight.ttf.png)|![Anuphan_300Light](./Anuphan_300Light.ttf.png)||
|![Anuphan_400Regular](./Anuphan_400Regular.ttf.png)|![Anuphan_500Medium](./Anuphan_500Medium.ttf.png)|![Anuphan_600SemiBold](./Anuphan_600SemiBold.ttf.png)||
|![Anuphan_700Bold](./Anuphan_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/anuphan` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Anuphan page on Google Fonts](https://fonts.google.com/specimen/Anuphan) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Anuphan on Google Fonts](https://fonts.google.com/specimen/Anuphan)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/anuphan)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/anuphan)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
