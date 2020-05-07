# @expo-google-fonts/im-fell-french-canon

This package lets you use the [**IM Fell French Canon**](https://fonts.google.com/specimen/IM+Fell+French+Canon) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## IM Fell French Canon

![IM Fell French Canon](./font-family.png)

This font family contains [2 styles](#gallery).

- `IMFellFrenchCanon_Regular400`
- `IMFellFrenchCanon_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/im-fell-french-canon expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  IMFellFrenchCanon_Regular400,
  IMFellFrenchCanon_Regular400_Italic,
} from '@expo-google-fonts/im-fell-french-canon';

export default () => {
  let [fontsLoaded] = useFonts({
    IMFellFrenchCanon_Regular400,
    IMFellFrenchCanon_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'IMFellFrenchCanon_Regular400' }}>
          IMFellFrenchCanon_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'IMFellFrenchCanon_Regular400_Italic' }}>
          IMFellFrenchCanon_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### IMFellFrenchCanon_Regular400
![IMFellFrenchCanon_Regular400](./3a31b3ab35a73617ff634ad3017bc55e23ceb3daa2bf23c00c25afa3331aade8.ttf.png)

##### IMFellFrenchCanon_Regular400_Italic
![IMFellFrenchCanon_Regular400_Italic](./54332a8adf4fa4b9bd5ba4553b7f66a4e8c5ffb07d61701dbfee60bfac4394a4.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [IM Fell French Canon on Google Fonts](https://fonts.google.com/specimen/IM+Fell+French+Canon)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/im-fell-french-canon)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/im-fell-french-canon)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
