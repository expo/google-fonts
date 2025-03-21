# @expo-google-fonts/stick-no-bills

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/stick-no-bills)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/stick-no-bills)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/stick-no-bills)

This package lets you use the [**Stick No Bills**](https://fonts.google.com/specimen/Stick+No+Bills) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Stick No Bills

![Stick No Bills](./font-family.png)

This font family contains [7 styles](#-gallery).

- `StickNoBills_200ExtraLight`
- `StickNoBills_300Light`
- `StickNoBills_400Regular`
- `StickNoBills_500Medium`
- `StickNoBills_600SemiBold`
- `StickNoBills_700Bold`
- `StickNoBills_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/stick-no-bills expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, StickNoBills_200ExtraLight, StickNoBills_300Light, StickNoBills_400Regular, StickNoBills_500Medium, StickNoBills_600SemiBold, StickNoBills_700Bold, StickNoBills_800ExtraBold } from '@expo-google-fonts/stick-no-bills';

export default () => {

  let [fontsLoaded] = useFonts({
    StickNoBills_200ExtraLight, 
    StickNoBills_300Light, 
    StickNoBills_400Regular, 
    StickNoBills_500Medium, 
    StickNoBills_600SemiBold, 
    StickNoBills_700Bold, 
    StickNoBills_800ExtraBold
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
          fontFamily: "StickNoBills_200ExtraLight"
        }}>
          Stick No Bills Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StickNoBills_300Light"
        }}>
          Stick No Bills Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StickNoBills_400Regular"
        }}>
          Stick No Bills Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StickNoBills_500Medium"
        }}>
          Stick No Bills Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StickNoBills_600SemiBold"
        }}>
          Stick No Bills Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StickNoBills_700Bold"
        }}>
          Stick No Bills Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "StickNoBills_800ExtraBold"
        }}>
          Stick No Bills Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![StickNoBills_200ExtraLight](./StickNoBills_200ExtraLight.ttf.png)|![StickNoBills_300Light](./StickNoBills_300Light.ttf.png)|![StickNoBills_400Regular](./StickNoBills_400Regular.ttf.png)||
|![StickNoBills_500Medium](./StickNoBills_500Medium.ttf.png)|![StickNoBills_600SemiBold](./StickNoBills_600SemiBold.ttf.png)|![StickNoBills_700Bold](./StickNoBills_700Bold.ttf.png)||
|![StickNoBills_800ExtraBold](./StickNoBills_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/stick-no-bills` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Stick No Bills page on Google Fonts](https://fonts.google.com/specimen/Stick+No+Bills) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Stick No Bills on Google Fonts](https://fonts.google.com/specimen/Stick+No+Bills)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/stick-no-bills)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/stick-no-bills)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
