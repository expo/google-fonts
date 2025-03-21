# @expo-google-fonts/narnoor

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/narnoor)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/narnoor)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/narnoor)

This package lets you use the [**Narnoor**](https://fonts.google.com/specimen/Narnoor) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Narnoor

![Narnoor](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Narnoor_400Regular`
- `Narnoor_500Medium`
- `Narnoor_600SemiBold`
- `Narnoor_700Bold`
- `Narnoor_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/narnoor expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Narnoor_400Regular, Narnoor_500Medium, Narnoor_600SemiBold, Narnoor_700Bold, Narnoor_800ExtraBold } from '@expo-google-fonts/narnoor';

export default () => {

  let [fontsLoaded] = useFonts({
    Narnoor_400Regular, 
    Narnoor_500Medium, 
    Narnoor_600SemiBold, 
    Narnoor_700Bold, 
    Narnoor_800ExtraBold
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
          fontFamily: "Narnoor_400Regular"
        }}>
          Narnoor Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Narnoor_500Medium"
        }}>
          Narnoor Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Narnoor_600SemiBold"
        }}>
          Narnoor Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Narnoor_700Bold"
        }}>
          Narnoor Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Narnoor_800ExtraBold"
        }}>
          Narnoor Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Narnoor_400Regular](./Narnoor_400Regular.ttf.png)|![Narnoor_500Medium](./Narnoor_500Medium.ttf.png)|![Narnoor_600SemiBold](./Narnoor_600SemiBold.ttf.png)||
|![Narnoor_700Bold](./Narnoor_700Bold.ttf.png)|![Narnoor_800ExtraBold](./Narnoor_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/narnoor` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Narnoor page on Google Fonts](https://fonts.google.com/specimen/Narnoor) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Narnoor on Google Fonts](https://fonts.google.com/specimen/Narnoor)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/narnoor)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/narnoor)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
