# @expo-google-fonts/m-plus-1-code

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/m-plus-1-code)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/m-plus-1-code)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/m-plus-1-code)

This package lets you use the [**M PLUS 1 Code**](https://fonts.google.com/specimen/M+PLUS+1+Code) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## M PLUS 1 Code

![M PLUS 1 Code](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MPLUS1Code_100Thin`
- `MPLUS1Code_200ExtraLight`
- `MPLUS1Code_300Light`
- `MPLUS1Code_400Regular`
- `MPLUS1Code_500Medium`
- `MPLUS1Code_600SemiBold`
- `MPLUS1Code_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/m-plus-1-code expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, MPLUS1Code_100Thin, MPLUS1Code_200ExtraLight, MPLUS1Code_300Light, MPLUS1Code_400Regular, MPLUS1Code_500Medium, MPLUS1Code_600SemiBold, MPLUS1Code_700Bold } from '@expo-google-fonts/m-plus-1-code';

export default () => {

  let [fontsLoaded] = useFonts({
    MPLUS1Code_100Thin, 
    MPLUS1Code_200ExtraLight, 
    MPLUS1Code_300Light, 
    MPLUS1Code_400Regular, 
    MPLUS1Code_500Medium, 
    MPLUS1Code_600SemiBold, 
    MPLUS1Code_700Bold
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
          fontFamily: "MPLUS1Code_100Thin"
        }}>
          M PLUS 1 Code Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1Code_200ExtraLight"
        }}>
          M PLUS 1 Code Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1Code_300Light"
        }}>
          M PLUS 1 Code Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1Code_400Regular"
        }}>
          M PLUS 1 Code Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1Code_500Medium"
        }}>
          M PLUS 1 Code Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1Code_600SemiBold"
        }}>
          M PLUS 1 Code Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUS1Code_700Bold"
        }}>
          M PLUS 1 Code Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MPLUS1Code_100Thin](./MPLUS1Code_100Thin.ttf.png)|![MPLUS1Code_200ExtraLight](./MPLUS1Code_200ExtraLight.ttf.png)|![MPLUS1Code_300Light](./MPLUS1Code_300Light.ttf.png)||
|![MPLUS1Code_400Regular](./MPLUS1Code_400Regular.ttf.png)|![MPLUS1Code_500Medium](./MPLUS1Code_500Medium.ttf.png)|![MPLUS1Code_600SemiBold](./MPLUS1Code_600SemiBold.ttf.png)||
|![MPLUS1Code_700Bold](./MPLUS1Code_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/m-plus-1-code` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [M PLUS 1 Code page on Google Fonts](https://fonts.google.com/specimen/M+PLUS+1+Code) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [M PLUS 1 Code on Google Fonts](https://fonts.google.com/specimen/M+PLUS+1+Code)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/m-plus-1-code)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/m-plus-1-code)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
