# @expo-google-fonts/metrophobic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/metrophobic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/metrophobic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/metrophobic)

This package lets you use the [**Metrophobic**](https://fonts.google.com/specimen/Metrophobic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Metrophobic

![Metrophobic](./font-family.png)

This font family contains [1 style](#gallery).

- `Metrophobic_Regular400`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/metrophobic expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Metrophobic_Regular400 } from '@expo-google-fonts/metrophobic';

export default () => {
  let [fontsLoaded] = useFonts({
    Metrophobic_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Metrophobic_Regular400' }}>
          Metrophobic_Regular400
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Metrophobic_Regular400
![Metrophobic_Regular400](./fba0d5a8f2ffaa5c02bcfc5580a50f6b1dac80580d8d3a77073e6a74aa189b5c.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/metrophobic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Metrophobic page on Google Fonts](https://fonts.google.com/specimen/Metrophobic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Metrophobic on Google Fonts](https://fonts.google.com/specimen/Metrophobic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/metrophobic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/metrophobic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
