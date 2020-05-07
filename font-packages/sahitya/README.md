# @expo-google-fonts/sahitya

This package lets you use the [**Sahitya**](https://fonts.google.com/specimen/Sahitya) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Sahitya

![Sahitya](./font-family.png)

This font family contains [2 styles](#gallery).

- `Sahitya_Regular400`
- `Sahitya_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sahitya expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Sahitya_Regular400, Sahitya_Bold700 } from '@expo-google-fonts/sahitya';

export default () => {
  let [fontsLoaded] = useFonts({
    Sahitya_Regular400,
    Sahitya_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sahitya_Regular400' }}>
          Sahitya_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sahitya_Bold700' }}>
          Sahitya_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Sahitya_Regular400
![Sahitya_Regular400](./54146b1b18bccc5173c7f1cc478fd450cfb721e1b3d40df0ebd3dcf6711c6c48.ttf.png)

##### Sahitya_Bold700
![Sahitya_Bold700](./14383134c508c525e61d88a045189d98b08191a7cadfada9c90a82eea5d88ee6.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Sahitya on Google Fonts](https://fonts.google.com/specimen/Sahitya)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sahitya)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sahitya)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
