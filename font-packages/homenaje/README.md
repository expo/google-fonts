# @expo-google-fonts/homenaje

This package lets you use the [**Homenaje**](https://fonts.google.com/specimen/Homenaje) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Homenaje

![Homenaje](./font-family.png)

This font family contains [1 style](#gallery).

- `Homenaje_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/homenaje expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Homenaje_Regular400 } from '@expo-google-fonts/homenaje';

export default () => {
  let [fontsLoaded] = useFonts({
    Homenaje_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Homenaje_Regular400' }}>
          Homenaje_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Homenaje_Regular400
![Homenaje_Regular400](./efaa8006929ef2ce2bc82593647ea2be59dcb513e048e4cb4b105cc66119d343.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Homenaje on Google Fonts](https://fonts.google.com/specimen/Homenaje)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/homenaje)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/homenaje)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
