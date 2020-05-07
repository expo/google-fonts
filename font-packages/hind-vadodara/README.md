# @expo-google-fonts/hind-vadodara

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/hind-vadodara)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/hind-vadodara)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/hind-vadodara)

This package lets you use the [**Hind Vadodara**](https://fonts.google.com/specimen/Hind+Vadodara) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Hind Vadodara

![Hind Vadodara](./font-family.png)

This font family contains [5 styles](#gallery).

- `HindVadodara_Light300`
- `HindVadodara_Regular400`
- `HindVadodara_Medium500`
- `HindVadodara_SemiBold600`
- `HindVadodara_Bold700`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/hind-vadodara expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  HindVadodara_Light300,
  HindVadodara_Regular400,
  HindVadodara_Medium500,
  HindVadodara_SemiBold600,
  HindVadodara_Bold700,
} from '@expo-google-fonts/hind-vadodara';

export default () => {
  let [fontsLoaded] = useFonts({
    HindVadodara_Light300,
    HindVadodara_Regular400,
    HindVadodara_Medium500,
    HindVadodara_SemiBold600,
    HindVadodara_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindVadodara_Light300' }}>
          HindVadodara_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindVadodara_Regular400' }}>
          HindVadodara_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindVadodara_Medium500' }}>
          HindVadodara_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindVadodara_SemiBold600' }}>
          HindVadodara_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindVadodara_Bold700' }}>
          HindVadodara_Bold700
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### HindVadodara_Light300
![HindVadodara_Light300](./28ad92a17d66f3a0995bb68875c29dba3cdaf9fb43feb40a882e2eb2638b7d0e.ttf.png)

##### HindVadodara_Regular400
![HindVadodara_Regular400](./9ceba975d8428bc0815764806b013c8ab2629dd726f64eedc432d9089567ba31.ttf.png)

##### HindVadodara_Medium500
![HindVadodara_Medium500](./99808cdfa62f14d0fb695cf7a37fd7987ec1f14b71dfd11d87f428432e5641c7.ttf.png)

##### HindVadodara_SemiBold600
![HindVadodara_SemiBold600](./931dba7983e3c75f3bcfc57cbb486114347aa39bd48e261bf327bfc5d2b2f7cd.ttf.png)

##### HindVadodara_Bold700
![HindVadodara_Bold700](./e717f555c38c3a3665cdb7fc053e8b12904225205d5eab82b472417208c7c483.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/hind-vadodara` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Hind Vadodara page on Google Fonts](https://fonts.google.com/specimen/Hind+Vadodara) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Hind Vadodara on Google Fonts](https://fonts.google.com/specimen/Hind+Vadodara)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/hind-vadodara)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/hind-vadodara)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
