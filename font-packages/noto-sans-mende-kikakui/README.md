# @expo-google-fonts/noto-sans-mende-kikakui

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-mende-kikakui)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-mende-kikakui)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-mende-kikakui)

This package lets you use the [**Noto Sans Mende Kikakui**](https://fonts.google.com/specimen/Noto+Sans+Mende+Kikakui) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Mende Kikakui

![Noto Sans Mende Kikakui](./font-family.png)

This font family contains [1 styles](#-gallery).

- `NotoSansMendeKikakui_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-mende-kikakui expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSansMendeKikakui_400Regular } from '@expo-google-fonts/noto-sans-mende-kikakui';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansMendeKikakui_400Regular
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
          fontFamily: "NotoSansMendeKikakui_400Regular"
        }}>
          Noto Sans Mende Kikakui Regular
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansMendeKikakui_400Regular](./NotoSansMendeKikakui_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-mende-kikakui` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Mende Kikakui page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Mende+Kikakui) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Mende Kikakui on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Mende+Kikakui)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-mende-kikakui)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-mende-kikakui)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
