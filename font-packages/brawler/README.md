# @expo-google-fonts/brawler

This package lets you use the [**Brawler**](https://fonts.google.com/specimen/Brawler) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Brawler

![Brawler](./font-family.png)

This font family contains [1 style](#gallery).

- `Brawler_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/brawler expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Brawler_Regular400 } from '@expo-google-fonts/brawler';

export default () => {
  let [fontsLoaded] = useFonts({
    Brawler_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Brawler_Regular400' }}>
          Brawler_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Brawler_Regular400
![Brawler_Regular400](./58683ec3f93abe0d96615faa1fc7fce9f3297205572a4c8c6265d0be27219279.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Brawler on Google Fonts](https://fonts.google.com/specimen/Brawler)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/brawler)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/brawler)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
