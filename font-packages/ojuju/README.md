# @expo-google-fonts/ojuju

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ojuju)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ojuju)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ojuju)

This package lets you use the [**Ojuju**](https://fonts.google.com/specimen/Ojuju) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ojuju

![Ojuju](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Ojuju_200ExtraLight`
- `Ojuju_300Light`
- `Ojuju_400Regular`
- `Ojuju_500Medium`
- `Ojuju_600SemiBold`
- `Ojuju_700Bold`
- `Ojuju_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ojuju expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Ojuju_200ExtraLight, Ojuju_300Light, Ojuju_400Regular, Ojuju_500Medium, Ojuju_600SemiBold, Ojuju_700Bold, Ojuju_800ExtraBold } from '@expo-google-fonts/ojuju';

export default () => {

  let [fontsLoaded] = useFonts({
    Ojuju_200ExtraLight, 
    Ojuju_300Light, 
    Ojuju_400Regular, 
    Ojuju_500Medium, 
    Ojuju_600SemiBold, 
    Ojuju_700Bold, 
    Ojuju_800ExtraBold
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
          fontFamily: "Ojuju_200ExtraLight"
        }}>
          Ojuju Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ojuju_300Light"
        }}>
          Ojuju Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ojuju_400Regular"
        }}>
          Ojuju Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ojuju_500Medium"
        }}>
          Ojuju Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ojuju_600SemiBold"
        }}>
          Ojuju Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ojuju_700Bold"
        }}>
          Ojuju Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ojuju_800ExtraBold"
        }}>
          Ojuju Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Ojuju_200ExtraLight](./Ojuju_200ExtraLight.ttf.png)|![Ojuju_300Light](./Ojuju_300Light.ttf.png)|![Ojuju_400Regular](./Ojuju_400Regular.ttf.png)||
|![Ojuju_500Medium](./Ojuju_500Medium.ttf.png)|![Ojuju_600SemiBold](./Ojuju_600SemiBold.ttf.png)|![Ojuju_700Bold](./Ojuju_700Bold.ttf.png)||
|![Ojuju_800ExtraBold](./Ojuju_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ojuju` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ojuju page on Google Fonts](https://fonts.google.com/specimen/Ojuju) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ojuju on Google Fonts](https://fonts.google.com/specimen/Ojuju)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ojuju)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ojuju)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
