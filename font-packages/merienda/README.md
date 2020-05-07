# @expo-google-fonts/merienda

This package lets you use the [**Merienda**](https://fonts.google.com/specimen/Merienda) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Merienda

![Merienda](./font-family.png)

This font family contains [2 styles](#gallery).

- `Merienda_Regular400`
- `Merienda_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/merienda expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Merienda_Regular400, Merienda_Bold700 } from '@expo-google-fonts/merienda';

export default () => {
  let [fontsLoaded] = useFonts({
    Merienda_Regular400,
    Merienda_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Merienda_Regular400' }}>
          Merienda_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Merienda_Bold700' }}>
          Merienda_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Merienda_Regular400
![Merienda_Regular400](./1132399bc1f3e2caf41c69cc4f7c590c83da549f8e9b8cf43dadc262df733048.ttf.png)

##### Merienda_Bold700
![Merienda_Bold700](./5f177984e147fff648e2e2bd9ca6e74e13c2be2d6d14b466b154b51e93df5f14.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Merienda on Google Fonts](https://fonts.google.com/specimen/Merienda)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/merienda)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/merienda)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
