# @expo-google-fonts/great-vibes

This package lets you use the [**Great Vibes**](https://fonts.google.com/specimen/Great+Vibes) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Great Vibes

![Great Vibes](./font-family.png)

This font family contains [1 style](#gallery).

- `GreatVibes_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/great-vibes expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { GreatVibes_Regular400 } from '@expo-google-fonts/great-vibes';

export default () => {
  let [fontsLoaded] = useFonts({
    GreatVibes_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'GreatVibes_Regular400' }}>
          GreatVibes_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### GreatVibes_Regular400
![GreatVibes_Regular400](./a4131255cb3cb73cefc120a8d68c6888fa33a5c24045934a0353f0c199fe254d.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Great Vibes on Google Fonts](https://fonts.google.com/specimen/Great+Vibes)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/great-vibes)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/great-vibes)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
