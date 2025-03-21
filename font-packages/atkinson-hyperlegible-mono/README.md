# @expo-google-fonts/atkinson-hyperlegible-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/atkinson-hyperlegible-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/atkinson-hyperlegible-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/atkinson-hyperlegible-mono)

This package lets you use the [**Atkinson Hyperlegible Mono**](https://fonts.google.com/specimen/Atkinson+Hyperlegible+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Atkinson Hyperlegible Mono

![Atkinson Hyperlegible Mono](./font-family.png)

This font family contains [14 styles](#-gallery).

- `AtkinsonHyperlegibleMono_200ExtraLight`
- `AtkinsonHyperlegibleMono_300Light`
- `AtkinsonHyperlegibleMono_400Regular`
- `AtkinsonHyperlegibleMono_500Medium`
- `AtkinsonHyperlegibleMono_600SemiBold`
- `AtkinsonHyperlegibleMono_700Bold`
- `AtkinsonHyperlegibleMono_800ExtraBold`
- `AtkinsonHyperlegibleMono_200ExtraLight_Italic`
- `AtkinsonHyperlegibleMono_300Light_Italic`
- `AtkinsonHyperlegibleMono_400Regular_Italic`
- `AtkinsonHyperlegibleMono_500Medium_Italic`
- `AtkinsonHyperlegibleMono_600SemiBold_Italic`
- `AtkinsonHyperlegibleMono_700Bold_Italic`
- `AtkinsonHyperlegibleMono_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/atkinson-hyperlegible-mono expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, AtkinsonHyperlegibleMono_200ExtraLight, AtkinsonHyperlegibleMono_300Light, AtkinsonHyperlegibleMono_400Regular, AtkinsonHyperlegibleMono_500Medium, AtkinsonHyperlegibleMono_600SemiBold, AtkinsonHyperlegibleMono_700Bold, AtkinsonHyperlegibleMono_800ExtraBold, AtkinsonHyperlegibleMono_200ExtraLight_Italic, AtkinsonHyperlegibleMono_300Light_Italic, AtkinsonHyperlegibleMono_400Regular_Italic, AtkinsonHyperlegibleMono_500Medium_Italic, AtkinsonHyperlegibleMono_600SemiBold_Italic, AtkinsonHyperlegibleMono_700Bold_Italic, AtkinsonHyperlegibleMono_800ExtraBold_Italic } from '@expo-google-fonts/atkinson-hyperlegible-mono';

export default () => {

  let [fontsLoaded] = useFonts({
    AtkinsonHyperlegibleMono_200ExtraLight, 
    AtkinsonHyperlegibleMono_300Light, 
    AtkinsonHyperlegibleMono_400Regular, 
    AtkinsonHyperlegibleMono_500Medium, 
    AtkinsonHyperlegibleMono_600SemiBold, 
    AtkinsonHyperlegibleMono_700Bold, 
    AtkinsonHyperlegibleMono_800ExtraBold, 
    AtkinsonHyperlegibleMono_200ExtraLight_Italic, 
    AtkinsonHyperlegibleMono_300Light_Italic, 
    AtkinsonHyperlegibleMono_400Regular_Italic, 
    AtkinsonHyperlegibleMono_500Medium_Italic, 
    AtkinsonHyperlegibleMono_600SemiBold_Italic, 
    AtkinsonHyperlegibleMono_700Bold_Italic, 
    AtkinsonHyperlegibleMono_800ExtraBold_Italic
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
          fontFamily: "AtkinsonHyperlegibleMono_200ExtraLight"
        }}>
          Atkinson Hyperlegible Mono Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AtkinsonHyperlegibleMono_300Light"
        }}>
          Atkinson Hyperlegible Mono Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AtkinsonHyperlegibleMono_400Regular"
        }}>
          Atkinson Hyperlegible Mono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AtkinsonHyperlegibleMono_500Medium"
        }}>
          Atkinson Hyperlegible Mono Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AtkinsonHyperlegibleMono_600SemiBold"
        }}>
          Atkinson Hyperlegible Mono Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AtkinsonHyperlegibleMono_700Bold"
        }}>
          Atkinson Hyperlegible Mono Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AtkinsonHyperlegibleMono_800ExtraBold"
        }}>
          Atkinson Hyperlegible Mono Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AtkinsonHyperlegibleMono_200ExtraLight_Italic"
        }}>
          Atkinson Hyperlegible Mono Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AtkinsonHyperlegibleMono_300Light_Italic"
        }}>
          Atkinson Hyperlegible Mono Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AtkinsonHyperlegibleMono_400Regular_Italic"
        }}>
          Atkinson Hyperlegible Mono Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AtkinsonHyperlegibleMono_500Medium_Italic"
        }}>
          Atkinson Hyperlegible Mono Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AtkinsonHyperlegibleMono_600SemiBold_Italic"
        }}>
          Atkinson Hyperlegible Mono Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AtkinsonHyperlegibleMono_700Bold_Italic"
        }}>
          Atkinson Hyperlegible Mono Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AtkinsonHyperlegibleMono_800ExtraBold_Italic"
        }}>
          Atkinson Hyperlegible Mono Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AtkinsonHyperlegibleMono_200ExtraLight](./AtkinsonHyperlegibleMono_200ExtraLight.ttf.png)|![AtkinsonHyperlegibleMono_300Light](./AtkinsonHyperlegibleMono_300Light.ttf.png)|![AtkinsonHyperlegibleMono_400Regular](./AtkinsonHyperlegibleMono_400Regular.ttf.png)||
|![AtkinsonHyperlegibleMono_500Medium](./AtkinsonHyperlegibleMono_500Medium.ttf.png)|![AtkinsonHyperlegibleMono_600SemiBold](./AtkinsonHyperlegibleMono_600SemiBold.ttf.png)|![AtkinsonHyperlegibleMono_700Bold](./AtkinsonHyperlegibleMono_700Bold.ttf.png)||
|![AtkinsonHyperlegibleMono_800ExtraBold](./AtkinsonHyperlegibleMono_800ExtraBold.ttf.png)|![AtkinsonHyperlegibleMono_200ExtraLight_Italic](./AtkinsonHyperlegibleMono_200ExtraLight_Italic.ttf.png)|![AtkinsonHyperlegibleMono_300Light_Italic](./AtkinsonHyperlegibleMono_300Light_Italic.ttf.png)||
|![AtkinsonHyperlegibleMono_400Regular_Italic](./AtkinsonHyperlegibleMono_400Regular_Italic.ttf.png)|![AtkinsonHyperlegibleMono_500Medium_Italic](./AtkinsonHyperlegibleMono_500Medium_Italic.ttf.png)|![AtkinsonHyperlegibleMono_600SemiBold_Italic](./AtkinsonHyperlegibleMono_600SemiBold_Italic.ttf.png)||
|![AtkinsonHyperlegibleMono_700Bold_Italic](./AtkinsonHyperlegibleMono_700Bold_Italic.ttf.png)|![AtkinsonHyperlegibleMono_800ExtraBold_Italic](./AtkinsonHyperlegibleMono_800ExtraBold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/atkinson-hyperlegible-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Atkinson Hyperlegible Mono page on Google Fonts](https://fonts.google.com/specimen/Atkinson+Hyperlegible+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Atkinson Hyperlegible Mono on Google Fonts](https://fonts.google.com/specimen/Atkinson+Hyperlegible+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/atkinson-hyperlegible-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/atkinson-hyperlegible-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
