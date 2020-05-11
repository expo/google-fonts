# @expo-google-fonts/zilla-slab

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/zilla-slab)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/zilla-slab)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/zilla-slab)

This package lets you use the [**Zilla Slab**](https://fonts.google.com/specimen/Zilla+Slab) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Zilla Slab

![Zilla Slab](./font-family.png)

This font family contains [10 styles](#-gallery).

- `ZillaSlab_Light300`
- `ZillaSlab_Light300_Italic`
- `ZillaSlab_Regular400`
- `ZillaSlab_Regular400_Italic`
- `ZillaSlab_Medium500`
- `ZillaSlab_Medium500_Italic`
- `ZillaSlab_SemiBold600`
- `ZillaSlab_SemiBold600_Italic`
- `ZillaSlab_Bold700`
- `ZillaSlab_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/zilla-slab expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  ZillaSlab_Light300,
  ZillaSlab_Light300_Italic,
  ZillaSlab_Regular400,
  ZillaSlab_Regular400_Italic,
  ZillaSlab_Medium500,
  ZillaSlab_Medium500_Italic,
  ZillaSlab_SemiBold600,
  ZillaSlab_SemiBold600_Italic,
  ZillaSlab_Bold700,
  ZillaSlab_Bold700_Italic,
  useFonts,
} from '@expo-google-fonts/zilla-slab';

export default () => {
  let [fontsLoaded] = useFonts({
    ZillaSlab_Light300,
    ZillaSlab_Light300_Italic,
    ZillaSlab_Regular400,
    ZillaSlab_Regular400_Italic,
    ZillaSlab_Medium500,
    ZillaSlab_Medium500_Italic,
    ZillaSlab_SemiBold600,
    ZillaSlab_SemiBold600_Italic,
    ZillaSlab_Bold700,
    ZillaSlab_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ZillaSlab_Light300' }}>
          ZillaSlab_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ZillaSlab_Light300_Italic' }}>
          ZillaSlab_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ZillaSlab_Regular400' }}>
          ZillaSlab_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ZillaSlab_Regular400_Italic' }}>
          ZillaSlab_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ZillaSlab_Medium500' }}>
          ZillaSlab_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ZillaSlab_Medium500_Italic' }}>
          ZillaSlab_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ZillaSlab_SemiBold600' }}>
          ZillaSlab_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ZillaSlab_SemiBold600_Italic' }}>
          ZillaSlab_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ZillaSlab_Bold700' }}>
          ZillaSlab_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ZillaSlab_Bold700_Italic' }}>
          ZillaSlab_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### ZillaSlab_Light300
![ZillaSlab_Light300](./37849ab854bf1dfd4a6d1cf5fe02365f214a0b5230a2473ddba5beea422d42c1.ttf.png)

##### ZillaSlab_Light300_Italic
![ZillaSlab_Light300_Italic](./f805ebf60f65467cf901f63c9e81742e68857ccd9321f154a664dc86e4f74d04.ttf.png)

##### ZillaSlab_Regular400
![ZillaSlab_Regular400](./6800e794aef26166782eccbaea44836363524c049b943e1ff5e7f3c662ee15db.ttf.png)

##### ZillaSlab_Regular400_Italic
![ZillaSlab_Regular400_Italic](./877668221b5887330f20b0c49f66807696026ce3edcc2930f86a6681f8bb0b66.ttf.png)

##### ZillaSlab_Medium500
![ZillaSlab_Medium500](./f84370da8e3c9d4ff36363df373f16bd9dff9bc4fec9d1bd98c58e5450fe7a94.ttf.png)

##### ZillaSlab_Medium500_Italic
![ZillaSlab_Medium500_Italic](./382cc00753755b73c9b5c3c729fc28e639a7f0ec05d7f4f1eb078bed8b053e2c.ttf.png)

##### ZillaSlab_SemiBold600
![ZillaSlab_SemiBold600](./0f65abeeaa62b1131fa31eb90d1ac6630bc73de55414482fd373559e7c8b56d2.ttf.png)

##### ZillaSlab_SemiBold600_Italic
![ZillaSlab_SemiBold600_Italic](./e893fedd56d416197cd6fb662dee7a611d5a5fc4216d271fa075316524ea4ff4.ttf.png)

##### ZillaSlab_Bold700
![ZillaSlab_Bold700](./bc0bb0d6f2a2f1edd4520a1e0e6fc779921dd929b7343dc03450a80ca514bb03.ttf.png)

##### ZillaSlab_Bold700_Italic
![ZillaSlab_Bold700_Italic](./d65ad541dbb872b4bd977f2dbfdf396a44ac0ec063b7921aba6e76dda85a4b05.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/zilla-slab` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Zilla Slab page on Google Fonts](https://fonts.google.com/specimen/Zilla+Slab) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Zilla Slab on Google Fonts](https://fonts.google.com/specimen/Zilla+Slab)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/zilla-slab)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/zilla-slab)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
