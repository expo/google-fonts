# @expo-google-fonts/underdog

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/underdog)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/underdog)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/underdog)

This package lets you use the [**Underdog**](https://fonts.google.com/specimen/Underdog) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Underdog

![Underdog](./font-family.png)

This font family contains [1 style](#gallery).

- `Underdog_Regular400`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/underdog expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Underdog_Regular400 } from '@expo-google-fonts/underdog';

export default () => {
  let [fontsLoaded] = useFonts({
    Underdog_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Underdog_Regular400' }}>
          Underdog_Regular400
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Underdog_Regular400
![Underdog_Regular400](./02f2cb9d97d94732f703fb34d2332cacf667304208fd69704a5e2ff904dcccff.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/underdog` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Underdog page on Google Fonts](https://fonts.google.com/specimen/Underdog) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Underdog on Google Fonts](https://fonts.google.com/specimen/Underdog)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/underdog)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/underdog)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
