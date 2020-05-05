# @expo-google-fonts/linden-hill

This package lets you use the [**Linden Hill**](https://fonts.google.com/specimen/Linden+Hill) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Linden Hill

![Linden Hill](./font-family.png)

This font family contains [2 styles](#gallery).

- `LindenHill_Regular400`
- `LindenHill_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/linden-hill expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  LindenHill_Regular400,
  LindenHill_Regular400_Italic,
} from '@expo-google-fonts/linden-hill';

export default () => {
  let [fontsLoaded] = useFonts({
    LindenHill_Regular400,
    LindenHill_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'LindenHill_Regular400' }}>
          LindenHill_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LindenHill_Regular400_Italic' }}>
          LindenHill_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### LindenHill_Regular400
![LindenHill_Regular400](./f32a2438962995a6cced863561c2653cdbd06a951ca2497da2a9275d3fb83fcb.ttf.png)

##### LindenHill_Regular400_Italic
![LindenHill_Regular400_Italic](./312de55c585397a60a43de01015efb512a794ffb875c4edd86fcb2e8af39db39.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Linden Hill on Google Fonts](https://fonts.google.com/specimen/Linden+Hill)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/linden-hill)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/linden-hill)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
