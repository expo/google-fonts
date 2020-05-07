# @expo-google-fonts/ubuntu

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ubuntu)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ubuntu)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ubuntu)

This package lets you use the [**Ubuntu**](https://fonts.google.com/specimen/Ubuntu) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Ubuntu

![Ubuntu](./font-family.png)

This font family contains [8 styles](#gallery).

- `Ubuntu_Light300`
- `Ubuntu_Light300_Italic`
- `Ubuntu_Regular400`
- `Ubuntu_Regular400_Italic`
- `Ubuntu_Medium500`
- `Ubuntu_Medium500_Italic`
- `Ubuntu_Bold700`
- `Ubuntu_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ubuntu expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Ubuntu_Light300,
  Ubuntu_Light300_Italic,
  Ubuntu_Regular400,
  Ubuntu_Regular400_Italic,
  Ubuntu_Medium500,
  Ubuntu_Medium500_Italic,
  Ubuntu_Bold700,
  Ubuntu_Bold700_Italic,
} from '@expo-google-fonts/ubuntu';

export default () => {
  let [fontsLoaded] = useFonts({
    Ubuntu_Light300,
    Ubuntu_Light300_Italic,
    Ubuntu_Regular400,
    Ubuntu_Regular400_Italic,
    Ubuntu_Medium500,
    Ubuntu_Medium500_Italic,
    Ubuntu_Bold700,
    Ubuntu_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ubuntu_Light300' }}>
          Ubuntu_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ubuntu_Light300_Italic' }}>
          Ubuntu_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ubuntu_Regular400' }}>
          Ubuntu_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ubuntu_Regular400_Italic' }}>
          Ubuntu_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ubuntu_Medium500' }}>
          Ubuntu_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ubuntu_Medium500_Italic' }}>
          Ubuntu_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ubuntu_Bold700' }}>
          Ubuntu_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ubuntu_Bold700_Italic' }}>
          Ubuntu_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Ubuntu_Light300
![Ubuntu_Light300](./af68436b9e6b56275cecbabf026fbfa760095b5fc054f802c17ae15dcb4cbf18.ttf.png)

##### Ubuntu_Light300_Italic
![Ubuntu_Light300_Italic](./f1fc680395fdc7b33c4b64324bb4e34779fb8acfbb6d18b837932e0b8d1a69ee.ttf.png)

##### Ubuntu_Regular400
![Ubuntu_Regular400](./69538c1ee708ba76c975ea534b5ea8bd65054114da93581ed279bdedde98986c.ttf.png)

##### Ubuntu_Regular400_Italic
![Ubuntu_Regular400_Italic](./191ec3d947057bfaa61cf55e8133a8dfa252400009e628a2141f7aafd3047ca9.ttf.png)

##### Ubuntu_Medium500
![Ubuntu_Medium500](./c1964f6ef40fc1fdf7599700b74b4446f181c52a6547cac09a325565ad55e639.ttf.png)

##### Ubuntu_Medium500_Italic
![Ubuntu_Medium500_Italic](./02b8cbdca4e9916efc303be2f40666b27aa1928896d3f783fec01f97e23f7f64.ttf.png)

##### Ubuntu_Bold700
![Ubuntu_Bold700](./d897d5edfc8d1b9f611f1936d05ea7f52b66071ab5f3fa3dbc357cee0e02f204.ttf.png)

##### Ubuntu_Bold700_Italic
![Ubuntu_Bold700_Italic](./5c1ea5c0feab209d1204650845041e13ed77ef6451d9f081711e7d698ba20b52.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/ubuntu` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ubuntu page on Google Fonts](https://fonts.google.com/specimen/Ubuntu) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ubuntu on Google Fonts](https://fonts.google.com/specimen/Ubuntu)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ubuntu)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ubuntu)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
