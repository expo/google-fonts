# @expo-google-fonts/geostar

This package lets you use the [**Geostar**](https://fonts.google.com/specimen/Geostar) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Geostar

![Geostar](./font-family.png)

This font family contains [1 style](#gallery).

- `Geostar_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/geostar expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Geostar_Regular400 } from '@expo-google-fonts/geostar';

export default () => {
  let [fontsLoaded] = useFonts({
    Geostar_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Geostar_Regular400' }}>
          Geostar_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Geostar_Regular400
![Geostar_Regular400](./7b9967368c76fa8693221781a74e18323bde42a1df8fff30b1d5b2dd2e654dc5.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Geostar on Google Fonts](https://fonts.google.com/specimen/Geostar)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/geostar)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/geostar)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
