# @expo-google-fonts/manuale

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/manuale)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/manuale)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/manuale)

This package lets you use the [**Manuale**](https://fonts.google.com/specimen/Manuale) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Manuale

![Manuale](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Manuale_300Light`
- `Manuale_400Regular`
- `Manuale_500Medium`
- `Manuale_600SemiBold`
- `Manuale_700Bold`
- `Manuale_800ExtraBold`
- `Manuale_300Light_Italic`
- `Manuale_400Regular_Italic`
- `Manuale_500Medium_Italic`
- `Manuale_600SemiBold_Italic`
- `Manuale_700Bold_Italic`
- `Manuale_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/manuale expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Manuale_300Light, Manuale_400Regular, Manuale_500Medium, Manuale_600SemiBold, Manuale_700Bold, Manuale_800ExtraBold, Manuale_300Light_Italic, Manuale_400Regular_Italic, Manuale_500Medium_Italic, Manuale_600SemiBold_Italic, Manuale_700Bold_Italic, Manuale_800ExtraBold_Italic } from '@expo-google-fonts/manuale';

export default () => {

  let [fontsLoaded] = useFonts({
    Manuale_300Light, 
    Manuale_400Regular, 
    Manuale_500Medium, 
    Manuale_600SemiBold, 
    Manuale_700Bold, 
    Manuale_800ExtraBold, 
    Manuale_300Light_Italic, 
    Manuale_400Regular_Italic, 
    Manuale_500Medium_Italic, 
    Manuale_600SemiBold_Italic, 
    Manuale_700Bold_Italic, 
    Manuale_800ExtraBold_Italic
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
          fontFamily: "Manuale_300Light"
        }}>
          Manuale Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Manuale_400Regular"
        }}>
          Manuale Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Manuale_500Medium"
        }}>
          Manuale Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Manuale_600SemiBold"
        }}>
          Manuale Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Manuale_700Bold"
        }}>
          Manuale Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Manuale_800ExtraBold"
        }}>
          Manuale Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Manuale_300Light_Italic"
        }}>
          Manuale Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Manuale_400Regular_Italic"
        }}>
          Manuale Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Manuale_500Medium_Italic"
        }}>
          Manuale Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Manuale_600SemiBold_Italic"
        }}>
          Manuale Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Manuale_700Bold_Italic"
        }}>
          Manuale Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Manuale_800ExtraBold_Italic"
        }}>
          Manuale Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Manuale_300Light](./Manuale_300Light.ttf.png)|![Manuale_400Regular](./Manuale_400Regular.ttf.png)|![Manuale_500Medium](./Manuale_500Medium.ttf.png)||
|![Manuale_600SemiBold](./Manuale_600SemiBold.ttf.png)|![Manuale_700Bold](./Manuale_700Bold.ttf.png)|![Manuale_800ExtraBold](./Manuale_800ExtraBold.ttf.png)||
|![Manuale_300Light_Italic](./Manuale_300Light_Italic.ttf.png)|![Manuale_400Regular_Italic](./Manuale_400Regular_Italic.ttf.png)|![Manuale_500Medium_Italic](./Manuale_500Medium_Italic.ttf.png)||
|![Manuale_600SemiBold_Italic](./Manuale_600SemiBold_Italic.ttf.png)|![Manuale_700Bold_Italic](./Manuale_700Bold_Italic.ttf.png)|![Manuale_800ExtraBold_Italic](./Manuale_800ExtraBold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/manuale` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Manuale page on Google Fonts](https://fonts.google.com/specimen/Manuale) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Manuale on Google Fonts](https://fonts.google.com/specimen/Manuale)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/manuale)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/manuale)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
