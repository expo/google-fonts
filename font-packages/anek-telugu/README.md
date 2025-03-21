# @expo-google-fonts/anek-telugu

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/anek-telugu)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/anek-telugu)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/anek-telugu)

This package lets you use the [**Anek Telugu**](https://fonts.google.com/specimen/Anek+Telugu) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Anek Telugu

![Anek Telugu](./font-family.png)

This font family contains [8 styles](#-gallery).

- `AnekTelugu_100Thin`
- `AnekTelugu_200ExtraLight`
- `AnekTelugu_300Light`
- `AnekTelugu_400Regular`
- `AnekTelugu_500Medium`
- `AnekTelugu_600SemiBold`
- `AnekTelugu_700Bold`
- `AnekTelugu_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/anek-telugu expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, AnekTelugu_100Thin, AnekTelugu_200ExtraLight, AnekTelugu_300Light, AnekTelugu_400Regular, AnekTelugu_500Medium, AnekTelugu_600SemiBold, AnekTelugu_700Bold, AnekTelugu_800ExtraBold } from '@expo-google-fonts/anek-telugu';

export default () => {

  let [fontsLoaded] = useFonts({
    AnekTelugu_100Thin, 
    AnekTelugu_200ExtraLight, 
    AnekTelugu_300Light, 
    AnekTelugu_400Regular, 
    AnekTelugu_500Medium, 
    AnekTelugu_600SemiBold, 
    AnekTelugu_700Bold, 
    AnekTelugu_800ExtraBold
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
          fontFamily: "AnekTelugu_100Thin"
        }}>
          Anek Telugu Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTelugu_200ExtraLight"
        }}>
          Anek Telugu Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTelugu_300Light"
        }}>
          Anek Telugu Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTelugu_400Regular"
        }}>
          Anek Telugu Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTelugu_500Medium"
        }}>
          Anek Telugu Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTelugu_600SemiBold"
        }}>
          Anek Telugu Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTelugu_700Bold"
        }}>
          Anek Telugu Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTelugu_800ExtraBold"
        }}>
          Anek Telugu Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AnekTelugu_100Thin](./AnekTelugu_100Thin.ttf.png)|![AnekTelugu_200ExtraLight](./AnekTelugu_200ExtraLight.ttf.png)|![AnekTelugu_300Light](./AnekTelugu_300Light.ttf.png)||
|![AnekTelugu_400Regular](./AnekTelugu_400Regular.ttf.png)|![AnekTelugu_500Medium](./AnekTelugu_500Medium.ttf.png)|![AnekTelugu_600SemiBold](./AnekTelugu_600SemiBold.ttf.png)||
|![AnekTelugu_700Bold](./AnekTelugu_700Bold.ttf.png)|![AnekTelugu_800ExtraBold](./AnekTelugu_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/anek-telugu` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Anek Telugu page on Google Fonts](https://fonts.google.com/specimen/Anek+Telugu) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Anek Telugu on Google Fonts](https://fonts.google.com/specimen/Anek+Telugu)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/anek-telugu)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/anek-telugu)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
