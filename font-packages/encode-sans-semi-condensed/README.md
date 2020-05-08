# @expo-google-fonts/encode-sans-semi-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/encode-sans-semi-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/encode-sans-semi-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/encode-sans-semi-condensed)

This package lets you use the [**Encode Sans Semi Condensed**](https://fonts.google.com/specimen/Encode+Sans+Semi+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Encode Sans Semi Condensed

![Encode Sans Semi Condensed](./font-family.png)

This font family contains [9 styles](#-gallery).

- `EncodeSansSemiCondensed_Thin100`
- `EncodeSansSemiCondensed_ExtraLight200`
- `EncodeSansSemiCondensed_Light300`
- `EncodeSansSemiCondensed_Regular400`
- `EncodeSansSemiCondensed_Medium500`
- `EncodeSansSemiCondensed_SemiBold600`
- `EncodeSansSemiCondensed_Bold700`
- `EncodeSansSemiCondensed_ExtraBold800`
- `EncodeSansSemiCondensed_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/encode-sans-semi-condensed expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  EncodeSansSemiCondensed_Thin100,
  EncodeSansSemiCondensed_ExtraLight200,
  EncodeSansSemiCondensed_Light300,
  EncodeSansSemiCondensed_Regular400,
  EncodeSansSemiCondensed_Medium500,
  EncodeSansSemiCondensed_SemiBold600,
  EncodeSansSemiCondensed_Bold700,
  EncodeSansSemiCondensed_ExtraBold800,
  EncodeSansSemiCondensed_Black900,
} from '@expo-google-fonts/encode-sans-semi-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    EncodeSansSemiCondensed_Thin100,
    EncodeSansSemiCondensed_ExtraLight200,
    EncodeSansSemiCondensed_Light300,
    EncodeSansSemiCondensed_Regular400,
    EncodeSansSemiCondensed_Medium500,
    EncodeSansSemiCondensed_SemiBold600,
    EncodeSansSemiCondensed_Bold700,
    EncodeSansSemiCondensed_ExtraBold800,
    EncodeSansSemiCondensed_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiCondensed_Thin100' }}>
          EncodeSansSemiCondensed_Thin100
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'EncodeSansSemiCondensed_ExtraLight200',
          }}>
          EncodeSansSemiCondensed_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiCondensed_Light300' }}>
          EncodeSansSemiCondensed_Light300
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiCondensed_Regular400' }}>
          EncodeSansSemiCondensed_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiCondensed_Medium500' }}>
          EncodeSansSemiCondensed_Medium500
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiCondensed_SemiBold600' }}>
          EncodeSansSemiCondensed_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiCondensed_Bold700' }}>
          EncodeSansSemiCondensed_Bold700
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiCondensed_ExtraBold800' }}>
          EncodeSansSemiCondensed_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiCondensed_Black900' }}>
          EncodeSansSemiCondensed_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### EncodeSansSemiCondensed_Thin100
![EncodeSansSemiCondensed_Thin100](./05e33431ccd816003d590171a6110b72fc3f122c224c46c4f5339f4919b57873.ttf.png)

##### EncodeSansSemiCondensed_ExtraLight200
![EncodeSansSemiCondensed_ExtraLight200](./06726656f1a2937a42770740e0772bbcd1187d2bdbe2f5bfd42bab081286b643.ttf.png)

##### EncodeSansSemiCondensed_Light300
![EncodeSansSemiCondensed_Light300](./6ea764a1fca4cd3308fdc9f6284e890fe9ef8409ab991115bb08a4d0be1b544a.ttf.png)

##### EncodeSansSemiCondensed_Regular400
![EncodeSansSemiCondensed_Regular400](./ec67d15d3d449c0b0cf65c4fc57fbca88395b306ff4f30d409b4c8eb4d06abbf.ttf.png)

##### EncodeSansSemiCondensed_Medium500
![EncodeSansSemiCondensed_Medium500](./972df21a043f38bbac81d476692cdd0ccea7537ceac026fe837daf17c4836aa4.ttf.png)

##### EncodeSansSemiCondensed_SemiBold600
![EncodeSansSemiCondensed_SemiBold600](./654f95bfaeb0563e8a7622832f25016d47e3f8e60e4dd59c2ef9cf3835f5e1b1.ttf.png)

##### EncodeSansSemiCondensed_Bold700
![EncodeSansSemiCondensed_Bold700](./99c6ae51b272d20f915f0c4b8454b27ac9400423ba0a207b770a7dc3201f9d5c.ttf.png)

##### EncodeSansSemiCondensed_ExtraBold800
![EncodeSansSemiCondensed_ExtraBold800](./7d33b1fd6f457c91d58d3287767a4f0089fa3fd5ee2c18539c597f8a895b3646.ttf.png)

##### EncodeSansSemiCondensed_Black900
![EncodeSansSemiCondensed_Black900](./a7075bb5ddbdaca47f1356022fa375630ca868fc11d6ac6e53026c8bac0888b1.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/encode-sans-semi-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Encode Sans Semi Condensed page on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Semi+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Encode Sans Semi Condensed on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Semi+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/encode-sans-semi-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/encode-sans-semi-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
