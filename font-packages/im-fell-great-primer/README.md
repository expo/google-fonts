# @expo-google-fonts/im-fell-great-primer

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/im-fell-great-primer)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/im-fell-great-primer)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/im-fell-great-primer)

This package lets you use the [**IM Fell Great Primer**](https://fonts.google.com/specimen/IM+Fell+Great+Primer) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## IM Fell Great Primer

![IM Fell Great Primer](./font-family.png)

This font family contains [2 styles](#gallery).

- `IMFellGreatPrimer_Regular400`
- `IMFellGreatPrimer_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/im-fell-great-primer expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  IMFellGreatPrimer_Regular400,
  IMFellGreatPrimer_Regular400_Italic,
} from '@expo-google-fonts/im-fell-great-primer';

export default () => {
  let [fontsLoaded] = useFonts({
    IMFellGreatPrimer_Regular400,
    IMFellGreatPrimer_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'IMFellGreatPrimer_Regular400' }}>
          IMFellGreatPrimer_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'IMFellGreatPrimer_Regular400_Italic' }}>
          IMFellGreatPrimer_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### IMFellGreatPrimer_Regular400
![IMFellGreatPrimer_Regular400](./fede2a25cf42680231c7bfb90da7306e0962092c8e1074fbfc44ef59289257ec.ttf.png)

##### IMFellGreatPrimer_Regular400_Italic
![IMFellGreatPrimer_Regular400_Italic](./020c8f65ef327b827d6e28ca2e4be8f019b4a81075f1c7c00a53993664b41b93.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/im-fell-great-primer` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IM Fell Great Primer page on Google Fonts](https://fonts.google.com/specimen/IM+Fell+Great+Primer) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IM Fell Great Primer on Google Fonts](https://fonts.google.com/specimen/IM+Fell+Great+Primer)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/im-fell-great-primer)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/im-fell-great-primer)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
