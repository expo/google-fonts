# @expo-google-fonts/albert-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/albert-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/albert-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/albert-sans)

This package lets you use the [**Albert Sans**](https://fonts.google.com/specimen/Albert+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Albert Sans

![Albert Sans](./font-family.png)

This font family contains [18 styles](#-gallery).

- `AlbertSans_100Thin`
- `AlbertSans_200ExtraLight`
- `AlbertSans_300Light`
- `AlbertSans_400Regular`
- `AlbertSans_500Medium`
- `AlbertSans_600SemiBold`
- `AlbertSans_700Bold`
- `AlbertSans_800ExtraBold`
- `AlbertSans_900Black`
- `AlbertSans_100Thin_Italic`
- `AlbertSans_200ExtraLight_Italic`
- `AlbertSans_300Light_Italic`
- `AlbertSans_400Regular_Italic`
- `AlbertSans_500Medium_Italic`
- `AlbertSans_600SemiBold_Italic`
- `AlbertSans_700Bold_Italic`
- `AlbertSans_800ExtraBold_Italic`
- `AlbertSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/albert-sans expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, AlbertSans_100Thin, AlbertSans_200ExtraLight, AlbertSans_300Light, AlbertSans_400Regular, AlbertSans_500Medium, AlbertSans_600SemiBold, AlbertSans_700Bold, AlbertSans_800ExtraBold, AlbertSans_900Black, AlbertSans_100Thin_Italic, AlbertSans_200ExtraLight_Italic, AlbertSans_300Light_Italic, AlbertSans_400Regular_Italic, AlbertSans_500Medium_Italic, AlbertSans_600SemiBold_Italic, AlbertSans_700Bold_Italic, AlbertSans_800ExtraBold_Italic, AlbertSans_900Black_Italic } from '@expo-google-fonts/albert-sans';

export default () => {

  let [fontsLoaded] = useFonts({
    AlbertSans_100Thin, 
    AlbertSans_200ExtraLight, 
    AlbertSans_300Light, 
    AlbertSans_400Regular, 
    AlbertSans_500Medium, 
    AlbertSans_600SemiBold, 
    AlbertSans_700Bold, 
    AlbertSans_800ExtraBold, 
    AlbertSans_900Black, 
    AlbertSans_100Thin_Italic, 
    AlbertSans_200ExtraLight_Italic, 
    AlbertSans_300Light_Italic, 
    AlbertSans_400Regular_Italic, 
    AlbertSans_500Medium_Italic, 
    AlbertSans_600SemiBold_Italic, 
    AlbertSans_700Bold_Italic, 
    AlbertSans_800ExtraBold_Italic, 
    AlbertSans_900Black_Italic
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
          fontFamily: "AlbertSans_100Thin"
        }}>
          Albert Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_200ExtraLight"
        }}>
          Albert Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_300Light"
        }}>
          Albert Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_400Regular"
        }}>
          Albert Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_500Medium"
        }}>
          Albert Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_600SemiBold"
        }}>
          Albert Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_700Bold"
        }}>
          Albert Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_800ExtraBold"
        }}>
          Albert Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_900Black"
        }}>
          Albert Sans Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_100Thin_Italic"
        }}>
          Albert Sans Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_200ExtraLight_Italic"
        }}>
          Albert Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_300Light_Italic"
        }}>
          Albert Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_400Regular_Italic"
        }}>
          Albert Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_500Medium_Italic"
        }}>
          Albert Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_600SemiBold_Italic"
        }}>
          Albert Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_700Bold_Italic"
        }}>
          Albert Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_800ExtraBold_Italic"
        }}>
          Albert Sans Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlbertSans_900Black_Italic"
        }}>
          Albert Sans Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AlbertSans_100Thin](./AlbertSans_100Thin.ttf.png)|![AlbertSans_200ExtraLight](./AlbertSans_200ExtraLight.ttf.png)|![AlbertSans_300Light](./AlbertSans_300Light.ttf.png)||
|![AlbertSans_400Regular](./AlbertSans_400Regular.ttf.png)|![AlbertSans_500Medium](./AlbertSans_500Medium.ttf.png)|![AlbertSans_600SemiBold](./AlbertSans_600SemiBold.ttf.png)||
|![AlbertSans_700Bold](./AlbertSans_700Bold.ttf.png)|![AlbertSans_800ExtraBold](./AlbertSans_800ExtraBold.ttf.png)|![AlbertSans_900Black](./AlbertSans_900Black.ttf.png)||
|![AlbertSans_100Thin_Italic](./AlbertSans_100Thin_Italic.ttf.png)|![AlbertSans_200ExtraLight_Italic](./AlbertSans_200ExtraLight_Italic.ttf.png)|![AlbertSans_300Light_Italic](./AlbertSans_300Light_Italic.ttf.png)||
|![AlbertSans_400Regular_Italic](./AlbertSans_400Regular_Italic.ttf.png)|![AlbertSans_500Medium_Italic](./AlbertSans_500Medium_Italic.ttf.png)|![AlbertSans_600SemiBold_Italic](./AlbertSans_600SemiBold_Italic.ttf.png)||
|![AlbertSans_700Bold_Italic](./AlbertSans_700Bold_Italic.ttf.png)|![AlbertSans_800ExtraBold_Italic](./AlbertSans_800ExtraBold_Italic.ttf.png)|![AlbertSans_900Black_Italic](./AlbertSans_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/albert-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Albert Sans page on Google Fonts](https://fonts.google.com/specimen/Albert+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Albert Sans on Google Fonts](https://fonts.google.com/specimen/Albert+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/albert-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/albert-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
