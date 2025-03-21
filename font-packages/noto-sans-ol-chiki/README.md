# @expo-google-fonts/noto-sans-ol-chiki

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-ol-chiki)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-ol-chiki)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-ol-chiki)

This package lets you use the [**Noto Sans Ol Chiki**](https://fonts.google.com/specimen/Noto+Sans+Ol+Chiki) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Ol Chiki

![Noto Sans Ol Chiki](./font-family.png)

This font family contains [4 styles](#-gallery).

- `NotoSansOlChiki_400Regular`
- `NotoSansOlChiki_500Medium`
- `NotoSansOlChiki_600SemiBold`
- `NotoSansOlChiki_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-ol-chiki expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSansOlChiki_400Regular, NotoSansOlChiki_500Medium, NotoSansOlChiki_600SemiBold, NotoSansOlChiki_700Bold } from '@expo-google-fonts/noto-sans-ol-chiki';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansOlChiki_400Regular, 
    NotoSansOlChiki_500Medium, 
    NotoSansOlChiki_600SemiBold, 
    NotoSansOlChiki_700Bold
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
          fontFamily: "NotoSansOlChiki_400Regular"
        }}>
          Noto Sans Ol Chiki Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansOlChiki_500Medium"
        }}>
          Noto Sans Ol Chiki Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansOlChiki_600SemiBold"
        }}>
          Noto Sans Ol Chiki Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansOlChiki_700Bold"
        }}>
          Noto Sans Ol Chiki Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansOlChiki_400Regular](./NotoSansOlChiki_400Regular.ttf.png)|![NotoSansOlChiki_500Medium](./NotoSansOlChiki_500Medium.ttf.png)|![NotoSansOlChiki_600SemiBold](./NotoSansOlChiki_600SemiBold.ttf.png)||
|![NotoSansOlChiki_700Bold](./NotoSansOlChiki_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-ol-chiki` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Ol Chiki page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Ol+Chiki) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Ol Chiki on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Ol+Chiki)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-ol-chiki)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-ol-chiki)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
