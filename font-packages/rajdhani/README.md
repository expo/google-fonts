# @expo-google-fonts/rajdhani

This package lets you use the [**Rajdhani**](https://fonts.google.com/specimen/Rajdhani) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Rajdhani

![Rajdhani](./font-family.png)

This font family contains [5 styles](#gallery).

- `Rajdhani_Light300`
- `Rajdhani_Regular400`
- `Rajdhani_Medium500`
- `Rajdhani_SemiBold600`
- `Rajdhani_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/rajdhani expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Rajdhani_Light300,
  Rajdhani_Regular400,
  Rajdhani_Medium500,
  Rajdhani_SemiBold600,
  Rajdhani_Bold700,
} from '@expo-google-fonts/rajdhani';

export default () => {
  let [fontsLoaded] = useFonts({
    Rajdhani_Light300,
    Rajdhani_Regular400,
    Rajdhani_Medium500,
    Rajdhani_SemiBold600,
    Rajdhani_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rajdhani_Light300' }}>
          Rajdhani_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rajdhani_Regular400' }}>
          Rajdhani_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rajdhani_Medium500' }}>
          Rajdhani_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rajdhani_SemiBold600' }}>
          Rajdhani_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rajdhani_Bold700' }}>
          Rajdhani_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Rajdhani_Light300
![Rajdhani_Light300](./5d3e322fc971c11dc62d2cb01d49ffb76c16b801c7811493250d84aa8f12fa3f.ttf.png)

##### Rajdhani_Regular400
![Rajdhani_Regular400](./28d153f34f1ea3bd1abf9d6639f49ee9ee3b8b01badde2e32892146d8196b19a.ttf.png)

##### Rajdhani_Medium500
![Rajdhani_Medium500](./d0e11c0858bfd9226f322293328602ca2c5a89cec03fd80c333f933e0b26e653.ttf.png)

##### Rajdhani_SemiBold600
![Rajdhani_SemiBold600](./2ab7a240fa08011c00222b91e955d71588ccf8d82ed43833580bf8a20082c836.ttf.png)

##### Rajdhani_Bold700
![Rajdhani_Bold700](./01025724bc7898c86c82d19ae1779cb44ca7492a947094eb0249653e3d26850a.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Rajdhani on Google Fonts](https://fonts.google.com/specimen/Rajdhani)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rajdhani)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rajdhani)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
