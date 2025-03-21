# @expo-google-fonts/noto-sans-myanmar

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-myanmar)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-myanmar)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-myanmar)

This package lets you use the [**Noto Sans Myanmar**](https://fonts.google.com/specimen/Noto+Sans+Myanmar) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Myanmar

![Noto Sans Myanmar](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansMyanmar_100Thin`
- `NotoSansMyanmar_200ExtraLight`
- `NotoSansMyanmar_300Light`
- `NotoSansMyanmar_400Regular`
- `NotoSansMyanmar_500Medium`
- `NotoSansMyanmar_600SemiBold`
- `NotoSansMyanmar_700Bold`
- `NotoSansMyanmar_800ExtraBold`
- `NotoSansMyanmar_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-myanmar expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSansMyanmar_100Thin, NotoSansMyanmar_200ExtraLight, NotoSansMyanmar_300Light, NotoSansMyanmar_400Regular, NotoSansMyanmar_500Medium, NotoSansMyanmar_600SemiBold, NotoSansMyanmar_700Bold, NotoSansMyanmar_800ExtraBold, NotoSansMyanmar_900Black } from '@expo-google-fonts/noto-sans-myanmar';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansMyanmar_100Thin, 
    NotoSansMyanmar_200ExtraLight, 
    NotoSansMyanmar_300Light, 
    NotoSansMyanmar_400Regular, 
    NotoSansMyanmar_500Medium, 
    NotoSansMyanmar_600SemiBold, 
    NotoSansMyanmar_700Bold, 
    NotoSansMyanmar_800ExtraBold, 
    NotoSansMyanmar_900Black
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
          fontFamily: "NotoSansMyanmar_100Thin"
        }}>
          Noto Sans Myanmar Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_200ExtraLight"
        }}>
          Noto Sans Myanmar Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_300Light"
        }}>
          Noto Sans Myanmar Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_400Regular"
        }}>
          Noto Sans Myanmar Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_500Medium"
        }}>
          Noto Sans Myanmar Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_600SemiBold"
        }}>
          Noto Sans Myanmar Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_700Bold"
        }}>
          Noto Sans Myanmar Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_800ExtraBold"
        }}>
          Noto Sans Myanmar Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMyanmar_900Black"
        }}>
          Noto Sans Myanmar Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansMyanmar_100Thin](./NotoSansMyanmar_100Thin.ttf.png)|![NotoSansMyanmar_200ExtraLight](./NotoSansMyanmar_200ExtraLight.ttf.png)|![NotoSansMyanmar_300Light](./NotoSansMyanmar_300Light.ttf.png)||
|![NotoSansMyanmar_400Regular](./NotoSansMyanmar_400Regular.ttf.png)|![NotoSansMyanmar_500Medium](./NotoSansMyanmar_500Medium.ttf.png)|![NotoSansMyanmar_600SemiBold](./NotoSansMyanmar_600SemiBold.ttf.png)||
|![NotoSansMyanmar_700Bold](./NotoSansMyanmar_700Bold.ttf.png)|![NotoSansMyanmar_800ExtraBold](./NotoSansMyanmar_800ExtraBold.ttf.png)|![NotoSansMyanmar_900Black](./NotoSansMyanmar_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-myanmar` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Myanmar page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Myanmar) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Myanmar on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Myanmar)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-myanmar)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-myanmar)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
