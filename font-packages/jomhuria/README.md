# @expo-google-fonts/jomhuria

This package lets you use the [**Jomhuria**](https://fonts.google.com/specimen/Jomhuria) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Jomhuria

![Jomhuria](./font-family.png)

This font family contains [1 style](#gallery).

- `Jomhuria_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/jomhuria expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Jomhuria_Regular400 } from '@expo-google-fonts/jomhuria';

export default () => {
  let [fontsLoaded] = useFonts({
    Jomhuria_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Jomhuria_Regular400' }}>
          Jomhuria_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Jomhuria_Regular400
![Jomhuria_Regular400](./6dce267ed457cc6f5511cd60d4fbbc941e2c0cf029959a91effbd93815f66d47.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Jomhuria on Google Fonts](https://fonts.google.com/specimen/Jomhuria)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/jomhuria)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/jomhuria)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
