# @expo-google-fonts/mountains-of-christmas

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mountains-of-christmas)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mountains-of-christmas)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mountains-of-christmas)

This package lets you use the [**Mountains of Christmas**](https://fonts.google.com/specimen/Mountains+of+Christmas) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Mountains of Christmas

![Mountains of Christmas](./font-family.png)

This font family contains [2 styles](#-gallery).

- `MountainsofChristmas_Regular400`
- `MountainsofChristmas_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/mountains-of-christmas expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  MountainsofChristmas_Regular400,
  MountainsofChristmas_Bold700,
} from '@expo-google-fonts/mountains-of-christmas';

export default () => {
  let [fontsLoaded] = useFonts({
    MountainsofChristmas_Regular400,
    MountainsofChristmas_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MountainsofChristmas_Regular400' }}>
          MountainsofChristmas_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MountainsofChristmas_Bold700' }}>
          MountainsofChristmas_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### MountainsofChristmas_Regular400
![MountainsofChristmas_Regular400](./c2200cef227dc27280b133ec5d366a7a1c5e8956523b6a69490c6d3be875831f.ttf.png)

##### MountainsofChristmas_Bold700
![MountainsofChristmas_Bold700](./52a7b2b21269dc6d67187a7882fa4bbc19f093792adc852c62497c6495d129e6.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/mountains-of-christmas` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mountains of Christmas page on Google Fonts](https://fonts.google.com/specimen/Mountains+of+Christmas) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mountains of Christmas on Google Fonts](https://fonts.google.com/specimen/Mountains+of+Christmas)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mountains-of-christmas)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mountains-of-christmas)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
