# @expo-google-fonts/montagu-slab

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/montagu-slab)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/montagu-slab)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/montagu-slab)

This package lets you use the [**Montagu Slab**](https://fonts.google.com/specimen/Montagu+Slab) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Montagu Slab

![Montagu Slab](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MontaguSlab_100Thin`
- `MontaguSlab_200ExtraLight`
- `MontaguSlab_300Light`
- `MontaguSlab_400Regular`
- `MontaguSlab_500Medium`
- `MontaguSlab_600SemiBold`
- `MontaguSlab_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/montagu-slab expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, MontaguSlab_100Thin, MontaguSlab_200ExtraLight, MontaguSlab_300Light, MontaguSlab_400Regular, MontaguSlab_500Medium, MontaguSlab_600SemiBold, MontaguSlab_700Bold } from '@expo-google-fonts/montagu-slab';

export default () => {

  let [fontsLoaded] = useFonts({
    MontaguSlab_100Thin, 
    MontaguSlab_200ExtraLight, 
    MontaguSlab_300Light, 
    MontaguSlab_400Regular, 
    MontaguSlab_500Medium, 
    MontaguSlab_600SemiBold, 
    MontaguSlab_700Bold
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
          fontFamily: "MontaguSlab_100Thin"
        }}>
          Montagu Slab Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontaguSlab_200ExtraLight"
        }}>
          Montagu Slab Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontaguSlab_300Light"
        }}>
          Montagu Slab Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontaguSlab_400Regular"
        }}>
          Montagu Slab Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontaguSlab_500Medium"
        }}>
          Montagu Slab Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontaguSlab_600SemiBold"
        }}>
          Montagu Slab Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontaguSlab_700Bold"
        }}>
          Montagu Slab Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MontaguSlab_100Thin](./MontaguSlab_100Thin.ttf.png)|![MontaguSlab_200ExtraLight](./MontaguSlab_200ExtraLight.ttf.png)|![MontaguSlab_300Light](./MontaguSlab_300Light.ttf.png)||
|![MontaguSlab_400Regular](./MontaguSlab_400Regular.ttf.png)|![MontaguSlab_500Medium](./MontaguSlab_500Medium.ttf.png)|![MontaguSlab_600SemiBold](./MontaguSlab_600SemiBold.ttf.png)||
|![MontaguSlab_700Bold](./MontaguSlab_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/montagu-slab` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Montagu Slab page on Google Fonts](https://fonts.google.com/specimen/Montagu+Slab) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Montagu Slab on Google Fonts](https://fonts.google.com/specimen/Montagu+Slab)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/montagu-slab)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/montagu-slab)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
