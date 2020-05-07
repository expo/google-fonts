# @expo-google-fonts/barlow-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/barlow-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/barlow-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/barlow-condensed)

This package lets you use the [**Barlow Condensed**](https://fonts.google.com/specimen/Barlow+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Barlow Condensed

![Barlow Condensed](./font-family.png)

This font family contains [18 styles](#gallery).

- `BarlowCondensed_Thin100`
- `BarlowCondensed_Thin100_Italic`
- `BarlowCondensed_ExtraLight200`
- `BarlowCondensed_ExtraLight200_Italic`
- `BarlowCondensed_Light300`
- `BarlowCondensed_Light300_Italic`
- `BarlowCondensed_Regular400`
- `BarlowCondensed_Regular400_Italic`
- `BarlowCondensed_Medium500`
- `BarlowCondensed_Medium500_Italic`
- `BarlowCondensed_SemiBold600`
- `BarlowCondensed_SemiBold600_Italic`
- `BarlowCondensed_Bold700`
- `BarlowCondensed_Bold700_Italic`
- `BarlowCondensed_ExtraBold800`
- `BarlowCondensed_ExtraBold800_Italic`
- `BarlowCondensed_Black900`
- `BarlowCondensed_Black900_Italic`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/barlow-condensed expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  BarlowCondensed_Thin100,
  BarlowCondensed_Thin100_Italic,
  BarlowCondensed_ExtraLight200,
  BarlowCondensed_ExtraLight200_Italic,
  BarlowCondensed_Light300,
  BarlowCondensed_Light300_Italic,
  BarlowCondensed_Regular400,
  BarlowCondensed_Regular400_Italic,
  BarlowCondensed_Medium500,
  BarlowCondensed_Medium500_Italic,
  BarlowCondensed_SemiBold600,
  BarlowCondensed_SemiBold600_Italic,
  BarlowCondensed_Bold700,
  BarlowCondensed_Bold700_Italic,
  BarlowCondensed_ExtraBold800,
  BarlowCondensed_ExtraBold800_Italic,
  BarlowCondensed_Black900,
  BarlowCondensed_Black900_Italic,
} from '@expo-google-fonts/barlow-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    BarlowCondensed_Thin100,
    BarlowCondensed_Thin100_Italic,
    BarlowCondensed_ExtraLight200,
    BarlowCondensed_ExtraLight200_Italic,
    BarlowCondensed_Light300,
    BarlowCondensed_Light300_Italic,
    BarlowCondensed_Regular400,
    BarlowCondensed_Regular400_Italic,
    BarlowCondensed_Medium500,
    BarlowCondensed_Medium500_Italic,
    BarlowCondensed_SemiBold600,
    BarlowCondensed_SemiBold600_Italic,
    BarlowCondensed_Bold700,
    BarlowCondensed_Bold700_Italic,
    BarlowCondensed_ExtraBold800,
    BarlowCondensed_ExtraBold800_Italic,
    BarlowCondensed_Black900,
    BarlowCondensed_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_Thin100' }}>
          BarlowCondensed_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_Thin100_Italic' }}>
          BarlowCondensed_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_ExtraLight200' }}>
          BarlowCondensed_ExtraLight200
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_ExtraLight200_Italic' }}>
          BarlowCondensed_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_Light300' }}>
          BarlowCondensed_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_Light300_Italic' }}>
          BarlowCondensed_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_Regular400' }}>
          BarlowCondensed_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_Regular400_Italic' }}>
          BarlowCondensed_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_Medium500' }}>
          BarlowCondensed_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_Medium500_Italic' }}>
          BarlowCondensed_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_SemiBold600' }}>
          BarlowCondensed_SemiBold600
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_SemiBold600_Italic' }}>
          BarlowCondensed_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_Bold700' }}>
          BarlowCondensed_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_Bold700_Italic' }}>
          BarlowCondensed_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_ExtraBold800' }}>
          BarlowCondensed_ExtraBold800
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_ExtraBold800_Italic' }}>
          BarlowCondensed_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_Black900' }}>
          BarlowCondensed_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowCondensed_Black900_Italic' }}>
          BarlowCondensed_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### BarlowCondensed_Thin100
![BarlowCondensed_Thin100](./c6f3686935062113e7b09390ffc3c690c608aa440f3e30db068b64420664ec5d.ttf.png)

##### BarlowCondensed_Thin100_Italic
![BarlowCondensed_Thin100_Italic](./ea5455d6f97ca5ea27d76f30e87b842dc23d6a9fdd9566ccffb6415a3a56bcb0.ttf.png)

##### BarlowCondensed_ExtraLight200
![BarlowCondensed_ExtraLight200](./410b2efcf0b449d214182287f404b669840f4cc0a3c2f04940cee2d94b6eed4e.ttf.png)

##### BarlowCondensed_ExtraLight200_Italic
![BarlowCondensed_ExtraLight200_Italic](./bba549e676526ff4957a986006a9290f70d407fc1fd00d34135a1291ce6138d4.ttf.png)

##### BarlowCondensed_Light300
![BarlowCondensed_Light300](./9bcf33e336ef2238ede09a908f8b86c6cca1586df6b1fbe0d59e462e3149b8ba.ttf.png)

##### BarlowCondensed_Light300_Italic
![BarlowCondensed_Light300_Italic](./49c62182eb883aeeab13fa2dbfcde072f2aac31e8bf77a232696bebc3b14e856.ttf.png)

##### BarlowCondensed_Regular400
![BarlowCondensed_Regular400](./4e5dff25ad8b2553decdba77625dc57cdcba97555b53612a9c9bfa40f43f953c.ttf.png)

##### BarlowCondensed_Regular400_Italic
![BarlowCondensed_Regular400_Italic](./65d8e8aa8d380e24c33fe4d2da62c7f9ec3de8e3429671ef5ff32782d21d649a.ttf.png)

##### BarlowCondensed_Medium500
![BarlowCondensed_Medium500](./8014ab571e1d04db59a24744420219343b4d1806c983ac73e808a9e96c638306.ttf.png)

##### BarlowCondensed_Medium500_Italic
![BarlowCondensed_Medium500_Italic](./dc26bbeb004e7e2084d0662973c4742fa65fd15b7eda3cb74826a27d686f44b0.ttf.png)

##### BarlowCondensed_SemiBold600
![BarlowCondensed_SemiBold600](./36127289f54d9e42dd6bba46b0f52ce7e1839e79ce1b4d8fc5b22a54ee7c30f3.ttf.png)

##### BarlowCondensed_SemiBold600_Italic
![BarlowCondensed_SemiBold600_Italic](./70e3edc6f039c1a69acb610d298d522d5b46330458810ec9647e08c87b476dbb.ttf.png)

##### BarlowCondensed_Bold700
![BarlowCondensed_Bold700](./ec8d231a02a1e88872bef49e1099c712e93f3a723722a3d3ddc0fe2bfbe40962.ttf.png)

##### BarlowCondensed_Bold700_Italic
![BarlowCondensed_Bold700_Italic](./edbf575a42819a83bc5539e63b01efa4299d750d2f679579ef7673c972e3211e.ttf.png)

##### BarlowCondensed_ExtraBold800
![BarlowCondensed_ExtraBold800](./e17df55a2cb70a97d869d33d55b38a29d60d31ae75c0bcaf61aca5f1215702cd.ttf.png)

##### BarlowCondensed_ExtraBold800_Italic
![BarlowCondensed_ExtraBold800_Italic](./34b5cbd8a9497c32949bcad7e8bd3f63019f7d28e693401b3ac39a69b5cd778d.ttf.png)

##### BarlowCondensed_Black900
![BarlowCondensed_Black900](./5db2f838d3b4d86fe437bcaef0fb569cf99cfda6377a230687348897a816eeb5.ttf.png)

##### BarlowCondensed_Black900_Italic
![BarlowCondensed_Black900_Italic](./de353be0369b799b090de4e2e272ebe13c6fd496973ff92b9e391656334ad1f2.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/barlow-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Barlow Condensed page on Google Fonts](https://fonts.google.com/specimen/Barlow+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Barlow Condensed on Google Fonts](https://fonts.google.com/specimen/Barlow+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/barlow-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/barlow-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
