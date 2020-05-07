# @expo-google-fonts/tillana

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tillana)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tillana)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tillana)

This package lets you use the [**Tillana**](https://fonts.google.com/specimen/Tillana) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Tillana

![Tillana](./font-family.png)

This font family contains [5 styles](#gallery).

- `Tillana_Regular400`
- `Tillana_Medium500`
- `Tillana_SemiBold600`
- `Tillana_Bold700`
- `Tillana_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/tillana expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Tillana_Regular400,
  Tillana_Medium500,
  Tillana_SemiBold600,
  Tillana_Bold700,
  Tillana_ExtraBold800,
} from '@expo-google-fonts/tillana';

export default () => {
  let [fontsLoaded] = useFonts({
    Tillana_Regular400,
    Tillana_Medium500,
    Tillana_SemiBold600,
    Tillana_Bold700,
    Tillana_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tillana_Regular400' }}>
          Tillana_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tillana_Medium500' }}>
          Tillana_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tillana_SemiBold600' }}>
          Tillana_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tillana_Bold700' }}>
          Tillana_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tillana_ExtraBold800' }}>
          Tillana_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Tillana_Regular400
![Tillana_Regular400](./f767b3a50e7fbd85244228fd72776e996704c5b833256c5fa56b782821e015af.ttf.png)

##### Tillana_Medium500
![Tillana_Medium500](./5aecdf23e36ca11770901c226daf192765931a12afd290bbf684884f9bbf1c7c.ttf.png)

##### Tillana_SemiBold600
![Tillana_SemiBold600](./a5f11d010b5bd339931701e1853b2788fccf7cb07bbf503ff03f027a3086f3f3.ttf.png)

##### Tillana_Bold700
![Tillana_Bold700](./aed658fc70549eb112a013dc7ce6145b1f2719ee7d6179a5c4fd7be399a68511.ttf.png)

##### Tillana_ExtraBold800
![Tillana_ExtraBold800](./df261f8eeab47304d5e83ee3d77bba8193f51bd098bab3370180417296143318.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/tillana` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tillana page on Google Fonts](https://fonts.google.com/specimen/Tillana) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tillana on Google Fonts](https://fonts.google.com/specimen/Tillana)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tillana)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tillana)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
