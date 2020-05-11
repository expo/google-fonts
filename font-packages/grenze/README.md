# @expo-google-fonts/grenze

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/grenze)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/grenze)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/grenze)

This package lets you use the [**Grenze**](https://fonts.google.com/specimen/Grenze) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Grenze

![Grenze](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Grenze_Thin100`
- `Grenze_Thin100_Italic`
- `Grenze_ExtraLight200`
- `Grenze_ExtraLight200_Italic`
- `Grenze_Light300`
- `Grenze_Light300_Italic`
- `Grenze_Regular400`
- `Grenze_Regular400_Italic`
- `Grenze_Medium500`
- `Grenze_Medium500_Italic`
- `Grenze_SemiBold600`
- `Grenze_SemiBold600_Italic`
- `Grenze_Bold700`
- `Grenze_Bold700_Italic`
- `Grenze_ExtraBold800`
- `Grenze_ExtraBold800_Italic`
- `Grenze_Black900`
- `Grenze_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/grenze expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Grenze_Thin100,
  Grenze_Thin100_Italic,
  Grenze_ExtraLight200,
  Grenze_ExtraLight200_Italic,
  Grenze_Light300,
  Grenze_Light300_Italic,
  Grenze_Regular400,
  Grenze_Regular400_Italic,
  Grenze_Medium500,
  Grenze_Medium500_Italic,
  Grenze_SemiBold600,
  Grenze_SemiBold600_Italic,
  Grenze_Bold700,
  Grenze_Bold700_Italic,
  Grenze_ExtraBold800,
  Grenze_ExtraBold800_Italic,
  Grenze_Black900,
  Grenze_Black900_Italic,
  useFonts,
} from '@expo-google-fonts/grenze';

export default () => {
  let [fontsLoaded] = useFonts({
    Grenze_Thin100,
    Grenze_Thin100_Italic,
    Grenze_ExtraLight200,
    Grenze_ExtraLight200_Italic,
    Grenze_Light300,
    Grenze_Light300_Italic,
    Grenze_Regular400,
    Grenze_Regular400_Italic,
    Grenze_Medium500,
    Grenze_Medium500_Italic,
    Grenze_SemiBold600,
    Grenze_SemiBold600_Italic,
    Grenze_Bold700,
    Grenze_Bold700_Italic,
    Grenze_ExtraBold800,
    Grenze_ExtraBold800_Italic,
    Grenze_Black900,
    Grenze_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_Thin100' }}>
          Grenze_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_Thin100_Italic' }}>
          Grenze_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_ExtraLight200' }}>
          Grenze_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_ExtraLight200_Italic' }}>
          Grenze_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_Light300' }}>
          Grenze_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_Light300_Italic' }}>
          Grenze_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_Regular400' }}>
          Grenze_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_Regular400_Italic' }}>
          Grenze_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_Medium500' }}>
          Grenze_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_Medium500_Italic' }}>
          Grenze_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_SemiBold600' }}>
          Grenze_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_SemiBold600_Italic' }}>
          Grenze_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_Bold700' }}>
          Grenze_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_Bold700_Italic' }}>
          Grenze_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_ExtraBold800' }}>
          Grenze_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_ExtraBold800_Italic' }}>
          Grenze_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_Black900' }}>
          Grenze_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Grenze_Black900_Italic' }}>
          Grenze_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Grenze_Thin100
![Grenze_Thin100](./0990a8c493d15ce4bc040461ac83778fbd658ffb4e5470ded379c5d932c0ad64.ttf.png)

##### Grenze_Thin100_Italic
![Grenze_Thin100_Italic](./b76ab96616d0138d6376f8da6777f4dcd53174ecd6cc3d105f926d138412156a.ttf.png)

##### Grenze_ExtraLight200
![Grenze_ExtraLight200](./ea5652640e0126eca9dd8ec9af72afd38c03f0608cf8066ba85e8d3cc84b72f5.ttf.png)

##### Grenze_ExtraLight200_Italic
![Grenze_ExtraLight200_Italic](./62177aecb9fc857767b77f93de0e28aaff0aa14d6743fcb2e074b3b17d10ed6a.ttf.png)

##### Grenze_Light300
![Grenze_Light300](./306db261f5db582fb834c4d4bd749cd7bbd220410f22c0f91e9da3906fea195a.ttf.png)

##### Grenze_Light300_Italic
![Grenze_Light300_Italic](./8328aa2d7be6cb51506689c284e11d44e22a65cc87f444619d3e74029b3c6b4d.ttf.png)

##### Grenze_Regular400
![Grenze_Regular400](./c881a6bd46175e518a6059d0c5fd2fef4f0e1ad8433e903ab0df21ac113772f6.ttf.png)

##### Grenze_Regular400_Italic
![Grenze_Regular400_Italic](./396353d483f4c64a4c320999b4a8ea7bd7d3fc2f3d1126d31dd62c2bd7474f60.ttf.png)

##### Grenze_Medium500
![Grenze_Medium500](./7685525db63573b7d2818041934dd2608e56fd7eaf5af7bcbb29f02b9cd5f948.ttf.png)

##### Grenze_Medium500_Italic
![Grenze_Medium500_Italic](./da991020ed06646693057a5dfc4dae9bed270609081f0e2167ff1b6d6893483a.ttf.png)

##### Grenze_SemiBold600
![Grenze_SemiBold600](./c4b885545038f7f41fa22671f8e1d9becd9672ffe403f1267a77e244c2ebbe7f.ttf.png)

##### Grenze_SemiBold600_Italic
![Grenze_SemiBold600_Italic](./e85fde935308bfd3bcdc33373ab0a7296b4c852c9689504d830dd8a2c722828c.ttf.png)

##### Grenze_Bold700
![Grenze_Bold700](./59bbcbbac7dbc3b0875ff2e1f9b73917427553fe9494ce5072c9408e4805693c.ttf.png)

##### Grenze_Bold700_Italic
![Grenze_Bold700_Italic](./b408bf29942d61415edcf80e8d329a6c9d54eedf1b2a0be057164e93cda0029a.ttf.png)

##### Grenze_ExtraBold800
![Grenze_ExtraBold800](./10f31373e1d786f62febeb25a546f803218359aefe0c2e9d0247008665f54a92.ttf.png)

##### Grenze_ExtraBold800_Italic
![Grenze_ExtraBold800_Italic](./6c6bbecf82467b9cbc2bc5373b2132d2a72fc1ab1d19beab9247d96b9aeaf437.ttf.png)

##### Grenze_Black900
![Grenze_Black900](./e99c2c3ccee2de60f0fa0836977cfb7f1f5db667eaba9c59b205a9860377cb15.ttf.png)

##### Grenze_Black900_Italic
![Grenze_Black900_Italic](./26ebaa2c75db3de90f21f701605ab5e085a7f4c1f23fcb5235a754a34ef4defa.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/grenze` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Grenze page on Google Fonts](https://fonts.google.com/specimen/Grenze) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Grenze on Google Fonts](https://fonts.google.com/specimen/Grenze)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/grenze)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/grenze)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
