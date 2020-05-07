# @expo-google-fonts/amiri

This package lets you use the [**Amiri**](https://fonts.google.com/specimen/Amiri) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Amiri

![Amiri](./font-family.png)

This font family contains [4 styles](#gallery).

- `Amiri_Regular400`
- `Amiri_Regular400_Italic`
- `Amiri_Bold700`
- `Amiri_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/amiri expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Amiri_Regular400,
  Amiri_Regular400_Italic,
  Amiri_Bold700,
  Amiri_Bold700_Italic,
} from '@expo-google-fonts/amiri';

export default () => {
  let [fontsLoaded] = useFonts({
    Amiri_Regular400,
    Amiri_Regular400_Italic,
    Amiri_Bold700,
    Amiri_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amiri_Regular400' }}>
          Amiri_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amiri_Regular400_Italic' }}>
          Amiri_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amiri_Bold700' }}>
          Amiri_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amiri_Bold700_Italic' }}>
          Amiri_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Amiri_Regular400
![Amiri_Regular400](./15af380107efd8a082b372d1ba8027d5fd6d4720ccf7f7ce48345b845cfb83b6.ttf.png)

##### Amiri_Regular400_Italic
![Amiri_Regular400_Italic](./03496500b8efdd151ca91912b003f23e04fcb45a8d39cee588e4ea47b61fc052.ttf.png)

##### Amiri_Bold700
![Amiri_Bold700](./a1f6fcfa01fc6084132c66ff5b8da7b655fbf82dae7a9200c4471400281678bb.ttf.png)

##### Amiri_Bold700_Italic
![Amiri_Bold700_Italic](./9d9add54ab339fd5ca1f0b2fbda1117e04758800cefa39fa72d5f1e38b7a2e27.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Amiri on Google Fonts](https://fonts.google.com/specimen/Amiri)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/amiri)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/amiri)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
