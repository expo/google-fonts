# @expo-google-fonts/londrina-outline

This package lets you use the [**Londrina Outline**](https://fonts.google.com/specimen/Londrina+Outline) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Londrina Outline

![Londrina Outline](./font-family.png)

This font family contains [1 style](#gallery).

- `LondrinaOutline_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/londrina-outline expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { LondrinaOutline_Regular400 } from '@expo-google-fonts/londrina-outline';

export default () => {
  let [fontsLoaded] = useFonts({
    LondrinaOutline_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'LondrinaOutline_Regular400' }}>
          LondrinaOutline_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### LondrinaOutline_Regular400
![LondrinaOutline_Regular400](./f2c1c90df8f0b2111b8b45fe4112b8016fcde0874de248c3bd10e4f63da86e57.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Londrina Outline on Google Fonts](https://fonts.google.com/specimen/Londrina+Outline)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/londrina-outline)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/londrina-outline)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
