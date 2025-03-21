# @expo-google-fonts/noto-serif

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif)

This package lets you use the [**Noto Serif**](https://fonts.google.com/specimen/Noto+Serif) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif

![Noto Serif](./font-family.png)

This font family contains [18 styles](#-gallery).

- `NotoSerif_100Thin`
- `NotoSerif_200ExtraLight`
- `NotoSerif_300Light`
- `NotoSerif_400Regular`
- `NotoSerif_500Medium`
- `NotoSerif_600SemiBold`
- `NotoSerif_700Bold`
- `NotoSerif_800ExtraBold`
- `NotoSerif_900Black`
- `NotoSerif_100Thin_Italic`
- `NotoSerif_200ExtraLight_Italic`
- `NotoSerif_300Light_Italic`
- `NotoSerif_400Regular_Italic`
- `NotoSerif_500Medium_Italic`
- `NotoSerif_600SemiBold_Italic`
- `NotoSerif_700Bold_Italic`
- `NotoSerif_800ExtraBold_Italic`
- `NotoSerif_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSerif_100Thin, NotoSerif_200ExtraLight, NotoSerif_300Light, NotoSerif_400Regular, NotoSerif_500Medium, NotoSerif_600SemiBold, NotoSerif_700Bold, NotoSerif_800ExtraBold, NotoSerif_900Black, NotoSerif_100Thin_Italic, NotoSerif_200ExtraLight_Italic, NotoSerif_300Light_Italic, NotoSerif_400Regular_Italic, NotoSerif_500Medium_Italic, NotoSerif_600SemiBold_Italic, NotoSerif_700Bold_Italic, NotoSerif_800ExtraBold_Italic, NotoSerif_900Black_Italic } from '@expo-google-fonts/noto-serif';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerif_100Thin, 
    NotoSerif_200ExtraLight, 
    NotoSerif_300Light, 
    NotoSerif_400Regular, 
    NotoSerif_500Medium, 
    NotoSerif_600SemiBold, 
    NotoSerif_700Bold, 
    NotoSerif_800ExtraBold, 
    NotoSerif_900Black, 
    NotoSerif_100Thin_Italic, 
    NotoSerif_200ExtraLight_Italic, 
    NotoSerif_300Light_Italic, 
    NotoSerif_400Regular_Italic, 
    NotoSerif_500Medium_Italic, 
    NotoSerif_600SemiBold_Italic, 
    NotoSerif_700Bold_Italic, 
    NotoSerif_800ExtraBold_Italic, 
    NotoSerif_900Black_Italic
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
          fontFamily: "NotoSerif_100Thin"
        }}>
          Noto Serif Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_200ExtraLight"
        }}>
          Noto Serif Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_300Light"
        }}>
          Noto Serif Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_400Regular"
        }}>
          Noto Serif Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_500Medium"
        }}>
          Noto Serif Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_600SemiBold"
        }}>
          Noto Serif Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_700Bold"
        }}>
          Noto Serif Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_800ExtraBold"
        }}>
          Noto Serif Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_900Black"
        }}>
          Noto Serif Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_100Thin_Italic"
        }}>
          Noto Serif Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_200ExtraLight_Italic"
        }}>
          Noto Serif Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_300Light_Italic"
        }}>
          Noto Serif Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_400Regular_Italic"
        }}>
          Noto Serif Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_500Medium_Italic"
        }}>
          Noto Serif Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_600SemiBold_Italic"
        }}>
          Noto Serif Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_700Bold_Italic"
        }}>
          Noto Serif Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_800ExtraBold_Italic"
        }}>
          Noto Serif Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerif_900Black_Italic"
        }}>
          Noto Serif Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerif_100Thin](./NotoSerif_100Thin.ttf.png)|![NotoSerif_200ExtraLight](./NotoSerif_200ExtraLight.ttf.png)|![NotoSerif_300Light](./NotoSerif_300Light.ttf.png)||
|![NotoSerif_400Regular](./NotoSerif_400Regular.ttf.png)|![NotoSerif_500Medium](./NotoSerif_500Medium.ttf.png)|![NotoSerif_600SemiBold](./NotoSerif_600SemiBold.ttf.png)||
|![NotoSerif_700Bold](./NotoSerif_700Bold.ttf.png)|![NotoSerif_800ExtraBold](./NotoSerif_800ExtraBold.ttf.png)|![NotoSerif_900Black](./NotoSerif_900Black.ttf.png)||
|![NotoSerif_100Thin_Italic](./NotoSerif_100Thin_Italic.ttf.png)|![NotoSerif_200ExtraLight_Italic](./NotoSerif_200ExtraLight_Italic.ttf.png)|![NotoSerif_300Light_Italic](./NotoSerif_300Light_Italic.ttf.png)||
|![NotoSerif_400Regular_Italic](./NotoSerif_400Regular_Italic.ttf.png)|![NotoSerif_500Medium_Italic](./NotoSerif_500Medium_Italic.ttf.png)|![NotoSerif_600SemiBold_Italic](./NotoSerif_600SemiBold_Italic.ttf.png)||
|![NotoSerif_700Bold_Italic](./NotoSerif_700Bold_Italic.ttf.png)|![NotoSerif_800ExtraBold_Italic](./NotoSerif_800ExtraBold_Italic.ttf.png)|![NotoSerif_900Black_Italic](./NotoSerif_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif on Google Fonts](https://fonts.google.com/specimen/Noto+Serif)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
