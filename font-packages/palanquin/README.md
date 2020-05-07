# @expo-google-fonts/palanquin

This package lets you use the [**Palanquin**](https://fonts.google.com/specimen/Palanquin) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Palanquin

![Palanquin](./font-family.png)

This font family contains [7 styles](#gallery).

- `Palanquin_Thin100`
- `Palanquin_ExtraLight200`
- `Palanquin_Light300`
- `Palanquin_Regular400`
- `Palanquin_Medium500`
- `Palanquin_SemiBold600`
- `Palanquin_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/palanquin expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Palanquin_Thin100,
  Palanquin_ExtraLight200,
  Palanquin_Light300,
  Palanquin_Regular400,
  Palanquin_Medium500,
  Palanquin_SemiBold600,
  Palanquin_Bold700,
} from '@expo-google-fonts/palanquin';

export default () => {
  let [fontsLoaded] = useFonts({
    Palanquin_Thin100,
    Palanquin_ExtraLight200,
    Palanquin_Light300,
    Palanquin_Regular400,
    Palanquin_Medium500,
    Palanquin_SemiBold600,
    Palanquin_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Palanquin_Thin100' }}>
          Palanquin_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Palanquin_ExtraLight200' }}>
          Palanquin_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Palanquin_Light300' }}>
          Palanquin_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Palanquin_Regular400' }}>
          Palanquin_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Palanquin_Medium500' }}>
          Palanquin_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Palanquin_SemiBold600' }}>
          Palanquin_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Palanquin_Bold700' }}>
          Palanquin_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Palanquin_Thin100
![Palanquin_Thin100](./c2f2587b9d7e9715b99bbe03f6115a2dcf52f8cb016c7e31f06e26561f3f13bb.ttf.png)

##### Palanquin_ExtraLight200
![Palanquin_ExtraLight200](./e3ae6db39173fbbc643b90005a108980c36ea6111e91516ed3e754cd247f965d.ttf.png)

##### Palanquin_Light300
![Palanquin_Light300](./94dbed29146fdc39c8979eff474e5210368a5276c9c7b55706418b745036a240.ttf.png)

##### Palanquin_Regular400
![Palanquin_Regular400](./a3fd79ddbba4270727bcb4649e1015a2726418eef7abd8cb984139bca11f5df5.ttf.png)

##### Palanquin_Medium500
![Palanquin_Medium500](./c027a6ee638527b57eed686cb93382141e9da3ad55c331614b735f4b26dfe2f9.ttf.png)

##### Palanquin_SemiBold600
![Palanquin_SemiBold600](./e342fbd31bc4d7a837724b2e51ac0c6e4057d44809e8e984d2c72c0b0a3dc48a.ttf.png)

##### Palanquin_Bold700
![Palanquin_Bold700](./a1812757fe429bab601701c1010e05f49540ea857170789a8ee91e0fe1d5e9d2.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Palanquin on Google Fonts](https://fonts.google.com/specimen/Palanquin)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/palanquin)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/palanquin)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
