# @expo-google-fonts/m-plus-code-latin

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/m-plus-code-latin)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/m-plus-code-latin)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/m-plus-code-latin)

This package lets you use the [**M PLUS Code Latin**](https://fonts.google.com/specimen/M+PLUS+Code+Latin) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## M PLUS Code Latin

![M PLUS Code Latin](./font-family.png)

This font family contains [7 styles](#-gallery).

- `MPLUSCodeLatin_100Thin`
- `MPLUSCodeLatin_200ExtraLight`
- `MPLUSCodeLatin_300Light`
- `MPLUSCodeLatin_400Regular`
- `MPLUSCodeLatin_500Medium`
- `MPLUSCodeLatin_600SemiBold`
- `MPLUSCodeLatin_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/m-plus-code-latin expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, MPLUSCodeLatin_100Thin, MPLUSCodeLatin_200ExtraLight, MPLUSCodeLatin_300Light, MPLUSCodeLatin_400Regular, MPLUSCodeLatin_500Medium, MPLUSCodeLatin_600SemiBold, MPLUSCodeLatin_700Bold } from '@expo-google-fonts/m-plus-code-latin';

export default () => {

  let [fontsLoaded] = useFonts({
    MPLUSCodeLatin_100Thin, 
    MPLUSCodeLatin_200ExtraLight, 
    MPLUSCodeLatin_300Light, 
    MPLUSCodeLatin_400Regular, 
    MPLUSCodeLatin_500Medium, 
    MPLUSCodeLatin_600SemiBold, 
    MPLUSCodeLatin_700Bold
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
          fontFamily: "MPLUSCodeLatin_100Thin"
        }}>
          M PLUS Code Latin Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUSCodeLatin_200ExtraLight"
        }}>
          M PLUS Code Latin Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUSCodeLatin_300Light"
        }}>
          M PLUS Code Latin Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUSCodeLatin_400Regular"
        }}>
          M PLUS Code Latin Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUSCodeLatin_500Medium"
        }}>
          M PLUS Code Latin Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUSCodeLatin_600SemiBold"
        }}>
          M PLUS Code Latin Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MPLUSCodeLatin_700Bold"
        }}>
          M PLUS Code Latin Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MPLUSCodeLatin_100Thin](./MPLUSCodeLatin_100Thin.ttf.png)|![MPLUSCodeLatin_200ExtraLight](./MPLUSCodeLatin_200ExtraLight.ttf.png)|![MPLUSCodeLatin_300Light](./MPLUSCodeLatin_300Light.ttf.png)||
|![MPLUSCodeLatin_400Regular](./MPLUSCodeLatin_400Regular.ttf.png)|![MPLUSCodeLatin_500Medium](./MPLUSCodeLatin_500Medium.ttf.png)|![MPLUSCodeLatin_600SemiBold](./MPLUSCodeLatin_600SemiBold.ttf.png)||
|![MPLUSCodeLatin_700Bold](./MPLUSCodeLatin_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/m-plus-code-latin` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [M PLUS Code Latin page on Google Fonts](https://fonts.google.com/specimen/M+PLUS+Code+Latin) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [M PLUS Code Latin on Google Fonts](https://fonts.google.com/specimen/M+PLUS+Code+Latin)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/m-plus-code-latin)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/m-plus-code-latin)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
