# @expo-google-fonts/m-plus-2

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/m-plus-2)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/m-plus-2)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/m-plus-2)

This package lets you use the [**M PLUS 2**](https://fonts.google.com/specimen/M+PLUS+2) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## M PLUS 2

![M PLUS 2](./font-family.png)

This font family contains [9 styles](#-gallery).

- `MPLUS2_100Thin`
- `MPLUS2_200ExtraLight`
- `MPLUS2_300Light`
- `MPLUS2_400Regular`
- `MPLUS2_500Medium`
- `MPLUS2_600SemiBold`
- `MPLUS2_700Bold`
- `MPLUS2_800ExtraBold`
- `MPLUS2_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/m-plus-2 expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, MPLUS2_100Thin, MPLUS2_200ExtraLight, MPLUS2_300Light, MPLUS2_400Regular, MPLUS2_500Medium, MPLUS2_600SemiBold, MPLUS2_700Bold, MPLUS2_800ExtraBold, MPLUS2_900Black } from '@expo-google-fonts/m-plus-2';

export default () => {

  let [fontsLoaded] = useFonts({
    MPLUS2_100Thin, 
    MPLUS2_200ExtraLight, 
    MPLUS2_300Light, 
    MPLUS2_400Regular, 
    MPLUS2_500Medium, 
    MPLUS2_600SemiBold, 
    MPLUS2_700Bold, 
    MPLUS2_800ExtraBold, 
    MPLUS2_900Black
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
          fontFamily: "MPLUS2_100Thin"
        }}>
          M PLUS 2 Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS2_200ExtraLight"
        }}>
          M PLUS 2 Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS2_300Light"
        }}>
          M PLUS 2 Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS2_400Regular"
        }}>
          M PLUS 2 Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS2_500Medium"
        }}>
          M PLUS 2 Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS2_600SemiBold"
        }}>
          M PLUS 2 Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS2_700Bold"
        }}>
          M PLUS 2 Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS2_800ExtraBold"
        }}>
          M PLUS 2 Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS2_900Black"
        }}>
          M PLUS 2 Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MPLUS2_100Thin](./MPLUS2_100Thin.ttf.png)|![MPLUS2_200ExtraLight](./MPLUS2_200ExtraLight.ttf.png)|![MPLUS2_300Light](./MPLUS2_300Light.ttf.png)||
|![MPLUS2_400Regular](./MPLUS2_400Regular.ttf.png)|![MPLUS2_500Medium](./MPLUS2_500Medium.ttf.png)|![MPLUS2_600SemiBold](./MPLUS2_600SemiBold.ttf.png)||
|![MPLUS2_700Bold](./MPLUS2_700Bold.ttf.png)|![MPLUS2_800ExtraBold](./MPLUS2_800ExtraBold.ttf.png)|![MPLUS2_900Black](./MPLUS2_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/m-plus-2` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [M PLUS 2 page on Google Fonts](https://fonts.google.com/specimen/M+PLUS+2) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [M PLUS 2 on Google Fonts](https://fonts.google.com/specimen/M+PLUS+2)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/m-plus-2)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/m-plus-2)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
