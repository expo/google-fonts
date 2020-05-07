# @expo-google-fonts/erica-one

This package lets you use the [**Erica One**](https://fonts.google.com/specimen/Erica+One) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Erica One

![Erica One](./font-family.png)

This font family contains [1 style](#gallery).

- `EricaOne_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/erica-one expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { EricaOne_Regular400 } from '@expo-google-fonts/erica-one';

export default () => {
  let [fontsLoaded] = useFonts({
    EricaOne_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'EricaOne_Regular400' }}>
          EricaOne_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### EricaOne_Regular400
![EricaOne_Regular400](./718a969fb44854ce221ced461f15a49e4e53dea2478eb4fb6bac911b5dc5a99b.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Erica One on Google Fonts](https://fonts.google.com/specimen/Erica+One)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/erica-one)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/erica-one)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
