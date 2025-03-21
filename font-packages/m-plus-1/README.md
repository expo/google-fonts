# @expo-google-fonts/m-plus-1

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/m-plus-1)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/m-plus-1)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/m-plus-1)

This package lets you use the [**M PLUS 1**](https://fonts.google.com/specimen/M+PLUS+1) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## M PLUS 1

![M PLUS 1](./font-family.png)

This font family contains [9 styles](#-gallery).

- `MPLUS1_100Thin`
- `MPLUS1_200ExtraLight`
- `MPLUS1_300Light`
- `MPLUS1_400Regular`
- `MPLUS1_500Medium`
- `MPLUS1_600SemiBold`
- `MPLUS1_700Bold`
- `MPLUS1_800ExtraBold`
- `MPLUS1_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/m-plus-1 expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, MPLUS1_100Thin, MPLUS1_200ExtraLight, MPLUS1_300Light, MPLUS1_400Regular, MPLUS1_500Medium, MPLUS1_600SemiBold, MPLUS1_700Bold, MPLUS1_800ExtraBold, MPLUS1_900Black } from '@expo-google-fonts/m-plus-1';

export default () => {

  let [fontsLoaded] = useFonts({
    MPLUS1_100Thin, 
    MPLUS1_200ExtraLight, 
    MPLUS1_300Light, 
    MPLUS1_400Regular, 
    MPLUS1_500Medium, 
    MPLUS1_600SemiBold, 
    MPLUS1_700Bold, 
    MPLUS1_800ExtraBold, 
    MPLUS1_900Black
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
          fontFamily: "MPLUS1_100Thin"
        }}>
          M PLUS 1 Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1_200ExtraLight"
        }}>
          M PLUS 1 Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1_300Light"
        }}>
          M PLUS 1 Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1_400Regular"
        }}>
          M PLUS 1 Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1_500Medium"
        }}>
          M PLUS 1 Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1_600SemiBold"
        }}>
          M PLUS 1 Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1_700Bold"
        }}>
          M PLUS 1 Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1_800ExtraBold"
        }}>
          M PLUS 1 Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1_900Black"
        }}>
          M PLUS 1 Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MPLUS1_100Thin](./MPLUS1_100Thin.ttf.png)|![MPLUS1_200ExtraLight](./MPLUS1_200ExtraLight.ttf.png)|![MPLUS1_300Light](./MPLUS1_300Light.ttf.png)||
|![MPLUS1_400Regular](./MPLUS1_400Regular.ttf.png)|![MPLUS1_500Medium](./MPLUS1_500Medium.ttf.png)|![MPLUS1_600SemiBold](./MPLUS1_600SemiBold.ttf.png)||
|![MPLUS1_700Bold](./MPLUS1_700Bold.ttf.png)|![MPLUS1_800ExtraBold](./MPLUS1_800ExtraBold.ttf.png)|![MPLUS1_900Black](./MPLUS1_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/m-plus-1` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [M PLUS 1 page on Google Fonts](https://fonts.google.com/specimen/M+PLUS+1) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [M PLUS 1 on Google Fonts](https://fonts.google.com/specimen/M+PLUS+1)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/m-plus-1)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/m-plus-1)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
