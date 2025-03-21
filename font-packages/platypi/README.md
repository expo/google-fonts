# @expo-google-fonts/platypi

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/platypi)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/platypi)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/platypi)

This package lets you use the [**Platypi**](https://fonts.google.com/specimen/Platypi) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Platypi

![Platypi](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Platypi_300Light`
- `Platypi_400Regular`
- `Platypi_500Medium`
- `Platypi_600SemiBold`
- `Platypi_700Bold`
- `Platypi_800ExtraBold`
- `Platypi_300Light_Italic`
- `Platypi_400Regular_Italic`
- `Platypi_500Medium_Italic`
- `Platypi_600SemiBold_Italic`
- `Platypi_700Bold_Italic`
- `Platypi_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/platypi expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Platypi_300Light, Platypi_400Regular, Platypi_500Medium, Platypi_600SemiBold, Platypi_700Bold, Platypi_800ExtraBold, Platypi_300Light_Italic, Platypi_400Regular_Italic, Platypi_500Medium_Italic, Platypi_600SemiBold_Italic, Platypi_700Bold_Italic, Platypi_800ExtraBold_Italic } from '@expo-google-fonts/platypi';

export default () => {

  let [fontsLoaded] = useFonts({
    Platypi_300Light, 
    Platypi_400Regular, 
    Platypi_500Medium, 
    Platypi_600SemiBold, 
    Platypi_700Bold, 
    Platypi_800ExtraBold, 
    Platypi_300Light_Italic, 
    Platypi_400Regular_Italic, 
    Platypi_500Medium_Italic, 
    Platypi_600SemiBold_Italic, 
    Platypi_700Bold_Italic, 
    Platypi_800ExtraBold_Italic
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
          fontFamily: "Platypi_300Light"
        }}>
          Platypi Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Platypi_400Regular"
        }}>
          Platypi Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Platypi_500Medium"
        }}>
          Platypi Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Platypi_600SemiBold"
        }}>
          Platypi Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Platypi_700Bold"
        }}>
          Platypi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Platypi_800ExtraBold"
        }}>
          Platypi Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Platypi_300Light_Italic"
        }}>
          Platypi Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Platypi_400Regular_Italic"
        }}>
          Platypi Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Platypi_500Medium_Italic"
        }}>
          Platypi Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Platypi_600SemiBold_Italic"
        }}>
          Platypi Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Platypi_700Bold_Italic"
        }}>
          Platypi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Platypi_800ExtraBold_Italic"
        }}>
          Platypi Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Platypi_300Light](./Platypi_300Light.ttf.png)|![Platypi_400Regular](./Platypi_400Regular.ttf.png)|![Platypi_500Medium](./Platypi_500Medium.ttf.png)||
|![Platypi_600SemiBold](./Platypi_600SemiBold.ttf.png)|![Platypi_700Bold](./Platypi_700Bold.ttf.png)|![Platypi_800ExtraBold](./Platypi_800ExtraBold.ttf.png)||
|![Platypi_300Light_Italic](./Platypi_300Light_Italic.ttf.png)|![Platypi_400Regular_Italic](./Platypi_400Regular_Italic.ttf.png)|![Platypi_500Medium_Italic](./Platypi_500Medium_Italic.ttf.png)||
|![Platypi_600SemiBold_Italic](./Platypi_600SemiBold_Italic.ttf.png)|![Platypi_700Bold_Italic](./Platypi_700Bold_Italic.ttf.png)|![Platypi_800ExtraBold_Italic](./Platypi_800ExtraBold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/platypi` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Platypi page on Google Fonts](https://fonts.google.com/specimen/Platypi) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Platypi on Google Fonts](https://fonts.google.com/specimen/Platypi)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/platypi)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/platypi)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
