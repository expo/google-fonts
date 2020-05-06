# @expo-google-fonts/palanquin-dark

This package lets you use the [**Palanquin Dark**](https://fonts.google.com/specimen/Palanquin+Dark) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Palanquin Dark

![Palanquin Dark](./font-family.png)

This font family contains [4 styles](#gallery).

- `PalanquinDark_Regular400`
- `PalanquinDark_Medium500`
- `PalanquinDark_SemiBold600`
- `PalanquinDark_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/palanquin-dark expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  PalanquinDark_Regular400,
  PalanquinDark_Medium500,
  PalanquinDark_SemiBold600,
  PalanquinDark_Bold700,
} from '@expo-google-fonts/palanquin-dark';

export default () => {
  let [fontsLoaded] = useFonts({
    PalanquinDark_Regular400,
    PalanquinDark_Medium500,
    PalanquinDark_SemiBold600,
    PalanquinDark_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PalanquinDark_Regular400' }}>
          PalanquinDark_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PalanquinDark_Medium500' }}>
          PalanquinDark_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PalanquinDark_SemiBold600' }}>
          PalanquinDark_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PalanquinDark_Bold700' }}>
          PalanquinDark_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### PalanquinDark_Regular400
![PalanquinDark_Regular400](./2a564d738b34f664cbdc4ec631b53907f90205b8dd0e177be158ebc30b67182a.ttf.png)

##### PalanquinDark_Medium500
![PalanquinDark_Medium500](./2741c907db3e5853a79489713ec11a8669cff876897076b98d70d302086296c9.ttf.png)

##### PalanquinDark_SemiBold600
![PalanquinDark_SemiBold600](./ee40721d326a2509669e0c3f41d846f48e353b774b15fb78426c4e812aadf4e9.ttf.png)

##### PalanquinDark_Bold700
![PalanquinDark_Bold700](./3f46195270b56b1dd32d5f48a0bb546a30e424b9d30ff4daabe395c2257a157e.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Palanquin Dark on Google Fonts](https://fonts.google.com/specimen/Palanquin+Dark)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/palanquin-dark)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/palanquin-dark)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
