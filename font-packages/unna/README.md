# @expo-google-fonts/unna

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/unna)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/unna)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/unna)

This package lets you use the [**Unna**](https://fonts.google.com/specimen/Unna) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Unna

![Unna](./font-family.png)

This font family contains [4 styles](#gallery).

- `Unna_Regular400`
- `Unna_Regular400_Italic`
- `Unna_Bold700`
- `Unna_Bold700_Italic`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/unna expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Unna_Regular400,
  Unna_Regular400_Italic,
  Unna_Bold700,
  Unna_Bold700_Italic,
} from '@expo-google-fonts/unna';

export default () => {
  let [fontsLoaded] = useFonts({
    Unna_Regular400,
    Unna_Regular400_Italic,
    Unna_Bold700,
    Unna_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Unna_Regular400' }}>
          Unna_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Unna_Regular400_Italic' }}>
          Unna_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Unna_Bold700' }}>Unna_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Unna_Bold700_Italic' }}>
          Unna_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Unna_Regular400
![Unna_Regular400](./aa20b27f175098965dc2897d6bb836199b5df9ae3a2e04ce93c359976f4ad15b.ttf.png)

##### Unna_Regular400_Italic
![Unna_Regular400_Italic](./adf583a9103ab9e6d88d247e15e1b9eee56b751099e349c84f7c344391ba5365.ttf.png)

##### Unna_Bold700
![Unna_Bold700](./4ea1c7e13a6450b0389fe43811640a115ceff510dce477813d552533bb8c2a1d.ttf.png)

##### Unna_Bold700_Italic
![Unna_Bold700_Italic](./2c998279cfb60a24fb17f126e193378afe16e6056a7b57ac4cd78b2047759fd8.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/unna` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Unna page on Google Fonts](https://fonts.google.com/specimen/Unna) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Unna on Google Fonts](https://fonts.google.com/specimen/Unna)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/unna)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/unna)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
