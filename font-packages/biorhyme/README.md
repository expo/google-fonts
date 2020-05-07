# @expo-google-fonts/biorhyme

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/biorhyme)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/biorhyme)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/biorhyme)

This package lets you use the [**BioRhyme**](https://fonts.google.com/specimen/BioRhyme) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## BioRhyme

![BioRhyme](./font-family.png)

This font family contains [5 styles](#gallery).

- `BioRhyme_ExtraLight200`
- `BioRhyme_Light300`
- `BioRhyme_Regular400`
- `BioRhyme_Bold700`
- `BioRhyme_ExtraBold800`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/biorhyme expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  BioRhyme_ExtraLight200,
  BioRhyme_Light300,
  BioRhyme_Regular400,
  BioRhyme_Bold700,
  BioRhyme_ExtraBold800,
} from '@expo-google-fonts/biorhyme';

export default () => {
  let [fontsLoaded] = useFonts({
    BioRhyme_ExtraLight200,
    BioRhyme_Light300,
    BioRhyme_Regular400,
    BioRhyme_Bold700,
    BioRhyme_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhyme_ExtraLight200' }}>
          BioRhyme_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhyme_Light300' }}>
          BioRhyme_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhyme_Regular400' }}>
          BioRhyme_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhyme_Bold700' }}>
          BioRhyme_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhyme_ExtraBold800' }}>
          BioRhyme_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### BioRhyme_ExtraLight200
![BioRhyme_ExtraLight200](./8c7047e02059b7ea10893cf7bcfe3dc06e450dd3fb6000e05171462fedc43f7e.ttf.png)

##### BioRhyme_Light300
![BioRhyme_Light300](./b9ee5307ca507a88bed949ef452d4b6c835e503ef09b30cbb1ace6d65030e873.ttf.png)

##### BioRhyme_Regular400
![BioRhyme_Regular400](./bfe90585ffc1c3fc0d661d75c86187e9b6176836b56026b7882465f43a328616.ttf.png)

##### BioRhyme_Bold700
![BioRhyme_Bold700](./cd56fec3e00f732e0ff393a16cd304a5b4818b7b5bc437e4f418142a976284e6.ttf.png)

##### BioRhyme_ExtraBold800
![BioRhyme_ExtraBold800](./43c38cd7da3c0c61638db3dbfd450b28e4abcacc9a48011176274140cf681c2b.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/biorhyme` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [BioRhyme page on Google Fonts](https://fonts.google.com/specimen/BioRhyme) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [BioRhyme on Google Fonts](https://fonts.google.com/specimen/BioRhyme)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/biorhyme)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/biorhyme)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
