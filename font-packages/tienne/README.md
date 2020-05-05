# @expo-google-fonts/tienne

This package lets you use the [**Tienne**](https://fonts.google.com/specimen/Tienne) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Tienne

![Tienne](./font-family.png)

This font family contains [3 styles](#gallery).

- `Tienne_Regular400`
- `Tienne_Bold700`
- `Tienne_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/tienne expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Tienne_Regular400, Tienne_Bold700, Tienne_Black900 } from '@expo-google-fonts/tienne';

export default () => {
  let [fontsLoaded] = useFonts({
    Tienne_Regular400,
    Tienne_Bold700,
    Tienne_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tienne_Regular400' }}>
          Tienne_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tienne_Bold700' }}>
          Tienne_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tienne_Black900' }}>
          Tienne_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Tienne_Regular400
![Tienne_Regular400](./e11280c2a4284740a646bbace5bf0a018fa38ead3ba5b33b7d6a55a646342b17.ttf.png)

##### Tienne_Bold700
![Tienne_Bold700](./62ae315531bcb85150dfefb27cbccbb30f331e0c091470a03aca49e6b1842e5f.ttf.png)

##### Tienne_Black900
![Tienne_Black900](./7882a99c925a597867e27f064c12db77d2185f452bd9b0bc83862549c886331c.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Tienne on Google Fonts](https://fonts.google.com/specimen/Tienne)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tienne)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tienne)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
