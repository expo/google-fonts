# @expo-google-fonts/tinos

This package lets you use the [**Tinos**](https://fonts.google.com/specimen/Tinos) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Tinos

![Tinos](./font-family.png)

This font family contains [4 styles](#gallery).

- `Tinos_Regular400`
- `Tinos_Regular400_Italic`
- `Tinos_Bold700`
- `Tinos_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/tinos expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Tinos_Regular400,
  Tinos_Regular400_Italic,
  Tinos_Bold700,
  Tinos_Bold700_Italic,
} from '@expo-google-fonts/tinos';

export default () => {
  let [fontsLoaded] = useFonts({
    Tinos_Regular400,
    Tinos_Regular400_Italic,
    Tinos_Bold700,
    Tinos_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tinos_Regular400' }}>
          Tinos_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tinos_Regular400_Italic' }}>
          Tinos_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tinos_Bold700' }}>
          Tinos_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tinos_Bold700_Italic' }}>
          Tinos_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Tinos_Regular400
![Tinos_Regular400](./e3fb073d6d034814d7825107e1eae4eee8c1f169d87607f2df536bb4e4093ddf.ttf.png)

##### Tinos_Regular400_Italic
![Tinos_Regular400_Italic](./27dde2d7c4a3b5edc81ddca48874ffcb63a893df81e508e07a3565f70323fdaf.ttf.png)

##### Tinos_Bold700
![Tinos_Bold700](./dc658c10271c22ff1ad12fc220c05dadf678b1fa42443b874fd100f68afa117c.ttf.png)

##### Tinos_Bold700_Italic
![Tinos_Bold700_Italic](./839f50ca06adbf9bc25feef137791fcd9983139a76881789a290e71d685feab5.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Tinos on Google Fonts](https://fonts.google.com/specimen/Tinos)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tinos)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tinos)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
