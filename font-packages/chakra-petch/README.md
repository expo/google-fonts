# @expo-google-fonts/chakra-petch

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/chakra-petch)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/chakra-petch)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/chakra-petch)

This package lets you use the [**Chakra Petch**](https://fonts.google.com/specimen/Chakra+Petch) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Chakra Petch

![Chakra Petch](./font-family.png)

This font family contains [10 styles](#-gallery).

- `ChakraPetch_Light300`
- `ChakraPetch_Light300_Italic`
- `ChakraPetch_Regular400`
- `ChakraPetch_Regular400_Italic`
- `ChakraPetch_Medium500`
- `ChakraPetch_Medium500_Italic`
- `ChakraPetch_SemiBold600`
- `ChakraPetch_SemiBold600_Italic`
- `ChakraPetch_Bold700`
- `ChakraPetch_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/chakra-petch expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  ChakraPetch_Light300,
  ChakraPetch_Light300_Italic,
  ChakraPetch_Regular400,
  ChakraPetch_Regular400_Italic,
  ChakraPetch_Medium500,
  ChakraPetch_Medium500_Italic,
  ChakraPetch_SemiBold600,
  ChakraPetch_SemiBold600_Italic,
  ChakraPetch_Bold700,
  ChakraPetch_Bold700_Italic,
} from '@expo-google-fonts/chakra-petch';

export default () => {
  let [fontsLoaded] = useFonts({
    ChakraPetch_Light300,
    ChakraPetch_Light300_Italic,
    ChakraPetch_Regular400,
    ChakraPetch_Regular400_Italic,
    ChakraPetch_Medium500,
    ChakraPetch_Medium500_Italic,
    ChakraPetch_SemiBold600,
    ChakraPetch_SemiBold600_Italic,
    ChakraPetch_Bold700,
    ChakraPetch_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ChakraPetch_Light300' }}>
          ChakraPetch_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ChakraPetch_Light300_Italic' }}>
          ChakraPetch_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ChakraPetch_Regular400' }}>
          ChakraPetch_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ChakraPetch_Regular400_Italic' }}>
          ChakraPetch_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ChakraPetch_Medium500' }}>
          ChakraPetch_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ChakraPetch_Medium500_Italic' }}>
          ChakraPetch_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ChakraPetch_SemiBold600' }}>
          ChakraPetch_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ChakraPetch_SemiBold600_Italic' }}>
          ChakraPetch_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ChakraPetch_Bold700' }}>
          ChakraPetch_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ChakraPetch_Bold700_Italic' }}>
          ChakraPetch_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### ChakraPetch_Light300
![ChakraPetch_Light300](./ecaf4ae2d67c61e2a3fa8df13a271ccea00d43000ba74107e7bfda439f60b1d2.ttf.png)

##### ChakraPetch_Light300_Italic
![ChakraPetch_Light300_Italic](./020376f9083d9c7e6f32ecb879dee72b6fadef64ea9a3df0bd01d4952a06f1aa.ttf.png)

##### ChakraPetch_Regular400
![ChakraPetch_Regular400](./6854c9992a9a1345525235ab8e75582a0f6f3f828c37e4720a78aad1de6c0aa5.ttf.png)

##### ChakraPetch_Regular400_Italic
![ChakraPetch_Regular400_Italic](./114572d34834d0022111a2a7a0eaf1d6bb7e3b70537f2c52e283219fa86ccd02.ttf.png)

##### ChakraPetch_Medium500
![ChakraPetch_Medium500](./179d4e7774a67d1c01789bcf1bf48e72fbc37fa173f3373470769b54a505ad17.ttf.png)

##### ChakraPetch_Medium500_Italic
![ChakraPetch_Medium500_Italic](./f7172b64774efd15a32d833b00836c9e30c0ee766c096a08de2a427c904f5c2d.ttf.png)

##### ChakraPetch_SemiBold600
![ChakraPetch_SemiBold600](./a6b54f7d68496d966460fe300af5b72cc91ca631822110de9fbc976ceabb2591.ttf.png)

##### ChakraPetch_SemiBold600_Italic
![ChakraPetch_SemiBold600_Italic](./a7a04e1ebef703c41253da2ca8a90c83a63649e471590d939c69828a0e0e591f.ttf.png)

##### ChakraPetch_Bold700
![ChakraPetch_Bold700](./e409c139ac42c535be29bfb904109788499a4b3971f95c0853dce713da259ea9.ttf.png)

##### ChakraPetch_Bold700_Italic
![ChakraPetch_Bold700_Italic](./86042cd1693573443cb56c465a3f44172486eb888d707fcc03eb3dc8600008cb.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/chakra-petch` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Chakra Petch page on Google Fonts](https://fonts.google.com/specimen/Chakra+Petch) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Chakra Petch on Google Fonts](https://fonts.google.com/specimen/Chakra+Petch)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/chakra-petch)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/chakra-petch)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
