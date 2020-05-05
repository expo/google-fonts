# @expo-google-fonts/patua-one

This package lets you use the [**Patua One**](https://fonts.google.com/specimen/Patua+One) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Patua One

![Patua One](./font-family.png)

This font family contains [1 style](#gallery).

- `PatuaOne_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/patua-one expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { PatuaOne_Regular400 } from '@expo-google-fonts/patua-one';

export default () => {
  let [fontsLoaded] = useFonts({
    PatuaOne_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PatuaOne_Regular400' }}>
          PatuaOne_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### PatuaOne_Regular400
![PatuaOne_Regular400](./b23d7030cb223723e1ea6fe64ca5799ae86a5c9c7d7343dfce539e574a5004d0.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Patua One on Google Fonts](https://fonts.google.com/specimen/Patua+One)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/patua-one)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/patua-one)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
