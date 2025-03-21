# @expo-google-fonts/almarai

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/almarai)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/almarai)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/almarai)

This package lets you use the [**Almarai**](https://fonts.google.com/specimen/Almarai) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Almarai

![Almarai](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Almarai_300Light`
- `Almarai_400Regular`
- `Almarai_700Bold`
- `Almarai_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/almarai expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Almarai_300Light, Almarai_400Regular, Almarai_700Bold, Almarai_800ExtraBold } from '@expo-google-fonts/almarai';

export default () => {

  let [fontsLoaded] = useFonts({
    Almarai_300Light, 
    Almarai_400Regular, 
    Almarai_700Bold, 
    Almarai_800ExtraBold
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
          fontFamily: "Almarai_300Light"
        }}>
          Almarai Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Almarai_400Regular"
        }}>
          Almarai Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Almarai_700Bold"
        }}>
          Almarai Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Almarai_800ExtraBold"
        }}>
          Almarai Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Almarai_300Light](./Almarai_300Light.ttf.png)|![Almarai_400Regular](./Almarai_400Regular.ttf.png)|![Almarai_700Bold](./Almarai_700Bold.ttf.png)||
|![Almarai_800ExtraBold](./Almarai_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/almarai` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Almarai page on Google Fonts](https://fonts.google.com/specimen/Almarai) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Almarai on Google Fonts](https://fonts.google.com/specimen/Almarai)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/almarai)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/almarai)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
