# @expo-google-fonts/hind-madurai

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/hind-madurai)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/hind-madurai)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/hind-madurai)

This package lets you use the [**Hind Madurai**](https://fonts.google.com/specimen/Hind+Madurai) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Hind Madurai

![Hind Madurai](./font-family.png)

This font family contains [5 styles](#gallery).

- `HindMadurai_Light300`
- `HindMadurai_Regular400`
- `HindMadurai_Medium500`
- `HindMadurai_SemiBold600`
- `HindMadurai_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/hind-madurai expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  HindMadurai_Light300,
  HindMadurai_Regular400,
  HindMadurai_Medium500,
  HindMadurai_SemiBold600,
  HindMadurai_Bold700,
} from '@expo-google-fonts/hind-madurai';

export default () => {
  let [fontsLoaded] = useFonts({
    HindMadurai_Light300,
    HindMadurai_Regular400,
    HindMadurai_Medium500,
    HindMadurai_SemiBold600,
    HindMadurai_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindMadurai_Light300' }}>
          HindMadurai_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindMadurai_Regular400' }}>
          HindMadurai_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindMadurai_Medium500' }}>
          HindMadurai_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindMadurai_SemiBold600' }}>
          HindMadurai_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindMadurai_Bold700' }}>
          HindMadurai_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### HindMadurai_Light300
![HindMadurai_Light300](./5d2a60f4ad6943bf7f1de4b16722cf8992b893d91bdb242860538507d4514dfa.ttf.png)

##### HindMadurai_Regular400
![HindMadurai_Regular400](./fe0b759733d5d95da02f65af60da858c2e45e9fc35332036694fef1e4f2369aa.ttf.png)

##### HindMadurai_Medium500
![HindMadurai_Medium500](./367a1897906f0dafe97990639330a1ad8058b45f8d8deae93db5e40a9ae90f44.ttf.png)

##### HindMadurai_SemiBold600
![HindMadurai_SemiBold600](./559d4bdf4c6fc62a412864ae9323ea997294ef17fda3b84684d928c0e042c1a0.ttf.png)

##### HindMadurai_Bold700
![HindMadurai_Bold700](./59964f77b9fded7f3b4030894b5bde3bf552e70132670a0108ec2218ae31fb9b.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/hind-madurai` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Hind Madurai page on Google Fonts](https://fonts.google.com/specimen/Hind+Madurai) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Hind Madurai on Google Fonts](https://fonts.google.com/specimen/Hind+Madurai)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/hind-madurai)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/hind-madurai)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
