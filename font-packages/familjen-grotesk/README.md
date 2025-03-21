# @expo-google-fonts/familjen-grotesk

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/familjen-grotesk)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/familjen-grotesk)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/familjen-grotesk)

This package lets you use the [**Familjen Grotesk**](https://fonts.google.com/specimen/Familjen+Grotesk) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Familjen Grotesk

![Familjen Grotesk](./font-family.png)

This font family contains [8 styles](#-gallery).

- `FamiljenGrotesk_400Regular`
- `FamiljenGrotesk_500Medium`
- `FamiljenGrotesk_600SemiBold`
- `FamiljenGrotesk_700Bold`
- `FamiljenGrotesk_400Regular_Italic`
- `FamiljenGrotesk_500Medium_Italic`
- `FamiljenGrotesk_600SemiBold_Italic`
- `FamiljenGrotesk_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/familjen-grotesk expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, FamiljenGrotesk_400Regular, FamiljenGrotesk_500Medium, FamiljenGrotesk_600SemiBold, FamiljenGrotesk_700Bold, FamiljenGrotesk_400Regular_Italic, FamiljenGrotesk_500Medium_Italic, FamiljenGrotesk_600SemiBold_Italic, FamiljenGrotesk_700Bold_Italic } from '@expo-google-fonts/familjen-grotesk';

export default () => {

  let [fontsLoaded] = useFonts({
    FamiljenGrotesk_400Regular, 
    FamiljenGrotesk_500Medium, 
    FamiljenGrotesk_600SemiBold, 
    FamiljenGrotesk_700Bold, 
    FamiljenGrotesk_400Regular_Italic, 
    FamiljenGrotesk_500Medium_Italic, 
    FamiljenGrotesk_600SemiBold_Italic, 
    FamiljenGrotesk_700Bold_Italic
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
          fontFamily: "FamiljenGrotesk_400Regular"
        }}>
          Familjen Grotesk Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FamiljenGrotesk_500Medium"
        }}>
          Familjen Grotesk Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FamiljenGrotesk_600SemiBold"
        }}>
          Familjen Grotesk Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FamiljenGrotesk_700Bold"
        }}>
          Familjen Grotesk Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FamiljenGrotesk_400Regular_Italic"
        }}>
          Familjen Grotesk Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FamiljenGrotesk_500Medium_Italic"
        }}>
          Familjen Grotesk Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FamiljenGrotesk_600SemiBold_Italic"
        }}>
          Familjen Grotesk Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FamiljenGrotesk_700Bold_Italic"
        }}>
          Familjen Grotesk Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![FamiljenGrotesk_400Regular](./FamiljenGrotesk_400Regular.ttf.png)|![FamiljenGrotesk_500Medium](./FamiljenGrotesk_500Medium.ttf.png)|![FamiljenGrotesk_600SemiBold](./FamiljenGrotesk_600SemiBold.ttf.png)||
|![FamiljenGrotesk_700Bold](./FamiljenGrotesk_700Bold.ttf.png)|![FamiljenGrotesk_400Regular_Italic](./FamiljenGrotesk_400Regular_Italic.ttf.png)|![FamiljenGrotesk_500Medium_Italic](./FamiljenGrotesk_500Medium_Italic.ttf.png)||
|![FamiljenGrotesk_600SemiBold_Italic](./FamiljenGrotesk_600SemiBold_Italic.ttf.png)|![FamiljenGrotesk_700Bold_Italic](./FamiljenGrotesk_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/familjen-grotesk` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Familjen Grotesk page on Google Fonts](https://fonts.google.com/specimen/Familjen+Grotesk) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Familjen Grotesk on Google Fonts](https://fonts.google.com/specimen/Familjen+Grotesk)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/familjen-grotesk)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/familjen-grotesk)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
