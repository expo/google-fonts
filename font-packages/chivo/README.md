# @expo-google-fonts/chivo

This package lets you use the [**Chivo**](https://fonts.google.com/specimen/Chivo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Chivo

![Chivo](./font-family.png)

This font family contains [8 styles](#gallery).

- `Chivo_Light300`
- `Chivo_Light300_Italic`
- `Chivo_Regular400`
- `Chivo_Regular400_Italic`
- `Chivo_Bold700`
- `Chivo_Bold700_Italic`
- `Chivo_Black900`
- `Chivo_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/chivo expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Chivo_Light300,
  Chivo_Light300_Italic,
  Chivo_Regular400,
  Chivo_Regular400_Italic,
  Chivo_Bold700,
  Chivo_Bold700_Italic,
  Chivo_Black900,
  Chivo_Black900_Italic,
} from '@expo-google-fonts/chivo';

export default () => {
  let [fontsLoaded] = useFonts({
    Chivo_Light300,
    Chivo_Light300_Italic,
    Chivo_Regular400,
    Chivo_Regular400_Italic,
    Chivo_Bold700,
    Chivo_Bold700_Italic,
    Chivo_Black900,
    Chivo_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chivo_Light300' }}>
          Chivo_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chivo_Light300_Italic' }}>
          Chivo_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chivo_Regular400' }}>
          Chivo_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chivo_Regular400_Italic' }}>
          Chivo_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chivo_Bold700' }}>
          Chivo_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chivo_Bold700_Italic' }}>
          Chivo_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chivo_Black900' }}>
          Chivo_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chivo_Black900_Italic' }}>
          Chivo_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Chivo_Light300
![Chivo_Light300](./994635489f0d118a198cb7efcdd1b61cbd4431c9e6426fffad5b731c4d2c1a5c.ttf.png)

##### Chivo_Light300_Italic
![Chivo_Light300_Italic](./f512baee58b1fc81a387836a8de41c055d2bebbfde221bd5f6829c1db58d9baa.ttf.png)

##### Chivo_Regular400
![Chivo_Regular400](./c45551e766074f40061345617f0e07c5a4a2ecbd70ce90f3c7456284827c3184.ttf.png)

##### Chivo_Regular400_Italic
![Chivo_Regular400_Italic](./1940d6e1383f625468fbb0231dc6d8ea95eda2d8483e23e66e94d6bb05996ca2.ttf.png)

##### Chivo_Bold700
![Chivo_Bold700](./49e634b98df69d1812b9406be76ebe8c76888e0202ae16c267aff5f9897d279f.ttf.png)

##### Chivo_Bold700_Italic
![Chivo_Bold700_Italic](./eea6f18e9fa02d840e18d03dfe74e65437743472807f1f0a93bb11254419cdb4.ttf.png)

##### Chivo_Black900
![Chivo_Black900](./b16f1d6acd367f8f1dd75d71e56027975f5f4c661b7272c0ae41a0635d55908a.ttf.png)

##### Chivo_Black900_Italic
![Chivo_Black900_Italic](./da92d63af2ecddbae2e8cf92a528caebcba3ed94b7b00e2ab04d228c4622c806.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Chivo on Google Fonts](https://fonts.google.com/specimen/Chivo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/chivo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/chivo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
