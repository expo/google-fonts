# @expo-google-fonts/urbanist

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/urbanist)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/urbanist)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/urbanist)

This package lets you use the [**Urbanist**](https://fonts.google.com/specimen/Urbanist) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Urbanist

![Urbanist](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Urbanist_100Thin`
- `Urbanist_200ExtraLight`
- `Urbanist_300Light`
- `Urbanist_400Regular`
- `Urbanist_500Medium`
- `Urbanist_600SemiBold`
- `Urbanist_700Bold`
- `Urbanist_800ExtraBold`
- `Urbanist_900Black`
- `Urbanist_100Thin_Italic`
- `Urbanist_200ExtraLight_Italic`
- `Urbanist_300Light_Italic`
- `Urbanist_400Regular_Italic`
- `Urbanist_500Medium_Italic`
- `Urbanist_600SemiBold_Italic`
- `Urbanist_700Bold_Italic`
- `Urbanist_800ExtraBold_Italic`
- `Urbanist_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/urbanist expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Urbanist_100Thin, Urbanist_200ExtraLight, Urbanist_300Light, Urbanist_400Regular, Urbanist_500Medium, Urbanist_600SemiBold, Urbanist_700Bold, Urbanist_800ExtraBold, Urbanist_900Black, Urbanist_100Thin_Italic, Urbanist_200ExtraLight_Italic, Urbanist_300Light_Italic, Urbanist_400Regular_Italic, Urbanist_500Medium_Italic, Urbanist_600SemiBold_Italic, Urbanist_700Bold_Italic, Urbanist_800ExtraBold_Italic, Urbanist_900Black_Italic } from '@expo-google-fonts/urbanist';

export default () => {

  let [fontsLoaded] = useFonts({
    Urbanist_100Thin, 
    Urbanist_200ExtraLight, 
    Urbanist_300Light, 
    Urbanist_400Regular, 
    Urbanist_500Medium, 
    Urbanist_600SemiBold, 
    Urbanist_700Bold, 
    Urbanist_800ExtraBold, 
    Urbanist_900Black, 
    Urbanist_100Thin_Italic, 
    Urbanist_200ExtraLight_Italic, 
    Urbanist_300Light_Italic, 
    Urbanist_400Regular_Italic, 
    Urbanist_500Medium_Italic, 
    Urbanist_600SemiBold_Italic, 
    Urbanist_700Bold_Italic, 
    Urbanist_800ExtraBold_Italic, 
    Urbanist_900Black_Italic
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
          fontFamily: "Urbanist_100Thin"
        }}>
          Urbanist Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_200ExtraLight"
        }}>
          Urbanist Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_300Light"
        }}>
          Urbanist Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_400Regular"
        }}>
          Urbanist Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_500Medium"
        }}>
          Urbanist Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_600SemiBold"
        }}>
          Urbanist Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_700Bold"
        }}>
          Urbanist Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_800ExtraBold"
        }}>
          Urbanist Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_900Black"
        }}>
          Urbanist Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_100Thin_Italic"
        }}>
          Urbanist Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_200ExtraLight_Italic"
        }}>
          Urbanist Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_300Light_Italic"
        }}>
          Urbanist Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_400Regular_Italic"
        }}>
          Urbanist Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_500Medium_Italic"
        }}>
          Urbanist Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_600SemiBold_Italic"
        }}>
          Urbanist Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_700Bold_Italic"
        }}>
          Urbanist Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_800ExtraBold_Italic"
        }}>
          Urbanist Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Urbanist_900Black_Italic"
        }}>
          Urbanist Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Urbanist_100Thin](./Urbanist_100Thin.ttf.png)|![Urbanist_200ExtraLight](./Urbanist_200ExtraLight.ttf.png)|![Urbanist_300Light](./Urbanist_300Light.ttf.png)||
|![Urbanist_400Regular](./Urbanist_400Regular.ttf.png)|![Urbanist_500Medium](./Urbanist_500Medium.ttf.png)|![Urbanist_600SemiBold](./Urbanist_600SemiBold.ttf.png)||
|![Urbanist_700Bold](./Urbanist_700Bold.ttf.png)|![Urbanist_800ExtraBold](./Urbanist_800ExtraBold.ttf.png)|![Urbanist_900Black](./Urbanist_900Black.ttf.png)||
|![Urbanist_100Thin_Italic](./Urbanist_100Thin_Italic.ttf.png)|![Urbanist_200ExtraLight_Italic](./Urbanist_200ExtraLight_Italic.ttf.png)|![Urbanist_300Light_Italic](./Urbanist_300Light_Italic.ttf.png)||
|![Urbanist_400Regular_Italic](./Urbanist_400Regular_Italic.ttf.png)|![Urbanist_500Medium_Italic](./Urbanist_500Medium_Italic.ttf.png)|![Urbanist_600SemiBold_Italic](./Urbanist_600SemiBold_Italic.ttf.png)||
|![Urbanist_700Bold_Italic](./Urbanist_700Bold_Italic.ttf.png)|![Urbanist_800ExtraBold_Italic](./Urbanist_800ExtraBold_Italic.ttf.png)|![Urbanist_900Black_Italic](./Urbanist_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/urbanist` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Urbanist page on Google Fonts](https://fonts.google.com/specimen/Urbanist) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Urbanist on Google Fonts](https://fonts.google.com/specimen/Urbanist)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/urbanist)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/urbanist)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
