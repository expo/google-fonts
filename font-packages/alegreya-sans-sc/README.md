# @expo-google-fonts/alegreya-sans-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/alegreya-sans-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/alegreya-sans-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/alegreya-sans-sc)

This package lets you use the [**Alegreya Sans SC**](https://fonts.google.com/specimen/Alegreya+Sans+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Alegreya Sans SC

![Alegreya Sans SC](./font-family.png)

This font family contains [14 styles](#-gallery).

- `AlegreyaSansSC_Thin100`
- `AlegreyaSansSC_Thin100_Italic`
- `AlegreyaSansSC_Light300`
- `AlegreyaSansSC_Light300_Italic`
- `AlegreyaSansSC_Regular400`
- `AlegreyaSansSC_Regular400_Italic`
- `AlegreyaSansSC_Medium500`
- `AlegreyaSansSC_Medium500_Italic`
- `AlegreyaSansSC_Bold700`
- `AlegreyaSansSC_Bold700_Italic`
- `AlegreyaSansSC_ExtraBold800`
- `AlegreyaSansSC_ExtraBold800_Italic`
- `AlegreyaSansSC_Black900`
- `AlegreyaSansSC_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/alegreya-sans-sc expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  AlegreyaSansSC_Thin100,
  AlegreyaSansSC_Thin100_Italic,
  AlegreyaSansSC_Light300,
  AlegreyaSansSC_Light300_Italic,
  AlegreyaSansSC_Regular400,
  AlegreyaSansSC_Regular400_Italic,
  AlegreyaSansSC_Medium500,
  AlegreyaSansSC_Medium500_Italic,
  AlegreyaSansSC_Bold700,
  AlegreyaSansSC_Bold700_Italic,
  AlegreyaSansSC_ExtraBold800,
  AlegreyaSansSC_ExtraBold800_Italic,
  AlegreyaSansSC_Black900,
  AlegreyaSansSC_Black900_Italic,
} from '@expo-google-fonts/alegreya-sans-sc';

export default () => {
  let [fontsLoaded] = useFonts({
    AlegreyaSansSC_Thin100,
    AlegreyaSansSC_Thin100_Italic,
    AlegreyaSansSC_Light300,
    AlegreyaSansSC_Light300_Italic,
    AlegreyaSansSC_Regular400,
    AlegreyaSansSC_Regular400_Italic,
    AlegreyaSansSC_Medium500,
    AlegreyaSansSC_Medium500_Italic,
    AlegreyaSansSC_Bold700,
    AlegreyaSansSC_Bold700_Italic,
    AlegreyaSansSC_ExtraBold800,
    AlegreyaSansSC_ExtraBold800_Italic,
    AlegreyaSansSC_Black900,
    AlegreyaSansSC_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_Thin100' }}>
          AlegreyaSansSC_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_Thin100_Italic' }}>
          AlegreyaSansSC_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_Light300' }}>
          AlegreyaSansSC_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_Light300_Italic' }}>
          AlegreyaSansSC_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_Regular400' }}>
          AlegreyaSansSC_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_Regular400_Italic' }}>
          AlegreyaSansSC_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_Medium500' }}>
          AlegreyaSansSC_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_Medium500_Italic' }}>
          AlegreyaSansSC_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_Bold700' }}>
          AlegreyaSansSC_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_Bold700_Italic' }}>
          AlegreyaSansSC_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_ExtraBold800' }}>
          AlegreyaSansSC_ExtraBold800
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_ExtraBold800_Italic' }}>
          AlegreyaSansSC_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_Black900' }}>
          AlegreyaSansSC_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSansSC_Black900_Italic' }}>
          AlegreyaSansSC_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### AlegreyaSansSC_Thin100
![AlegreyaSansSC_Thin100](./7f5b4f9e7531121c2163e92598f24222cdef538a04352553731f0c81f69c4227.ttf.png)

##### AlegreyaSansSC_Thin100_Italic
![AlegreyaSansSC_Thin100_Italic](./1a8c6b334dbb0663e1b509d268363d557f9d231f702c2fb6ffe0727c0bb374b5.ttf.png)

##### AlegreyaSansSC_Light300
![AlegreyaSansSC_Light300](./0d94b7e8e30244280988269fbefbf776d08ff9ad0be6df4f620a6a5b7e0362f0.ttf.png)

##### AlegreyaSansSC_Light300_Italic
![AlegreyaSansSC_Light300_Italic](./ccd17db40859ba985ad048cea705168d600d36d89c00086787c0e0c4b3d82350.ttf.png)

##### AlegreyaSansSC_Regular400
![AlegreyaSansSC_Regular400](./2487f405a054a83c784021b2c8e860860b9243fb34fc64b7a5fd2250d68bf4f9.ttf.png)

##### AlegreyaSansSC_Regular400_Italic
![AlegreyaSansSC_Regular400_Italic](./b427017865c854fea91f74c2c65b73010299f090c4ce77e0854fac9a1de8bc0a.ttf.png)

##### AlegreyaSansSC_Medium500
![AlegreyaSansSC_Medium500](./edb603dab26042252c435e746201e0f2f353dd09865130082f25072fb0969e0b.ttf.png)

##### AlegreyaSansSC_Medium500_Italic
![AlegreyaSansSC_Medium500_Italic](./de77ecc3bedb1b421aebae8d44d23fc290cb7f252c8cd7eea6cc478ee69e13ec.ttf.png)

##### AlegreyaSansSC_Bold700
![AlegreyaSansSC_Bold700](./c46b10c450739d774b11b6e3d2f51e421d416b9a8174d249ad85973c5018894c.ttf.png)

##### AlegreyaSansSC_Bold700_Italic
![AlegreyaSansSC_Bold700_Italic](./16e2233f43d03898a785024de868496150dfcba5754cec33d4e349b92c857453.ttf.png)

##### AlegreyaSansSC_ExtraBold800
![AlegreyaSansSC_ExtraBold800](./356b90a20e5818313f51f03a05985f5c63745944a01aa92b78804caa0b7a4268.ttf.png)

##### AlegreyaSansSC_ExtraBold800_Italic
![AlegreyaSansSC_ExtraBold800_Italic](./85eb333661be027f374e08a28cc4b0c394fa0052fc64197c5a96409168532e87.ttf.png)

##### AlegreyaSansSC_Black900
![AlegreyaSansSC_Black900](./41a1bac96732155ce8415a0155d80de58383ab4223de540ad68c383f51b3cb5e.ttf.png)

##### AlegreyaSansSC_Black900_Italic
![AlegreyaSansSC_Black900_Italic](./7100fdd6d991e596021a3bc2578fd4eb74fb5bd5d7dfc6c30dcde981e6a27281.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/alegreya-sans-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Alegreya Sans SC page on Google Fonts](https://fonts.google.com/specimen/Alegreya+Sans+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Alegreya Sans SC on Google Fonts](https://fonts.google.com/specimen/Alegreya+Sans+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alegreya-sans-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alegreya-sans-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
