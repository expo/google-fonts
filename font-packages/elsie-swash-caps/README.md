# @expo-google-fonts/elsie-swash-caps

This package lets you use the [**Elsie Swash Caps**](https://fonts.google.com/specimen/Elsie+Swash+Caps) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Elsie Swash Caps

![Elsie Swash Caps](./font-family.png)

This font family contains [2 styles](#gallery).

- `ElsieSwashCaps_Regular400`
- `ElsieSwashCaps_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/elsie-swash-caps expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  ElsieSwashCaps_Regular400,
  ElsieSwashCaps_Black900,
} from '@expo-google-fonts/elsie-swash-caps';

export default () => {
  let [fontsLoaded] = useFonts({
    ElsieSwashCaps_Regular400,
    ElsieSwashCaps_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ElsieSwashCaps_Regular400' }}>
          ElsieSwashCaps_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ElsieSwashCaps_Black900' }}>
          ElsieSwashCaps_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### ElsieSwashCaps_Regular400
![ElsieSwashCaps_Regular400](./5073c3bee53b70fcf6b284c6882db47468b86bb95077b497007cfecf47b76bdb.ttf.png)

##### ElsieSwashCaps_Black900
![ElsieSwashCaps_Black900](./b3610e846ce9868a9ba2c54980426523ef730f265ae56366cb7fa77fd9cdce35.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Elsie Swash Caps on Google Fonts](https://fonts.google.com/specimen/Elsie+Swash+Caps)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/elsie-swash-caps)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/elsie-swash-caps)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
