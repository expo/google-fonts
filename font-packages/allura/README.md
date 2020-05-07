# @expo-google-fonts/allura

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/allura)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/allura)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/allura)

This package lets you use the [**Allura**](https://fonts.google.com/specimen/Allura) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Allura

![Allura](./font-family.png)

This font family contains [1 style](#gallery).

- `Allura_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/allura expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Allura_Regular400 } from '@expo-google-fonts/allura';

export default () => {
  let [fontsLoaded] = useFonts({
    Allura_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Allura_Regular400' }}>
          Allura_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Allura_Regular400
![Allura_Regular400](./32adf6de6bc3ee14bedf4674a1020492d2c2e4a939883aa672ff9a31777f63ed.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/allura` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Allura page on Google Fonts](https://fonts.google.com/specimen/Allura) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Allura on Google Fonts](https://fonts.google.com/specimen/Allura)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/allura)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/allura)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
