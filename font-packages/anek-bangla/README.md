# @expo-google-fonts/anek-bangla

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/anek-bangla)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/anek-bangla)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/anek-bangla)

This package lets you use the [**Anek Bangla**](https://fonts.google.com/specimen/Anek+Bangla) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Anek Bangla

![Anek Bangla](./font-family.png)

This font family contains [8 styles](#-gallery).

- `AnekBangla_100Thin`
- `AnekBangla_200ExtraLight`
- `AnekBangla_300Light`
- `AnekBangla_400Regular`
- `AnekBangla_500Medium`
- `AnekBangla_600SemiBold`
- `AnekBangla_700Bold`
- `AnekBangla_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/anek-bangla expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, AnekBangla_100Thin, AnekBangla_200ExtraLight, AnekBangla_300Light, AnekBangla_400Regular, AnekBangla_500Medium, AnekBangla_600SemiBold, AnekBangla_700Bold, AnekBangla_800ExtraBold } from '@expo-google-fonts/anek-bangla';

export default () => {

  let [fontsLoaded] = useFonts({
    AnekBangla_100Thin, 
    AnekBangla_200ExtraLight, 
    AnekBangla_300Light, 
    AnekBangla_400Regular, 
    AnekBangla_500Medium, 
    AnekBangla_600SemiBold, 
    AnekBangla_700Bold, 
    AnekBangla_800ExtraBold
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
          fontFamily: "AnekBangla_100Thin"
        }}>
          Anek Bangla Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekBangla_200ExtraLight"
        }}>
          Anek Bangla Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekBangla_300Light"
        }}>
          Anek Bangla Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekBangla_400Regular"
        }}>
          Anek Bangla Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekBangla_500Medium"
        }}>
          Anek Bangla Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekBangla_600SemiBold"
        }}>
          Anek Bangla Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekBangla_700Bold"
        }}>
          Anek Bangla Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekBangla_800ExtraBold"
        }}>
          Anek Bangla Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AnekBangla_100Thin](./AnekBangla_100Thin.ttf.png)|![AnekBangla_200ExtraLight](./AnekBangla_200ExtraLight.ttf.png)|![AnekBangla_300Light](./AnekBangla_300Light.ttf.png)||
|![AnekBangla_400Regular](./AnekBangla_400Regular.ttf.png)|![AnekBangla_500Medium](./AnekBangla_500Medium.ttf.png)|![AnekBangla_600SemiBold](./AnekBangla_600SemiBold.ttf.png)||
|![AnekBangla_700Bold](./AnekBangla_700Bold.ttf.png)|![AnekBangla_800ExtraBold](./AnekBangla_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/anek-bangla` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Anek Bangla page on Google Fonts](https://fonts.google.com/specimen/Anek+Bangla) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Anek Bangla on Google Fonts](https://fonts.google.com/specimen/Anek+Bangla)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/anek-bangla)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/anek-bangla)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
