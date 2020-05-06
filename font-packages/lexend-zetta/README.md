# @expo-google-fonts/lexend-zetta

This package lets you use the [**Lexend Zetta**](https://fonts.google.com/specimen/Lexend+Zetta) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Lexend Zetta

![Lexend Zetta](./font-family.png)

This font family contains [1 style](#gallery).

- `LexendZetta_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/lexend-zetta expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { LexendZetta_Regular400 } from '@expo-google-fonts/lexend-zetta';

export default () => {
  let [fontsLoaded] = useFonts({
    LexendZetta_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'LexendZetta_Regular400' }}>
          LexendZetta_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### LexendZetta_Regular400
![LexendZetta_Regular400](./e6de0f389e45c6725bfc8b444ce22b404d8ef5f4649f41b979fdf5cb1125dfd1.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Lexend Zetta on Google Fonts](https://fonts.google.com/specimen/Lexend+Zetta)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lexend-zetta)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lexend-zetta)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
