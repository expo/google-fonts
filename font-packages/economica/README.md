# @expo-google-fonts/economica

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/economica)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/economica)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/economica)

This package lets you use the [**Economica**](https://fonts.google.com/specimen/Economica) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Economica

![Economica](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Economica_400Regular`
- `Economica_400Regular_Italic`
- `Economica_700Bold`
- `Economica_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/economica expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Economica_400Regular, Economica_400Regular_Italic, Economica_700Bold, Economica_700Bold_Italic } from '@expo-google-fonts/economica';

export default () => {

  let [fontsLoaded] = useFonts({
    Economica_400Regular, 
    Economica_400Regular_Italic, 
    Economica_700Bold, 
    Economica_700Bold_Italic
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
          fontFamily: "Economica_400Regular"
        }}>
          Economica Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Economica_400Regular_Italic"
        }}>
          Economica Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Economica_700Bold"
        }}>
          Economica Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Economica_700Bold_Italic"
        }}>
          Economica Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Economica_400Regular](./Economica_400Regular.ttf.png)|![Economica_400Regular_Italic](./Economica_400Regular_Italic.ttf.png)|![Economica_700Bold](./Economica_700Bold.ttf.png)||
|![Economica_700Bold_Italic](./Economica_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/economica` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Economica page on Google Fonts](https://fonts.google.com/specimen/Economica) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Economica on Google Fonts](https://fonts.google.com/specimen/Economica)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/economica)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/economica)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
