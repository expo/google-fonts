# @expo-google-fonts/murecho

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/murecho)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/murecho)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/murecho)

This package lets you use the [**Murecho**](https://fonts.google.com/specimen/Murecho) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Murecho

![Murecho](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Murecho_100Thin`
- `Murecho_200ExtraLight`
- `Murecho_300Light`
- `Murecho_400Regular`
- `Murecho_500Medium`
- `Murecho_600SemiBold`
- `Murecho_700Bold`
- `Murecho_800ExtraBold`
- `Murecho_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/murecho expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Murecho_100Thin, Murecho_200ExtraLight, Murecho_300Light, Murecho_400Regular, Murecho_500Medium, Murecho_600SemiBold, Murecho_700Bold, Murecho_800ExtraBold, Murecho_900Black } from '@expo-google-fonts/murecho';

export default () => {

  let [fontsLoaded] = useFonts({
    Murecho_100Thin, 
    Murecho_200ExtraLight, 
    Murecho_300Light, 
    Murecho_400Regular, 
    Murecho_500Medium, 
    Murecho_600SemiBold, 
    Murecho_700Bold, 
    Murecho_800ExtraBold, 
    Murecho_900Black
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
          fontFamily: "Murecho_100Thin"
        }}>
          Murecho Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Murecho_200ExtraLight"
        }}>
          Murecho Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Murecho_300Light"
        }}>
          Murecho Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Murecho_400Regular"
        }}>
          Murecho Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Murecho_500Medium"
        }}>
          Murecho Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Murecho_600SemiBold"
        }}>
          Murecho Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Murecho_700Bold"
        }}>
          Murecho Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Murecho_800ExtraBold"
        }}>
          Murecho Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Murecho_900Black"
        }}>
          Murecho Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Murecho_100Thin](./Murecho_100Thin.ttf.png)|![Murecho_200ExtraLight](./Murecho_200ExtraLight.ttf.png)|![Murecho_300Light](./Murecho_300Light.ttf.png)||
|![Murecho_400Regular](./Murecho_400Regular.ttf.png)|![Murecho_500Medium](./Murecho_500Medium.ttf.png)|![Murecho_600SemiBold](./Murecho_600SemiBold.ttf.png)||
|![Murecho_700Bold](./Murecho_700Bold.ttf.png)|![Murecho_800ExtraBold](./Murecho_800ExtraBold.ttf.png)|![Murecho_900Black](./Murecho_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/murecho` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Murecho page on Google Fonts](https://fonts.google.com/specimen/Murecho) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Murecho on Google Fonts](https://fonts.google.com/specimen/Murecho)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/murecho)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/murecho)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
