# @expo-google-fonts/rosario

This package lets you use the [**Rosario**](https://fonts.google.com/specimen/Rosario) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Rosario

![Rosario](./font-family.png)

This font family contains [4 styles](#gallery).

- `Rosario_Regular400`
- `Rosario_Regular400_Italic`
- `Rosario_Bold700`
- `Rosario_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/rosario expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Rosario_Regular400,
  Rosario_Regular400_Italic,
  Rosario_Bold700,
  Rosario_Bold700_Italic,
} from '@expo-google-fonts/rosario';

export default () => {
  let [fontsLoaded] = useFonts({
    Rosario_Regular400,
    Rosario_Regular400_Italic,
    Rosario_Bold700,
    Rosario_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rosario_Regular400' }}>
          Rosario_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rosario_Regular400_Italic' }}>
          Rosario_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rosario_Bold700' }}>
          Rosario_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rosario_Bold700_Italic' }}>
          Rosario_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Rosario_Regular400
![Rosario_Regular400](./dc6413573a989dcba9ee4d0b7670f9eb53c458ddefc205ef6e0bd1e1c0be395e.ttf.png)

##### Rosario_Regular400_Italic
![Rosario_Regular400_Italic](./f099b91c7f453830c2471e0be3a576f1f58943f343e98b2d994a8f195364e51f.ttf.png)

##### Rosario_Bold700
![Rosario_Bold700](./eba2172f0e05afe4e99a14d3a265d3f334e6110105c10842f43387dc99341df6.ttf.png)

##### Rosario_Bold700_Italic
![Rosario_Bold700_Italic](./2fde400ab1655e1710a53bca2ab413a1504a54748fcac3b8ffea6135f4b8aabb.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Rosario on Google Fonts](https://fonts.google.com/specimen/Rosario)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rosario)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rosario)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
