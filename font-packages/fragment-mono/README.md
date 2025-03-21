# @expo-google-fonts/fragment-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/fragment-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/fragment-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/fragment-mono)

This package lets you use the [**Fragment Mono**](https://fonts.google.com/specimen/Fragment+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Fragment Mono

![Fragment Mono](./font-family.png)

This font family contains [2 styles](#-gallery).

- `FragmentMono_400Regular`
- `FragmentMono_400Regular_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/fragment-mono expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, FragmentMono_400Regular, FragmentMono_400Regular_Italic } from '@expo-google-fonts/fragment-mono';

export default () => {

  let [fontsLoaded] = useFonts({
    FragmentMono_400Regular, 
    FragmentMono_400Regular_Italic
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
          fontFamily: "FragmentMono_400Regular"
        }}>
          Fragment Mono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FragmentMono_400Regular_Italic"
        }}>
          Fragment Mono Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![FragmentMono_400Regular](./FragmentMono_400Regular.ttf.png)|![FragmentMono_400Regular_Italic](./FragmentMono_400Regular_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/fragment-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Fragment Mono page on Google Fonts](https://fonts.google.com/specimen/Fragment+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Fragment Mono on Google Fonts](https://fonts.google.com/specimen/Fragment+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fragment-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fragment-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
