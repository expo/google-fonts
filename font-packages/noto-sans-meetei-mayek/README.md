# @expo-google-fonts/noto-sans-meetei-mayek

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-meetei-mayek)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-meetei-mayek)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-meetei-mayek)

This package lets you use the [**Noto Sans Meetei Mayek**](https://fonts.google.com/specimen/Noto+Sans+Meetei+Mayek) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Meetei Mayek

![Noto Sans Meetei Mayek](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansMeeteiMayek_100Thin`
- `NotoSansMeeteiMayek_200ExtraLight`
- `NotoSansMeeteiMayek_300Light`
- `NotoSansMeeteiMayek_400Regular`
- `NotoSansMeeteiMayek_500Medium`
- `NotoSansMeeteiMayek_600SemiBold`
- `NotoSansMeeteiMayek_700Bold`
- `NotoSansMeeteiMayek_800ExtraBold`
- `NotoSansMeeteiMayek_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-meetei-mayek expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSansMeeteiMayek_100Thin, NotoSansMeeteiMayek_200ExtraLight, NotoSansMeeteiMayek_300Light, NotoSansMeeteiMayek_400Regular, NotoSansMeeteiMayek_500Medium, NotoSansMeeteiMayek_600SemiBold, NotoSansMeeteiMayek_700Bold, NotoSansMeeteiMayek_800ExtraBold, NotoSansMeeteiMayek_900Black } from '@expo-google-fonts/noto-sans-meetei-mayek';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansMeeteiMayek_100Thin, 
    NotoSansMeeteiMayek_200ExtraLight, 
    NotoSansMeeteiMayek_300Light, 
    NotoSansMeeteiMayek_400Regular, 
    NotoSansMeeteiMayek_500Medium, 
    NotoSansMeeteiMayek_600SemiBold, 
    NotoSansMeeteiMayek_700Bold, 
    NotoSansMeeteiMayek_800ExtraBold, 
    NotoSansMeeteiMayek_900Black
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
          fontFamily: "NotoSansMeeteiMayek_100Thin"
        }}>
          Noto Sans Meetei Mayek Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMeeteiMayek_200ExtraLight"
        }}>
          Noto Sans Meetei Mayek Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMeeteiMayek_300Light"
        }}>
          Noto Sans Meetei Mayek Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMeeteiMayek_400Regular"
        }}>
          Noto Sans Meetei Mayek Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMeeteiMayek_500Medium"
        }}>
          Noto Sans Meetei Mayek Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMeeteiMayek_600SemiBold"
        }}>
          Noto Sans Meetei Mayek Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMeeteiMayek_700Bold"
        }}>
          Noto Sans Meetei Mayek Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMeeteiMayek_800ExtraBold"
        }}>
          Noto Sans Meetei Mayek Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansMeeteiMayek_900Black"
        }}>
          Noto Sans Meetei Mayek Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansMeeteiMayek_100Thin](./NotoSansMeeteiMayek_100Thin.ttf.png)|![NotoSansMeeteiMayek_200ExtraLight](./NotoSansMeeteiMayek_200ExtraLight.ttf.png)|![NotoSansMeeteiMayek_300Light](./NotoSansMeeteiMayek_300Light.ttf.png)||
|![NotoSansMeeteiMayek_400Regular](./NotoSansMeeteiMayek_400Regular.ttf.png)|![NotoSansMeeteiMayek_500Medium](./NotoSansMeeteiMayek_500Medium.ttf.png)|![NotoSansMeeteiMayek_600SemiBold](./NotoSansMeeteiMayek_600SemiBold.ttf.png)||
|![NotoSansMeeteiMayek_700Bold](./NotoSansMeeteiMayek_700Bold.ttf.png)|![NotoSansMeeteiMayek_800ExtraBold](./NotoSansMeeteiMayek_800ExtraBold.ttf.png)|![NotoSansMeeteiMayek_900Black](./NotoSansMeeteiMayek_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-meetei-mayek` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Meetei Mayek page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Meetei+Mayek) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Meetei Mayek on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Meetei+Mayek)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-meetei-mayek)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-meetei-mayek)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
