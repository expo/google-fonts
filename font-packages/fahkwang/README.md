# @expo-google-fonts/fahkwang

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/fahkwang)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/fahkwang)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/fahkwang)

This package lets you use the [**Fahkwang**](https://fonts.google.com/specimen/Fahkwang) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Fahkwang

![Fahkwang](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Fahkwang_200ExtraLight`
- `Fahkwang_200ExtraLight_Italic`
- `Fahkwang_300Light`
- `Fahkwang_300Light_Italic`
- `Fahkwang_400Regular`
- `Fahkwang_400Regular_Italic`
- `Fahkwang_500Medium`
- `Fahkwang_500Medium_Italic`
- `Fahkwang_600SemiBold`
- `Fahkwang_600SemiBold_Italic`
- `Fahkwang_700Bold`
- `Fahkwang_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/fahkwang expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Fahkwang_200ExtraLight, Fahkwang_200ExtraLight_Italic, Fahkwang_300Light, Fahkwang_300Light_Italic, Fahkwang_400Regular, Fahkwang_400Regular_Italic, Fahkwang_500Medium, Fahkwang_500Medium_Italic, Fahkwang_600SemiBold, Fahkwang_600SemiBold_Italic, Fahkwang_700Bold, Fahkwang_700Bold_Italic } from '@expo-google-fonts/fahkwang';

export default () => {

  let [fontsLoaded] = useFonts({
    Fahkwang_200ExtraLight, 
    Fahkwang_200ExtraLight_Italic, 
    Fahkwang_300Light, 
    Fahkwang_300Light_Italic, 
    Fahkwang_400Regular, 
    Fahkwang_400Regular_Italic, 
    Fahkwang_500Medium, 
    Fahkwang_500Medium_Italic, 
    Fahkwang_600SemiBold, 
    Fahkwang_600SemiBold_Italic, 
    Fahkwang_700Bold, 
    Fahkwang_700Bold_Italic
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
          fontFamily: "Fahkwang_200ExtraLight"
        }}>
          Fahkwang Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fahkwang_200ExtraLight_Italic"
        }}>
          Fahkwang Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fahkwang_300Light"
        }}>
          Fahkwang Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fahkwang_300Light_Italic"
        }}>
          Fahkwang Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fahkwang_400Regular"
        }}>
          Fahkwang Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fahkwang_400Regular_Italic"
        }}>
          Fahkwang Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fahkwang_500Medium"
        }}>
          Fahkwang Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fahkwang_500Medium_Italic"
        }}>
          Fahkwang Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fahkwang_600SemiBold"
        }}>
          Fahkwang Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fahkwang_600SemiBold_Italic"
        }}>
          Fahkwang Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fahkwang_700Bold"
        }}>
          Fahkwang Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fahkwang_700Bold_Italic"
        }}>
          Fahkwang Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Fahkwang_200ExtraLight](./Fahkwang_200ExtraLight.ttf.png)|![Fahkwang_200ExtraLight_Italic](./Fahkwang_200ExtraLight_Italic.ttf.png)|![Fahkwang_300Light](./Fahkwang_300Light.ttf.png)||
|![Fahkwang_300Light_Italic](./Fahkwang_300Light_Italic.ttf.png)|![Fahkwang_400Regular](./Fahkwang_400Regular.ttf.png)|![Fahkwang_400Regular_Italic](./Fahkwang_400Regular_Italic.ttf.png)||
|![Fahkwang_500Medium](./Fahkwang_500Medium.ttf.png)|![Fahkwang_500Medium_Italic](./Fahkwang_500Medium_Italic.ttf.png)|![Fahkwang_600SemiBold](./Fahkwang_600SemiBold.ttf.png)||
|![Fahkwang_600SemiBold_Italic](./Fahkwang_600SemiBold_Italic.ttf.png)|![Fahkwang_700Bold](./Fahkwang_700Bold.ttf.png)|![Fahkwang_700Bold_Italic](./Fahkwang_700Bold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/fahkwang` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Fahkwang page on Google Fonts](https://fonts.google.com/specimen/Fahkwang) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Fahkwang on Google Fonts](https://fonts.google.com/specimen/Fahkwang)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fahkwang)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fahkwang)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
