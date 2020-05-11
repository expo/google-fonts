# @expo-google-fonts/encode-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/encode-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/encode-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/encode-sans)

This package lets you use the [**Encode Sans**](https://fonts.google.com/specimen/Encode+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Encode Sans

![Encode Sans](./font-family.png)

This font family contains [9 styles](#-gallery).

- `EncodeSans_Thin100`
- `EncodeSans_ExtraLight200`
- `EncodeSans_Light300`
- `EncodeSans_Regular400`
- `EncodeSans_Medium500`
- `EncodeSans_SemiBold600`
- `EncodeSans_Bold700`
- `EncodeSans_ExtraBold800`
- `EncodeSans_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/encode-sans expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  EncodeSans_Thin100,
  EncodeSans_ExtraLight200,
  EncodeSans_Light300,
  EncodeSans_Regular400,
  EncodeSans_Medium500,
  EncodeSans_SemiBold600,
  EncodeSans_Bold700,
  EncodeSans_ExtraBold800,
  EncodeSans_Black900,
  useFonts,
} from '@expo-google-fonts/encode-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    EncodeSans_Thin100,
    EncodeSans_ExtraLight200,
    EncodeSans_Light300,
    EncodeSans_Regular400,
    EncodeSans_Medium500,
    EncodeSans_SemiBold600,
    EncodeSans_Bold700,
    EncodeSans_ExtraBold800,
    EncodeSans_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSans_Thin100' }}>
          EncodeSans_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSans_ExtraLight200' }}>
          EncodeSans_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSans_Light300' }}>
          EncodeSans_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSans_Regular400' }}>
          EncodeSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSans_Medium500' }}>
          EncodeSans_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSans_SemiBold600' }}>
          EncodeSans_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSans_Bold700' }}>
          EncodeSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSans_ExtraBold800' }}>
          EncodeSans_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSans_Black900' }}>
          EncodeSans_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### EncodeSans_Thin100
![EncodeSans_Thin100](./8c0f6eafec00e65a8d851e33e6e7e658e34b858ffc9f2ee39ec4bf972891fdf0.ttf.png)

##### EncodeSans_ExtraLight200
![EncodeSans_ExtraLight200](./3e78947fa53e3e3269b141c073de12ac5c7ad7767084452cf00d157c8c0a623b.ttf.png)

##### EncodeSans_Light300
![EncodeSans_Light300](./d81973e76c4a72a0723f8d83671c01e6a763e4c108b05dcb921abfe786017850.ttf.png)

##### EncodeSans_Regular400
![EncodeSans_Regular400](./726603f17d4dde111b9e7c3a3ceab5b48d4d9fa010f95c39308a05f7744918c7.ttf.png)

##### EncodeSans_Medium500
![EncodeSans_Medium500](./1e6070ed7f7df855034f826d501716460f36b8d45f7920099539a66c5ccc44b5.ttf.png)

##### EncodeSans_SemiBold600
![EncodeSans_SemiBold600](./7ed81c5a76ba3b44f2c7b4faaee7440283325e7bbe8efbbd976893ed9798166c.ttf.png)

##### EncodeSans_Bold700
![EncodeSans_Bold700](./f2bf7fce49ca2e3dd0d2fc1203ba30dea4e97ef171f1d693e9e21e23437dd8b8.ttf.png)

##### EncodeSans_ExtraBold800
![EncodeSans_ExtraBold800](./474df7202478321bede629db8dd5a6720566e44763591e17dc881df6a0b50144.ttf.png)

##### EncodeSans_Black900
![EncodeSans_Black900](./276a8dae33896588063889970f61a2b2ace3957ebb2024662e9637dc144c0e1a.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/encode-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Encode Sans page on Google Fonts](https://fonts.google.com/specimen/Encode+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Encode Sans on Google Fonts](https://fonts.google.com/specimen/Encode+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/encode-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/encode-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
