# @expo-google-fonts/assistant

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/assistant)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/assistant)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/assistant)

This package lets you use the [**Assistant**](https://fonts.google.com/specimen/Assistant) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Assistant

![Assistant](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Assistant_200ExtraLight`
- `Assistant_300Light`
- `Assistant_400Regular`
- `Assistant_500Medium`
- `Assistant_600SemiBold`
- `Assistant_700Bold`
- `Assistant_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/assistant expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Assistant_200ExtraLight, Assistant_300Light, Assistant_400Regular, Assistant_500Medium, Assistant_600SemiBold, Assistant_700Bold, Assistant_800ExtraBold } from '@expo-google-fonts/assistant';

export default () => {

  let [fontsLoaded] = useFonts({
    Assistant_200ExtraLight, 
    Assistant_300Light, 
    Assistant_400Regular, 
    Assistant_500Medium, 
    Assistant_600SemiBold, 
    Assistant_700Bold, 
    Assistant_800ExtraBold
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
          fontFamily: "Assistant_200ExtraLight"
        }}>
          Assistant Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Assistant_300Light"
        }}>
          Assistant Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Assistant_400Regular"
        }}>
          Assistant Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Assistant_500Medium"
        }}>
          Assistant Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Assistant_600SemiBold"
        }}>
          Assistant Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Assistant_700Bold"
        }}>
          Assistant Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Assistant_800ExtraBold"
        }}>
          Assistant Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Assistant_200ExtraLight](./Assistant_200ExtraLight.ttf.png)|![Assistant_300Light](./Assistant_300Light.ttf.png)|![Assistant_400Regular](./Assistant_400Regular.ttf.png)||
|![Assistant_500Medium](./Assistant_500Medium.ttf.png)|![Assistant_600SemiBold](./Assistant_600SemiBold.ttf.png)|![Assistant_700Bold](./Assistant_700Bold.ttf.png)||
|![Assistant_800ExtraBold](./Assistant_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/assistant` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Assistant page on Google Fonts](https://fonts.google.com/specimen/Assistant) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Assistant on Google Fonts](https://fonts.google.com/specimen/Assistant)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/assistant)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/assistant)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
