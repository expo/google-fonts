# @expo-google-fonts/roboto-slab

This package lets you use the [**Roboto Slab**](https://fonts.google.com/specimen/Roboto+Slab) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Roboto Slab

![Roboto Slab](./font-family.png)

This font family contains [4 styles](#gallery).

- `RobotoSlab_Thin100`
- `RobotoSlab_Light300`
- `RobotoSlab_Regular400`
- `RobotoSlab_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/roboto-slab expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  RobotoSlab_Thin100,
  RobotoSlab_Light300,
  RobotoSlab_Regular400,
  RobotoSlab_Bold700,
} from '@expo-google-fonts/roboto-slab';

export default () => {
  let [fontsLoaded] = useFonts({
    RobotoSlab_Thin100,
    RobotoSlab_Light300,
    RobotoSlab_Regular400,
    RobotoSlab_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoSlab_Thin100' }}>
          RobotoSlab_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoSlab_Light300' }}>
          RobotoSlab_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoSlab_Regular400' }}>
          RobotoSlab_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RobotoSlab_Bold700' }}>
          RobotoSlab_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### RobotoSlab_Thin100
![RobotoSlab_Thin100](./39d17021e49dab28b629d9c337f6d659da0a8b37bbfb8ae5ccfe9ee8f8d16878.ttf.png)

##### RobotoSlab_Light300
![RobotoSlab_Light300](./5b6bad2cf6f07f140e117c46893165483ad9dd034a75a4a090f1d9825992210e.ttf.png)

##### RobotoSlab_Regular400
![RobotoSlab_Regular400](./89c16ab4d99ac752daea2ecf31af3aae669305b909e558170bafd48dc9b8b9aa.ttf.png)

##### RobotoSlab_Bold700
![RobotoSlab_Bold700](./e87e906df2d8d66b24a131bef23415760d6d2afee657275eb91f1a3a5e5dcb5e.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Roboto Slab on Google Fonts](https://fonts.google.com/specimen/Roboto+Slab)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/roboto-slab)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/roboto-slab)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
