# @expo-google-fonts/dai-banna-sil

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/dai-banna-sil)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/dai-banna-sil)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/dai-banna-sil)

This package lets you use the [**Dai Banna SIL**](https://fonts.google.com/specimen/Dai+Banna+SIL) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Dai Banna SIL

![Dai Banna SIL](./font-family.png)

This font family contains [10 styles](#-gallery).

- `DaiBannaSIL_300Light`
- `DaiBannaSIL_300Light_Italic`
- `DaiBannaSIL_400Regular`
- `DaiBannaSIL_400Regular_Italic`
- `DaiBannaSIL_500Medium`
- `DaiBannaSIL_500Medium_Italic`
- `DaiBannaSIL_600SemiBold`
- `DaiBannaSIL_600SemiBold_Italic`
- `DaiBannaSIL_700Bold`
- `DaiBannaSIL_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/dai-banna-sil expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, DaiBannaSIL_300Light, DaiBannaSIL_300Light_Italic, DaiBannaSIL_400Regular, DaiBannaSIL_400Regular_Italic, DaiBannaSIL_500Medium, DaiBannaSIL_500Medium_Italic, DaiBannaSIL_600SemiBold, DaiBannaSIL_600SemiBold_Italic, DaiBannaSIL_700Bold, DaiBannaSIL_700Bold_Italic } from '@expo-google-fonts/dai-banna-sil';

export default () => {

  let [fontsLoaded] = useFonts({
    DaiBannaSIL_300Light, 
    DaiBannaSIL_300Light_Italic, 
    DaiBannaSIL_400Regular, 
    DaiBannaSIL_400Regular_Italic, 
    DaiBannaSIL_500Medium, 
    DaiBannaSIL_500Medium_Italic, 
    DaiBannaSIL_600SemiBold, 
    DaiBannaSIL_600SemiBold_Italic, 
    DaiBannaSIL_700Bold, 
    DaiBannaSIL_700Bold_Italic
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
          fontFamily: "DaiBannaSIL_300Light"
        }}>
          Dai Banna SIL Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DaiBannaSIL_300Light_Italic"
        }}>
          Dai Banna SIL Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DaiBannaSIL_400Regular"
        }}>
          Dai Banna SIL Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DaiBannaSIL_400Regular_Italic"
        }}>
          Dai Banna SIL Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DaiBannaSIL_500Medium"
        }}>
          Dai Banna SIL Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DaiBannaSIL_500Medium_Italic"
        }}>
          Dai Banna SIL Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DaiBannaSIL_600SemiBold"
        }}>
          Dai Banna SIL Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DaiBannaSIL_600SemiBold_Italic"
        }}>
          Dai Banna SIL Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DaiBannaSIL_700Bold"
        }}>
          Dai Banna SIL Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DaiBannaSIL_700Bold_Italic"
        }}>
          Dai Banna SIL Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![DaiBannaSIL_300Light](./DaiBannaSIL_300Light.ttf.png)|![DaiBannaSIL_300Light_Italic](./DaiBannaSIL_300Light_Italic.ttf.png)|![DaiBannaSIL_400Regular](./DaiBannaSIL_400Regular.ttf.png)||
|![DaiBannaSIL_400Regular_Italic](./DaiBannaSIL_400Regular_Italic.ttf.png)|![DaiBannaSIL_500Medium](./DaiBannaSIL_500Medium.ttf.png)|![DaiBannaSIL_500Medium_Italic](./DaiBannaSIL_500Medium_Italic.ttf.png)||
|![DaiBannaSIL_600SemiBold](./DaiBannaSIL_600SemiBold.ttf.png)|![DaiBannaSIL_600SemiBold_Italic](./DaiBannaSIL_600SemiBold_Italic.ttf.png)|![DaiBannaSIL_700Bold](./DaiBannaSIL_700Bold.ttf.png)||
|![DaiBannaSIL_700Bold_Italic](./DaiBannaSIL_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/dai-banna-sil` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Dai Banna SIL page on Google Fonts](https://fonts.google.com/specimen/Dai+Banna+SIL) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Dai Banna SIL on Google Fonts](https://fonts.google.com/specimen/Dai+Banna+SIL)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/dai-banna-sil)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/dai-banna-sil)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
