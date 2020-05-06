# @expo-google-fonts/alex-brush

This package lets you use the [**Alex Brush**](https://fonts.google.com/specimen/Alex+Brush) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Alex Brush

![Alex Brush](./font-family.png)

This font family contains [1 style](#gallery).

- `AlexBrush_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/alex-brush expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { AlexBrush_Regular400 } from '@expo-google-fonts/alex-brush';

export default () => {
  let [fontsLoaded] = useFonts({
    AlexBrush_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlexBrush_Regular400' }}>
          AlexBrush_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### AlexBrush_Regular400
![AlexBrush_Regular400](./eb8044f112b9878ec59f0825d91a9f011fc4925ce2272737c02ce2be161c3efd.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Alex Brush on Google Fonts](https://fonts.google.com/specimen/Alex+Brush)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alex-brush)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alex-brush)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
