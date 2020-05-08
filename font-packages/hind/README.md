# @expo-google-fonts/hind

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/hind)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/hind)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/hind)

This package lets you use the [**Hind**](https://fonts.google.com/specimen/Hind) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Hind

![Hind](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Hind_Light300`
- `Hind_Regular400`
- `Hind_Medium500`
- `Hind_SemiBold600`
- `Hind_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/hind expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Hind_Light300,
  Hind_Regular400,
  Hind_Medium500,
  Hind_SemiBold600,
  Hind_Bold700,
} from '@expo-google-fonts/hind';

export default () => {
  let [fontsLoaded] = useFonts({
    Hind_Light300,
    Hind_Regular400,
    Hind_Medium500,
    Hind_SemiBold600,
    Hind_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Hind_Light300' }}>
          Hind_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Hind_Regular400' }}>
          Hind_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Hind_Medium500' }}>
          Hind_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Hind_SemiBold600' }}>
          Hind_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Hind_Bold700' }}>Hind_Bold700</Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Hind_Light300
![Hind_Light300](./fa60918477db30de0e2a697db644a3ada9014744668b10708e487b2731a95e70.ttf.png)

##### Hind_Regular400
![Hind_Regular400](./c6c2ab346a94eb5613fbc0721b8b1b9062968050182abaa239ca636a32911d90.ttf.png)

##### Hind_Medium500
![Hind_Medium500](./d4fd25d01c80707a336cb4b040f3a52767f1cd612f042572d044e0b575c4d05b.ttf.png)

##### Hind_SemiBold600
![Hind_SemiBold600](./98d33c7c6f79077dfb001ecff6aa383168fca5cebe664a277c74acff145e6685.ttf.png)

##### Hind_Bold700
![Hind_Bold700](./2e7dd62cde147432a10070b99d17f623f3c13f9c8796be3afa987f6e0707f030.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/hind` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Hind page on Google Fonts](https://fonts.google.com/specimen/Hind) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Hind on Google Fonts](https://fonts.google.com/specimen/Hind)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/hind)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/hind)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
