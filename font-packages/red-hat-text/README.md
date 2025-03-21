# @expo-google-fonts/red-hat-text

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/red-hat-text)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/red-hat-text)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/red-hat-text)

This package lets you use the [**Red Hat Text**](https://fonts.google.com/specimen/Red+Hat+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Red Hat Text

![Red Hat Text](./font-family.png)

This font family contains [10 styles](#-gallery).

- `RedHatText_300Light`
- `RedHatText_400Regular`
- `RedHatText_500Medium`
- `RedHatText_600SemiBold`
- `RedHatText_700Bold`
- `RedHatText_300Light_Italic`
- `RedHatText_400Regular_Italic`
- `RedHatText_500Medium_Italic`
- `RedHatText_600SemiBold_Italic`
- `RedHatText_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/red-hat-text expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, RedHatText_300Light, RedHatText_400Regular, RedHatText_500Medium, RedHatText_600SemiBold, RedHatText_700Bold, RedHatText_300Light_Italic, RedHatText_400Regular_Italic, RedHatText_500Medium_Italic, RedHatText_600SemiBold_Italic, RedHatText_700Bold_Italic } from '@expo-google-fonts/red-hat-text';

export default () => {

  let [fontsLoaded] = useFonts({
    RedHatText_300Light, 
    RedHatText_400Regular, 
    RedHatText_500Medium, 
    RedHatText_600SemiBold, 
    RedHatText_700Bold, 
    RedHatText_300Light_Italic, 
    RedHatText_400Regular_Italic, 
    RedHatText_500Medium_Italic, 
    RedHatText_600SemiBold_Italic, 
    RedHatText_700Bold_Italic
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
          fontFamily: "RedHatText_300Light"
        }}>
          Red Hat Text Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatText_400Regular"
        }}>
          Red Hat Text Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatText_500Medium"
        }}>
          Red Hat Text Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatText_600SemiBold"
        }}>
          Red Hat Text Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatText_700Bold"
        }}>
          Red Hat Text Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatText_300Light_Italic"
        }}>
          Red Hat Text Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatText_400Regular_Italic"
        }}>
          Red Hat Text Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatText_500Medium_Italic"
        }}>
          Red Hat Text Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatText_600SemiBold_Italic"
        }}>
          Red Hat Text Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatText_700Bold_Italic"
        }}>
          Red Hat Text Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![RedHatText_300Light](./RedHatText_300Light.ttf.png)|![RedHatText_400Regular](./RedHatText_400Regular.ttf.png)|![RedHatText_500Medium](./RedHatText_500Medium.ttf.png)||
|![RedHatText_600SemiBold](./RedHatText_600SemiBold.ttf.png)|![RedHatText_700Bold](./RedHatText_700Bold.ttf.png)|![RedHatText_300Light_Italic](./RedHatText_300Light_Italic.ttf.png)||
|![RedHatText_400Regular_Italic](./RedHatText_400Regular_Italic.ttf.png)|![RedHatText_500Medium_Italic](./RedHatText_500Medium_Italic.ttf.png)|![RedHatText_600SemiBold_Italic](./RedHatText_600SemiBold_Italic.ttf.png)||
|![RedHatText_700Bold_Italic](./RedHatText_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/red-hat-text` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Red Hat Text page on Google Fonts](https://fonts.google.com/specimen/Red+Hat+Text) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Red Hat Text on Google Fonts](https://fonts.google.com/specimen/Red+Hat+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/red-hat-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/red-hat-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
