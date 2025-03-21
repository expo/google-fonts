# @expo-google-fonts/m-plus-rounded-1c

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/m-plus-rounded-1c)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/m-plus-rounded-1c)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/m-plus-rounded-1c)

This package lets you use the [**M PLUS Rounded 1c**](https://fonts.google.com/specimen/M+PLUS+Rounded+1c) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## M PLUS Rounded 1c

![M PLUS Rounded 1c](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MPLUSRounded1c_100Thin`
- `MPLUSRounded1c_300Light`
- `MPLUSRounded1c_400Regular`
- `MPLUSRounded1c_500Medium`
- `MPLUSRounded1c_700Bold`
- `MPLUSRounded1c_800ExtraBold`
- `MPLUSRounded1c_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/m-plus-rounded-1c expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, MPLUSRounded1c_100Thin, MPLUSRounded1c_300Light, MPLUSRounded1c_400Regular, MPLUSRounded1c_500Medium, MPLUSRounded1c_700Bold, MPLUSRounded1c_800ExtraBold, MPLUSRounded1c_900Black } from '@expo-google-fonts/m-plus-rounded-1c';

export default () => {

  let [fontsLoaded] = useFonts({
    MPLUSRounded1c_100Thin, 
    MPLUSRounded1c_300Light, 
    MPLUSRounded1c_400Regular, 
    MPLUSRounded1c_500Medium, 
    MPLUSRounded1c_700Bold, 
    MPLUSRounded1c_800ExtraBold, 
    MPLUSRounded1c_900Black
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
          fontFamily: "MPLUSRounded1c_100Thin"
        }}>
          M PLUS Rounded 1c Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUSRounded1c_300Light"
        }}>
          M PLUS Rounded 1c Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUSRounded1c_400Regular"
        }}>
          M PLUS Rounded 1c Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUSRounded1c_500Medium"
        }}>
          M PLUS Rounded 1c Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUSRounded1c_700Bold"
        }}>
          M PLUS Rounded 1c Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUSRounded1c_800ExtraBold"
        }}>
          M PLUS Rounded 1c Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUSRounded1c_900Black"
        }}>
          M PLUS Rounded 1c Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MPLUSRounded1c_100Thin](./MPLUSRounded1c_100Thin.ttf.png)|![MPLUSRounded1c_300Light](./MPLUSRounded1c_300Light.ttf.png)|![MPLUSRounded1c_400Regular](./MPLUSRounded1c_400Regular.ttf.png)||
|![MPLUSRounded1c_500Medium](./MPLUSRounded1c_500Medium.ttf.png)|![MPLUSRounded1c_700Bold](./MPLUSRounded1c_700Bold.ttf.png)|![MPLUSRounded1c_800ExtraBold](./MPLUSRounded1c_800ExtraBold.ttf.png)||
|![MPLUSRounded1c_900Black](./MPLUSRounded1c_900Black.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/m-plus-rounded-1c` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [M PLUS Rounded 1c page on Google Fonts](https://fonts.google.com/specimen/M+PLUS+Rounded+1c) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [M PLUS Rounded 1c on Google Fonts](https://fonts.google.com/specimen/M+PLUS+Rounded+1c)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/m-plus-rounded-1c)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/m-plus-rounded-1c)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
