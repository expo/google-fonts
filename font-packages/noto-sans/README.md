# @expo-google-fonts/noto-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans)

This package lets you use the [**Noto Sans**](https://fonts.google.com/specimen/Noto+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Noto Sans

![Noto Sans](./font-family.png)

This font family contains [4 styles](#gallery).

- `NotoSans_Regular400`
- `NotoSans_Regular400_Italic`
- `NotoSans_Bold700`
- `NotoSans_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  NotoSans_Regular400,
  NotoSans_Regular400_Italic,
  NotoSans_Bold700,
  NotoSans_Bold700_Italic,
} from '@expo-google-fonts/noto-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSans_Regular400,
    NotoSans_Regular400_Italic,
    NotoSans_Bold700,
    NotoSans_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSans_Regular400' }}>
          NotoSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSans_Regular400_Italic' }}>
          NotoSans_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSans_Bold700' }}>
          NotoSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSans_Bold700_Italic' }}>
          NotoSans_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### NotoSans_Regular400
![NotoSans_Regular400](./7ae7b625c88992d250a617f91f64e254aa6ea78ca904f1e5fc1f588f0bb9a4ef.ttf.png)

##### NotoSans_Regular400_Italic
![NotoSans_Regular400_Italic](./3b65d8f4cdb5997c9e205e125755bec66ef6cd73fadfbf1b6b8b8592d4a952e3.ttf.png)

##### NotoSans_Bold700
![NotoSans_Bold700](./f16366c45a8cac801cadd57c692f16cf4c967e3758cf25a911f7df101c23dc11.ttf.png)

##### NotoSans_Bold700_Italic
![NotoSans_Bold700_Italic](./2b36c5bae3f90cb9def112b8d15a224e0f0e4a0a75a5d83718690c6927872140.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans on Google Fonts](https://fonts.google.com/specimen/Noto+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
