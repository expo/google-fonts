# @expo-google-fonts/el-messiri

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/el-messiri)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/el-messiri)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/el-messiri)

This package lets you use the [**El Messiri**](https://fonts.google.com/specimen/El+Messiri) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## El Messiri

![El Messiri](./font-family.png)

This font family contains [4 styles](#-gallery).

- `ElMessiri_Regular400`
- `ElMessiri_Medium500`
- `ElMessiri_SemiBold600`
- `ElMessiri_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/el-messiri expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  ElMessiri_Regular400,
  ElMessiri_Medium500,
  ElMessiri_SemiBold600,
  ElMessiri_Bold700,
} from '@expo-google-fonts/el-messiri';

export default () => {
  let [fontsLoaded] = useFonts({
    ElMessiri_Regular400,
    ElMessiri_Medium500,
    ElMessiri_SemiBold600,
    ElMessiri_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ElMessiri_Regular400' }}>
          ElMessiri_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ElMessiri_Medium500' }}>
          ElMessiri_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ElMessiri_SemiBold600' }}>
          ElMessiri_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ElMessiri_Bold700' }}>
          ElMessiri_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### ElMessiri_Regular400
![ElMessiri_Regular400](./05a194beec1a2e2d57ac0ee1d517ad0b59142391481adbd18fee77752639ddda.ttf.png)

##### ElMessiri_Medium500
![ElMessiri_Medium500](./9da80f76bf936a3cccb71afc2d2a95fcb8eb5be79a494c0b44e5e75f61031a05.ttf.png)

##### ElMessiri_SemiBold600
![ElMessiri_SemiBold600](./dc6415daf94f76a9dbea542ec17e7df4f5b01a18796c44448bd0c817cd2d433e.ttf.png)

##### ElMessiri_Bold700
![ElMessiri_Bold700](./a25eabeb2e7f6f2cbe92e832bf052cb0bd0930c95b6457ee6cb8469552b97c63.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/el-messiri` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [El Messiri page on Google Fonts](https://fonts.google.com/specimen/El+Messiri) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [El Messiri on Google Fonts](https://fonts.google.com/specimen/El+Messiri)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/el-messiri)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/el-messiri)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
