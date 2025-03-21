# @expo-google-fonts/shippori-mincho-b1

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/shippori-mincho-b1)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/shippori-mincho-b1)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/shippori-mincho-b1)

This package lets you use the [**Shippori Mincho B1**](https://fonts.google.com/specimen/Shippori+Mincho+B1) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Shippori Mincho B1

![Shippori Mincho B1](./font-family.png)

This font family contains [5 styles](#-gallery).

- `ShipporiMinchoB1_400Regular`
- `ShipporiMinchoB1_500Medium`
- `ShipporiMinchoB1_600SemiBold`
- `ShipporiMinchoB1_700Bold`
- `ShipporiMinchoB1_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/shippori-mincho-b1 expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, ShipporiMinchoB1_400Regular, ShipporiMinchoB1_500Medium, ShipporiMinchoB1_600SemiBold, ShipporiMinchoB1_700Bold, ShipporiMinchoB1_800ExtraBold } from '@expo-google-fonts/shippori-mincho-b1';

export default () => {

  let [fontsLoaded] = useFonts({
    ShipporiMinchoB1_400Regular, 
    ShipporiMinchoB1_500Medium, 
    ShipporiMinchoB1_600SemiBold, 
    ShipporiMinchoB1_700Bold, 
    ShipporiMinchoB1_800ExtraBold
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
          fontFamily: "ShipporiMinchoB1_400Regular"
        }}>
          Shippori Mincho B1 Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShipporiMinchoB1_500Medium"
        }}>
          Shippori Mincho B1 Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShipporiMinchoB1_600SemiBold"
        }}>
          Shippori Mincho B1 Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShipporiMinchoB1_700Bold"
        }}>
          Shippori Mincho B1 Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShipporiMinchoB1_800ExtraBold"
        }}>
          Shippori Mincho B1 Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ShipporiMinchoB1_400Regular](./ShipporiMinchoB1_400Regular.ttf.png)|![ShipporiMinchoB1_500Medium](./ShipporiMinchoB1_500Medium.ttf.png)|![ShipporiMinchoB1_600SemiBold](./ShipporiMinchoB1_600SemiBold.ttf.png)||
|![ShipporiMinchoB1_700Bold](./ShipporiMinchoB1_700Bold.ttf.png)|![ShipporiMinchoB1_800ExtraBold](./ShipporiMinchoB1_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/shippori-mincho-b1` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Shippori Mincho B1 page on Google Fonts](https://fonts.google.com/specimen/Shippori+Mincho+B1) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Shippori Mincho B1 on Google Fonts](https://fonts.google.com/specimen/Shippori+Mincho+B1)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/shippori-mincho-b1)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/shippori-mincho-b1)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
