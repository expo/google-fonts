# @expo-google-fonts/niconne

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/niconne)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/niconne)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/niconne)

This package lets you use the [**Niconne**](https://fonts.google.com/specimen/Niconne) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Niconne

![Niconne](./font-family.png)

This font family contains [1 style](#-gallery).

- `Niconne_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/niconne expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Niconne_Regular400 } from '@expo-google-fonts/niconne';

export default () => {
  let [fontsLoaded] = useFonts({
    Niconne_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Niconne_Regular400' }}>
          Niconne_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Niconne_Regular400
![Niconne_Regular400](./c5d99f37c7fc29904227e4a5909347b604c87dbe244293db4353ba24f5263d28.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/niconne` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Niconne page on Google Fonts](https://fonts.google.com/specimen/Niconne) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Niconne on Google Fonts](https://fonts.google.com/specimen/Niconne)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/niconne)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/niconne)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
