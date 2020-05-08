# @expo-google-fonts/proza-libre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/proza-libre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/proza-libre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/proza-libre)

This package lets you use the [**Proza Libre**](https://fonts.google.com/specimen/Proza+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Proza Libre

![Proza Libre](./font-family.png)

This font family contains [10 styles](#-gallery).

- `ProzaLibre_Regular400`
- `ProzaLibre_Regular400_Italic`
- `ProzaLibre_Medium500`
- `ProzaLibre_Medium500_Italic`
- `ProzaLibre_SemiBold600`
- `ProzaLibre_SemiBold600_Italic`
- `ProzaLibre_Bold700`
- `ProzaLibre_Bold700_Italic`
- `ProzaLibre_ExtraBold800`
- `ProzaLibre_ExtraBold800_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/proza-libre expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  ProzaLibre_Regular400,
  ProzaLibre_Regular400_Italic,
  ProzaLibre_Medium500,
  ProzaLibre_Medium500_Italic,
  ProzaLibre_SemiBold600,
  ProzaLibre_SemiBold600_Italic,
  ProzaLibre_Bold700,
  ProzaLibre_Bold700_Italic,
  ProzaLibre_ExtraBold800,
  ProzaLibre_ExtraBold800_Italic,
} from '@expo-google-fonts/proza-libre';

export default () => {
  let [fontsLoaded] = useFonts({
    ProzaLibre_Regular400,
    ProzaLibre_Regular400_Italic,
    ProzaLibre_Medium500,
    ProzaLibre_Medium500_Italic,
    ProzaLibre_SemiBold600,
    ProzaLibre_SemiBold600_Italic,
    ProzaLibre_Bold700,
    ProzaLibre_Bold700_Italic,
    ProzaLibre_ExtraBold800,
    ProzaLibre_ExtraBold800_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ProzaLibre_Regular400' }}>
          ProzaLibre_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ProzaLibre_Regular400_Italic' }}>
          ProzaLibre_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ProzaLibre_Medium500' }}>
          ProzaLibre_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ProzaLibre_Medium500_Italic' }}>
          ProzaLibre_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ProzaLibre_SemiBold600' }}>
          ProzaLibre_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ProzaLibre_SemiBold600_Italic' }}>
          ProzaLibre_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ProzaLibre_Bold700' }}>
          ProzaLibre_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ProzaLibre_Bold700_Italic' }}>
          ProzaLibre_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ProzaLibre_ExtraBold800' }}>
          ProzaLibre_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ProzaLibre_ExtraBold800_Italic' }}>
          ProzaLibre_ExtraBold800_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### ProzaLibre_Regular400
![ProzaLibre_Regular400](./9b6195e0fb14a5155dc5f1e836d174961876e69e0c471b7ab8357696acb1d404.ttf.png)

##### ProzaLibre_Regular400_Italic
![ProzaLibre_Regular400_Italic](./79a33a14fa8f5bd86b8bd985de9a92647b0d6b62085299ae05b0c4f2cbf98bc8.ttf.png)

##### ProzaLibre_Medium500
![ProzaLibre_Medium500](./ac113922a0dc8f8533dcac9f1f9ec44f777502e94608291bd50da0fa981083d6.ttf.png)

##### ProzaLibre_Medium500_Italic
![ProzaLibre_Medium500_Italic](./a6506ab9342408e2f16f5991f7f13117f9c080dfb34c268e4378f507d01fe3b8.ttf.png)

##### ProzaLibre_SemiBold600
![ProzaLibre_SemiBold600](./1e1b5cd4d00344b8bbbb015679e9bd7cc5e99a2fa3d6eb18b4f1303c90c3e68e.ttf.png)

##### ProzaLibre_SemiBold600_Italic
![ProzaLibre_SemiBold600_Italic](./522e6755ed4fd909ed6968fa89460d7eb69e6b90fb0124f5fec6dfadb7dd5dac.ttf.png)

##### ProzaLibre_Bold700
![ProzaLibre_Bold700](./14701643695bd3fb18b0e9f16049cd1caa35acee12446ecf10b0a179697f7748.ttf.png)

##### ProzaLibre_Bold700_Italic
![ProzaLibre_Bold700_Italic](./176582be0d8f918514d1f30bb1cfea4729cbd968974eced79e977378653c62c9.ttf.png)

##### ProzaLibre_ExtraBold800
![ProzaLibre_ExtraBold800](./6d37a997a436ffd489943e8d33d8917c4eac47e1c20959ae0cd68f6470e932bb.ttf.png)

##### ProzaLibre_ExtraBold800_Italic
![ProzaLibre_ExtraBold800_Italic](./e5a8cfe2f4e6f80f7a40d647e5ca78ffe1df63c22c413d962ce2f937a8ce34e2.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/proza-libre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Proza Libre page on Google Fonts](https://fonts.google.com/specimen/Proza+Libre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Proza Libre on Google Fonts](https://fonts.google.com/specimen/Proza+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/proza-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/proza-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
