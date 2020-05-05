# @expo-google-fonts/molle

This package lets you use the [**Molle**](https://fonts.google.com/specimen/Molle) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Molle

![Molle](./font-family.png)

This font family contains [1 style](#gallery).

- `Molle_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/molle expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Molle_Regular400_Italic } from '@expo-google-fonts/molle';

export default () => {
  let [fontsLoaded] = useFonts({
    Molle_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Molle_Regular400_Italic' }}>
          Molle_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Molle_Regular400_Italic
![Molle_Regular400_Italic](./d081c5d8d7d19361eaa68e5c05b211b519fa2d27ca94a3ec76da0a39f880acb9.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Molle on Google Fonts](https://fonts.google.com/specimen/Molle)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/molle)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/molle)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
