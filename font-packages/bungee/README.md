# @expo-google-fonts/bungee

This package lets you use the [**Bungee**](https://fonts.google.com/specimen/Bungee) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Bungee

![Bungee](./font-family.png)

This font family contains [1 style](#gallery).

- `Bungee_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/bungee expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Bungee_Regular400 } from '@expo-google-fonts/bungee';

export default () => {
  let [fontsLoaded] = useFonts({
    Bungee_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Bungee_Regular400' }}>
          Bungee_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Bungee_Regular400
![Bungee_Regular400](./ee34fb3fe185999f9942b2b39a37688866c1a4e25eab17c7a67765e7f47f6dbe.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Bungee on Google Fonts](https://fonts.google.com/specimen/Bungee)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bungee)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bungee)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
