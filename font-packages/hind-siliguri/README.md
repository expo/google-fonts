# @expo-google-fonts/hind-siliguri

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/hind-siliguri)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/hind-siliguri)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/hind-siliguri)

This package lets you use the [**Hind Siliguri**](https://fonts.google.com/specimen/Hind+Siliguri) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Hind Siliguri

![Hind Siliguri](./font-family.png)

This font family contains [5 styles](#gallery).

- `HindSiliguri_Light300`
- `HindSiliguri_Regular400`
- `HindSiliguri_Medium500`
- `HindSiliguri_SemiBold600`
- `HindSiliguri_Bold700`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/hind-siliguri expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  HindSiliguri_Light300,
  HindSiliguri_Regular400,
  HindSiliguri_Medium500,
  HindSiliguri_SemiBold600,
  HindSiliguri_Bold700,
} from '@expo-google-fonts/hind-siliguri';

export default () => {
  let [fontsLoaded] = useFonts({
    HindSiliguri_Light300,
    HindSiliguri_Regular400,
    HindSiliguri_Medium500,
    HindSiliguri_SemiBold600,
    HindSiliguri_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindSiliguri_Light300' }}>
          HindSiliguri_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindSiliguri_Regular400' }}>
          HindSiliguri_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindSiliguri_Medium500' }}>
          HindSiliguri_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindSiliguri_SemiBold600' }}>
          HindSiliguri_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindSiliguri_Bold700' }}>
          HindSiliguri_Bold700
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### HindSiliguri_Light300
![HindSiliguri_Light300](./ac4fb0e6616374786c8c79c069fb7ec555580917d9534053bbc5cfca7cc35a6b.ttf.png)

##### HindSiliguri_Regular400
![HindSiliguri_Regular400](./4f3c785b698527e53bc193bce4c13e1eedc1eadefe7c65720c5eb0ddafcc78c4.ttf.png)

##### HindSiliguri_Medium500
![HindSiliguri_Medium500](./f112da1e6bbd4b1fbf998db772359e0812e0bf2acc7c60e21a0e99c24ec1e48f.ttf.png)

##### HindSiliguri_SemiBold600
![HindSiliguri_SemiBold600](./c80fdec935e6023f68b5a13e7bde8edff218450fe58f3ca7c3fe6e454b4cdd54.ttf.png)

##### HindSiliguri_Bold700
![HindSiliguri_Bold700](./3b363f06eb2b3264843731ba51fa467aba8cf06454281e9ceab83a3bc8c802ce.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/hind-siliguri` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Hind Siliguri page on Google Fonts](https://fonts.google.com/specimen/Hind+Siliguri) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Hind Siliguri on Google Fonts](https://fonts.google.com/specimen/Hind+Siliguri)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/hind-siliguri)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/hind-siliguri)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
