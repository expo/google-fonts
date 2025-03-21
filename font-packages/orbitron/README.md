# @expo-google-fonts/orbitron

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/orbitron)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/orbitron)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/orbitron)

This package lets you use the [**Orbitron**](https://fonts.google.com/specimen/Orbitron) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Orbitron

![Orbitron](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Orbitron_400Regular`
- `Orbitron_500Medium`
- `Orbitron_600SemiBold`
- `Orbitron_700Bold`
- `Orbitron_800ExtraBold`
- `Orbitron_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/orbitron expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Orbitron_400Regular, Orbitron_500Medium, Orbitron_600SemiBold, Orbitron_700Bold, Orbitron_800ExtraBold, Orbitron_900Black } from '@expo-google-fonts/orbitron';

export default () => {

  let [fontsLoaded] = useFonts({
    Orbitron_400Regular, 
    Orbitron_500Medium, 
    Orbitron_600SemiBold, 
    Orbitron_700Bold, 
    Orbitron_800ExtraBold, 
    Orbitron_900Black
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
          fontFamily: "Orbitron_400Regular"
        }}>
          Orbitron Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Orbitron_500Medium"
        }}>
          Orbitron Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Orbitron_600SemiBold"
        }}>
          Orbitron Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Orbitron_700Bold"
        }}>
          Orbitron Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Orbitron_800ExtraBold"
        }}>
          Orbitron Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Orbitron_900Black"
        }}>
          Orbitron Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Orbitron_400Regular](./Orbitron_400Regular.ttf.png)|![Orbitron_500Medium](./Orbitron_500Medium.ttf.png)|![Orbitron_600SemiBold](./Orbitron_600SemiBold.ttf.png)||
|![Orbitron_700Bold](./Orbitron_700Bold.ttf.png)|![Orbitron_800ExtraBold](./Orbitron_800ExtraBold.ttf.png)|![Orbitron_900Black](./Orbitron_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/orbitron` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Orbitron page on Google Fonts](https://fonts.google.com/specimen/Orbitron) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Orbitron on Google Fonts](https://fonts.google.com/specimen/Orbitron)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/orbitron)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/orbitron)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
