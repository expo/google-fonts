# @expo-google-fonts/trochut

This package lets you use the [**Trochut**](https://fonts.google.com/specimen/Trochut) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Trochut

![Trochut](./font-family.png)

This font family contains [3 styles](#gallery).

- `Trochut_Regular400`
- `Trochut_Regular400_Italic`
- `Trochut_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/trochut expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Trochut_Regular400,
  Trochut_Regular400_Italic,
  Trochut_Bold700,
} from '@expo-google-fonts/trochut';

export default () => {
  let [fontsLoaded] = useFonts({
    Trochut_Regular400,
    Trochut_Regular400_Italic,
    Trochut_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trochut_Regular400' }}>
          Trochut_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trochut_Regular400_Italic' }}>
          Trochut_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trochut_Bold700' }}>
          Trochut_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Trochut_Regular400
![Trochut_Regular400](./fb7ad314480eec04c8ff53ad7a24690495145d924a92be149c75ccd5fe144215.ttf.png)

##### Trochut_Regular400_Italic
![Trochut_Regular400_Italic](./05e2d11e0d53984525926d1c86d71eab21194ae2664a3696175f68fb9e8969de.ttf.png)

##### Trochut_Bold700
![Trochut_Bold700](./82633b54306a8a1649b8590f40a509a2808ff33ef157f6cc3f98d52130752914.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Trochut on Google Fonts](https://fonts.google.com/specimen/Trochut)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/trochut)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/trochut)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
