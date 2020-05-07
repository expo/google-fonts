# @expo-google-fonts/cabin-condensed

This package lets you use the [**Cabin Condensed**](https://fonts.google.com/specimen/Cabin+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cabin Condensed

![Cabin Condensed](./font-family.png)

This font family contains [4 styles](#gallery).

- `CabinCondensed_Regular400`
- `CabinCondensed_Medium500`
- `CabinCondensed_SemiBold600`
- `CabinCondensed_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cabin-condensed expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  CabinCondensed_Regular400,
  CabinCondensed_Medium500,
  CabinCondensed_SemiBold600,
  CabinCondensed_Bold700,
} from '@expo-google-fonts/cabin-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    CabinCondensed_Regular400,
    CabinCondensed_Medium500,
    CabinCondensed_SemiBold600,
    CabinCondensed_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CabinCondensed_Regular400' }}>
          CabinCondensed_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CabinCondensed_Medium500' }}>
          CabinCondensed_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CabinCondensed_SemiBold600' }}>
          CabinCondensed_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CabinCondensed_Bold700' }}>
          CabinCondensed_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### CabinCondensed_Regular400
![CabinCondensed_Regular400](./8864cf658e1904654fb267649af1a35b07c0f9e7b2df523910efcfa047857270.ttf.png)

##### CabinCondensed_Medium500
![CabinCondensed_Medium500](./19d7c8b72085fd1898042b6adfa002bee67aa85565ea042e3383c6d9718262f3.ttf.png)

##### CabinCondensed_SemiBold600
![CabinCondensed_SemiBold600](./204e4e214a76e3cc970598f75636fbe098a6541146bb02dd3d1ec67c8e155e5b.ttf.png)

##### CabinCondensed_Bold700
![CabinCondensed_Bold700](./8b3d243ed807d45b1666f9a3866bc69260a7d81fe656a1d0fc9335302b4d82fa.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Cabin Condensed on Google Fonts](https://fonts.google.com/specimen/Cabin+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cabin-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cabin-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
