# @expo-google-fonts/istok-web

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/istok-web)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/istok-web)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/istok-web)

This package lets you use the [**Istok Web**](https://fonts.google.com/specimen/Istok+Web) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Istok Web

![Istok Web](./font-family.png)

This font family contains [4 styles](#-gallery).

- `IstokWeb_Regular400`
- `IstokWeb_Regular400_Italic`
- `IstokWeb_Bold700`
- `IstokWeb_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/istok-web expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  IstokWeb_Regular400,
  IstokWeb_Regular400_Italic,
  IstokWeb_Bold700,
  IstokWeb_Bold700_Italic,
} from '@expo-google-fonts/istok-web';

export default () => {
  let [fontsLoaded] = useFonts({
    IstokWeb_Regular400,
    IstokWeb_Regular400_Italic,
    IstokWeb_Bold700,
    IstokWeb_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'IstokWeb_Regular400' }}>
          IstokWeb_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IstokWeb_Regular400_Italic' }}>
          IstokWeb_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IstokWeb_Bold700' }}>
          IstokWeb_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IstokWeb_Bold700_Italic' }}>
          IstokWeb_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### IstokWeb_Regular400
![IstokWeb_Regular400](./69f0e211d11c1acf74b2c9076af79b8c4437700758d0282acf48674ef128953a.ttf.png)

##### IstokWeb_Regular400_Italic
![IstokWeb_Regular400_Italic](./05eee5ff9d276f82970504c5e15e6097ae58262e043f86c6620a18611cdcf94e.ttf.png)

##### IstokWeb_Bold700
![IstokWeb_Bold700](./000e33f7e7a72f87087ee83ef75edf7993294fc065f5f8e52ae6ca1c90c7517f.ttf.png)

##### IstokWeb_Bold700_Italic
![IstokWeb_Bold700_Italic](./c19d7189ef0fb5066351d3851d3a386722d97b98c62fc344ffce8f4f1889512a.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/istok-web` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Istok Web page on Google Fonts](https://fonts.google.com/specimen/Istok+Web) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Istok Web on Google Fonts](https://fonts.google.com/specimen/Istok+Web)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/istok-web)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/istok-web)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
