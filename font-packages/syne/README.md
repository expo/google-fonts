# @expo-google-fonts/syne

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/syne)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/syne)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/syne)

This package lets you use the [**Syne**](https://fonts.google.com/specimen/Syne) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Syne

![Syne](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Syne_400Regular`
- `Syne_500Medium`
- `Syne_600SemiBold`
- `Syne_700Bold`
- `Syne_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/syne expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Syne_400Regular, Syne_500Medium, Syne_600SemiBold, Syne_700Bold, Syne_800ExtraBold } from '@expo-google-fonts/syne';

export default () => {

  let [fontsLoaded] = useFonts({
    Syne_400Regular, 
    Syne_500Medium, 
    Syne_600SemiBold, 
    Syne_700Bold, 
    Syne_800ExtraBold
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
          fontFamily: "Syne_400Regular"
        }}>
          Syne Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Syne_500Medium"
        }}>
          Syne Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Syne_600SemiBold"
        }}>
          Syne Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Syne_700Bold"
        }}>
          Syne Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Syne_800ExtraBold"
        }}>
          Syne Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Syne_400Regular](./Syne_400Regular.ttf.png)|![Syne_500Medium](./Syne_500Medium.ttf.png)|![Syne_600SemiBold](./Syne_600SemiBold.ttf.png)||
|![Syne_700Bold](./Syne_700Bold.ttf.png)|![Syne_800ExtraBold](./Syne_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/syne` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Syne page on Google Fonts](https://fonts.google.com/specimen/Syne) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Syne on Google Fonts](https://fonts.google.com/specimen/Syne)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/syne)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/syne)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
