# @expo-google-fonts/source-sans-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/source-sans-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/source-sans-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/source-sans-pro)

This package lets you use the [**Source Sans Pro**](https://fonts.google.com/specimen/Source+Sans+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Source Sans Pro

![Source Sans Pro](./font-family.png)

This font family contains [12 styles](#gallery).

- `SourceSansPro_ExtraLight200`
- `SourceSansPro_ExtraLight200_Italic`
- `SourceSansPro_Light300`
- `SourceSansPro_Light300_Italic`
- `SourceSansPro_Regular400`
- `SourceSansPro_Regular400_Italic`
- `SourceSansPro_SemiBold600`
- `SourceSansPro_SemiBold600_Italic`
- `SourceSansPro_Bold700`
- `SourceSansPro_Bold700_Italic`
- `SourceSansPro_Black900`
- `SourceSansPro_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/source-sans-pro expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  SourceSansPro_ExtraLight200,
  SourceSansPro_ExtraLight200_Italic,
  SourceSansPro_Light300,
  SourceSansPro_Light300_Italic,
  SourceSansPro_Regular400,
  SourceSansPro_Regular400_Italic,
  SourceSansPro_SemiBold600,
  SourceSansPro_SemiBold600_Italic,
  SourceSansPro_Bold700,
  SourceSansPro_Bold700_Italic,
  SourceSansPro_Black900,
  SourceSansPro_Black900_Italic,
} from '@expo-google-fonts/source-sans-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    SourceSansPro_ExtraLight200,
    SourceSansPro_ExtraLight200_Italic,
    SourceSansPro_Light300,
    SourceSansPro_Light300_Italic,
    SourceSansPro_Regular400,
    SourceSansPro_Regular400_Italic,
    SourceSansPro_SemiBold600,
    SourceSansPro_SemiBold600_Italic,
    SourceSansPro_Bold700,
    SourceSansPro_Bold700_Italic,
    SourceSansPro_Black900,
    SourceSansPro_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSansPro_ExtraLight200' }}>
          SourceSansPro_ExtraLight200
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'SourceSansPro_ExtraLight200_Italic' }}>
          SourceSansPro_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSansPro_Light300' }}>
          SourceSansPro_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSansPro_Light300_Italic' }}>
          SourceSansPro_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSansPro_Regular400' }}>
          SourceSansPro_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSansPro_Regular400_Italic' }}>
          SourceSansPro_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSansPro_SemiBold600' }}>
          SourceSansPro_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSansPro_SemiBold600_Italic' }}>
          SourceSansPro_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSansPro_Bold700' }}>
          SourceSansPro_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSansPro_Bold700_Italic' }}>
          SourceSansPro_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSansPro_Black900' }}>
          SourceSansPro_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSansPro_Black900_Italic' }}>
          SourceSansPro_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### SourceSansPro_ExtraLight200
![SourceSansPro_ExtraLight200](./069aaad5d271d9417c8b97f8312f686cf5a9a41a8e3644b572c60c8e176ed7e0.ttf.png)

##### SourceSansPro_ExtraLight200_Italic
![SourceSansPro_ExtraLight200_Italic](./1538944579d3bc333bfe34ed45c1db572897fcf695af75f4e45ef5ac42c3aa12.ttf.png)

##### SourceSansPro_Light300
![SourceSansPro_Light300](./bb276921895494650544883e21f7d2bc91ec918522ac3d355582b0cd472592cc.ttf.png)

##### SourceSansPro_Light300_Italic
![SourceSansPro_Light300_Italic](./c068f601e24f3e8ced3014cb3dc4a32022c06af8e27ca870d6c76432d280e75a.ttf.png)

##### SourceSansPro_Regular400
![SourceSansPro_Regular400](./6ed615e8d0355256e2d6d907b3addb929879c90c8383dd566b2208c79ffd16f7.ttf.png)

##### SourceSansPro_Regular400_Italic
![SourceSansPro_Regular400_Italic](./e35d7fde727174172e9689f4584ff9e4559a37ca0b39b096fa72f0f657b31bc9.ttf.png)

##### SourceSansPro_SemiBold600
![SourceSansPro_SemiBold600](./5629ccf5ed16fa41c51a964b882a8e1e1e395a714906a90567278bd0c439ecc1.ttf.png)

##### SourceSansPro_SemiBold600_Italic
![SourceSansPro_SemiBold600_Italic](./e8bcda13818deef42d6e19f3009f6e18a595746c5dcc1d35c56280c5dea32b21.ttf.png)

##### SourceSansPro_Bold700
![SourceSansPro_Bold700](./6b9e7872867a9a0fca2083e62b2c39727a93c81b736fb1e21cc1c29ba89008ff.ttf.png)

##### SourceSansPro_Bold700_Italic
![SourceSansPro_Bold700_Italic](./f417993b734490d591dd2a3f10022f8ff1a376876eeca00098baf25759b2522b.ttf.png)

##### SourceSansPro_Black900
![SourceSansPro_Black900](./1d969d176ba4ea2075fe69e5b9799e9dbc146889092823d49453241c80e93a2a.ttf.png)

##### SourceSansPro_Black900_Italic
![SourceSansPro_Black900_Italic](./954080abe4fffebb675bea9c34eb0d873cf25f8674e9d55cde4c9c962f44a421.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/source-sans-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Source Sans Pro page on Google Fonts](https://fonts.google.com/specimen/Source+Sans+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Source Sans Pro on Google Fonts](https://fonts.google.com/specimen/Source+Sans+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/source-sans-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/source-sans-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
