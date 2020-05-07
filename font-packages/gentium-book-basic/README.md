# @expo-google-fonts/gentium-book-basic

This package lets you use the [**Gentium Book Basic**](https://fonts.google.com/specimen/Gentium+Book+Basic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Gentium Book Basic

![Gentium Book Basic](./font-family.png)

This font family contains [4 styles](#gallery).

- `GentiumBookBasic_Regular400`
- `GentiumBookBasic_Regular400_Italic`
- `GentiumBookBasic_Bold700`
- `GentiumBookBasic_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/gentium-book-basic expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  GentiumBookBasic_Regular400,
  GentiumBookBasic_Regular400_Italic,
  GentiumBookBasic_Bold700,
  GentiumBookBasic_Bold700_Italic,
} from '@expo-google-fonts/gentium-book-basic';

export default () => {
  let [fontsLoaded] = useFonts({
    GentiumBookBasic_Regular400,
    GentiumBookBasic_Regular400_Italic,
    GentiumBookBasic_Bold700,
    GentiumBookBasic_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'GentiumBookBasic_Regular400' }}>
          GentiumBookBasic_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'GentiumBookBasic_Regular400_Italic' }}>
          GentiumBookBasic_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GentiumBookBasic_Bold700' }}>
          GentiumBookBasic_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GentiumBookBasic_Bold700_Italic' }}>
          GentiumBookBasic_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### GentiumBookBasic_Regular400
![GentiumBookBasic_Regular400](./0323cf4ee5a40f059eff7a114c130fd29fb414699c37336d6d305d42e3d30318.ttf.png)

##### GentiumBookBasic_Regular400_Italic
![GentiumBookBasic_Regular400_Italic](./105db1c75307402ef0aaf8126c049e1910ec90f6a89c2745ac1fff1eb7525d03.ttf.png)

##### GentiumBookBasic_Bold700
![GentiumBookBasic_Bold700](./743cd21e49c299921cf5cdf719c179e0adc85a19aa73a142726805c1cb607f82.ttf.png)

##### GentiumBookBasic_Bold700_Italic
![GentiumBookBasic_Bold700_Italic](./73ca1eff2db69f993bfff34753f6f216404bceaeb657dbf84734a8bce6f279a5.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Gentium Book Basic on Google Fonts](https://fonts.google.com/specimen/Gentium+Book+Basic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gentium-book-basic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gentium-book-basic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
