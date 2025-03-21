# @expo-google-fonts/alumni-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/alumni-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/alumni-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/alumni-sans)

This package lets you use the [**Alumni Sans**](https://fonts.google.com/specimen/Alumni+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Alumni Sans

![Alumni Sans](./font-family.png)

This font family contains [18 styles](#-gallery).

- `AlumniSans_100Thin`
- `AlumniSans_200ExtraLight`
- `AlumniSans_300Light`
- `AlumniSans_400Regular`
- `AlumniSans_500Medium`
- `AlumniSans_600SemiBold`
- `AlumniSans_700Bold`
- `AlumniSans_800ExtraBold`
- `AlumniSans_900Black`
- `AlumniSans_100Thin_Italic`
- `AlumniSans_200ExtraLight_Italic`
- `AlumniSans_300Light_Italic`
- `AlumniSans_400Regular_Italic`
- `AlumniSans_500Medium_Italic`
- `AlumniSans_600SemiBold_Italic`
- `AlumniSans_700Bold_Italic`
- `AlumniSans_800ExtraBold_Italic`
- `AlumniSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/alumni-sans expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, AlumniSans_100Thin, AlumniSans_200ExtraLight, AlumniSans_300Light, AlumniSans_400Regular, AlumniSans_500Medium, AlumniSans_600SemiBold, AlumniSans_700Bold, AlumniSans_800ExtraBold, AlumniSans_900Black, AlumniSans_100Thin_Italic, AlumniSans_200ExtraLight_Italic, AlumniSans_300Light_Italic, AlumniSans_400Regular_Italic, AlumniSans_500Medium_Italic, AlumniSans_600SemiBold_Italic, AlumniSans_700Bold_Italic, AlumniSans_800ExtraBold_Italic, AlumniSans_900Black_Italic } from '@expo-google-fonts/alumni-sans';

export default () => {

  let [fontsLoaded] = useFonts({
    AlumniSans_100Thin, 
    AlumniSans_200ExtraLight, 
    AlumniSans_300Light, 
    AlumniSans_400Regular, 
    AlumniSans_500Medium, 
    AlumniSans_600SemiBold, 
    AlumniSans_700Bold, 
    AlumniSans_800ExtraBold, 
    AlumniSans_900Black, 
    AlumniSans_100Thin_Italic, 
    AlumniSans_200ExtraLight_Italic, 
    AlumniSans_300Light_Italic, 
    AlumniSans_400Regular_Italic, 
    AlumniSans_500Medium_Italic, 
    AlumniSans_600SemiBold_Italic, 
    AlumniSans_700Bold_Italic, 
    AlumniSans_800ExtraBold_Italic, 
    AlumniSans_900Black_Italic
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
          fontFamily: "AlumniSans_100Thin"
        }}>
          Alumni Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_200ExtraLight"
        }}>
          Alumni Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_300Light"
        }}>
          Alumni Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_400Regular"
        }}>
          Alumni Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_500Medium"
        }}>
          Alumni Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_600SemiBold"
        }}>
          Alumni Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_700Bold"
        }}>
          Alumni Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_800ExtraBold"
        }}>
          Alumni Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_900Black"
        }}>
          Alumni Sans Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_100Thin_Italic"
        }}>
          Alumni Sans Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_200ExtraLight_Italic"
        }}>
          Alumni Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_300Light_Italic"
        }}>
          Alumni Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_400Regular_Italic"
        }}>
          Alumni Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_500Medium_Italic"
        }}>
          Alumni Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_600SemiBold_Italic"
        }}>
          Alumni Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_700Bold_Italic"
        }}>
          Alumni Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_800ExtraBold_Italic"
        }}>
          Alumni Sans Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlumniSans_900Black_Italic"
        }}>
          Alumni Sans Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AlumniSans_100Thin](./AlumniSans_100Thin.ttf.png)|![AlumniSans_200ExtraLight](./AlumniSans_200ExtraLight.ttf.png)|![AlumniSans_300Light](./AlumniSans_300Light.ttf.png)||
|![AlumniSans_400Regular](./AlumniSans_400Regular.ttf.png)|![AlumniSans_500Medium](./AlumniSans_500Medium.ttf.png)|![AlumniSans_600SemiBold](./AlumniSans_600SemiBold.ttf.png)||
|![AlumniSans_700Bold](./AlumniSans_700Bold.ttf.png)|![AlumniSans_800ExtraBold](./AlumniSans_800ExtraBold.ttf.png)|![AlumniSans_900Black](./AlumniSans_900Black.ttf.png)||
|![AlumniSans_100Thin_Italic](./AlumniSans_100Thin_Italic.ttf.png)|![AlumniSans_200ExtraLight_Italic](./AlumniSans_200ExtraLight_Italic.ttf.png)|![AlumniSans_300Light_Italic](./AlumniSans_300Light_Italic.ttf.png)||
|![AlumniSans_400Regular_Italic](./AlumniSans_400Regular_Italic.ttf.png)|![AlumniSans_500Medium_Italic](./AlumniSans_500Medium_Italic.ttf.png)|![AlumniSans_600SemiBold_Italic](./AlumniSans_600SemiBold_Italic.ttf.png)||
|![AlumniSans_700Bold_Italic](./AlumniSans_700Bold_Italic.ttf.png)|![AlumniSans_800ExtraBold_Italic](./AlumniSans_800ExtraBold_Italic.ttf.png)|![AlumniSans_900Black_Italic](./AlumniSans_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/alumni-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Alumni Sans page on Google Fonts](https://fonts.google.com/specimen/Alumni+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Alumni Sans on Google Fonts](https://fonts.google.com/specimen/Alumni+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alumni-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alumni-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
