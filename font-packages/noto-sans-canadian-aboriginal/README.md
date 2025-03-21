# @expo-google-fonts/noto-sans-canadian-aboriginal

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-canadian-aboriginal)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-canadian-aboriginal)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-canadian-aboriginal)

This package lets you use the [**Noto Sans Canadian Aboriginal**](https://fonts.google.com/specimen/Noto+Sans+Canadian+Aboriginal) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Canadian Aboriginal

![Noto Sans Canadian Aboriginal](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansCanadianAboriginal_100Thin`
- `NotoSansCanadianAboriginal_200ExtraLight`
- `NotoSansCanadianAboriginal_300Light`
- `NotoSansCanadianAboriginal_400Regular`
- `NotoSansCanadianAboriginal_500Medium`
- `NotoSansCanadianAboriginal_600SemiBold`
- `NotoSansCanadianAboriginal_700Bold`
- `NotoSansCanadianAboriginal_800ExtraBold`
- `NotoSansCanadianAboriginal_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-canadian-aboriginal expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSansCanadianAboriginal_100Thin, NotoSansCanadianAboriginal_200ExtraLight, NotoSansCanadianAboriginal_300Light, NotoSansCanadianAboriginal_400Regular, NotoSansCanadianAboriginal_500Medium, NotoSansCanadianAboriginal_600SemiBold, NotoSansCanadianAboriginal_700Bold, NotoSansCanadianAboriginal_800ExtraBold, NotoSansCanadianAboriginal_900Black } from '@expo-google-fonts/noto-sans-canadian-aboriginal';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansCanadianAboriginal_100Thin, 
    NotoSansCanadianAboriginal_200ExtraLight, 
    NotoSansCanadianAboriginal_300Light, 
    NotoSansCanadianAboriginal_400Regular, 
    NotoSansCanadianAboriginal_500Medium, 
    NotoSansCanadianAboriginal_600SemiBold, 
    NotoSansCanadianAboriginal_700Bold, 
    NotoSansCanadianAboriginal_800ExtraBold, 
    NotoSansCanadianAboriginal_900Black
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
          fontFamily: "NotoSansCanadianAboriginal_100Thin"
        }}>
          Noto Sans Canadian Aboriginal Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansCanadianAboriginal_200ExtraLight"
        }}>
          Noto Sans Canadian Aboriginal Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansCanadianAboriginal_300Light"
        }}>
          Noto Sans Canadian Aboriginal Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansCanadianAboriginal_400Regular"
        }}>
          Noto Sans Canadian Aboriginal Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansCanadianAboriginal_500Medium"
        }}>
          Noto Sans Canadian Aboriginal Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansCanadianAboriginal_600SemiBold"
        }}>
          Noto Sans Canadian Aboriginal Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansCanadianAboriginal_700Bold"
        }}>
          Noto Sans Canadian Aboriginal Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansCanadianAboriginal_800ExtraBold"
        }}>
          Noto Sans Canadian Aboriginal Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansCanadianAboriginal_900Black"
        }}>
          Noto Sans Canadian Aboriginal Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansCanadianAboriginal_100Thin](./NotoSansCanadianAboriginal_100Thin.ttf.png)|![NotoSansCanadianAboriginal_200ExtraLight](./NotoSansCanadianAboriginal_200ExtraLight.ttf.png)|![NotoSansCanadianAboriginal_300Light](./NotoSansCanadianAboriginal_300Light.ttf.png)||
|![NotoSansCanadianAboriginal_400Regular](./NotoSansCanadianAboriginal_400Regular.ttf.png)|![NotoSansCanadianAboriginal_500Medium](./NotoSansCanadianAboriginal_500Medium.ttf.png)|![NotoSansCanadianAboriginal_600SemiBold](./NotoSansCanadianAboriginal_600SemiBold.ttf.png)||
|![NotoSansCanadianAboriginal_700Bold](./NotoSansCanadianAboriginal_700Bold.ttf.png)|![NotoSansCanadianAboriginal_800ExtraBold](./NotoSansCanadianAboriginal_800ExtraBold.ttf.png)|![NotoSansCanadianAboriginal_900Black](./NotoSansCanadianAboriginal_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-canadian-aboriginal` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Canadian Aboriginal page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Canadian+Aboriginal) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Canadian Aboriginal on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Canadian+Aboriginal)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-canadian-aboriginal)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-canadian-aboriginal)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
