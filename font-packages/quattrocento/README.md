# @expo-google-fonts/quattrocento

This package lets you use the [**Quattrocento**](https://fonts.google.com/specimen/Quattrocento) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Quattrocento

![Quattrocento](./font-family.png)

This font family contains [2 styles](#gallery).

- `Quattrocento_Regular400`
- `Quattrocento_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/quattrocento expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Quattrocento_Regular400, Quattrocento_Bold700 } from '@expo-google-fonts/quattrocento';

export default () => {
  let [fontsLoaded] = useFonts({
    Quattrocento_Regular400,
    Quattrocento_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Quattrocento_Regular400' }}>
          Quattrocento_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Quattrocento_Bold700' }}>
          Quattrocento_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Quattrocento_Regular400
![Quattrocento_Regular400](./5889732ed96c5175bebb886a2f99f90cbf93d54ad643f7cf5376b4532c385aaa.ttf.png)

##### Quattrocento_Bold700
![Quattrocento_Bold700](./72919cef5349b9fa016e032e20becd479cf50e5b1a159f0b68747631e333ae6c.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Quattrocento on Google Fonts](https://fonts.google.com/specimen/Quattrocento)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/quattrocento)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/quattrocento)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
