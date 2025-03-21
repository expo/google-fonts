# @expo-google-fonts/foldit

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/foldit)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/foldit)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/foldit)

This package lets you use the [**Foldit**](https://fonts.google.com/specimen/Foldit) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Foldit

![Foldit](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Foldit_100Thin`
- `Foldit_200ExtraLight`
- `Foldit_300Light`
- `Foldit_400Regular`
- `Foldit_500Medium`
- `Foldit_600SemiBold`
- `Foldit_700Bold`
- `Foldit_800ExtraBold`
- `Foldit_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/foldit expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Foldit_100Thin, Foldit_200ExtraLight, Foldit_300Light, Foldit_400Regular, Foldit_500Medium, Foldit_600SemiBold, Foldit_700Bold, Foldit_800ExtraBold, Foldit_900Black } from '@expo-google-fonts/foldit';

export default () => {

  let [fontsLoaded] = useFonts({
    Foldit_100Thin, 
    Foldit_200ExtraLight, 
    Foldit_300Light, 
    Foldit_400Regular, 
    Foldit_500Medium, 
    Foldit_600SemiBold, 
    Foldit_700Bold, 
    Foldit_800ExtraBold, 
    Foldit_900Black
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
          fontFamily: "Foldit_100Thin"
        }}>
          Foldit Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Foldit_200ExtraLight"
        }}>
          Foldit Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Foldit_300Light"
        }}>
          Foldit Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Foldit_400Regular"
        }}>
          Foldit Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Foldit_500Medium"
        }}>
          Foldit Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Foldit_600SemiBold"
        }}>
          Foldit Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Foldit_700Bold"
        }}>
          Foldit Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Foldit_800ExtraBold"
        }}>
          Foldit Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Foldit_900Black"
        }}>
          Foldit Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Foldit_100Thin](./Foldit_100Thin.ttf.png)|![Foldit_200ExtraLight](./Foldit_200ExtraLight.ttf.png)|![Foldit_300Light](./Foldit_300Light.ttf.png)||
|![Foldit_400Regular](./Foldit_400Regular.ttf.png)|![Foldit_500Medium](./Foldit_500Medium.ttf.png)|![Foldit_600SemiBold](./Foldit_600SemiBold.ttf.png)||
|![Foldit_700Bold](./Foldit_700Bold.ttf.png)|![Foldit_800ExtraBold](./Foldit_800ExtraBold.ttf.png)|![Foldit_900Black](./Foldit_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/foldit` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Foldit page on Google Fonts](https://fonts.google.com/specimen/Foldit) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Foldit on Google Fonts](https://fonts.google.com/specimen/Foldit)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/foldit)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/foldit)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
