# @expo-google-fonts/noto-serif-display

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-display)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-display)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-display)

This package lets you use the [**Noto Serif Display**](https://fonts.google.com/specimen/Noto+Serif+Display) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Display

![Noto Serif Display](./font-family.png)

This font family contains [18 styles](#-gallery).

- `NotoSerifDisplay_100Thin`
- `NotoSerifDisplay_200ExtraLight`
- `NotoSerifDisplay_300Light`
- `NotoSerifDisplay_400Regular`
- `NotoSerifDisplay_500Medium`
- `NotoSerifDisplay_600SemiBold`
- `NotoSerifDisplay_700Bold`
- `NotoSerifDisplay_800ExtraBold`
- `NotoSerifDisplay_900Black`
- `NotoSerifDisplay_100Thin_Italic`
- `NotoSerifDisplay_200ExtraLight_Italic`
- `NotoSerifDisplay_300Light_Italic`
- `NotoSerifDisplay_400Regular_Italic`
- `NotoSerifDisplay_500Medium_Italic`
- `NotoSerifDisplay_600SemiBold_Italic`
- `NotoSerifDisplay_700Bold_Italic`
- `NotoSerifDisplay_800ExtraBold_Italic`
- `NotoSerifDisplay_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-display expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSerifDisplay_100Thin, NotoSerifDisplay_200ExtraLight, NotoSerifDisplay_300Light, NotoSerifDisplay_400Regular, NotoSerifDisplay_500Medium, NotoSerifDisplay_600SemiBold, NotoSerifDisplay_700Bold, NotoSerifDisplay_800ExtraBold, NotoSerifDisplay_900Black, NotoSerifDisplay_100Thin_Italic, NotoSerifDisplay_200ExtraLight_Italic, NotoSerifDisplay_300Light_Italic, NotoSerifDisplay_400Regular_Italic, NotoSerifDisplay_500Medium_Italic, NotoSerifDisplay_600SemiBold_Italic, NotoSerifDisplay_700Bold_Italic, NotoSerifDisplay_800ExtraBold_Italic, NotoSerifDisplay_900Black_Italic } from '@expo-google-fonts/noto-serif-display';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifDisplay_100Thin, 
    NotoSerifDisplay_200ExtraLight, 
    NotoSerifDisplay_300Light, 
    NotoSerifDisplay_400Regular, 
    NotoSerifDisplay_500Medium, 
    NotoSerifDisplay_600SemiBold, 
    NotoSerifDisplay_700Bold, 
    NotoSerifDisplay_800ExtraBold, 
    NotoSerifDisplay_900Black, 
    NotoSerifDisplay_100Thin_Italic, 
    NotoSerifDisplay_200ExtraLight_Italic, 
    NotoSerifDisplay_300Light_Italic, 
    NotoSerifDisplay_400Regular_Italic, 
    NotoSerifDisplay_500Medium_Italic, 
    NotoSerifDisplay_600SemiBold_Italic, 
    NotoSerifDisplay_700Bold_Italic, 
    NotoSerifDisplay_800ExtraBold_Italic, 
    NotoSerifDisplay_900Black_Italic
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
          fontFamily: "NotoSerifDisplay_100Thin"
        }}>
          Noto Serif Display Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_200ExtraLight"
        }}>
          Noto Serif Display Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_300Light"
        }}>
          Noto Serif Display Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_400Regular"
        }}>
          Noto Serif Display Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_500Medium"
        }}>
          Noto Serif Display Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_600SemiBold"
        }}>
          Noto Serif Display Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_700Bold"
        }}>
          Noto Serif Display Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_800ExtraBold"
        }}>
          Noto Serif Display Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_900Black"
        }}>
          Noto Serif Display Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_100Thin_Italic"
        }}>
          Noto Serif Display Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_200ExtraLight_Italic"
        }}>
          Noto Serif Display Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_300Light_Italic"
        }}>
          Noto Serif Display Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_400Regular_Italic"
        }}>
          Noto Serif Display Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_500Medium_Italic"
        }}>
          Noto Serif Display Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_600SemiBold_Italic"
        }}>
          Noto Serif Display Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_700Bold_Italic"
        }}>
          Noto Serif Display Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_800ExtraBold_Italic"
        }}>
          Noto Serif Display Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifDisplay_900Black_Italic"
        }}>
          Noto Serif Display Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifDisplay_100Thin](./NotoSerifDisplay_100Thin.ttf.png)|![NotoSerifDisplay_200ExtraLight](./NotoSerifDisplay_200ExtraLight.ttf.png)|![NotoSerifDisplay_300Light](./NotoSerifDisplay_300Light.ttf.png)||
|![NotoSerifDisplay_400Regular](./NotoSerifDisplay_400Regular.ttf.png)|![NotoSerifDisplay_500Medium](./NotoSerifDisplay_500Medium.ttf.png)|![NotoSerifDisplay_600SemiBold](./NotoSerifDisplay_600SemiBold.ttf.png)||
|![NotoSerifDisplay_700Bold](./NotoSerifDisplay_700Bold.ttf.png)|![NotoSerifDisplay_800ExtraBold](./NotoSerifDisplay_800ExtraBold.ttf.png)|![NotoSerifDisplay_900Black](./NotoSerifDisplay_900Black.ttf.png)||
|![NotoSerifDisplay_100Thin_Italic](./NotoSerifDisplay_100Thin_Italic.ttf.png)|![NotoSerifDisplay_200ExtraLight_Italic](./NotoSerifDisplay_200ExtraLight_Italic.ttf.png)|![NotoSerifDisplay_300Light_Italic](./NotoSerifDisplay_300Light_Italic.ttf.png)||
|![NotoSerifDisplay_400Regular_Italic](./NotoSerifDisplay_400Regular_Italic.ttf.png)|![NotoSerifDisplay_500Medium_Italic](./NotoSerifDisplay_500Medium_Italic.ttf.png)|![NotoSerifDisplay_600SemiBold_Italic](./NotoSerifDisplay_600SemiBold_Italic.ttf.png)||
|![NotoSerifDisplay_700Bold_Italic](./NotoSerifDisplay_700Bold_Italic.ttf.png)|![NotoSerifDisplay_800ExtraBold_Italic](./NotoSerifDisplay_800ExtraBold_Italic.ttf.png)|![NotoSerifDisplay_900Black_Italic](./NotoSerifDisplay_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-display` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Display page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Display) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Display on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Display)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-display)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-display)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
