# @expo-google-fonts/cormorant-unicase

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cormorant-unicase)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cormorant-unicase)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cormorant-unicase)

This package lets you use the [**Cormorant Unicase**](https://fonts.google.com/specimen/Cormorant+Unicase) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Cormorant Unicase

![Cormorant Unicase](./font-family.png)

This font family contains [5 styles](#-gallery).

- `CormorantUnicase_300Light`
- `CormorantUnicase_400Regular`
- `CormorantUnicase_500Medium`
- `CormorantUnicase_600SemiBold`
- `CormorantUnicase_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/cormorant-unicase expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, CormorantUnicase_300Light, CormorantUnicase_400Regular, CormorantUnicase_500Medium, CormorantUnicase_600SemiBold, CormorantUnicase_700Bold } from '@expo-google-fonts/cormorant-unicase';

export default () => {

  let [fontsLoaded] = useFonts({
    CormorantUnicase_300Light, 
    CormorantUnicase_400Regular, 
    CormorantUnicase_500Medium, 
    CormorantUnicase_600SemiBold, 
    CormorantUnicase_700Bold
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
          fontFamily: "CormorantUnicase_300Light"
        }}>
          Cormorant Unicase Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CormorantUnicase_400Regular"
        }}>
          Cormorant Unicase Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CormorantUnicase_500Medium"
        }}>
          Cormorant Unicase Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CormorantUnicase_600SemiBold"
        }}>
          Cormorant Unicase Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CormorantUnicase_700Bold"
        }}>
          Cormorant Unicase Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![CormorantUnicase_300Light](./CormorantUnicase_300Light.ttf.png)|![CormorantUnicase_400Regular](./CormorantUnicase_400Regular.ttf.png)|![CormorantUnicase_500Medium](./CormorantUnicase_500Medium.ttf.png)||
|![CormorantUnicase_600SemiBold](./CormorantUnicase_600SemiBold.ttf.png)|![CormorantUnicase_700Bold](./CormorantUnicase_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/cormorant-unicase` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cormorant Unicase page on Google Fonts](https://fonts.google.com/specimen/Cormorant+Unicase) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cormorant Unicase on Google Fonts](https://fonts.google.com/specimen/Cormorant+Unicase)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cormorant-unicase)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cormorant-unicase)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
