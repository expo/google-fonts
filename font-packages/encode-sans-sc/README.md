# @expo-google-fonts/encode-sans-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/encode-sans-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/encode-sans-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/encode-sans-sc)

This package lets you use the [**Encode Sans SC**](https://fonts.google.com/specimen/Encode+Sans+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Encode Sans SC

![Encode Sans SC](./font-family.png)

This font family contains [9 styles](#-gallery).

- `EncodeSansSC_100Thin`
- `EncodeSansSC_200ExtraLight`
- `EncodeSansSC_300Light`
- `EncodeSansSC_400Regular`
- `EncodeSansSC_500Medium`
- `EncodeSansSC_600SemiBold`
- `EncodeSansSC_700Bold`
- `EncodeSansSC_800ExtraBold`
- `EncodeSansSC_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/encode-sans-sc expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, EncodeSansSC_100Thin, EncodeSansSC_200ExtraLight, EncodeSansSC_300Light, EncodeSansSC_400Regular, EncodeSansSC_500Medium, EncodeSansSC_600SemiBold, EncodeSansSC_700Bold, EncodeSansSC_800ExtraBold, EncodeSansSC_900Black } from '@expo-google-fonts/encode-sans-sc';

export default () => {

  let [fontsLoaded] = useFonts({
    EncodeSansSC_100Thin, 
    EncodeSansSC_200ExtraLight, 
    EncodeSansSC_300Light, 
    EncodeSansSC_400Regular, 
    EncodeSansSC_500Medium, 
    EncodeSansSC_600SemiBold, 
    EncodeSansSC_700Bold, 
    EncodeSansSC_800ExtraBold, 
    EncodeSansSC_900Black
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
          fontFamily: "EncodeSansSC_100Thin"
        }}>
          Encode Sans SC Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSC_200ExtraLight"
        }}>
          Encode Sans SC Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSC_300Light"
        }}>
          Encode Sans SC Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSC_400Regular"
        }}>
          Encode Sans SC Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSC_500Medium"
        }}>
          Encode Sans SC Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSC_600SemiBold"
        }}>
          Encode Sans SC Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSC_700Bold"
        }}>
          Encode Sans SC Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSC_800ExtraBold"
        }}>
          Encode Sans SC Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EncodeSansSC_900Black"
        }}>
          Encode Sans SC Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![EncodeSansSC_100Thin](./EncodeSansSC_100Thin.ttf.png)|![EncodeSansSC_200ExtraLight](./EncodeSansSC_200ExtraLight.ttf.png)|![EncodeSansSC_300Light](./EncodeSansSC_300Light.ttf.png)||
|![EncodeSansSC_400Regular](./EncodeSansSC_400Regular.ttf.png)|![EncodeSansSC_500Medium](./EncodeSansSC_500Medium.ttf.png)|![EncodeSansSC_600SemiBold](./EncodeSansSC_600SemiBold.ttf.png)||
|![EncodeSansSC_700Bold](./EncodeSansSC_700Bold.ttf.png)|![EncodeSansSC_800ExtraBold](./EncodeSansSC_800ExtraBold.ttf.png)|![EncodeSansSC_900Black](./EncodeSansSC_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/encode-sans-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Encode Sans SC page on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Encode Sans SC on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/encode-sans-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/encode-sans-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
