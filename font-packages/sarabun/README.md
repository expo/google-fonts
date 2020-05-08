# @expo-google-fonts/sarabun

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sarabun)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sarabun)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sarabun)

This package lets you use the [**Sarabun**](https://fonts.google.com/specimen/Sarabun) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Sarabun

![Sarabun](./font-family.png)

This font family contains [16 styles](#-gallery).

- `Sarabun_Thin100`
- `Sarabun_Thin100_Italic`
- `Sarabun_ExtraLight200`
- `Sarabun_ExtraLight200_Italic`
- `Sarabun_Light300`
- `Sarabun_Light300_Italic`
- `Sarabun_Regular400`
- `Sarabun_Regular400_Italic`
- `Sarabun_Medium500`
- `Sarabun_Medium500_Italic`
- `Sarabun_SemiBold600`
- `Sarabun_SemiBold600_Italic`
- `Sarabun_Bold700`
- `Sarabun_Bold700_Italic`
- `Sarabun_ExtraBold800`
- `Sarabun_ExtraBold800_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sarabun expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Sarabun_Thin100,
  Sarabun_Thin100_Italic,
  Sarabun_ExtraLight200,
  Sarabun_ExtraLight200_Italic,
  Sarabun_Light300,
  Sarabun_Light300_Italic,
  Sarabun_Regular400,
  Sarabun_Regular400_Italic,
  Sarabun_Medium500,
  Sarabun_Medium500_Italic,
  Sarabun_SemiBold600,
  Sarabun_SemiBold600_Italic,
  Sarabun_Bold700,
  Sarabun_Bold700_Italic,
  Sarabun_ExtraBold800,
  Sarabun_ExtraBold800_Italic,
} from '@expo-google-fonts/sarabun';

export default () => {
  let [fontsLoaded] = useFonts({
    Sarabun_Thin100,
    Sarabun_Thin100_Italic,
    Sarabun_ExtraLight200,
    Sarabun_ExtraLight200_Italic,
    Sarabun_Light300,
    Sarabun_Light300_Italic,
    Sarabun_Regular400,
    Sarabun_Regular400_Italic,
    Sarabun_Medium500,
    Sarabun_Medium500_Italic,
    Sarabun_SemiBold600,
    Sarabun_SemiBold600_Italic,
    Sarabun_Bold700,
    Sarabun_Bold700_Italic,
    Sarabun_ExtraBold800,
    Sarabun_ExtraBold800_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_Thin100' }}>
          Sarabun_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_Thin100_Italic' }}>
          Sarabun_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_ExtraLight200' }}>
          Sarabun_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_ExtraLight200_Italic' }}>
          Sarabun_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_Light300' }}>
          Sarabun_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_Light300_Italic' }}>
          Sarabun_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_Regular400' }}>
          Sarabun_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_Regular400_Italic' }}>
          Sarabun_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_Medium500' }}>
          Sarabun_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_Medium500_Italic' }}>
          Sarabun_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_SemiBold600' }}>
          Sarabun_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_SemiBold600_Italic' }}>
          Sarabun_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_Bold700' }}>
          Sarabun_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_Bold700_Italic' }}>
          Sarabun_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_ExtraBold800' }}>
          Sarabun_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarabun_ExtraBold800_Italic' }}>
          Sarabun_ExtraBold800_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Sarabun_Thin100
![Sarabun_Thin100](./50cf24ee678c36e02b98c19ccc01d8e59c50d00c66e75054e4cca503779d8f37.ttf.png)

##### Sarabun_Thin100_Italic
![Sarabun_Thin100_Italic](./8ddc6bd48ee92ae9672930531c771ff526c5d8f06d26f1abdd8966cb2d563262.ttf.png)

##### Sarabun_ExtraLight200
![Sarabun_ExtraLight200](./3d79bab342addcc5613aed52e171c972f57a291ab53a7058d0412e3ade2c009a.ttf.png)

##### Sarabun_ExtraLight200_Italic
![Sarabun_ExtraLight200_Italic](./58630737fd991b60fc7250ed8c5dac4599dd5b338ee6cfe1e9cb05dc7d0ac3db.ttf.png)

##### Sarabun_Light300
![Sarabun_Light300](./ea334f3326fdb7fe48915bb07db5004530cce0576194cc0c0865bdcf11cafdfd.ttf.png)

##### Sarabun_Light300_Italic
![Sarabun_Light300_Italic](./1cc37aaa51644e80ff1fb97a07f05f066504d4b3e66358fc7c482ff7f79b4811.ttf.png)

##### Sarabun_Regular400
![Sarabun_Regular400](./5eb10ecb7f0b1864511e05724501467da68496508c15fbf0ed3958e162575ddc.ttf.png)

##### Sarabun_Regular400_Italic
![Sarabun_Regular400_Italic](./4412c26720c9c31795b0d2912215dbdd0dfaf18b42b7953f9fb26b54427094b0.ttf.png)

##### Sarabun_Medium500
![Sarabun_Medium500](./105263cd2ca92f9e66491c20400dfa6cdea9a47658d6074e7d04a6ceb3e2a96f.ttf.png)

##### Sarabun_Medium500_Italic
![Sarabun_Medium500_Italic](./e4253ff00e203d8cc8e0b7ebf54e2a55a3f2874c5ac9d191861983700c85103c.ttf.png)

##### Sarabun_SemiBold600
![Sarabun_SemiBold600](./a93849f8fcd0c0df8318aa91b45b14a0b9d84123c8ec5f5d144347b2c03e00e0.ttf.png)

##### Sarabun_SemiBold600_Italic
![Sarabun_SemiBold600_Italic](./c62534f6034acd31705d941b3ef92b86a40a6ce68879fe627c71e66f6d171add.ttf.png)

##### Sarabun_Bold700
![Sarabun_Bold700](./330d03c990cec0cc7f6fc0c08f2fd09d616447a8b492c3decfd907d665be7e19.ttf.png)

##### Sarabun_Bold700_Italic
![Sarabun_Bold700_Italic](./ce3ba67e7cb6d8993594f6a7cac0091efe50173174ed9044ebde2afa86922db9.ttf.png)

##### Sarabun_ExtraBold800
![Sarabun_ExtraBold800](./ad638b132e53ca7e95e1c81621980df4f1bc00248b98b088d5dbb67372dd5173.ttf.png)

##### Sarabun_ExtraBold800_Italic
![Sarabun_ExtraBold800_Italic](./4bcc3502d7dc5c7b0f96076c30ed78f3854455f65e5146c76a13893aa033341a.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/sarabun` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sarabun page on Google Fonts](https://fonts.google.com/specimen/Sarabun) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sarabun on Google Fonts](https://fonts.google.com/specimen/Sarabun)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sarabun)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sarabun)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
