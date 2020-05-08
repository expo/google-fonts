# @expo-google-fonts/ibm-plex-sans-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-sans-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-sans-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-sans-condensed)

This package lets you use the [**IBM Plex Sans Condensed**](https://fonts.google.com/specimen/IBM+Plex+Sans+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## IBM Plex Sans Condensed

![IBM Plex Sans Condensed](./font-family.png)

This font family contains [14 styles](#-gallery).

- `IBMPlexSansCondensed_Thin100`
- `IBMPlexSansCondensed_Thin100_Italic`
- `IBMPlexSansCondensed_ExtraLight200`
- `IBMPlexSansCondensed_ExtraLight200_Italic`
- `IBMPlexSansCondensed_Light300`
- `IBMPlexSansCondensed_Light300_Italic`
- `IBMPlexSansCondensed_Regular400`
- `IBMPlexSansCondensed_Regular400_Italic`
- `IBMPlexSansCondensed_Medium500`
- `IBMPlexSansCondensed_Medium500_Italic`
- `IBMPlexSansCondensed_SemiBold600`
- `IBMPlexSansCondensed_SemiBold600_Italic`
- `IBMPlexSansCondensed_Bold700`
- `IBMPlexSansCondensed_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ibm-plex-sans-condensed expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  IBMPlexSansCondensed_Thin100,
  IBMPlexSansCondensed_Thin100_Italic,
  IBMPlexSansCondensed_ExtraLight200,
  IBMPlexSansCondensed_ExtraLight200_Italic,
  IBMPlexSansCondensed_Light300,
  IBMPlexSansCondensed_Light300_Italic,
  IBMPlexSansCondensed_Regular400,
  IBMPlexSansCondensed_Regular400_Italic,
  IBMPlexSansCondensed_Medium500,
  IBMPlexSansCondensed_Medium500_Italic,
  IBMPlexSansCondensed_SemiBold600,
  IBMPlexSansCondensed_SemiBold600_Italic,
  IBMPlexSansCondensed_Bold700,
  IBMPlexSansCondensed_Bold700_Italic,
} from '@expo-google-fonts/ibm-plex-sans-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    IBMPlexSansCondensed_Thin100,
    IBMPlexSansCondensed_Thin100_Italic,
    IBMPlexSansCondensed_ExtraLight200,
    IBMPlexSansCondensed_ExtraLight200_Italic,
    IBMPlexSansCondensed_Light300,
    IBMPlexSansCondensed_Light300_Italic,
    IBMPlexSansCondensed_Regular400,
    IBMPlexSansCondensed_Regular400_Italic,
    IBMPlexSansCondensed_Medium500,
    IBMPlexSansCondensed_Medium500_Italic,
    IBMPlexSansCondensed_SemiBold600,
    IBMPlexSansCondensed_SemiBold600_Italic,
    IBMPlexSansCondensed_Bold700,
    IBMPlexSansCondensed_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSansCondensed_Thin100' }}>
          IBMPlexSansCondensed_Thin100
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSansCondensed_Thin100_Italic' }}>
          IBMPlexSansCondensed_Thin100_Italic
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSansCondensed_ExtraLight200' }}>
          IBMPlexSansCondensed_ExtraLight200
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'IBMPlexSansCondensed_ExtraLight200_Italic',
          }}>
          IBMPlexSansCondensed_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSansCondensed_Light300' }}>
          IBMPlexSansCondensed_Light300
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSansCondensed_Light300_Italic' }}>
          IBMPlexSansCondensed_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSansCondensed_Regular400' }}>
          IBMPlexSansCondensed_Regular400
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'IBMPlexSansCondensed_Regular400_Italic',
          }}>
          IBMPlexSansCondensed_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSansCondensed_Medium500' }}>
          IBMPlexSansCondensed_Medium500
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'IBMPlexSansCondensed_Medium500_Italic',
          }}>
          IBMPlexSansCondensed_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSansCondensed_SemiBold600' }}>
          IBMPlexSansCondensed_SemiBold600
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'IBMPlexSansCondensed_SemiBold600_Italic',
          }}>
          IBMPlexSansCondensed_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSansCondensed_Bold700' }}>
          IBMPlexSansCondensed_Bold700
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'IBMPlexSansCondensed_Bold700_Italic' }}>
          IBMPlexSansCondensed_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### IBMPlexSansCondensed_Thin100
![IBMPlexSansCondensed_Thin100](./95cb5ef68ced474a2288be174bf62af93746ddbce9a8be785d59e05d46221cb9.ttf.png)

##### IBMPlexSansCondensed_Thin100_Italic
![IBMPlexSansCondensed_Thin100_Italic](./ea2881ac7cbb7d0a0d0d89b3c81e0ccbd79e1dd040b84f4b28c7ea083a958926.ttf.png)

##### IBMPlexSansCondensed_ExtraLight200
![IBMPlexSansCondensed_ExtraLight200](./a51cec8648be38680ff0325b258659173e8d6cf8bf91ce3af4dfe72d96ad57bd.ttf.png)

##### IBMPlexSansCondensed_ExtraLight200_Italic
![IBMPlexSansCondensed_ExtraLight200_Italic](./459eb773994095169ba8f6f04dfad1a45c205782fd393d467e9c8d3a21701fa2.ttf.png)

##### IBMPlexSansCondensed_Light300
![IBMPlexSansCondensed_Light300](./c8260d42c2195a564a8bc5b74144874ac850ad48b4c507271d5fe4151f4802b6.ttf.png)

##### IBMPlexSansCondensed_Light300_Italic
![IBMPlexSansCondensed_Light300_Italic](./2b1c9ad90a1fb240d2e8ebb5f3a3d4a544c37662964daf7dc0941d047876b826.ttf.png)

##### IBMPlexSansCondensed_Regular400
![IBMPlexSansCondensed_Regular400](./6f14a51d14c32df9b6829dbd95e680ca603bb1f0e0c8a23f3d18f6e96f970eef.ttf.png)

##### IBMPlexSansCondensed_Regular400_Italic
![IBMPlexSansCondensed_Regular400_Italic](./a2c2c799b5a7b8b957579016dedfd8bd110c064310c1a491a71ee84964ff0a56.ttf.png)

##### IBMPlexSansCondensed_Medium500
![IBMPlexSansCondensed_Medium500](./17c6dabfa0ed7d9b258acae9bd3a20e61dbd27fa029bd3df75a0deadaa90e24e.ttf.png)

##### IBMPlexSansCondensed_Medium500_Italic
![IBMPlexSansCondensed_Medium500_Italic](./b605737f157c6f7c5977d9a151ff622fa93439d4b364d24f6431f52eb6a5affd.ttf.png)

##### IBMPlexSansCondensed_SemiBold600
![IBMPlexSansCondensed_SemiBold600](./368b327e4f44c9bf4ba628ecb081c53e0e3f087a4c0822435fe6ad6527dbe958.ttf.png)

##### IBMPlexSansCondensed_SemiBold600_Italic
![IBMPlexSansCondensed_SemiBold600_Italic](./a4fd2820e497b76a6c413f52ce87fa7521d6ff5bd0fac82b9c53e48c5febf174.ttf.png)

##### IBMPlexSansCondensed_Bold700
![IBMPlexSansCondensed_Bold700](./58ace9c95662b3ff47b0a066336d863bcc0515df78f5a23e9e424c1fbd4f451a.ttf.png)

##### IBMPlexSansCondensed_Bold700_Italic
![IBMPlexSansCondensed_Bold700_Italic](./064ee4d57bfdc62832b848b5c300e9abaadd59d151ca0279ad569edceffcf029.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/ibm-plex-sans-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Sans Condensed page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Sans Condensed on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-sans-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-sans-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
