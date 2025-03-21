# @expo-google-fonts/phudu

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/phudu)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/phudu)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/phudu)

This package lets you use the [**Phudu**](https://fonts.google.com/specimen/Phudu) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Phudu

![Phudu](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Phudu_300Light`
- `Phudu_400Regular`
- `Phudu_500Medium`
- `Phudu_600SemiBold`
- `Phudu_700Bold`
- `Phudu_800ExtraBold`
- `Phudu_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/phudu expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Phudu_300Light, Phudu_400Regular, Phudu_500Medium, Phudu_600SemiBold, Phudu_700Bold, Phudu_800ExtraBold, Phudu_900Black } from '@expo-google-fonts/phudu';

export default () => {

  let [fontsLoaded] = useFonts({
    Phudu_300Light, 
    Phudu_400Regular, 
    Phudu_500Medium, 
    Phudu_600SemiBold, 
    Phudu_700Bold, 
    Phudu_800ExtraBold, 
    Phudu_900Black
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
          fontFamily: "Phudu_300Light"
        }}>
          Phudu Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Phudu_400Regular"
        }}>
          Phudu Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Phudu_500Medium"
        }}>
          Phudu Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Phudu_600SemiBold"
        }}>
          Phudu Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Phudu_700Bold"
        }}>
          Phudu Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Phudu_800ExtraBold"
        }}>
          Phudu Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Phudu_900Black"
        }}>
          Phudu Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Phudu_300Light](./Phudu_300Light.ttf.png)|![Phudu_400Regular](./Phudu_400Regular.ttf.png)|![Phudu_500Medium](./Phudu_500Medium.ttf.png)||
|![Phudu_600SemiBold](./Phudu_600SemiBold.ttf.png)|![Phudu_700Bold](./Phudu_700Bold.ttf.png)|![Phudu_800ExtraBold](./Phudu_800ExtraBold.ttf.png)||
|![Phudu_900Black](./Phudu_900Black.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/phudu` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Phudu page on Google Fonts](https://fonts.google.com/specimen/Phudu) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Phudu on Google Fonts](https://fonts.google.com/specimen/Phudu)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/phudu)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/phudu)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
