# @expo-google-fonts/figtree

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/figtree)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/figtree)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/figtree)

This package lets you use the [**Figtree**](https://fonts.google.com/specimen/Figtree) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Figtree

![Figtree](./font-family.png)

This font family contains [14 styles](#-gallery).

- `Figtree_300Light`
- `Figtree_400Regular`
- `Figtree_500Medium`
- `Figtree_600SemiBold`
- `Figtree_700Bold`
- `Figtree_800ExtraBold`
- `Figtree_900Black`
- `Figtree_300Light_Italic`
- `Figtree_400Regular_Italic`
- `Figtree_500Medium_Italic`
- `Figtree_600SemiBold_Italic`
- `Figtree_700Bold_Italic`
- `Figtree_800ExtraBold_Italic`
- `Figtree_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/figtree expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Figtree_300Light, Figtree_400Regular, Figtree_500Medium, Figtree_600SemiBold, Figtree_700Bold, Figtree_800ExtraBold, Figtree_900Black, Figtree_300Light_Italic, Figtree_400Regular_Italic, Figtree_500Medium_Italic, Figtree_600SemiBold_Italic, Figtree_700Bold_Italic, Figtree_800ExtraBold_Italic, Figtree_900Black_Italic } from '@expo-google-fonts/figtree';

export default () => {

  let [fontsLoaded] = useFonts({
    Figtree_300Light, 
    Figtree_400Regular, 
    Figtree_500Medium, 
    Figtree_600SemiBold, 
    Figtree_700Bold, 
    Figtree_800ExtraBold, 
    Figtree_900Black, 
    Figtree_300Light_Italic, 
    Figtree_400Regular_Italic, 
    Figtree_500Medium_Italic, 
    Figtree_600SemiBold_Italic, 
    Figtree_700Bold_Italic, 
    Figtree_800ExtraBold_Italic, 
    Figtree_900Black_Italic
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
          fontFamily: "Figtree_300Light"
        }}>
          Figtree Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Figtree_400Regular"
        }}>
          Figtree Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Figtree_500Medium"
        }}>
          Figtree Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Figtree_600SemiBold"
        }}>
          Figtree Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Figtree_700Bold"
        }}>
          Figtree Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Figtree_800ExtraBold"
        }}>
          Figtree Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Figtree_900Black"
        }}>
          Figtree Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Figtree_300Light_Italic"
        }}>
          Figtree Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Figtree_400Regular_Italic"
        }}>
          Figtree Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Figtree_500Medium_Italic"
        }}>
          Figtree Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Figtree_600SemiBold_Italic"
        }}>
          Figtree Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Figtree_700Bold_Italic"
        }}>
          Figtree Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Figtree_800ExtraBold_Italic"
        }}>
          Figtree Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Figtree_900Black_Italic"
        }}>
          Figtree Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Figtree_300Light](./Figtree_300Light.ttf.png)|![Figtree_400Regular](./Figtree_400Regular.ttf.png)|![Figtree_500Medium](./Figtree_500Medium.ttf.png)||
|![Figtree_600SemiBold](./Figtree_600SemiBold.ttf.png)|![Figtree_700Bold](./Figtree_700Bold.ttf.png)|![Figtree_800ExtraBold](./Figtree_800ExtraBold.ttf.png)||
|![Figtree_900Black](./Figtree_900Black.ttf.png)|![Figtree_300Light_Italic](./Figtree_300Light_Italic.ttf.png)|![Figtree_400Regular_Italic](./Figtree_400Regular_Italic.ttf.png)||
|![Figtree_500Medium_Italic](./Figtree_500Medium_Italic.ttf.png)|![Figtree_600SemiBold_Italic](./Figtree_600SemiBold_Italic.ttf.png)|![Figtree_700Bold_Italic](./Figtree_700Bold_Italic.ttf.png)||
|![Figtree_800ExtraBold_Italic](./Figtree_800ExtraBold_Italic.ttf.png)|![Figtree_900Black_Italic](./Figtree_900Black_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/figtree` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Figtree page on Google Fonts](https://fonts.google.com/specimen/Figtree) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Figtree on Google Fonts](https://fonts.google.com/specimen/Figtree)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/figtree)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/figtree)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
