# @expo-google-fonts/bevan

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bevan)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bevan)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bevan)

This package lets you use the [**Bevan**](https://fonts.google.com/specimen/Bevan) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bevan

![Bevan](./font-family.png)

This font family contains [2 styles](#-gallery).

- `Bevan_400Regular`
- `Bevan_400Regular_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bevan expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Bevan_400Regular, Bevan_400Regular_Italic } from '@expo-google-fonts/bevan';

export default () => {

  let [fontsLoaded] = useFonts({
    Bevan_400Regular, 
    Bevan_400Regular_Italic
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
          fontFamily: "Bevan_400Regular"
        }}>
          Bevan Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bevan_400Regular_Italic"
        }}>
          Bevan Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Bevan_400Regular](./Bevan_400Regular.ttf.png)|![Bevan_400Regular_Italic](./Bevan_400Regular_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bevan` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bevan page on Google Fonts](https://fonts.google.com/specimen/Bevan) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bevan on Google Fonts](https://fonts.google.com/specimen/Bevan)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bevan)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bevan)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
