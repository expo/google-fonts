# @expo-google-fonts/noto-sans-lao

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-lao)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-lao)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-lao)

This package lets you use the [**Noto Sans Lao**](https://fonts.google.com/specimen/Noto+Sans+Lao) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Lao

![Noto Sans Lao](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansLao_100Thin`
- `NotoSansLao_200ExtraLight`
- `NotoSansLao_300Light`
- `NotoSansLao_400Regular`
- `NotoSansLao_500Medium`
- `NotoSansLao_600SemiBold`
- `NotoSansLao_700Bold`
- `NotoSansLao_800ExtraBold`
- `NotoSansLao_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-lao expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSansLao_100Thin, NotoSansLao_200ExtraLight, NotoSansLao_300Light, NotoSansLao_400Regular, NotoSansLao_500Medium, NotoSansLao_600SemiBold, NotoSansLao_700Bold, NotoSansLao_800ExtraBold, NotoSansLao_900Black } from '@expo-google-fonts/noto-sans-lao';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansLao_100Thin, 
    NotoSansLao_200ExtraLight, 
    NotoSansLao_300Light, 
    NotoSansLao_400Regular, 
    NotoSansLao_500Medium, 
    NotoSansLao_600SemiBold, 
    NotoSansLao_700Bold, 
    NotoSansLao_800ExtraBold, 
    NotoSansLao_900Black
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
          fontFamily: "NotoSansLao_100Thin"
        }}>
          Noto Sans Lao Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansLao_200ExtraLight"
        }}>
          Noto Sans Lao Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansLao_300Light"
        }}>
          Noto Sans Lao Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansLao_400Regular"
        }}>
          Noto Sans Lao Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansLao_500Medium"
        }}>
          Noto Sans Lao Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansLao_600SemiBold"
        }}>
          Noto Sans Lao Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansLao_700Bold"
        }}>
          Noto Sans Lao Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansLao_800ExtraBold"
        }}>
          Noto Sans Lao Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansLao_900Black"
        }}>
          Noto Sans Lao Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansLao_100Thin](./NotoSansLao_100Thin.ttf.png)|![NotoSansLao_200ExtraLight](./NotoSansLao_200ExtraLight.ttf.png)|![NotoSansLao_300Light](./NotoSansLao_300Light.ttf.png)||
|![NotoSansLao_400Regular](./NotoSansLao_400Regular.ttf.png)|![NotoSansLao_500Medium](./NotoSansLao_500Medium.ttf.png)|![NotoSansLao_600SemiBold](./NotoSansLao_600SemiBold.ttf.png)||
|![NotoSansLao_700Bold](./NotoSansLao_700Bold.ttf.png)|![NotoSansLao_800ExtraBold](./NotoSansLao_800ExtraBold.ttf.png)|![NotoSansLao_900Black](./NotoSansLao_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-lao` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Lao page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Lao) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Lao on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Lao)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-lao)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-lao)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
