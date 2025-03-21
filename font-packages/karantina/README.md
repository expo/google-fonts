# @expo-google-fonts/karantina

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/karantina)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/karantina)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/karantina)

This package lets you use the [**Karantina**](https://fonts.google.com/specimen/Karantina) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Karantina

![Karantina](./font-family.png)

This font family contains [3 styles](#-gallery).

- `Karantina_300Light`
- `Karantina_400Regular`
- `Karantina_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/karantina expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Karantina_300Light, Karantina_400Regular, Karantina_700Bold } from '@expo-google-fonts/karantina';

export default () => {

  let [fontsLoaded] = useFonts({
    Karantina_300Light, 
    Karantina_400Regular, 
    Karantina_700Bold
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
          fontFamily: "Karantina_300Light"
        }}>
          Karantina Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karantina_400Regular"
        }}>
          Karantina Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karantina_700Bold"
        }}>
          Karantina Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Karantina_300Light](./Karantina_300Light.ttf.png)|![Karantina_400Regular](./Karantina_400Regular.ttf.png)|![Karantina_700Bold](./Karantina_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/karantina` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Karantina page on Google Fonts](https://fonts.google.com/specimen/Karantina) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Karantina on Google Fonts](https://fonts.google.com/specimen/Karantina)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/karantina)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/karantina)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
