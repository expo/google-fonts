# @expo-google-fonts/comic-neue

This package lets you use the [**Comic Neue**](https://fonts.google.com/specimen/Comic+Neue) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Comic Neue

![Comic Neue](./font-family.png)

This font family contains [6 styles](#gallery).

- `ComicNeue_Light300`
- `ComicNeue_Light300_Italic`
- `ComicNeue_Regular400`
- `ComicNeue_Regular400_Italic`
- `ComicNeue_Bold700`
- `ComicNeue_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/comic-neue expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  ComicNeue_Light300,
  ComicNeue_Light300_Italic,
  ComicNeue_Regular400,
  ComicNeue_Regular400_Italic,
  ComicNeue_Bold700,
  ComicNeue_Bold700_Italic,
} from '@expo-google-fonts/comic-neue';

export default () => {
  let [fontsLoaded] = useFonts({
    ComicNeue_Light300,
    ComicNeue_Light300_Italic,
    ComicNeue_Regular400,
    ComicNeue_Regular400_Italic,
    ComicNeue_Bold700,
    ComicNeue_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ComicNeue_Light300' }}>
          ComicNeue_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ComicNeue_Light300_Italic' }}>
          ComicNeue_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ComicNeue_Regular400' }}>
          ComicNeue_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ComicNeue_Regular400_Italic' }}>
          ComicNeue_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ComicNeue_Bold700' }}>
          ComicNeue_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ComicNeue_Bold700_Italic' }}>
          ComicNeue_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### ComicNeue_Light300
![ComicNeue_Light300](./03e7eb4282b1113db14871908b545b6c90e66c01c71e25eebd86710af1675dc6.ttf.png)

##### ComicNeue_Light300_Italic
![ComicNeue_Light300_Italic](./e3f90ddc32d7c1de1802b67c219fcaa9a3363ffd6798d5135d4f660a1dda1b26.ttf.png)

##### ComicNeue_Regular400
![ComicNeue_Regular400](./9d7ebe6d4d4dfaab467fe4a423295d991fdfbf4d1989fcaad2f84c5f338ab089.ttf.png)

##### ComicNeue_Regular400_Italic
![ComicNeue_Regular400_Italic](./b5fb7946d3c3a90935983acd29701d85ed3c845dbea8a353f82e297d2c3c0fc6.ttf.png)

##### ComicNeue_Bold700
![ComicNeue_Bold700](./4b38da288c36361aa89d7bd2d0cb55585417eef4ae2b1c087d41fa9d3616eb70.ttf.png)

##### ComicNeue_Bold700_Italic
![ComicNeue_Bold700_Italic](./77d1c55b067195ccd5450ef65c41c0bc9adb016fdc56465fa2323318e59a9fef.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Comic Neue on Google Fonts](https://fonts.google.com/specimen/Comic+Neue)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/comic-neue)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/comic-neue)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
