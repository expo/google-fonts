# @expo-google-fonts/noto-sans-bamum

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-bamum)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-bamum)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-bamum)

This package lets you use the [**Noto Sans Bamum**](https://fonts.google.com/specimen/Noto+Sans+Bamum) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Bamum

![Noto Sans Bamum](./font-family.png)

This font family contains [4 styles](#-gallery).

- `NotoSansBamum_400Regular`
- `NotoSansBamum_500Medium`
- `NotoSansBamum_600SemiBold`
- `NotoSansBamum_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-bamum expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, NotoSansBamum_400Regular, NotoSansBamum_500Medium, NotoSansBamum_600SemiBold, NotoSansBamum_700Bold } from '@expo-google-fonts/noto-sans-bamum';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansBamum_400Regular, 
    NotoSansBamum_500Medium, 
    NotoSansBamum_600SemiBold, 
    NotoSansBamum_700Bold
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
          fontFamily: "NotoSansBamum_400Regular"
        }}>
          Noto Sans Bamum Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansBamum_500Medium"
        }}>
          Noto Sans Bamum Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansBamum_600SemiBold"
        }}>
          Noto Sans Bamum Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansBamum_700Bold"
        }}>
          Noto Sans Bamum Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansBamum_400Regular](./NotoSansBamum_400Regular.ttf.png)|![NotoSansBamum_500Medium](./NotoSansBamum_500Medium.ttf.png)|![NotoSansBamum_600SemiBold](./NotoSansBamum_600SemiBold.ttf.png)||
|![NotoSansBamum_700Bold](./NotoSansBamum_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-bamum` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Bamum page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Bamum) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Bamum on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Bamum)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-bamum)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-bamum)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
