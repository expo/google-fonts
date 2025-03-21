# @expo-google-fonts/zen-loop

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/zen-loop)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/zen-loop)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/zen-loop)

This package lets you use the [**Zen Loop**](https://fonts.google.com/specimen/Zen+Loop) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Zen Loop

![Zen Loop](./font-family.png)

This font family contains [2 styles](#-gallery).

- `ZenLoop_400Regular`
- `ZenLoop_400Regular_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/zen-loop expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, ZenLoop_400Regular, ZenLoop_400Regular_Italic } from '@expo-google-fonts/zen-loop';

export default () => {

  let [fontsLoaded] = useFonts({
    ZenLoop_400Regular, 
    ZenLoop_400Regular_Italic
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
          fontFamily: "ZenLoop_400Regular"
        }}>
          Zen Loop Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZenLoop_400Regular_Italic"
        }}>
          Zen Loop Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ZenLoop_400Regular](./ZenLoop_400Regular.ttf.png)|![ZenLoop_400Regular_Italic](./ZenLoop_400Regular_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/zen-loop` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Zen Loop page on Google Fonts](https://fonts.google.com/specimen/Zen+Loop) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Zen Loop on Google Fonts](https://fonts.google.com/specimen/Zen+Loop)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/zen-loop)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/zen-loop)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
