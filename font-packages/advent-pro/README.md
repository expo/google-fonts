# @expo-google-fonts/advent-pro

This package lets you use the [**Advent Pro**](https://fonts.google.com/specimen/Advent+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Advent Pro

![Advent Pro](./font-family.png)

This font family contains [7 styles](#gallery).

- `AdventPro_Thin100`
- `AdventPro_ExtraLight200`
- `AdventPro_Light300`
- `AdventPro_Regular400`
- `AdventPro_Medium500`
- `AdventPro_SemiBold600`
- `AdventPro_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/advent-pro expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  AdventPro_Thin100,
  AdventPro_ExtraLight200,
  AdventPro_Light300,
  AdventPro_Regular400,
  AdventPro_Medium500,
  AdventPro_SemiBold600,
  AdventPro_Bold700,
} from '@expo-google-fonts/advent-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    AdventPro_Thin100,
    AdventPro_ExtraLight200,
    AdventPro_Light300,
    AdventPro_Regular400,
    AdventPro_Medium500,
    AdventPro_SemiBold600,
    AdventPro_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AdventPro_Thin100' }}>
          AdventPro_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AdventPro_ExtraLight200' }}>
          AdventPro_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AdventPro_Light300' }}>
          AdventPro_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AdventPro_Regular400' }}>
          AdventPro_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AdventPro_Medium500' }}>
          AdventPro_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AdventPro_SemiBold600' }}>
          AdventPro_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AdventPro_Bold700' }}>
          AdventPro_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### AdventPro_Thin100
![AdventPro_Thin100](./4041ce69b488624d0653057137ff69ead9c9496be2059ede6a5056fd48780850.ttf.png)

##### AdventPro_ExtraLight200
![AdventPro_ExtraLight200](./20f54f798dd883fc2fab8294006f8201f1deed59b0abd0ad6c6864bb0062eb47.ttf.png)

##### AdventPro_Light300
![AdventPro_Light300](./23462d311ba53dbeac614ad5c99742d75264652538c2aaaea50fa3f9a37c1111.ttf.png)

##### AdventPro_Regular400
![AdventPro_Regular400](./c7084224aa15f7d31683e67bc3107aa12f725f4d20a10e9b65bbcec912162191.ttf.png)

##### AdventPro_Medium500
![AdventPro_Medium500](./21feddd6602a8e2daf17501cb32c4b27a26b6a357f3652ad357008c8a90f1646.ttf.png)

##### AdventPro_SemiBold600
![AdventPro_SemiBold600](./908b9b388605933b6e469878f17c52da7e2cd9cd6c4ec72a3e12aa5a9c3b9b79.ttf.png)

##### AdventPro_Bold700
![AdventPro_Bold700](./962b3ce8591b2ca225b23e65b3914233c576d21700e3f24c6b820230fe8424e0.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Advent Pro on Google Fonts](https://fonts.google.com/specimen/Advent+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/advent-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/advent-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
