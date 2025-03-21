# @expo-google-fonts/inclusive-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/inclusive-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/inclusive-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/inclusive-sans)

This package lets you use the [**Inclusive Sans**](https://fonts.google.com/specimen/Inclusive+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Inclusive Sans

![Inclusive Sans](./font-family.png)

This font family contains [10 styles](#-gallery).

- `InclusiveSans_300Light`
- `InclusiveSans_400Regular`
- `InclusiveSans_500Medium`
- `InclusiveSans_600SemiBold`
- `InclusiveSans_700Bold`
- `InclusiveSans_300Light_Italic`
- `InclusiveSans_400Regular_Italic`
- `InclusiveSans_500Medium_Italic`
- `InclusiveSans_600SemiBold_Italic`
- `InclusiveSans_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/inclusive-sans expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, InclusiveSans_300Light, InclusiveSans_400Regular, InclusiveSans_500Medium, InclusiveSans_600SemiBold, InclusiveSans_700Bold, InclusiveSans_300Light_Italic, InclusiveSans_400Regular_Italic, InclusiveSans_500Medium_Italic, InclusiveSans_600SemiBold_Italic, InclusiveSans_700Bold_Italic } from '@expo-google-fonts/inclusive-sans';

export default () => {

  let [fontsLoaded] = useFonts({
    InclusiveSans_300Light, 
    InclusiveSans_400Regular, 
    InclusiveSans_500Medium, 
    InclusiveSans_600SemiBold, 
    InclusiveSans_700Bold, 
    InclusiveSans_300Light_Italic, 
    InclusiveSans_400Regular_Italic, 
    InclusiveSans_500Medium_Italic, 
    InclusiveSans_600SemiBold_Italic, 
    InclusiveSans_700Bold_Italic
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
          fontFamily: "InclusiveSans_300Light"
        }}>
          Inclusive Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InclusiveSans_400Regular"
        }}>
          Inclusive Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InclusiveSans_500Medium"
        }}>
          Inclusive Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InclusiveSans_600SemiBold"
        }}>
          Inclusive Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InclusiveSans_700Bold"
        }}>
          Inclusive Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InclusiveSans_300Light_Italic"
        }}>
          Inclusive Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InclusiveSans_400Regular_Italic"
        }}>
          Inclusive Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InclusiveSans_500Medium_Italic"
        }}>
          Inclusive Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InclusiveSans_600SemiBold_Italic"
        }}>
          Inclusive Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InclusiveSans_700Bold_Italic"
        }}>
          Inclusive Sans Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![InclusiveSans_300Light](./InclusiveSans_300Light.ttf.png)|![InclusiveSans_400Regular](./InclusiveSans_400Regular.ttf.png)|![InclusiveSans_500Medium](./InclusiveSans_500Medium.ttf.png)||
|![InclusiveSans_600SemiBold](./InclusiveSans_600SemiBold.ttf.png)|![InclusiveSans_700Bold](./InclusiveSans_700Bold.ttf.png)|![InclusiveSans_300Light_Italic](./InclusiveSans_300Light_Italic.ttf.png)||
|![InclusiveSans_400Regular_Italic](./InclusiveSans_400Regular_Italic.ttf.png)|![InclusiveSans_500Medium_Italic](./InclusiveSans_500Medium_Italic.ttf.png)|![InclusiveSans_600SemiBold_Italic](./InclusiveSans_600SemiBold_Italic.ttf.png)||
|![InclusiveSans_700Bold_Italic](./InclusiveSans_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/inclusive-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Inclusive Sans page on Google Fonts](https://fonts.google.com/specimen/Inclusive+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Inclusive Sans on Google Fonts](https://fonts.google.com/specimen/Inclusive+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/inclusive-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/inclusive-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
