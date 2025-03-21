# @expo-google-fonts/barlow-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/barlow-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/barlow-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/barlow-condensed)

This package lets you use the [**Barlow Condensed**](https://fonts.google.com/specimen/Barlow+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Barlow Condensed

![Barlow Condensed](./font-family.png)

This font family contains [18 styles](#-gallery).

- `BarlowCondensed_100Thin`
- `BarlowCondensed_100Thin_Italic`
- `BarlowCondensed_200ExtraLight`
- `BarlowCondensed_200ExtraLight_Italic`
- `BarlowCondensed_300Light`
- `BarlowCondensed_300Light_Italic`
- `BarlowCondensed_400Regular`
- `BarlowCondensed_400Regular_Italic`
- `BarlowCondensed_500Medium`
- `BarlowCondensed_500Medium_Italic`
- `BarlowCondensed_600SemiBold`
- `BarlowCondensed_600SemiBold_Italic`
- `BarlowCondensed_700Bold`
- `BarlowCondensed_700Bold_Italic`
- `BarlowCondensed_800ExtraBold`
- `BarlowCondensed_800ExtraBold_Italic`
- `BarlowCondensed_900Black`
- `BarlowCondensed_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/barlow-condensed expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, BarlowCondensed_100Thin, BarlowCondensed_100Thin_Italic, BarlowCondensed_200ExtraLight, BarlowCondensed_200ExtraLight_Italic, BarlowCondensed_300Light, BarlowCondensed_300Light_Italic, BarlowCondensed_400Regular, BarlowCondensed_400Regular_Italic, BarlowCondensed_500Medium, BarlowCondensed_500Medium_Italic, BarlowCondensed_600SemiBold, BarlowCondensed_600SemiBold_Italic, BarlowCondensed_700Bold, BarlowCondensed_700Bold_Italic, BarlowCondensed_800ExtraBold, BarlowCondensed_800ExtraBold_Italic, BarlowCondensed_900Black, BarlowCondensed_900Black_Italic } from '@expo-google-fonts/barlow-condensed';

export default () => {

  let [fontsLoaded] = useFonts({
    BarlowCondensed_100Thin, 
    BarlowCondensed_100Thin_Italic, 
    BarlowCondensed_200ExtraLight, 
    BarlowCondensed_200ExtraLight_Italic, 
    BarlowCondensed_300Light, 
    BarlowCondensed_300Light_Italic, 
    BarlowCondensed_400Regular, 
    BarlowCondensed_400Regular_Italic, 
    BarlowCondensed_500Medium, 
    BarlowCondensed_500Medium_Italic, 
    BarlowCondensed_600SemiBold, 
    BarlowCondensed_600SemiBold_Italic, 
    BarlowCondensed_700Bold, 
    BarlowCondensed_700Bold_Italic, 
    BarlowCondensed_800ExtraBold, 
    BarlowCondensed_800ExtraBold_Italic, 
    BarlowCondensed_900Black, 
    BarlowCondensed_900Black_Italic
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
          fontFamily: "BarlowCondensed_100Thin"
        }}>
          Barlow Condensed Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_100Thin_Italic"
        }}>
          Barlow Condensed Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_200ExtraLight"
        }}>
          Barlow Condensed Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_200ExtraLight_Italic"
        }}>
          Barlow Condensed Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_300Light"
        }}>
          Barlow Condensed Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_300Light_Italic"
        }}>
          Barlow Condensed Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_400Regular"
        }}>
          Barlow Condensed Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_400Regular_Italic"
        }}>
          Barlow Condensed Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_500Medium"
        }}>
          Barlow Condensed Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_500Medium_Italic"
        }}>
          Barlow Condensed Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_600SemiBold"
        }}>
          Barlow Condensed Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_600SemiBold_Italic"
        }}>
          Barlow Condensed Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_700Bold"
        }}>
          Barlow Condensed Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_700Bold_Italic"
        }}>
          Barlow Condensed Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_800ExtraBold"
        }}>
          Barlow Condensed Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_800ExtraBold_Italic"
        }}>
          Barlow Condensed Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_900Black"
        }}>
          Barlow Condensed Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BarlowCondensed_900Black_Italic"
        }}>
          Barlow Condensed Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BarlowCondensed_100Thin](./BarlowCondensed_100Thin.ttf.png)|![BarlowCondensed_100Thin_Italic](./BarlowCondensed_100Thin_Italic.ttf.png)|![BarlowCondensed_200ExtraLight](./BarlowCondensed_200ExtraLight.ttf.png)||
|![BarlowCondensed_200ExtraLight_Italic](./BarlowCondensed_200ExtraLight_Italic.ttf.png)|![BarlowCondensed_300Light](./BarlowCondensed_300Light.ttf.png)|![BarlowCondensed_300Light_Italic](./BarlowCondensed_300Light_Italic.ttf.png)||
|![BarlowCondensed_400Regular](./BarlowCondensed_400Regular.ttf.png)|![BarlowCondensed_400Regular_Italic](./BarlowCondensed_400Regular_Italic.ttf.png)|![BarlowCondensed_500Medium](./BarlowCondensed_500Medium.ttf.png)||
|![BarlowCondensed_500Medium_Italic](./BarlowCondensed_500Medium_Italic.ttf.png)|![BarlowCondensed_600SemiBold](./BarlowCondensed_600SemiBold.ttf.png)|![BarlowCondensed_600SemiBold_Italic](./BarlowCondensed_600SemiBold_Italic.ttf.png)||
|![BarlowCondensed_700Bold](./BarlowCondensed_700Bold.ttf.png)|![BarlowCondensed_700Bold_Italic](./BarlowCondensed_700Bold_Italic.ttf.png)|![BarlowCondensed_800ExtraBold](./BarlowCondensed_800ExtraBold.ttf.png)||
|![BarlowCondensed_800ExtraBold_Italic](./BarlowCondensed_800ExtraBold_Italic.ttf.png)|![BarlowCondensed_900Black](./BarlowCondensed_900Black.ttf.png)|![BarlowCondensed_900Black_Italic](./BarlowCondensed_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/barlow-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Barlow Condensed page on Google Fonts](https://fonts.google.com/specimen/Barlow+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Barlow Condensed on Google Fonts](https://fonts.google.com/specimen/Barlow+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/barlow-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/barlow-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
