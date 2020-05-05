# @expo-google-fonts/amaranth

This package lets you use the [**Amaranth**](https://fonts.google.com/specimen/Amaranth) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Amaranth

![Amaranth](./font-family.png)

This font family contains [4 styles](#gallery).

- `Amaranth_Regular400`
- `Amaranth_Regular400_Italic`
- `Amaranth_Bold700`
- `Amaranth_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/amaranth expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Amaranth_Regular400,
  Amaranth_Regular400_Italic,
  Amaranth_Bold700,
  Amaranth_Bold700_Italic,
} from '@expo-google-fonts/amaranth';

export default () => {
  let [fontsLoaded] = useFonts({
    Amaranth_Regular400,
    Amaranth_Regular400_Italic,
    Amaranth_Bold700,
    Amaranth_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amaranth_Regular400' }}>
          Amaranth_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amaranth_Regular400_Italic' }}>
          Amaranth_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amaranth_Bold700' }}>
          Amaranth_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amaranth_Bold700_Italic' }}>
          Amaranth_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Amaranth_Regular400
![Amaranth_Regular400](./4b8c69a7d5f0b230b1b010da8da3ad4ccb84f4dff4a1247a14af83392c9ecf64.ttf.png)

##### Amaranth_Regular400_Italic
![Amaranth_Regular400_Italic](./359639014bf096771cbebb373f2d347f8e1b44a2ef2b48556e1a21289dbc7eb5.ttf.png)

##### Amaranth_Bold700
![Amaranth_Bold700](./9b35625ebc301f471cd70df7575f4fc81597a8ab27dc321418707c40d8a99616.ttf.png)

##### Amaranth_Bold700_Italic
![Amaranth_Bold700_Italic](./48c74968a6ddedd92d0c4d4e05959d24a1ae124fce3ab60c793c5a331dddee10.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Amaranth on Google Fonts](https://fonts.google.com/specimen/Amaranth)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/amaranth)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/amaranth)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
