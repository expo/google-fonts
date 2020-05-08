# @expo-google-fonts/prompt

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/prompt)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/prompt)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/prompt)

This package lets you use the [**Prompt**](https://fonts.google.com/specimen/Prompt) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Prompt

![Prompt](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Prompt_Thin100`
- `Prompt_Thin100_Italic`
- `Prompt_ExtraLight200`
- `Prompt_ExtraLight200_Italic`
- `Prompt_Light300`
- `Prompt_Light300_Italic`
- `Prompt_Regular400`
- `Prompt_Regular400_Italic`
- `Prompt_Medium500`
- `Prompt_Medium500_Italic`
- `Prompt_SemiBold600`
- `Prompt_SemiBold600_Italic`
- `Prompt_Bold700`
- `Prompt_Bold700_Italic`
- `Prompt_ExtraBold800`
- `Prompt_ExtraBold800_Italic`
- `Prompt_Black900`
- `Prompt_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/prompt expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Prompt_Thin100,
  Prompt_Thin100_Italic,
  Prompt_ExtraLight200,
  Prompt_ExtraLight200_Italic,
  Prompt_Light300,
  Prompt_Light300_Italic,
  Prompt_Regular400,
  Prompt_Regular400_Italic,
  Prompt_Medium500,
  Prompt_Medium500_Italic,
  Prompt_SemiBold600,
  Prompt_SemiBold600_Italic,
  Prompt_Bold700,
  Prompt_Bold700_Italic,
  Prompt_ExtraBold800,
  Prompt_ExtraBold800_Italic,
  Prompt_Black900,
  Prompt_Black900_Italic,
} from '@expo-google-fonts/prompt';

export default () => {
  let [fontsLoaded] = useFonts({
    Prompt_Thin100,
    Prompt_Thin100_Italic,
    Prompt_ExtraLight200,
    Prompt_ExtraLight200_Italic,
    Prompt_Light300,
    Prompt_Light300_Italic,
    Prompt_Regular400,
    Prompt_Regular400_Italic,
    Prompt_Medium500,
    Prompt_Medium500_Italic,
    Prompt_SemiBold600,
    Prompt_SemiBold600_Italic,
    Prompt_Bold700,
    Prompt_Bold700_Italic,
    Prompt_ExtraBold800,
    Prompt_ExtraBold800_Italic,
    Prompt_Black900,
    Prompt_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_Thin100' }}>
          Prompt_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_Thin100_Italic' }}>
          Prompt_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_ExtraLight200' }}>
          Prompt_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_ExtraLight200_Italic' }}>
          Prompt_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_Light300' }}>
          Prompt_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_Light300_Italic' }}>
          Prompt_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_Regular400' }}>
          Prompt_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_Regular400_Italic' }}>
          Prompt_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_Medium500' }}>
          Prompt_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_Medium500_Italic' }}>
          Prompt_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_SemiBold600' }}>
          Prompt_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_SemiBold600_Italic' }}>
          Prompt_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_Bold700' }}>
          Prompt_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_Bold700_Italic' }}>
          Prompt_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_ExtraBold800' }}>
          Prompt_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_ExtraBold800_Italic' }}>
          Prompt_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_Black900' }}>
          Prompt_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prompt_Black900_Italic' }}>
          Prompt_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Prompt_Thin100
![Prompt_Thin100](./48988c00dff9e5346bafb0230e233cc244d06d53de9a8c7b1c5ae95b508878d9.ttf.png)

##### Prompt_Thin100_Italic
![Prompt_Thin100_Italic](./fa017c19d47d8c1de3c967302dc49e99d37de71795dfb971c06ce63c31a2b230.ttf.png)

##### Prompt_ExtraLight200
![Prompt_ExtraLight200](./be13887c30cb0eb82b46627a8d18c34490049df205c234b3d27d8c3efbfeacec.ttf.png)

##### Prompt_ExtraLight200_Italic
![Prompt_ExtraLight200_Italic](./2ac60a88dbbd5f9ae43c89ce90966920480aa263c9c157da76a8f51c68efebc6.ttf.png)

##### Prompt_Light300
![Prompt_Light300](./3e355dba756f556f47a7a9d99fe46cfa2d2676c6937bb2af9f39e84bf13ba0a8.ttf.png)

##### Prompt_Light300_Italic
![Prompt_Light300_Italic](./cdbdb3675fcbe7c22771818e356aaca5f5bfbd59635b7223dff98a1ef9843b4b.ttf.png)

##### Prompt_Regular400
![Prompt_Regular400](./a26fa613f518a56e8d6ab2da471f1a74fde4a5fd95552a539694b777832f2627.ttf.png)

##### Prompt_Regular400_Italic
![Prompt_Regular400_Italic](./2ac0428ddf82e1d43425e6afb249d0000b0f3eed6e8583cd6712f53f585f33fa.ttf.png)

##### Prompt_Medium500
![Prompt_Medium500](./627e26dc44fbd7d87a3300a5ddb700b5d169b5cee2c915f78085ced694f0ef98.ttf.png)

##### Prompt_Medium500_Italic
![Prompt_Medium500_Italic](./c455330873fbc77aaf5958ea7fe12fc7af2325446a34440ebaf090775b7a2f4f.ttf.png)

##### Prompt_SemiBold600
![Prompt_SemiBold600](./5be3aa9ccbda532fccad8b87b6e554f0403860f32b4499ea56228ecc81246e5d.ttf.png)

##### Prompt_SemiBold600_Italic
![Prompt_SemiBold600_Italic](./692795800d326358c0dfeb443453d36353284ee31c283cfde37df17258f6f2bc.ttf.png)

##### Prompt_Bold700
![Prompt_Bold700](./1a3f1635714fe8861ed1027027e0e34183db3b1197ebfba3c2283739950e1fc7.ttf.png)

##### Prompt_Bold700_Italic
![Prompt_Bold700_Italic](./46317d49f08a684dff0cd9a335124eba5f1feebc850ab74ab6a023096f224c4f.ttf.png)

##### Prompt_ExtraBold800
![Prompt_ExtraBold800](./79977c86dc67cc15e7cce3392fd9a3b9bfcaf261c5bf48de9820fb6b9cf8dd5a.ttf.png)

##### Prompt_ExtraBold800_Italic
![Prompt_ExtraBold800_Italic](./1bd02cc605f0e4ec0c90fa33ee5726bd1679d6a36c64f1779de4aee232e8a88a.ttf.png)

##### Prompt_Black900
![Prompt_Black900](./5f0519c649be920aec99489ffcd76b23ec686b254b28fe9cffdd6e5690280c41.ttf.png)

##### Prompt_Black900_Italic
![Prompt_Black900_Italic](./9390dbb38f163bec75f6d6682ae93a821e776cd9bed89bf402c7104d295dca25.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/prompt` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Prompt page on Google Fonts](https://fonts.google.com/specimen/Prompt) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Prompt on Google Fonts](https://fonts.google.com/specimen/Prompt)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/prompt)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/prompt)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
