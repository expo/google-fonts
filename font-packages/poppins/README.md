# @expo-google-fonts/poppins

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/poppins)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/poppins)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/poppins)

This package lets you use the [**Poppins**](https://fonts.google.com/specimen/Poppins) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Poppins

![Poppins](./font-family.png)

This font family contains [18 styles](#gallery).

- `Poppins_Thin100`
- `Poppins_Thin100_Italic`
- `Poppins_ExtraLight200`
- `Poppins_ExtraLight200_Italic`
- `Poppins_Light300`
- `Poppins_Light300_Italic`
- `Poppins_Regular400`
- `Poppins_Regular400_Italic`
- `Poppins_Medium500`
- `Poppins_Medium500_Italic`
- `Poppins_SemiBold600`
- `Poppins_SemiBold600_Italic`
- `Poppins_Bold700`
- `Poppins_Bold700_Italic`
- `Poppins_ExtraBold800`
- `Poppins_ExtraBold800_Italic`
- `Poppins_Black900`
- `Poppins_Black900_Italic`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/poppins expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Poppins_Thin100,
  Poppins_Thin100_Italic,
  Poppins_ExtraLight200,
  Poppins_ExtraLight200_Italic,
  Poppins_Light300,
  Poppins_Light300_Italic,
  Poppins_Regular400,
  Poppins_Regular400_Italic,
  Poppins_Medium500,
  Poppins_Medium500_Italic,
  Poppins_SemiBold600,
  Poppins_SemiBold600_Italic,
  Poppins_Bold700,
  Poppins_Bold700_Italic,
  Poppins_ExtraBold800,
  Poppins_ExtraBold800_Italic,
  Poppins_Black900,
  Poppins_Black900_Italic,
} from '@expo-google-fonts/poppins';

export default () => {
  let [fontsLoaded] = useFonts({
    Poppins_Thin100,
    Poppins_Thin100_Italic,
    Poppins_ExtraLight200,
    Poppins_ExtraLight200_Italic,
    Poppins_Light300,
    Poppins_Light300_Italic,
    Poppins_Regular400,
    Poppins_Regular400_Italic,
    Poppins_Medium500,
    Poppins_Medium500_Italic,
    Poppins_SemiBold600,
    Poppins_SemiBold600_Italic,
    Poppins_Bold700,
    Poppins_Bold700_Italic,
    Poppins_ExtraBold800,
    Poppins_ExtraBold800_Italic,
    Poppins_Black900,
    Poppins_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Thin100' }}>
          Poppins_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Thin100_Italic' }}>
          Poppins_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_ExtraLight200' }}>
          Poppins_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_ExtraLight200_Italic' }}>
          Poppins_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Light300' }}>
          Poppins_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Light300_Italic' }}>
          Poppins_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Regular400' }}>
          Poppins_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Regular400_Italic' }}>
          Poppins_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Medium500' }}>
          Poppins_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Medium500_Italic' }}>
          Poppins_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_SemiBold600' }}>
          Poppins_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_SemiBold600_Italic' }}>
          Poppins_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Bold700' }}>
          Poppins_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Bold700_Italic' }}>
          Poppins_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_ExtraBold800' }}>
          Poppins_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_ExtraBold800_Italic' }}>
          Poppins_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Black900' }}>
          Poppins_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poppins_Black900_Italic' }}>
          Poppins_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Poppins_Thin100
![Poppins_Thin100](./609ae3f057d392507fed90188cf6f9d5f85bb59f613c0decb2ecc9f51312a5cd.ttf.png)

##### Poppins_Thin100_Italic
![Poppins_Thin100_Italic](./4a2e8bca7b027b0f8cc0218b80ec9823ca3b98d4a06f17651337b01fb85f8ede.ttf.png)

##### Poppins_ExtraLight200
![Poppins_ExtraLight200](./2a489fff366883b0e5df107f6f4d5af2554723b61495c5509d4c3f62e038bc47.ttf.png)

##### Poppins_ExtraLight200_Italic
![Poppins_ExtraLight200_Italic](./e331f856e52ddab916a83bea449fda91561fab22bef776c8a817bcd9871ce0c9.ttf.png)

##### Poppins_Light300
![Poppins_Light300](./7f15d9a49bc6ca8b49ac995bbc36065b4bab0ed9f6d394a4c49d8f9ac85672c2.ttf.png)

##### Poppins_Light300_Italic
![Poppins_Light300_Italic](./2d4fb2fa8e59703eaf3fd748fdba32ff276e881015912154d7ffd5c24ba0afd6.ttf.png)

##### Poppins_Regular400
![Poppins_Regular400](./2425ebbc021bfdd18fe55edbeeb1539d22a217212c14430a7d4d75266a333bbc.ttf.png)

##### Poppins_Regular400_Italic
![Poppins_Regular400_Italic](./f058c785d855d5a6020eee6962eba4a653a871e6f07cabe930504e857b76ccb7.ttf.png)

##### Poppins_Medium500
![Poppins_Medium500](./45870260a29fa7d3e0eff8cdd91993fb4a9ce4cced3d7b72c3ef7d24380bfc2d.ttf.png)

##### Poppins_Medium500_Italic
![Poppins_Medium500_Italic](./231c5c16820cd2507d24716e41bce0bafafe7175410e6197b5621c9cedaf84ff.ttf.png)

##### Poppins_SemiBold600
![Poppins_SemiBold600](./1d665d5b75a9500040b2cc201c2b07af5faca7228372dc6f4572d2d5b2291097.ttf.png)

##### Poppins_SemiBold600_Italic
![Poppins_SemiBold600_Italic](./cb112397951c33d64e908cec5cf9f34d1ecc2c13f047f98061f834fc4a96e490.ttf.png)

##### Poppins_Bold700
![Poppins_Bold700](./210933fb1bb4e846d37ef00c92cae636ac35633132cf2157c7ac879f27f82068.ttf.png)

##### Poppins_Bold700_Italic
![Poppins_Bold700_Italic](./478ff165d4f208b41963f9774fda29358a902ad29026d486a94a50bb2e9b7a05.ttf.png)

##### Poppins_ExtraBold800
![Poppins_ExtraBold800](./9599edf36a7c40e752cd1fbc308f5351c59aae0b3bd6fa5bfbdaa61c16f8cee1.ttf.png)

##### Poppins_ExtraBold800_Italic
![Poppins_ExtraBold800_Italic](./230e076f3eaab8aa5b295152336dd453ac731569b1f72b4aa836f0edd6cdfe74.ttf.png)

##### Poppins_Black900
![Poppins_Black900](./2535406edd2aa55242329705ca9418a07d3a51ae28cadca3ee5becae61aa8987.ttf.png)

##### Poppins_Black900_Italic
![Poppins_Black900_Italic](./82eaa315798c980852cb782b3dc81adeb39c16903a1a46d96e5917f79266929d.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/poppins` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Poppins page on Google Fonts](https://fonts.google.com/specimen/Poppins) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Poppins on Google Fonts](https://fonts.google.com/specimen/Poppins)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/poppins)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/poppins)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
