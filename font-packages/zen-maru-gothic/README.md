# @expo-google-fonts/zen-maru-gothic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/zen-maru-gothic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/zen-maru-gothic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/zen-maru-gothic)

This package lets you use the [**Zen Maru Gothic**](https://fonts.google.com/specimen/Zen+Maru+Gothic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Zen Maru Gothic

![Zen Maru Gothic](./font-family.png)

This font family contains [5 styles](#-gallery).

- `ZenMaruGothic_300Light`
- `ZenMaruGothic_400Regular`
- `ZenMaruGothic_500Medium`
- `ZenMaruGothic_700Bold`
- `ZenMaruGothic_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/zen-maru-gothic expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, ZenMaruGothic_300Light, ZenMaruGothic_400Regular, ZenMaruGothic_500Medium, ZenMaruGothic_700Bold, ZenMaruGothic_900Black } from '@expo-google-fonts/zen-maru-gothic';

export default () => {

  let [fontsLoaded] = useFonts({
    ZenMaruGothic_300Light, 
    ZenMaruGothic_400Regular, 
    ZenMaruGothic_500Medium, 
    ZenMaruGothic_700Bold, 
    ZenMaruGothic_900Black
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
          fontFamily: "ZenMaruGothic_300Light"
        }}>
          Zen Maru Gothic Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZenMaruGothic_400Regular"
        }}>
          Zen Maru Gothic Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZenMaruGothic_500Medium"
        }}>
          Zen Maru Gothic Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZenMaruGothic_700Bold"
        }}>
          Zen Maru Gothic Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZenMaruGothic_900Black"
        }}>
          Zen Maru Gothic Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ZenMaruGothic_300Light](./ZenMaruGothic_300Light.ttf.png)|![ZenMaruGothic_400Regular](./ZenMaruGothic_400Regular.ttf.png)|![ZenMaruGothic_500Medium](./ZenMaruGothic_500Medium.ttf.png)||
|![ZenMaruGothic_700Bold](./ZenMaruGothic_700Bold.ttf.png)|![ZenMaruGothic_900Black](./ZenMaruGothic_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/zen-maru-gothic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Zen Maru Gothic page on Google Fonts](https://fonts.google.com/specimen/Zen+Maru+Gothic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Zen Maru Gothic on Google Fonts](https://fonts.google.com/specimen/Zen+Maru+Gothic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/zen-maru-gothic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/zen-maru-gothic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
