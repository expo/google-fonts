# @expo-google-fonts/cardo

This package lets you use the [**Cardo**](https://fonts.google.com/specimen/Cardo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cardo

![Cardo](./font-family.png)

This font family contains [3 styles](#gallery).

- `Cardo_Regular400`
- `Cardo_Regular400_Italic`
- `Cardo_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cardo expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Cardo_Regular400, Cardo_Regular400_Italic, Cardo_Bold700 } from '@expo-google-fonts/cardo';

export default () => {
  let [fontsLoaded] = useFonts({
    Cardo_Regular400,
    Cardo_Regular400_Italic,
    Cardo_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cardo_Regular400' }}>
          Cardo_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cardo_Regular400_Italic' }}>
          Cardo_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cardo_Bold700' }}>
          Cardo_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Cardo_Regular400
![Cardo_Regular400](./286e6a4bde92ea6087b503978338898808df924a3cdd8144741fa780d11603a2.ttf.png)

##### Cardo_Regular400_Italic
![Cardo_Regular400_Italic](./43bee56e6bb3d2ad574558a859227592f0b0ac881a70fd8f2cf74b808bb9be00.ttf.png)

##### Cardo_Bold700
![Cardo_Bold700](./10c0bab22a674656a3d5e94e05e64f9c6c6ea25acce0d0fc846f964985b142ce.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Cardo on Google Fonts](https://fonts.google.com/specimen/Cardo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cardo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cardo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
