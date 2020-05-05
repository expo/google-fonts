# @expo-google-fonts/alegreya

This package lets you use the [**Alegreya**](https://fonts.google.com/specimen/Alegreya) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Alegreya

![Alegreya](./font-family.png)

This font family contains [6 styles](#gallery).

- `Alegreya_Regular400`
- `Alegreya_Regular400_Italic`
- `Alegreya_Bold700`
- `Alegreya_Bold700_Italic`
- `Alegreya_Black900`
- `Alegreya_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/alegreya expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Alegreya_Regular400,
  Alegreya_Regular400_Italic,
  Alegreya_Bold700,
  Alegreya_Bold700_Italic,
  Alegreya_Black900,
  Alegreya_Black900_Italic,
} from '@expo-google-fonts/alegreya';

export default () => {
  let [fontsLoaded] = useFonts({
    Alegreya_Regular400,
    Alegreya_Regular400_Italic,
    Alegreya_Bold700,
    Alegreya_Bold700_Italic,
    Alegreya_Black900,
    Alegreya_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Alegreya_Regular400' }}>
          Alegreya_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Alegreya_Regular400_Italic' }}>
          Alegreya_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Alegreya_Bold700' }}>
          Alegreya_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Alegreya_Bold700_Italic' }}>
          Alegreya_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Alegreya_Black900' }}>
          Alegreya_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Alegreya_Black900_Italic' }}>
          Alegreya_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Alegreya_Regular400
![Alegreya_Regular400](./530d78cba23c5d8e261ae9447b431e1fa550f9dc6563540a0c400be3f7ee88ab.ttf.png)

##### Alegreya_Regular400_Italic
![Alegreya_Regular400_Italic](./efba5f9b4495a2e911ec871cc4dfebb5dba60bc72d643c0dd346e8f90513f81a.ttf.png)

##### Alegreya_Bold700
![Alegreya_Bold700](./c00ad52d215d793be827a98a0661e13bbd3276c96c6aa5e6c8d71c9487a3da03.ttf.png)

##### Alegreya_Bold700_Italic
![Alegreya_Bold700_Italic](./bd912b8f7b092f81fc94ee9f3b769e57ecbb1a2443bfce7d405d2ad0c48c04b4.ttf.png)

##### Alegreya_Black900
![Alegreya_Black900](./f2d4a4c114f8e7ad762e764046f117bf954b1ba7797bbe6b6d754decc9bdbf99.ttf.png)

##### Alegreya_Black900_Italic
![Alegreya_Black900_Italic](./01804c5bcb6aedbda393491d82c14328987c7fb66a6ef8c8313aed5d683d3dad.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Alegreya on Google Fonts](https://fonts.google.com/specimen/Alegreya)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alegreya)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alegreya)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
