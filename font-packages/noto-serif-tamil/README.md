# @expo-google-fonts/noto-serif-tamil

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-tamil)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-tamil)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-tamil)

This package lets you use the [**Noto Serif Tamil**](https://fonts.google.com/specimen/Noto+Serif+Tamil) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Tamil

![Noto Serif Tamil](./font-family.png)

This font family contains [18 styles](#-gallery).

- `NotoSerifTamil_100Thin`
- `NotoSerifTamil_200ExtraLight`
- `NotoSerifTamil_300Light`
- `NotoSerifTamil_400Regular`
- `NotoSerifTamil_500Medium`
- `NotoSerifTamil_600SemiBold`
- `NotoSerifTamil_700Bold`
- `NotoSerifTamil_800ExtraBold`
- `NotoSerifTamil_900Black`
- `NotoSerifTamil_100Thin_Italic`
- `NotoSerifTamil_200ExtraLight_Italic`
- `NotoSerifTamil_300Light_Italic`
- `NotoSerifTamil_400Regular_Italic`
- `NotoSerifTamil_500Medium_Italic`
- `NotoSerifTamil_600SemiBold_Italic`
- `NotoSerifTamil_700Bold_Italic`
- `NotoSerifTamil_800ExtraBold_Italic`
- `NotoSerifTamil_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-tamil expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSerifTamil_100Thin, NotoSerifTamil_200ExtraLight, NotoSerifTamil_300Light, NotoSerifTamil_400Regular, NotoSerifTamil_500Medium, NotoSerifTamil_600SemiBold, NotoSerifTamil_700Bold, NotoSerifTamil_800ExtraBold, NotoSerifTamil_900Black, NotoSerifTamil_100Thin_Italic, NotoSerifTamil_200ExtraLight_Italic, NotoSerifTamil_300Light_Italic, NotoSerifTamil_400Regular_Italic, NotoSerifTamil_500Medium_Italic, NotoSerifTamil_600SemiBold_Italic, NotoSerifTamil_700Bold_Italic, NotoSerifTamil_800ExtraBold_Italic, NotoSerifTamil_900Black_Italic } from '@expo-google-fonts/noto-serif-tamil';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifTamil_100Thin, 
    NotoSerifTamil_200ExtraLight, 
    NotoSerifTamil_300Light, 
    NotoSerifTamil_400Regular, 
    NotoSerifTamil_500Medium, 
    NotoSerifTamil_600SemiBold, 
    NotoSerifTamil_700Bold, 
    NotoSerifTamil_800ExtraBold, 
    NotoSerifTamil_900Black, 
    NotoSerifTamil_100Thin_Italic, 
    NotoSerifTamil_200ExtraLight_Italic, 
    NotoSerifTamil_300Light_Italic, 
    NotoSerifTamil_400Regular_Italic, 
    NotoSerifTamil_500Medium_Italic, 
    NotoSerifTamil_600SemiBold_Italic, 
    NotoSerifTamil_700Bold_Italic, 
    NotoSerifTamil_800ExtraBold_Italic, 
    NotoSerifTamil_900Black_Italic
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
          fontFamily: "NotoSerifTamil_100Thin"
        }}>
          Noto Serif Tamil Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_200ExtraLight"
        }}>
          Noto Serif Tamil Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_300Light"
        }}>
          Noto Serif Tamil Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_400Regular"
        }}>
          Noto Serif Tamil Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_500Medium"
        }}>
          Noto Serif Tamil Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_600SemiBold"
        }}>
          Noto Serif Tamil Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_700Bold"
        }}>
          Noto Serif Tamil Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_800ExtraBold"
        }}>
          Noto Serif Tamil Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_900Black"
        }}>
          Noto Serif Tamil Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_100Thin_Italic"
        }}>
          Noto Serif Tamil Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_200ExtraLight_Italic"
        }}>
          Noto Serif Tamil Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_300Light_Italic"
        }}>
          Noto Serif Tamil Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_400Regular_Italic"
        }}>
          Noto Serif Tamil Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_500Medium_Italic"
        }}>
          Noto Serif Tamil Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_600SemiBold_Italic"
        }}>
          Noto Serif Tamil Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_700Bold_Italic"
        }}>
          Noto Serif Tamil Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_800ExtraBold_Italic"
        }}>
          Noto Serif Tamil Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTamil_900Black_Italic"
        }}>
          Noto Serif Tamil Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifTamil_100Thin](./NotoSerifTamil_100Thin.ttf.png)|![NotoSerifTamil_200ExtraLight](./NotoSerifTamil_200ExtraLight.ttf.png)|![NotoSerifTamil_300Light](./NotoSerifTamil_300Light.ttf.png)||
|![NotoSerifTamil_400Regular](./NotoSerifTamil_400Regular.ttf.png)|![NotoSerifTamil_500Medium](./NotoSerifTamil_500Medium.ttf.png)|![NotoSerifTamil_600SemiBold](./NotoSerifTamil_600SemiBold.ttf.png)||
|![NotoSerifTamil_700Bold](./NotoSerifTamil_700Bold.ttf.png)|![NotoSerifTamil_800ExtraBold](./NotoSerifTamil_800ExtraBold.ttf.png)|![NotoSerifTamil_900Black](./NotoSerifTamil_900Black.ttf.png)||
|![NotoSerifTamil_100Thin_Italic](./NotoSerifTamil_100Thin_Italic.ttf.png)|![NotoSerifTamil_200ExtraLight_Italic](./NotoSerifTamil_200ExtraLight_Italic.ttf.png)|![NotoSerifTamil_300Light_Italic](./NotoSerifTamil_300Light_Italic.ttf.png)||
|![NotoSerifTamil_400Regular_Italic](./NotoSerifTamil_400Regular_Italic.ttf.png)|![NotoSerifTamil_500Medium_Italic](./NotoSerifTamil_500Medium_Italic.ttf.png)|![NotoSerifTamil_600SemiBold_Italic](./NotoSerifTamil_600SemiBold_Italic.ttf.png)||
|![NotoSerifTamil_700Bold_Italic](./NotoSerifTamil_700Bold_Italic.ttf.png)|![NotoSerifTamil_800ExtraBold_Italic](./NotoSerifTamil_800ExtraBold_Italic.ttf.png)|![NotoSerifTamil_900Black_Italic](./NotoSerifTamil_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-tamil` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Tamil page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Tamil) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Tamil on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Tamil)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-tamil)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-tamil)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
