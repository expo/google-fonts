# @expo-google-fonts/roboto-serif

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/roboto-serif)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/roboto-serif)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/roboto-serif)

This package lets you use the [**Roboto Serif**](https://fonts.google.com/specimen/Roboto+Serif) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Roboto Serif

![Roboto Serif](./font-family.png)

This font family contains [18 styles](#-gallery).

- `RobotoSerif_100Thin`
- `RobotoSerif_200ExtraLight`
- `RobotoSerif_300Light`
- `RobotoSerif_400Regular`
- `RobotoSerif_500Medium`
- `RobotoSerif_600SemiBold`
- `RobotoSerif_700Bold`
- `RobotoSerif_800ExtraBold`
- `RobotoSerif_900Black`
- `RobotoSerif_100Thin_Italic`
- `RobotoSerif_200ExtraLight_Italic`
- `RobotoSerif_300Light_Italic`
- `RobotoSerif_400Regular_Italic`
- `RobotoSerif_500Medium_Italic`
- `RobotoSerif_600SemiBold_Italic`
- `RobotoSerif_700Bold_Italic`
- `RobotoSerif_800ExtraBold_Italic`
- `RobotoSerif_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/roboto-serif expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, RobotoSerif_100Thin, RobotoSerif_200ExtraLight, RobotoSerif_300Light, RobotoSerif_400Regular, RobotoSerif_500Medium, RobotoSerif_600SemiBold, RobotoSerif_700Bold, RobotoSerif_800ExtraBold, RobotoSerif_900Black, RobotoSerif_100Thin_Italic, RobotoSerif_200ExtraLight_Italic, RobotoSerif_300Light_Italic, RobotoSerif_400Regular_Italic, RobotoSerif_500Medium_Italic, RobotoSerif_600SemiBold_Italic, RobotoSerif_700Bold_Italic, RobotoSerif_800ExtraBold_Italic, RobotoSerif_900Black_Italic } from '@expo-google-fonts/roboto-serif';

export default () => {

  let [fontsLoaded] = useFonts({
    RobotoSerif_100Thin, 
    RobotoSerif_200ExtraLight, 
    RobotoSerif_300Light, 
    RobotoSerif_400Regular, 
    RobotoSerif_500Medium, 
    RobotoSerif_600SemiBold, 
    RobotoSerif_700Bold, 
    RobotoSerif_800ExtraBold, 
    RobotoSerif_900Black, 
    RobotoSerif_100Thin_Italic, 
    RobotoSerif_200ExtraLight_Italic, 
    RobotoSerif_300Light_Italic, 
    RobotoSerif_400Regular_Italic, 
    RobotoSerif_500Medium_Italic, 
    RobotoSerif_600SemiBold_Italic, 
    RobotoSerif_700Bold_Italic, 
    RobotoSerif_800ExtraBold_Italic, 
    RobotoSerif_900Black_Italic
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
          fontFamily: "RobotoSerif_100Thin"
        }}>
          Roboto Serif Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_200ExtraLight"
        }}>
          Roboto Serif Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_300Light"
        }}>
          Roboto Serif Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_400Regular"
        }}>
          Roboto Serif Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_500Medium"
        }}>
          Roboto Serif Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_600SemiBold"
        }}>
          Roboto Serif Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_700Bold"
        }}>
          Roboto Serif Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_800ExtraBold"
        }}>
          Roboto Serif Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_900Black"
        }}>
          Roboto Serif Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_100Thin_Italic"
        }}>
          Roboto Serif Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_200ExtraLight_Italic"
        }}>
          Roboto Serif Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_300Light_Italic"
        }}>
          Roboto Serif Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_400Regular_Italic"
        }}>
          Roboto Serif Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_500Medium_Italic"
        }}>
          Roboto Serif Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_600SemiBold_Italic"
        }}>
          Roboto Serif Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_700Bold_Italic"
        }}>
          Roboto Serif Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_800ExtraBold_Italic"
        }}>
          Roboto Serif Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSerif_900Black_Italic"
        }}>
          Roboto Serif Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![RobotoSerif_100Thin](./RobotoSerif_100Thin.ttf.png)|![RobotoSerif_200ExtraLight](./RobotoSerif_200ExtraLight.ttf.png)|![RobotoSerif_300Light](./RobotoSerif_300Light.ttf.png)||
|![RobotoSerif_400Regular](./RobotoSerif_400Regular.ttf.png)|![RobotoSerif_500Medium](./RobotoSerif_500Medium.ttf.png)|![RobotoSerif_600SemiBold](./RobotoSerif_600SemiBold.ttf.png)||
|![RobotoSerif_700Bold](./RobotoSerif_700Bold.ttf.png)|![RobotoSerif_800ExtraBold](./RobotoSerif_800ExtraBold.ttf.png)|![RobotoSerif_900Black](./RobotoSerif_900Black.ttf.png)||
|![RobotoSerif_100Thin_Italic](./RobotoSerif_100Thin_Italic.ttf.png)|![RobotoSerif_200ExtraLight_Italic](./RobotoSerif_200ExtraLight_Italic.ttf.png)|![RobotoSerif_300Light_Italic](./RobotoSerif_300Light_Italic.ttf.png)||
|![RobotoSerif_400Regular_Italic](./RobotoSerif_400Regular_Italic.ttf.png)|![RobotoSerif_500Medium_Italic](./RobotoSerif_500Medium_Italic.ttf.png)|![RobotoSerif_600SemiBold_Italic](./RobotoSerif_600SemiBold_Italic.ttf.png)||
|![RobotoSerif_700Bold_Italic](./RobotoSerif_700Bold_Italic.ttf.png)|![RobotoSerif_800ExtraBold_Italic](./RobotoSerif_800ExtraBold_Italic.ttf.png)|![RobotoSerif_900Black_Italic](./RobotoSerif_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/roboto-serif` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Roboto Serif page on Google Fonts](https://fonts.google.com/specimen/Roboto+Serif) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Roboto Serif on Google Fonts](https://fonts.google.com/specimen/Roboto+Serif)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/roboto-serif)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/roboto-serif)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
