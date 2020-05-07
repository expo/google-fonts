# @expo-google-fonts/barlow

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/barlow)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/barlow)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/barlow)

This package lets you use the [**Barlow**](https://fonts.google.com/specimen/Barlow) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Barlow

![Barlow](./font-family.png)

This font family contains [18 styles](#gallery).

- `Barlow_Thin100`
- `Barlow_Thin100_Italic`
- `Barlow_ExtraLight200`
- `Barlow_ExtraLight200_Italic`
- `Barlow_Light300`
- `Barlow_Light300_Italic`
- `Barlow_Regular400`
- `Barlow_Regular400_Italic`
- `Barlow_Medium500`
- `Barlow_Medium500_Italic`
- `Barlow_SemiBold600`
- `Barlow_SemiBold600_Italic`
- `Barlow_Bold700`
- `Barlow_Bold700_Italic`
- `Barlow_ExtraBold800`
- `Barlow_ExtraBold800_Italic`
- `Barlow_Black900`
- `Barlow_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/barlow expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Barlow_Thin100,
  Barlow_Thin100_Italic,
  Barlow_ExtraLight200,
  Barlow_ExtraLight200_Italic,
  Barlow_Light300,
  Barlow_Light300_Italic,
  Barlow_Regular400,
  Barlow_Regular400_Italic,
  Barlow_Medium500,
  Barlow_Medium500_Italic,
  Barlow_SemiBold600,
  Barlow_SemiBold600_Italic,
  Barlow_Bold700,
  Barlow_Bold700_Italic,
  Barlow_ExtraBold800,
  Barlow_ExtraBold800_Italic,
  Barlow_Black900,
  Barlow_Black900_Italic,
} from '@expo-google-fonts/barlow';

export default () => {
  let [fontsLoaded] = useFonts({
    Barlow_Thin100,
    Barlow_Thin100_Italic,
    Barlow_ExtraLight200,
    Barlow_ExtraLight200_Italic,
    Barlow_Light300,
    Barlow_Light300_Italic,
    Barlow_Regular400,
    Barlow_Regular400_Italic,
    Barlow_Medium500,
    Barlow_Medium500_Italic,
    Barlow_SemiBold600,
    Barlow_SemiBold600_Italic,
    Barlow_Bold700,
    Barlow_Bold700_Italic,
    Barlow_ExtraBold800,
    Barlow_ExtraBold800_Italic,
    Barlow_Black900,
    Barlow_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_Thin100' }}>
          Barlow_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_Thin100_Italic' }}>
          Barlow_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_ExtraLight200' }}>
          Barlow_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_ExtraLight200_Italic' }}>
          Barlow_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_Light300' }}>
          Barlow_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_Light300_Italic' }}>
          Barlow_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_Regular400' }}>
          Barlow_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_Regular400_Italic' }}>
          Barlow_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_Medium500' }}>
          Barlow_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_Medium500_Italic' }}>
          Barlow_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_SemiBold600' }}>
          Barlow_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_SemiBold600_Italic' }}>
          Barlow_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_Bold700' }}>
          Barlow_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_Bold700_Italic' }}>
          Barlow_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_ExtraBold800' }}>
          Barlow_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_ExtraBold800_Italic' }}>
          Barlow_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_Black900' }}>
          Barlow_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Barlow_Black900_Italic' }}>
          Barlow_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Barlow_Thin100
![Barlow_Thin100](./cbc7c82fdee3fa8b92bb23c3b9a2e8030733dbbc7322cd0c547b7c1889e7ecc0.ttf.png)

##### Barlow_Thin100_Italic
![Barlow_Thin100_Italic](./f69e0bff8f7ab1739bd00636f1efa74a5937c7d34ae95b4ce353b4baad0eae33.ttf.png)

##### Barlow_ExtraLight200
![Barlow_ExtraLight200](./6759b2d507f1549918b6b4a394efcca8982958de5ac4134d359b7162e12701ba.ttf.png)

##### Barlow_ExtraLight200_Italic
![Barlow_ExtraLight200_Italic](./f750383a2bd7ca69e5e24c2f3fcf974a67a9e98818703c12d9fd2600d62b49cf.ttf.png)

##### Barlow_Light300
![Barlow_Light300](./f582c8c58e673f459c2daf36fb9e1d3522dd5a7c50e0b8ee02d5a95089fff221.ttf.png)

##### Barlow_Light300_Italic
![Barlow_Light300_Italic](./5ccb6cff74b4b842a4da09f1543e6f2ab54f86a0e75b997b7ef375159d0f9bca.ttf.png)

##### Barlow_Regular400
![Barlow_Regular400](./c1e3cf893b74f13d898b529820f0e01dd59c5c3f6f69635604600893cc99c914.ttf.png)

##### Barlow_Regular400_Italic
![Barlow_Regular400_Italic](./512de0e21c7303a0b6718ff5cf57c376345786cc521ce3851053764f55398e53.ttf.png)

##### Barlow_Medium500
![Barlow_Medium500](./6ed898f9a3aa42d3615c69b731f57305ce7006e87e29042e8467203889f0ff3a.ttf.png)

##### Barlow_Medium500_Italic
![Barlow_Medium500_Italic](./b84f9e4475585d31451021e3e9d27e8336f00eac47c6753193de4033f15ea30d.ttf.png)

##### Barlow_SemiBold600
![Barlow_SemiBold600](./88497110ef5b50e3903b3c97ee671e01497a9a6d49f64218c9a70fd5042c3b49.ttf.png)

##### Barlow_SemiBold600_Italic
![Barlow_SemiBold600_Italic](./53cad3b96c2a07c4af9d7111e1b6eaf07718e6510b0ccf65140b1ee7040da9b3.ttf.png)

##### Barlow_Bold700
![Barlow_Bold700](./a7513399e0a26a50c0f81fab7a114c8f40337b1d2edd0f28abed3f23ff5232c1.ttf.png)

##### Barlow_Bold700_Italic
![Barlow_Bold700_Italic](./274e649f86e4323b0b8553520d855c49523b84eb9269b8e0cf9f41d201e76068.ttf.png)

##### Barlow_ExtraBold800
![Barlow_ExtraBold800](./6063124468c1350716105b1b52edec1c02bbbea85a0d675477016f425f457c9a.ttf.png)

##### Barlow_ExtraBold800_Italic
![Barlow_ExtraBold800_Italic](./a4cbccba78e5ea3a5c9560b15ff91d04b88b7a8cadb3c81b64ceb9ebd5fc266f.ttf.png)

##### Barlow_Black900
![Barlow_Black900](./fb60a33ebebe512faae572e414c6865041ea47c278458a28cdcadc762958bd4b.ttf.png)

##### Barlow_Black900_Italic
![Barlow_Black900_Italic](./cabd84f11a9c742e6116cea169752a0f8c03073eeb60dc0ab4532987bd853878.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/barlow` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Barlow page on Google Fonts](https://fonts.google.com/specimen/Barlow) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Barlow on Google Fonts](https://fonts.google.com/specimen/Barlow)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/barlow)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/barlow)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
