# @expo-google-fonts/ruwudu

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ruwudu)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ruwudu)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ruwudu)

This package lets you use the [**Ruwudu**](https://fonts.google.com/specimen/Ruwudu) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ruwudu

![Ruwudu](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Ruwudu_400Regular`
- `Ruwudu_500Medium`
- `Ruwudu_600SemiBold`
- `Ruwudu_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ruwudu expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Ruwudu_400Regular, Ruwudu_500Medium, Ruwudu_600SemiBold, Ruwudu_700Bold } from '@expo-google-fonts/ruwudu';

export default () => {

  let [fontsLoaded] = useFonts({
    Ruwudu_400Regular, 
    Ruwudu_500Medium, 
    Ruwudu_600SemiBold, 
    Ruwudu_700Bold
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
          fontFamily: "Ruwudu_400Regular"
        }}>
          Ruwudu Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ruwudu_500Medium"
        }}>
          Ruwudu Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ruwudu_600SemiBold"
        }}>
          Ruwudu Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ruwudu_700Bold"
        }}>
          Ruwudu Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Ruwudu_400Regular](./Ruwudu_400Regular.ttf.png)|![Ruwudu_500Medium](./Ruwudu_500Medium.ttf.png)|![Ruwudu_600SemiBold](./Ruwudu_600SemiBold.ttf.png)||
|![Ruwudu_700Bold](./Ruwudu_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ruwudu` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ruwudu page on Google Fonts](https://fonts.google.com/specimen/Ruwudu) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ruwudu on Google Fonts](https://fonts.google.com/specimen/Ruwudu)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ruwudu)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ruwudu)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
