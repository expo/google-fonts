# @expo-google-fonts/saira-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/saira-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/saira-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/saira-condensed)

This package lets you use the [**Saira Condensed**](https://fonts.google.com/specimen/Saira+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Saira Condensed

![Saira Condensed](./font-family.png)

This font family contains [9 styles](#-gallery).

- `SairaCondensed_100Thin`
- `SairaCondensed_200ExtraLight`
- `SairaCondensed_300Light`
- `SairaCondensed_400Regular`
- `SairaCondensed_500Medium`
- `SairaCondensed_600SemiBold`
- `SairaCondensed_700Bold`
- `SairaCondensed_800ExtraBold`
- `SairaCondensed_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/saira-condensed expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, SairaCondensed_100Thin, SairaCondensed_200ExtraLight, SairaCondensed_300Light, SairaCondensed_400Regular, SairaCondensed_500Medium, SairaCondensed_600SemiBold, SairaCondensed_700Bold, SairaCondensed_800ExtraBold, SairaCondensed_900Black } from '@expo-google-fonts/saira-condensed';

export default () => {

  let [fontsLoaded] = useFonts({
    SairaCondensed_100Thin, 
    SairaCondensed_200ExtraLight, 
    SairaCondensed_300Light, 
    SairaCondensed_400Regular, 
    SairaCondensed_500Medium, 
    SairaCondensed_600SemiBold, 
    SairaCondensed_700Bold, 
    SairaCondensed_800ExtraBold, 
    SairaCondensed_900Black
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
          fontFamily: "SairaCondensed_100Thin"
        }}>
          Saira Condensed Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaCondensed_200ExtraLight"
        }}>
          Saira Condensed Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaCondensed_300Light"
        }}>
          Saira Condensed Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaCondensed_400Regular"
        }}>
          Saira Condensed Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaCondensed_500Medium"
        }}>
          Saira Condensed Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaCondensed_600SemiBold"
        }}>
          Saira Condensed Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaCondensed_700Bold"
        }}>
          Saira Condensed Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaCondensed_800ExtraBold"
        }}>
          Saira Condensed Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaCondensed_900Black"
        }}>
          Saira Condensed Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![SairaCondensed_100Thin](./SairaCondensed_100Thin.ttf.png)|![SairaCondensed_200ExtraLight](./SairaCondensed_200ExtraLight.ttf.png)|![SairaCondensed_300Light](./SairaCondensed_300Light.ttf.png)||
|![SairaCondensed_400Regular](./SairaCondensed_400Regular.ttf.png)|![SairaCondensed_500Medium](./SairaCondensed_500Medium.ttf.png)|![SairaCondensed_600SemiBold](./SairaCondensed_600SemiBold.ttf.png)||
|![SairaCondensed_700Bold](./SairaCondensed_700Bold.ttf.png)|![SairaCondensed_800ExtraBold](./SairaCondensed_800ExtraBold.ttf.png)|![SairaCondensed_900Black](./SairaCondensed_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/saira-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Saira Condensed page on Google Fonts](https://fonts.google.com/specimen/Saira+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Saira Condensed on Google Fonts](https://fonts.google.com/specimen/Saira+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/saira-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/saira-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
