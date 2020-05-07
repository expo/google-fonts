# @expo-google-fonts/fira-sans-extra-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/fira-sans-extra-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/fira-sans-extra-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/fira-sans-extra-condensed)

This package lets you use the [**Fira Sans Extra Condensed**](https://fonts.google.com/specimen/Fira+Sans+Extra+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Fira Sans Extra Condensed

![Fira Sans Extra Condensed](./font-family.png)

This font family contains [18 styles](#gallery).

- `FiraSansExtraCondensed_Thin100`
- `FiraSansExtraCondensed_Thin100_Italic`
- `FiraSansExtraCondensed_ExtraLight200`
- `FiraSansExtraCondensed_ExtraLight200_Italic`
- `FiraSansExtraCondensed_Light300`
- `FiraSansExtraCondensed_Light300_Italic`
- `FiraSansExtraCondensed_Regular400`
- `FiraSansExtraCondensed_Regular400_Italic`
- `FiraSansExtraCondensed_Medium500`
- `FiraSansExtraCondensed_Medium500_Italic`
- `FiraSansExtraCondensed_SemiBold600`
- `FiraSansExtraCondensed_SemiBold600_Italic`
- `FiraSansExtraCondensed_Bold700`
- `FiraSansExtraCondensed_Bold700_Italic`
- `FiraSansExtraCondensed_ExtraBold800`
- `FiraSansExtraCondensed_ExtraBold800_Italic`
- `FiraSansExtraCondensed_Black900`
- `FiraSansExtraCondensed_Black900_Italic`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/fira-sans-extra-condensed expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  FiraSansExtraCondensed_Thin100,
  FiraSansExtraCondensed_Thin100_Italic,
  FiraSansExtraCondensed_ExtraLight200,
  FiraSansExtraCondensed_ExtraLight200_Italic,
  FiraSansExtraCondensed_Light300,
  FiraSansExtraCondensed_Light300_Italic,
  FiraSansExtraCondensed_Regular400,
  FiraSansExtraCondensed_Regular400_Italic,
  FiraSansExtraCondensed_Medium500,
  FiraSansExtraCondensed_Medium500_Italic,
  FiraSansExtraCondensed_SemiBold600,
  FiraSansExtraCondensed_SemiBold600_Italic,
  FiraSansExtraCondensed_Bold700,
  FiraSansExtraCondensed_Bold700_Italic,
  FiraSansExtraCondensed_ExtraBold800,
  FiraSansExtraCondensed_ExtraBold800_Italic,
  FiraSansExtraCondensed_Black900,
  FiraSansExtraCondensed_Black900_Italic,
} from '@expo-google-fonts/fira-sans-extra-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    FiraSansExtraCondensed_Thin100,
    FiraSansExtraCondensed_Thin100_Italic,
    FiraSansExtraCondensed_ExtraLight200,
    FiraSansExtraCondensed_ExtraLight200_Italic,
    FiraSansExtraCondensed_Light300,
    FiraSansExtraCondensed_Light300_Italic,
    FiraSansExtraCondensed_Regular400,
    FiraSansExtraCondensed_Regular400_Italic,
    FiraSansExtraCondensed_Medium500,
    FiraSansExtraCondensed_Medium500_Italic,
    FiraSansExtraCondensed_SemiBold600,
    FiraSansExtraCondensed_SemiBold600_Italic,
    FiraSansExtraCondensed_Bold700,
    FiraSansExtraCondensed_Bold700_Italic,
    FiraSansExtraCondensed_ExtraBold800,
    FiraSansExtraCondensed_ExtraBold800_Italic,
    FiraSansExtraCondensed_Black900,
    FiraSansExtraCondensed_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_Thin100' }}>
          FiraSansExtraCondensed_Thin100
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_Thin100_Italic',
          }}>
          FiraSansExtraCondensed_Thin100_Italic
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_ExtraLight200' }}>
          FiraSansExtraCondensed_ExtraLight200
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_ExtraLight200_Italic',
          }}>
          FiraSansExtraCondensed_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_Light300' }}>
          FiraSansExtraCondensed_Light300
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_Light300_Italic',
          }}>
          FiraSansExtraCondensed_Light300_Italic
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_Regular400' }}>
          FiraSansExtraCondensed_Regular400
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_Regular400_Italic',
          }}>
          FiraSansExtraCondensed_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_Medium500' }}>
          FiraSansExtraCondensed_Medium500
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_Medium500_Italic',
          }}>
          FiraSansExtraCondensed_Medium500_Italic
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_SemiBold600' }}>
          FiraSansExtraCondensed_SemiBold600
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_SemiBold600_Italic',
          }}>
          FiraSansExtraCondensed_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_Bold700' }}>
          FiraSansExtraCondensed_Bold700
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_Bold700_Italic',
          }}>
          FiraSansExtraCondensed_Bold700_Italic
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_ExtraBold800' }}>
          FiraSansExtraCondensed_ExtraBold800
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_ExtraBold800_Italic',
          }}>
          FiraSansExtraCondensed_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansExtraCondensed_Black900' }}>
          FiraSansExtraCondensed_Black900
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansExtraCondensed_Black900_Italic',
          }}>
          FiraSansExtraCondensed_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### FiraSansExtraCondensed_Thin100
![FiraSansExtraCondensed_Thin100](./aa0b73aa84c42a6d80d67e8301430b1553b52c7bd68fb79ebe8a2ff750ff58d7.ttf.png)

##### FiraSansExtraCondensed_Thin100_Italic
![FiraSansExtraCondensed_Thin100_Italic](./9f3e0c06798b24d5853a7192055d69133a9cbd73a9af9f24f62a00b0040d5776.ttf.png)

##### FiraSansExtraCondensed_ExtraLight200
![FiraSansExtraCondensed_ExtraLight200](./bbe50e8aab5ce91f02434c94791440b79cfbc9ee514967d9db84519325fb09bc.ttf.png)

##### FiraSansExtraCondensed_ExtraLight200_Italic
![FiraSansExtraCondensed_ExtraLight200_Italic](./1c79fb24ec14754ab4fcb134db375dcab006d976fab22d0b109e35fdfcd23366.ttf.png)

##### FiraSansExtraCondensed_Light300
![FiraSansExtraCondensed_Light300](./40d22d65e7e493b473980345c73d89b480fede26e26e656d2f209dca5e38c1ff.ttf.png)

##### FiraSansExtraCondensed_Light300_Italic
![FiraSansExtraCondensed_Light300_Italic](./facbc467dbce58d849a1d881e13552a97aac95f1729e1fc2616bcbb139bc454e.ttf.png)

##### FiraSansExtraCondensed_Regular400
![FiraSansExtraCondensed_Regular400](./86b9aeff0987b7a36348174495862b0223a80ca3b251901d0ee4e171911f3313.ttf.png)

##### FiraSansExtraCondensed_Regular400_Italic
![FiraSansExtraCondensed_Regular400_Italic](./a9b18a404b2171c7bd6f0b62b4a449ac30caaf7479ea04cf72848bf1e102975a.ttf.png)

##### FiraSansExtraCondensed_Medium500
![FiraSansExtraCondensed_Medium500](./7fcaa10bd6c77effd3a995f07ef8dcc91c68362f20f82be9f906ba8cd66e3a36.ttf.png)

##### FiraSansExtraCondensed_Medium500_Italic
![FiraSansExtraCondensed_Medium500_Italic](./cf42464fc9f3e1569e0e1538e46fcc39fd02dba1db928aa594205dd74b6e7c72.ttf.png)

##### FiraSansExtraCondensed_SemiBold600
![FiraSansExtraCondensed_SemiBold600](./0763b0bd415a608f8406877206fbac60d4785217a0983cf5569a0a2ed2922a87.ttf.png)

##### FiraSansExtraCondensed_SemiBold600_Italic
![FiraSansExtraCondensed_SemiBold600_Italic](./0f8d32c8579b66b9a1c5be889f3a3b21d4bd26f53af102bd2b4669b8407da059.ttf.png)

##### FiraSansExtraCondensed_Bold700
![FiraSansExtraCondensed_Bold700](./f844b8d0ff4049bc54bf6eeb2fadd15e2e910f98d0a77a3ca693111015e8a365.ttf.png)

##### FiraSansExtraCondensed_Bold700_Italic
![FiraSansExtraCondensed_Bold700_Italic](./07bfb33f5214d059269b95893bcb1220d50d72c1912c6b53f105a147900b7806.ttf.png)

##### FiraSansExtraCondensed_ExtraBold800
![FiraSansExtraCondensed_ExtraBold800](./7a9cf07642c68b3200835e3a7e3688ed58ed76a3180a2e5cf9b94ce09e158671.ttf.png)

##### FiraSansExtraCondensed_ExtraBold800_Italic
![FiraSansExtraCondensed_ExtraBold800_Italic](./16f3dcda792af199394d486b422a6a669c52ee944c7bacd532337e88d9840501.ttf.png)

##### FiraSansExtraCondensed_Black900
![FiraSansExtraCondensed_Black900](./99e363528f9256b35bd83f2a25a2e5f6739df4eeb724246bc87c5ab657192270.ttf.png)

##### FiraSansExtraCondensed_Black900_Italic
![FiraSansExtraCondensed_Black900_Italic](./53c97db75ae729e99796dc36bad33e04ea9d0036b759f49f202c3b403c3df3eb.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/fira-sans-extra-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Fira Sans Extra Condensed page on Google Fonts](https://fonts.google.com/specimen/Fira+Sans+Extra+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Fira Sans Extra Condensed on Google Fonts](https://fonts.google.com/specimen/Fira+Sans+Extra+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fira-sans-extra-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fira-sans-extra-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
