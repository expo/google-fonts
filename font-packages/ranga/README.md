# @expo-google-fonts/ranga

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ranga)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ranga)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ranga)

This package lets you use the [**Ranga**](https://fonts.google.com/specimen/Ranga) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ranga

![Ranga](./font-family.png)

This font family contains [2 styles](#-gallery).

- `Ranga_400Regular`
- `Ranga_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ranga expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Ranga_400Regular, Ranga_700Bold } from '@expo-google-fonts/ranga';

export default () => {

  let [fontsLoaded] = useFonts({
    Ranga_400Regular, 
    Ranga_700Bold
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
          fontFamily: "Ranga_400Regular"
        }}>
          Ranga Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ranga_700Bold"
        }}>
          Ranga Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Ranga_400Regular](./Ranga_400Regular.ttf.png)|![Ranga_700Bold](./Ranga_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ranga` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ranga page on Google Fonts](https://fonts.google.com/specimen/Ranga) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ranga on Google Fonts](https://fonts.google.com/specimen/Ranga)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ranga)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ranga)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
