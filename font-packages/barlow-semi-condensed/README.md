# @expo-google-fonts/barlow-semi-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/barlow-semi-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/barlow-semi-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/barlow-semi-condensed)

This package lets you use the [**Barlow Semi Condensed**](https://fonts.google.com/specimen/Barlow+Semi+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Barlow Semi Condensed

![Barlow Semi Condensed](./font-family.png)

This font family contains [18 styles](#-gallery).

- `BarlowSemiCondensed_Thin100`
- `BarlowSemiCondensed_Thin100_Italic`
- `BarlowSemiCondensed_ExtraLight200`
- `BarlowSemiCondensed_ExtraLight200_Italic`
- `BarlowSemiCondensed_Light300`
- `BarlowSemiCondensed_Light300_Italic`
- `BarlowSemiCondensed_Regular400`
- `BarlowSemiCondensed_Regular400_Italic`
- `BarlowSemiCondensed_Medium500`
- `BarlowSemiCondensed_Medium500_Italic`
- `BarlowSemiCondensed_SemiBold600`
- `BarlowSemiCondensed_SemiBold600_Italic`
- `BarlowSemiCondensed_Bold700`
- `BarlowSemiCondensed_Bold700_Italic`
- `BarlowSemiCondensed_ExtraBold800`
- `BarlowSemiCondensed_ExtraBold800_Italic`
- `BarlowSemiCondensed_Black900`
- `BarlowSemiCondensed_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/barlow-semi-condensed expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  BarlowSemiCondensed_Thin100,
  BarlowSemiCondensed_Thin100_Italic,
  BarlowSemiCondensed_ExtraLight200,
  BarlowSemiCondensed_ExtraLight200_Italic,
  BarlowSemiCondensed_Light300,
  BarlowSemiCondensed_Light300_Italic,
  BarlowSemiCondensed_Regular400,
  BarlowSemiCondensed_Regular400_Italic,
  BarlowSemiCondensed_Medium500,
  BarlowSemiCondensed_Medium500_Italic,
  BarlowSemiCondensed_SemiBold600,
  BarlowSemiCondensed_SemiBold600_Italic,
  BarlowSemiCondensed_Bold700,
  BarlowSemiCondensed_Bold700_Italic,
  BarlowSemiCondensed_ExtraBold800,
  BarlowSemiCondensed_ExtraBold800_Italic,
  BarlowSemiCondensed_Black900,
  BarlowSemiCondensed_Black900_Italic,
  useFonts,
} from '@expo-google-fonts/barlow-semi-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    BarlowSemiCondensed_Thin100,
    BarlowSemiCondensed_Thin100_Italic,
    BarlowSemiCondensed_ExtraLight200,
    BarlowSemiCondensed_ExtraLight200_Italic,
    BarlowSemiCondensed_Light300,
    BarlowSemiCondensed_Light300_Italic,
    BarlowSemiCondensed_Regular400,
    BarlowSemiCondensed_Regular400_Italic,
    BarlowSemiCondensed_Medium500,
    BarlowSemiCondensed_Medium500_Italic,
    BarlowSemiCondensed_SemiBold600,
    BarlowSemiCondensed_SemiBold600_Italic,
    BarlowSemiCondensed_Bold700,
    BarlowSemiCondensed_Bold700_Italic,
    BarlowSemiCondensed_ExtraBold800,
    BarlowSemiCondensed_ExtraBold800_Italic,
    BarlowSemiCondensed_Black900,
    BarlowSemiCondensed_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_Thin100' }}>
          BarlowSemiCondensed_Thin100
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_Thin100_Italic' }}>
          BarlowSemiCondensed_Thin100_Italic
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_ExtraLight200' }}>
          BarlowSemiCondensed_ExtraLight200
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'BarlowSemiCondensed_ExtraLight200_Italic',
          }}>
          BarlowSemiCondensed_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_Light300' }}>
          BarlowSemiCondensed_Light300
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_Light300_Italic' }}>
          BarlowSemiCondensed_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_Regular400' }}>
          BarlowSemiCondensed_Regular400
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'BarlowSemiCondensed_Regular400_Italic',
          }}>
          BarlowSemiCondensed_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_Medium500' }}>
          BarlowSemiCondensed_Medium500
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_Medium500_Italic' }}>
          BarlowSemiCondensed_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_SemiBold600' }}>
          BarlowSemiCondensed_SemiBold600
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'BarlowSemiCondensed_SemiBold600_Italic',
          }}>
          BarlowSemiCondensed_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_Bold700' }}>
          BarlowSemiCondensed_Bold700
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_Bold700_Italic' }}>
          BarlowSemiCondensed_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_ExtraBold800' }}>
          BarlowSemiCondensed_ExtraBold800
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'BarlowSemiCondensed_ExtraBold800_Italic',
          }}>
          BarlowSemiCondensed_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_Black900' }}>
          BarlowSemiCondensed_Black900
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'BarlowSemiCondensed_Black900_Italic' }}>
          BarlowSemiCondensed_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### BarlowSemiCondensed_Thin100
![BarlowSemiCondensed_Thin100](./429d1fa72c7702c9b3dcb38d750756505166e563306daaf1b66cb753a68f9e2d.ttf.png)

##### BarlowSemiCondensed_Thin100_Italic
![BarlowSemiCondensed_Thin100_Italic](./39a411a6e0b959d02638199381cb91af60eb4da3e34ac231c61bea08043966e1.ttf.png)

##### BarlowSemiCondensed_ExtraLight200
![BarlowSemiCondensed_ExtraLight200](./d4d4a161e4199c955202ca92d228838efee2dfa3cf68a0cf388085e19395aa5f.ttf.png)

##### BarlowSemiCondensed_ExtraLight200_Italic
![BarlowSemiCondensed_ExtraLight200_Italic](./79508f19bd17b1cdbf0b5b6f486c964d65c4a893a7f8f739a63cb71d206bb157.ttf.png)

##### BarlowSemiCondensed_Light300
![BarlowSemiCondensed_Light300](./1b2c8175065ed2235c4db66650397fad918d8f97db3f1b3991125f2df604b76c.ttf.png)

##### BarlowSemiCondensed_Light300_Italic
![BarlowSemiCondensed_Light300_Italic](./b1eca79a9e101dd60e1836afb98fee66886d6042c2870f88b7ec822a7b97877b.ttf.png)

##### BarlowSemiCondensed_Regular400
![BarlowSemiCondensed_Regular400](./1a9dca109aaa256a5afb98477989b87e0e102269f948949e5573b65b45779d4e.ttf.png)

##### BarlowSemiCondensed_Regular400_Italic
![BarlowSemiCondensed_Regular400_Italic](./97fff70c506e46d82a769311aa3efd01c86a10161c92dee921fb6c75da5ba39c.ttf.png)

##### BarlowSemiCondensed_Medium500
![BarlowSemiCondensed_Medium500](./73e602f9d74684f25a9d352cc61a0cfefc4ab505dfecb50b843492b1b5a87c3e.ttf.png)

##### BarlowSemiCondensed_Medium500_Italic
![BarlowSemiCondensed_Medium500_Italic](./f1b5d4427848534739c734c5af7bdae1967a666e5c68e04156f0c5a60c1a1c78.ttf.png)

##### BarlowSemiCondensed_SemiBold600
![BarlowSemiCondensed_SemiBold600](./b98dce5b8a6c1c5c2804cd26be37b203c56aee083840f4bad5d1907c4bf0b295.ttf.png)

##### BarlowSemiCondensed_SemiBold600_Italic
![BarlowSemiCondensed_SemiBold600_Italic](./82e1d9e57f5b1c3fba390bb1e428d9b26538ead3342f04c40e60ded6325cc06e.ttf.png)

##### BarlowSemiCondensed_Bold700
![BarlowSemiCondensed_Bold700](./acfd284673d183fe78a563ebf695ce70f7800151495260debfa9532d93289a55.ttf.png)

##### BarlowSemiCondensed_Bold700_Italic
![BarlowSemiCondensed_Bold700_Italic](./e07191b9549a6c8c553608c75269487bb83c555c9e2fd9c08cfe704a5416e750.ttf.png)

##### BarlowSemiCondensed_ExtraBold800
![BarlowSemiCondensed_ExtraBold800](./b42194ff2e3637db2ee27a0720eed118d756d564014725a948bcdc8964d25901.ttf.png)

##### BarlowSemiCondensed_ExtraBold800_Italic
![BarlowSemiCondensed_ExtraBold800_Italic](./36f4cee581975816949c810a10be068d6131acdc211a99acb3a2ce6c9586174f.ttf.png)

##### BarlowSemiCondensed_Black900
![BarlowSemiCondensed_Black900](./2305373351846fd5f75bfb35b24697021e9bd4ea4fac80bb25bfe62c9afcb604.ttf.png)

##### BarlowSemiCondensed_Black900_Italic
![BarlowSemiCondensed_Black900_Italic](./29476cff7567544f2a04e61c90254033e0eb160089bfae4dea9871e8f6fbe2f9.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/barlow-semi-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Barlow Semi Condensed page on Google Fonts](https://fonts.google.com/specimen/Barlow+Semi+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Barlow Semi Condensed on Google Fonts](https://fonts.google.com/specimen/Barlow+Semi+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/barlow-semi-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/barlow-semi-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
