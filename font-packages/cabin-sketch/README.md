# @expo-google-fonts/cabin-sketch

This package lets you use the [**Cabin Sketch**](https://fonts.google.com/specimen/Cabin+Sketch) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cabin Sketch

![Cabin Sketch](./font-family.png)

This font family contains [2 styles](#gallery).

- `CabinSketch_Regular400`
- `CabinSketch_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cabin-sketch expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { CabinSketch_Regular400, CabinSketch_Bold700 } from '@expo-google-fonts/cabin-sketch';

export default () => {
  let [fontsLoaded] = useFonts({
    CabinSketch_Regular400,
    CabinSketch_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CabinSketch_Regular400' }}>
          CabinSketch_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CabinSketch_Bold700' }}>
          CabinSketch_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### CabinSketch_Regular400
![CabinSketch_Regular400](./c56ec3d2c6227ce0f5959e906b36dda6fbf2ea830ed4edeb9000ee53197c122e.ttf.png)

##### CabinSketch_Bold700
![CabinSketch_Bold700](./6dab969699fde26ddd2636960d9e77e5178036db4b98b1f3761df0e74e17ca88.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Cabin Sketch on Google Fonts](https://fonts.google.com/specimen/Cabin+Sketch)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cabin-sketch)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cabin-sketch)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
