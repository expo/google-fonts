# @expo-google-fonts/hepta-slab

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/hepta-slab)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/hepta-slab)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/hepta-slab)

This package lets you use the [**Hepta Slab**](https://fonts.google.com/specimen/Hepta+Slab) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Hepta Slab

![Hepta Slab](./font-family.png)

This font family contains [9 styles](#gallery).

- `HeptaSlab_Thin100`
- `HeptaSlab_ExtraLight200`
- `HeptaSlab_Light300`
- `HeptaSlab_Regular400`
- `HeptaSlab_Medium500`
- `HeptaSlab_SemiBold600`
- `HeptaSlab_Bold700`
- `HeptaSlab_ExtraBold800`
- `HeptaSlab_Black900`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/hepta-slab expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  HeptaSlab_Thin100,
  HeptaSlab_ExtraLight200,
  HeptaSlab_Light300,
  HeptaSlab_Regular400,
  HeptaSlab_Medium500,
  HeptaSlab_SemiBold600,
  HeptaSlab_Bold700,
  HeptaSlab_ExtraBold800,
  HeptaSlab_Black900,
} from '@expo-google-fonts/hepta-slab';

export default () => {
  let [fontsLoaded] = useFonts({
    HeptaSlab_Thin100,
    HeptaSlab_ExtraLight200,
    HeptaSlab_Light300,
    HeptaSlab_Regular400,
    HeptaSlab_Medium500,
    HeptaSlab_SemiBold600,
    HeptaSlab_Bold700,
    HeptaSlab_ExtraBold800,
    HeptaSlab_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'HeptaSlab_Thin100' }}>
          HeptaSlab_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HeptaSlab_ExtraLight200' }}>
          HeptaSlab_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HeptaSlab_Light300' }}>
          HeptaSlab_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HeptaSlab_Regular400' }}>
          HeptaSlab_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HeptaSlab_Medium500' }}>
          HeptaSlab_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HeptaSlab_SemiBold600' }}>
          HeptaSlab_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HeptaSlab_Bold700' }}>
          HeptaSlab_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HeptaSlab_ExtraBold800' }}>
          HeptaSlab_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HeptaSlab_Black900' }}>
          HeptaSlab_Black900
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### HeptaSlab_Thin100
![HeptaSlab_Thin100](./534d777769f5477f07228b5576ec1d9e5f8524ebb5568ee0c7ead05433221d78.ttf.png)

##### HeptaSlab_ExtraLight200
![HeptaSlab_ExtraLight200](./de95a9d08b1575d9f362c8b8fdd65bd2909ac29ad85189cbcc2d2bb7b79bae55.ttf.png)

##### HeptaSlab_Light300
![HeptaSlab_Light300](./4cd4b89cf596ab747187626051fcb2da9f1ee5facedc163666b009c58d2e6a4a.ttf.png)

##### HeptaSlab_Regular400
![HeptaSlab_Regular400](./fd8aa078be565bf9944c3c9a7158b16836fdcd409b6df1377b7ce805078acf7f.ttf.png)

##### HeptaSlab_Medium500
![HeptaSlab_Medium500](./7d62a8746b071e53a6b32f2f3a0052555f9d40c47fecd5bd70697f632af7b585.ttf.png)

##### HeptaSlab_SemiBold600
![HeptaSlab_SemiBold600](./5b2cd08d92feb50e4548237182dede8320631fffad112e55ac8ffec9bd254dbc.ttf.png)

##### HeptaSlab_Bold700
![HeptaSlab_Bold700](./c732dc9ed4d5762dd9391ce2ed11a31606c9ec3305bef745bce6d06bdb2403df.ttf.png)

##### HeptaSlab_ExtraBold800
![HeptaSlab_ExtraBold800](./d4ba935b82b68baaeb5bc719f5132fb28f94a27979e65e4ad25c5ff85d02303f.ttf.png)

##### HeptaSlab_Black900
![HeptaSlab_Black900](./bf562116fb32949fa7d908466470e1c6d03ae7bb83023d1428527ecec91d9201.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/hepta-slab` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Hepta Slab page on Google Fonts](https://fonts.google.com/specimen/Hepta+Slab) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Hepta Slab on Google Fonts](https://fonts.google.com/specimen/Hepta+Slab)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/hepta-slab)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/hepta-slab)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
