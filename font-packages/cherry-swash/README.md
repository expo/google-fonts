# @expo-google-fonts/cherry-swash

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cherry-swash)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cherry-swash)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cherry-swash)

This package lets you use the [**Cherry Swash**](https://fonts.google.com/specimen/Cherry+Swash) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cherry Swash

![Cherry Swash](./font-family.png)

This font family contains [2 styles](#-gallery).

- `CherrySwash_Regular400`
- `CherrySwash_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cherry-swash expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { CherrySwash_Regular400, CherrySwash_Bold700 } from '@expo-google-fonts/cherry-swash';

export default () => {
  let [fontsLoaded] = useFonts({
    CherrySwash_Regular400,
    CherrySwash_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CherrySwash_Regular400' }}>
          CherrySwash_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CherrySwash_Bold700' }}>
          CherrySwash_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### CherrySwash_Regular400
![CherrySwash_Regular400](./c16f18e4a0ef56672f00dcd810fae50a7468eccc6174968c6890ca1ed1eb4dc0.ttf.png)

##### CherrySwash_Bold700
![CherrySwash_Bold700](./46fc53776950e3047f5b647b1819e4ec28a5521b733a7e614aa9d97562cb5371.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cherry-swash` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cherry Swash page on Google Fonts](https://fonts.google.com/specimen/Cherry+Swash) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cherry Swash on Google Fonts](https://fonts.google.com/specimen/Cherry+Swash)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cherry-swash)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cherry-swash)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
