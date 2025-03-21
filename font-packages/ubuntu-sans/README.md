# @expo-google-fonts/ubuntu-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ubuntu-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ubuntu-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ubuntu-sans)

This package lets you use the [**Ubuntu Sans**](https://fonts.google.com/specimen/Ubuntu+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ubuntu Sans

![Ubuntu Sans](./font-family.png)

This font family contains [16 styles](#-gallery).

- `UbuntuSans_100Thin`
- `UbuntuSans_200ExtraLight`
- `UbuntuSans_300Light`
- `UbuntuSans_400Regular`
- `UbuntuSans_500Medium`
- `UbuntuSans_600SemiBold`
- `UbuntuSans_700Bold`
- `UbuntuSans_800ExtraBold`
- `UbuntuSans_100Thin_Italic`
- `UbuntuSans_200ExtraLight_Italic`
- `UbuntuSans_300Light_Italic`
- `UbuntuSans_400Regular_Italic`
- `UbuntuSans_500Medium_Italic`
- `UbuntuSans_600SemiBold_Italic`
- `UbuntuSans_700Bold_Italic`
- `UbuntuSans_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ubuntu-sans expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, UbuntuSans_100Thin, UbuntuSans_200ExtraLight, UbuntuSans_300Light, UbuntuSans_400Regular, UbuntuSans_500Medium, UbuntuSans_600SemiBold, UbuntuSans_700Bold, UbuntuSans_800ExtraBold, UbuntuSans_100Thin_Italic, UbuntuSans_200ExtraLight_Italic, UbuntuSans_300Light_Italic, UbuntuSans_400Regular_Italic, UbuntuSans_500Medium_Italic, UbuntuSans_600SemiBold_Italic, UbuntuSans_700Bold_Italic, UbuntuSans_800ExtraBold_Italic } from '@expo-google-fonts/ubuntu-sans';

export default () => {

  let [fontsLoaded] = useFonts({
    UbuntuSans_100Thin, 
    UbuntuSans_200ExtraLight, 
    UbuntuSans_300Light, 
    UbuntuSans_400Regular, 
    UbuntuSans_500Medium, 
    UbuntuSans_600SemiBold, 
    UbuntuSans_700Bold, 
    UbuntuSans_800ExtraBold, 
    UbuntuSans_100Thin_Italic, 
    UbuntuSans_200ExtraLight_Italic, 
    UbuntuSans_300Light_Italic, 
    UbuntuSans_400Regular_Italic, 
    UbuntuSans_500Medium_Italic, 
    UbuntuSans_600SemiBold_Italic, 
    UbuntuSans_700Bold_Italic, 
    UbuntuSans_800ExtraBold_Italic
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
          fontFamily: "UbuntuSans_100Thin"
        }}>
          Ubuntu Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_200ExtraLight"
        }}>
          Ubuntu Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_300Light"
        }}>
          Ubuntu Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_400Regular"
        }}>
          Ubuntu Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_500Medium"
        }}>
          Ubuntu Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_600SemiBold"
        }}>
          Ubuntu Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_700Bold"
        }}>
          Ubuntu Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_800ExtraBold"
        }}>
          Ubuntu Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_100Thin_Italic"
        }}>
          Ubuntu Sans Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_200ExtraLight_Italic"
        }}>
          Ubuntu Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_300Light_Italic"
        }}>
          Ubuntu Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_400Regular_Italic"
        }}>
          Ubuntu Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_500Medium_Italic"
        }}>
          Ubuntu Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_600SemiBold_Italic"
        }}>
          Ubuntu Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_700Bold_Italic"
        }}>
          Ubuntu Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSans_800ExtraBold_Italic"
        }}>
          Ubuntu Sans Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![UbuntuSans_100Thin](./UbuntuSans_100Thin.ttf.png)|![UbuntuSans_200ExtraLight](./UbuntuSans_200ExtraLight.ttf.png)|![UbuntuSans_300Light](./UbuntuSans_300Light.ttf.png)||
|![UbuntuSans_400Regular](./UbuntuSans_400Regular.ttf.png)|![UbuntuSans_500Medium](./UbuntuSans_500Medium.ttf.png)|![UbuntuSans_600SemiBold](./UbuntuSans_600SemiBold.ttf.png)||
|![UbuntuSans_700Bold](./UbuntuSans_700Bold.ttf.png)|![UbuntuSans_800ExtraBold](./UbuntuSans_800ExtraBold.ttf.png)|![UbuntuSans_100Thin_Italic](./UbuntuSans_100Thin_Italic.ttf.png)||
|![UbuntuSans_200ExtraLight_Italic](./UbuntuSans_200ExtraLight_Italic.ttf.png)|![UbuntuSans_300Light_Italic](./UbuntuSans_300Light_Italic.ttf.png)|![UbuntuSans_400Regular_Italic](./UbuntuSans_400Regular_Italic.ttf.png)||
|![UbuntuSans_500Medium_Italic](./UbuntuSans_500Medium_Italic.ttf.png)|![UbuntuSans_600SemiBold_Italic](./UbuntuSans_600SemiBold_Italic.ttf.png)|![UbuntuSans_700Bold_Italic](./UbuntuSans_700Bold_Italic.ttf.png)||
|![UbuntuSans_800ExtraBold_Italic](./UbuntuSans_800ExtraBold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ubuntu-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ubuntu Sans page on Google Fonts](https://fonts.google.com/specimen/Ubuntu+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ubuntu Sans on Google Fonts](https://fonts.google.com/specimen/Ubuntu+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ubuntu-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ubuntu-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
