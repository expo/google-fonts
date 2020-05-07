# @expo-google-fonts/quantico

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/quantico)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/quantico)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/quantico)

This package lets you use the [**Quantico**](https://fonts.google.com/specimen/Quantico) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Quantico

![Quantico](./font-family.png)

This font family contains [4 styles](#gallery).

- `Quantico_Regular400`
- `Quantico_Regular400_Italic`
- `Quantico_Bold700`
- `Quantico_Bold700_Italic`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/quantico expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Quantico_Regular400,
  Quantico_Regular400_Italic,
  Quantico_Bold700,
  Quantico_Bold700_Italic,
} from '@expo-google-fonts/quantico';

export default () => {
  let [fontsLoaded] = useFonts({
    Quantico_Regular400,
    Quantico_Regular400_Italic,
    Quantico_Bold700,
    Quantico_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Quantico_Regular400' }}>
          Quantico_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Quantico_Regular400_Italic' }}>
          Quantico_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Quantico_Bold700' }}>
          Quantico_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Quantico_Bold700_Italic' }}>
          Quantico_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Quantico_Regular400
![Quantico_Regular400](./c0e68a0bf4434bcaf5078482638325be95f9ff8d23e161320e71396c3bac24db.ttf.png)

##### Quantico_Regular400_Italic
![Quantico_Regular400_Italic](./8dc51f4e759adff1e4ef04d9489decee6534f253a8c586119e29e6ac5d4ba3e8.ttf.png)

##### Quantico_Bold700
![Quantico_Bold700](./893455159a698723c49ac3c7b21b2eab8d58a8ae07a566c4b1aa1d49d301b100.ttf.png)

##### Quantico_Bold700_Italic
![Quantico_Bold700_Italic](./1021a5020ebf627e4f792a27cf1af37913a9f7f26454ac4cc914f0f78b08df22.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/quantico` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Quantico page on Google Fonts](https://fonts.google.com/specimen/Quantico) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Quantico on Google Fonts](https://fonts.google.com/specimen/Quantico)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/quantico)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/quantico)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
