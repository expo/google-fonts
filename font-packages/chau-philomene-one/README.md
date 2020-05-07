# @expo-google-fonts/chau-philomene-one

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/chau-philomene-one)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/chau-philomene-one)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/chau-philomene-one)

This package lets you use the [**Chau Philomene One**](https://fonts.google.com/specimen/Chau+Philomene+One) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Chau Philomene One

![Chau Philomene One](./font-family.png)

This font family contains [2 styles](#gallery).

- `ChauPhilomeneOne_Regular400`
- `ChauPhilomeneOne_Regular400_Italic`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/chau-philomene-one expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  ChauPhilomeneOne_Regular400,
  ChauPhilomeneOne_Regular400_Italic,
} from '@expo-google-fonts/chau-philomene-one';

export default () => {
  let [fontsLoaded] = useFonts({
    ChauPhilomeneOne_Regular400,
    ChauPhilomeneOne_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ChauPhilomeneOne_Regular400' }}>
          ChauPhilomeneOne_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'ChauPhilomeneOne_Regular400_Italic' }}>
          ChauPhilomeneOne_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### ChauPhilomeneOne_Regular400
![ChauPhilomeneOne_Regular400](./c44d00d1e4d0cfcf8ae3458b12571cdd000ce9df7849a29afa3dd3aadfdb6224.ttf.png)

##### ChauPhilomeneOne_Regular400_Italic
![ChauPhilomeneOne_Regular400_Italic](./5be1fbfb8c59a78422d618850745eeabe8bebc7aef35518a599c765168ad124a.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/chau-philomene-one` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Chau Philomene One page on Google Fonts](https://fonts.google.com/specimen/Chau+Philomene+One) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Chau Philomene One on Google Fonts](https://fonts.google.com/specimen/Chau+Philomene+One)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/chau-philomene-one)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/chau-philomene-one)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
