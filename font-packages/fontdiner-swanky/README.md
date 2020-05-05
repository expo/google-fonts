# @expo-google-fonts/fontdiner-swanky

This package lets you use the [**Fontdiner Swanky**](https://fonts.google.com/specimen/Fontdiner+Swanky) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Fontdiner Swanky

![Fontdiner Swanky](./font-family.png)

This font family contains [1 style](#gallery).

- `FontdinerSwanky_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/fontdiner-swanky expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { FontdinerSwanky_Regular400 } from '@expo-google-fonts/fontdiner-swanky';

export default () => {
  let [fontsLoaded] = useFonts({
    FontdinerSwanky_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'FontdinerSwanky_Regular400' }}>
          FontdinerSwanky_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### FontdinerSwanky_Regular400
![FontdinerSwanky_Regular400](./bf7bb77a0222af06961048f7335a7c3ced76ac59796882a14738b145a87f9b7a.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Fontdiner Swanky on Google Fonts](https://fonts.google.com/specimen/Fontdiner+Swanky)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fontdiner-swanky)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fontdiner-swanky)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
