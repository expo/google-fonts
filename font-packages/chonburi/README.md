# @expo-google-fonts/chonburi

This package lets you use the [**Chonburi**](https://fonts.google.com/specimen/Chonburi) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Chonburi

![Chonburi](./font-family.png)

This font family contains [1 style](#gallery).

- `Chonburi_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/chonburi expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Chonburi_Regular400 } from '@expo-google-fonts/chonburi';

export default () => {
  let [fontsLoaded] = useFonts({
    Chonburi_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chonburi_Regular400' }}>
          Chonburi_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Chonburi_Regular400
![Chonburi_Regular400](./b8e4b1d59bd57981915ee60262422c0d7b7bc237ec938d181c684425e608baca.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Chonburi on Google Fonts](https://fonts.google.com/specimen/Chonburi)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/chonburi)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/chonburi)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
