# @expo-google-fonts/cinzel-decorative

This package lets you use the [**Cinzel Decorative**](https://fonts.google.com/specimen/Cinzel+Decorative) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Cinzel Decorative

![Cinzel Decorative](./font-family.png)

This font family contains [3 styles](#gallery).

- `CinzelDecorative_Regular400`
- `CinzelDecorative_Bold700`
- `CinzelDecorative_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/cinzel-decorative expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  CinzelDecorative_Regular400,
  CinzelDecorative_Bold700,
  CinzelDecorative_Black900,
} from '@expo-google-fonts/cinzel-decorative';

export default () => {
  let [fontsLoaded] = useFonts({
    CinzelDecorative_Regular400,
    CinzelDecorative_Bold700,
    CinzelDecorative_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CinzelDecorative_Regular400' }}>
          CinzelDecorative_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CinzelDecorative_Bold700' }}>
          CinzelDecorative_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CinzelDecorative_Black900' }}>
          CinzelDecorative_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### CinzelDecorative_Regular400
![CinzelDecorative_Regular400](./e2559504f7da1fc2410b4eca9cb5ca6fee8c1ead7c3920a0b225ef4f1da9034f.ttf.png)

##### CinzelDecorative_Bold700
![CinzelDecorative_Bold700](./3a01d62b7c7d50b908e2fd62beb09363fb5e99ea2f21e0e79f71e5a6c356ceba.ttf.png)

##### CinzelDecorative_Black900
![CinzelDecorative_Black900](./a9e463550cabc5d5d694e24c136e6d235212011e58c21d523229960a16bc5148.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Cinzel Decorative on Google Fonts](https://fonts.google.com/specimen/Cinzel+Decorative)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cinzel-decorative)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cinzel-decorative)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
