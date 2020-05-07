# @expo-google-fonts/m-plus-1p

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/m-plus-1p)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/m-plus-1p)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/m-plus-1p)

This package lets you use the [**M PLUS 1p**](https://fonts.google.com/specimen/M+PLUS+1p) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## M PLUS 1p

![M PLUS 1p](./font-family.png)

This font family contains [7 styles](#gallery).

- `MPLUS1p_Thin100`
- `MPLUS1p_Light300`
- `MPLUS1p_Regular400`
- `MPLUS1p_Medium500`
- `MPLUS1p_Bold700`
- `MPLUS1p_ExtraBold800`
- `MPLUS1p_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/m-plus-1p expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  MPLUS1p_Thin100,
  MPLUS1p_Light300,
  MPLUS1p_Regular400,
  MPLUS1p_Medium500,
  MPLUS1p_Bold700,
  MPLUS1p_ExtraBold800,
  MPLUS1p_Black900,
} from '@expo-google-fonts/m-plus-1p';

export default () => {
  let [fontsLoaded] = useFonts({
    MPLUS1p_Thin100,
    MPLUS1p_Light300,
    MPLUS1p_Regular400,
    MPLUS1p_Medium500,
    MPLUS1p_Bold700,
    MPLUS1p_ExtraBold800,
    MPLUS1p_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUS1p_Thin100' }}>
          MPLUS1p_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUS1p_Light300' }}>
          MPLUS1p_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUS1p_Regular400' }}>
          MPLUS1p_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUS1p_Medium500' }}>
          MPLUS1p_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUS1p_Bold700' }}>
          MPLUS1p_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUS1p_ExtraBold800' }}>
          MPLUS1p_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MPLUS1p_Black900' }}>
          MPLUS1p_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### MPLUS1p_Thin100
![MPLUS1p_Thin100](./0654233f2cc095bd1af48724031070c0b16e3dd46fc5c29bd87070d485b7a366.ttf.png)

##### MPLUS1p_Light300
![MPLUS1p_Light300](./328d60a811d0715a23a96805dda2004f69c4b0a888dc1711c77a2d589650c97f.ttf.png)

##### MPLUS1p_Regular400
![MPLUS1p_Regular400](./6d33f3ea856c224db5e2d573ab252d85cc66e3d2ec9981d4dded4cb5df17a345.ttf.png)

##### MPLUS1p_Medium500
![MPLUS1p_Medium500](./45129fd4450f7465b6ad68ee3a7f2579df75712cdedec1690b2f2b8e2a008400.ttf.png)

##### MPLUS1p_Bold700
![MPLUS1p_Bold700](./42106dfc33cc933616115e3c69191bc75d0675df68106571eedbe23c14b5ad1f.ttf.png)

##### MPLUS1p_ExtraBold800
![MPLUS1p_ExtraBold800](./27bd65580cfc4564b1dc3ee85e12bdc336861dc586fd838a943bdef4a3bd8730.ttf.png)

##### MPLUS1p_Black900
![MPLUS1p_Black900](./21baffc573a6103dcd6c23b9ad751e3686f142c921212717fa3b4356e01a38bc.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/m-plus-1p` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [M PLUS 1p page on Google Fonts](https://fonts.google.com/specimen/M+PLUS+1p) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [M PLUS 1p on Google Fonts](https://fonts.google.com/specimen/M+PLUS+1p)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/m-plus-1p)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/m-plus-1p)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
