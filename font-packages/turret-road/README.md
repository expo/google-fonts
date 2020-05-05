# @expo-google-fonts/turret-road

This package lets you use the [**Turret Road**](https://fonts.google.com/specimen/Turret+Road) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Turret Road

![Turret Road](./font-family.png)

This font family contains [6 styles](#gallery).

- `TurretRoad_ExtraLight200`
- `TurretRoad_Light300`
- `TurretRoad_Regular400`
- `TurretRoad_Medium500`
- `TurretRoad_Bold700`
- `TurretRoad_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/turret-road expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  TurretRoad_ExtraLight200,
  TurretRoad_Light300,
  TurretRoad_Regular400,
  TurretRoad_Medium500,
  TurretRoad_Bold700,
  TurretRoad_ExtraBold800,
} from '@expo-google-fonts/turret-road';

export default () => {
  let [fontsLoaded] = useFonts({
    TurretRoad_ExtraLight200,
    TurretRoad_Light300,
    TurretRoad_Regular400,
    TurretRoad_Medium500,
    TurretRoad_Bold700,
    TurretRoad_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'TurretRoad_ExtraLight200' }}>
          TurretRoad_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TurretRoad_Light300' }}>
          TurretRoad_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TurretRoad_Regular400' }}>
          TurretRoad_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TurretRoad_Medium500' }}>
          TurretRoad_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TurretRoad_Bold700' }}>
          TurretRoad_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'TurretRoad_ExtraBold800' }}>
          TurretRoad_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### TurretRoad_ExtraLight200
![TurretRoad_ExtraLight200](./1eb2f6296f0d09925f225ecec4142547ba09542fcc5069fe46fe0d8673c2b6a3.ttf.png)

##### TurretRoad_Light300
![TurretRoad_Light300](./e38827c14383deae6789dc0f07d95b6cbb5f0093dbd0d872fcd4e792c8903562.ttf.png)

##### TurretRoad_Regular400
![TurretRoad_Regular400](./a9fe5d3ea03de544cf78476012b66bd6ec9240790f7e13b7365bab19f4d7dceb.ttf.png)

##### TurretRoad_Medium500
![TurretRoad_Medium500](./6d3a6fdd0ccdd0665ca8b9ff99c62c571a5779139c039da471fb8b0d313b4c09.ttf.png)

##### TurretRoad_Bold700
![TurretRoad_Bold700](./1ba5b04b2f9d8431b7bd41642ebdd197b5d904f1002cafc12fa7828579bc9970.ttf.png)

##### TurretRoad_ExtraBold800
![TurretRoad_ExtraBold800](./b60bec40097c905a21009c6ad48cbe4c2c44f58ef95171a0a61efb0d6727a620.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Turret Road on Google Fonts](https://fonts.google.com/specimen/Turret+Road)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/turret-road)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/turret-road)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
