# @expo-google-fonts/kulim-park

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kulim-park)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kulim-park)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kulim-park)

This package lets you use the [**Kulim Park**](https://fonts.google.com/specimen/Kulim+Park) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Kulim Park

![Kulim Park](./font-family.png)

This font family contains [10 styles](#-gallery).

- `KulimPark_ExtraLight200`
- `KulimPark_ExtraLight200_Italic`
- `KulimPark_Light300`
- `KulimPark_Light300_Italic`
- `KulimPark_Regular400`
- `KulimPark_Regular400_Italic`
- `KulimPark_SemiBold600`
- `KulimPark_SemiBold600_Italic`
- `KulimPark_Bold700`
- `KulimPark_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/kulim-park expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  KulimPark_ExtraLight200,
  KulimPark_ExtraLight200_Italic,
  KulimPark_Light300,
  KulimPark_Light300_Italic,
  KulimPark_Regular400,
  KulimPark_Regular400_Italic,
  KulimPark_SemiBold600,
  KulimPark_SemiBold600_Italic,
  KulimPark_Bold700,
  KulimPark_Bold700_Italic,
} from '@expo-google-fonts/kulim-park';

export default () => {
  let [fontsLoaded] = useFonts({
    KulimPark_ExtraLight200,
    KulimPark_ExtraLight200_Italic,
    KulimPark_Light300,
    KulimPark_Light300_Italic,
    KulimPark_Regular400,
    KulimPark_Regular400_Italic,
    KulimPark_SemiBold600,
    KulimPark_SemiBold600_Italic,
    KulimPark_Bold700,
    KulimPark_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'KulimPark_ExtraLight200' }}>
          KulimPark_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KulimPark_ExtraLight200_Italic' }}>
          KulimPark_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KulimPark_Light300' }}>
          KulimPark_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KulimPark_Light300_Italic' }}>
          KulimPark_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KulimPark_Regular400' }}>
          KulimPark_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KulimPark_Regular400_Italic' }}>
          KulimPark_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KulimPark_SemiBold600' }}>
          KulimPark_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KulimPark_SemiBold600_Italic' }}>
          KulimPark_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KulimPark_Bold700' }}>
          KulimPark_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KulimPark_Bold700_Italic' }}>
          KulimPark_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### KulimPark_ExtraLight200
![KulimPark_ExtraLight200](./840c4d3989e45ba899e1b3d09646ca3f9bef766fb66b167c5ea95b0726f44a0b.ttf.png)

##### KulimPark_ExtraLight200_Italic
![KulimPark_ExtraLight200_Italic](./8737e36ff5a77edc8d6596fcaa803b3cf72b11b077e0b7b0397fa81c2f03dd31.ttf.png)

##### KulimPark_Light300
![KulimPark_Light300](./5f528827be704c4d4f91d75915cedac8ff4754733bcac2e61e48bdac1e6752eb.ttf.png)

##### KulimPark_Light300_Italic
![KulimPark_Light300_Italic](./62e148954a2bd0e9e8c26272bfc3eedaaeecdf3a318ade20223eb51d2b83abdb.ttf.png)

##### KulimPark_Regular400
![KulimPark_Regular400](./d2dc8ced6a590e1bfbabfeaf4b27a7366fccc572cfee1fe459f22618ab3f1e58.ttf.png)

##### KulimPark_Regular400_Italic
![KulimPark_Regular400_Italic](./d3d40eaa8f0ae675fa6895c58f65a5c082236f54ee433a53963584e3f308f7c8.ttf.png)

##### KulimPark_SemiBold600
![KulimPark_SemiBold600](./cea3878ffef1244f27d1495beb506d10f3206d59da7d09f737ac355fde66784e.ttf.png)

##### KulimPark_SemiBold600_Italic
![KulimPark_SemiBold600_Italic](./62a7e064a37929edd5a709ff870cd8bafcf530cd6439f26277ab061d4128a8ad.ttf.png)

##### KulimPark_Bold700
![KulimPark_Bold700](./23e77b347e0afbacac1a4ba530b6fc6e0a7e166bd3edf29bdc414dd6497b806d.ttf.png)

##### KulimPark_Bold700_Italic
![KulimPark_Bold700_Italic](./baa22986aa8baf32baf6fbbd27e630ee792aac59cbf10df4701f9cd85d3232cd.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/kulim-park` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kulim Park page on Google Fonts](https://fonts.google.com/specimen/Kulim+Park) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kulim Park on Google Fonts](https://fonts.google.com/specimen/Kulim+Park)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kulim-park)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kulim-park)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
