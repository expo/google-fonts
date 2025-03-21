# @expo-google-fonts/fustat

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/fustat)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/fustat)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/fustat)

This package lets you use the [**Fustat**](https://fonts.google.com/specimen/Fustat) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Fustat

![Fustat](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Fustat_200ExtraLight`
- `Fustat_300Light`
- `Fustat_400Regular`
- `Fustat_500Medium`
- `Fustat_600SemiBold`
- `Fustat_700Bold`
- `Fustat_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/fustat expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Fustat_200ExtraLight, Fustat_300Light, Fustat_400Regular, Fustat_500Medium, Fustat_600SemiBold, Fustat_700Bold, Fustat_800ExtraBold } from '@expo-google-fonts/fustat';

export default () => {

  let [fontsLoaded] = useFonts({
    Fustat_200ExtraLight, 
    Fustat_300Light, 
    Fustat_400Regular, 
    Fustat_500Medium, 
    Fustat_600SemiBold, 
    Fustat_700Bold, 
    Fustat_800ExtraBold
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
          fontFamily: "Fustat_200ExtraLight"
        }}>
          Fustat Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fustat_300Light"
        }}>
          Fustat Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fustat_400Regular"
        }}>
          Fustat Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fustat_500Medium"
        }}>
          Fustat Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fustat_600SemiBold"
        }}>
          Fustat Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fustat_700Bold"
        }}>
          Fustat Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Fustat_800ExtraBold"
        }}>
          Fustat Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Fustat_200ExtraLight](./Fustat_200ExtraLight.ttf.png)|![Fustat_300Light](./Fustat_300Light.ttf.png)|![Fustat_400Regular](./Fustat_400Regular.ttf.png)||
|![Fustat_500Medium](./Fustat_500Medium.ttf.png)|![Fustat_600SemiBold](./Fustat_600SemiBold.ttf.png)|![Fustat_700Bold](./Fustat_700Bold.ttf.png)||
|![Fustat_800ExtraBold](./Fustat_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/fustat` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Fustat page on Google Fonts](https://fonts.google.com/specimen/Fustat) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Fustat on Google Fonts](https://fonts.google.com/specimen/Fustat)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fustat)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fustat)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
