# @expo-google-fonts/basic

This package lets you use the [**Basic**](https://fonts.google.com/specimen/Basic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Basic

![Basic](./font-family.png)

This font family contains [1 style](#gallery).

- `Basic_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/basic expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Basic_Regular400 } from '@expo-google-fonts/basic';

export default () => {
  let [fontsLoaded] = useFonts({
    Basic_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Basic_Regular400' }}>
          Basic_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Basic_Regular400
![Basic_Regular400](./29cf0f576451b712f706b5f33a2e8e1b6e2be41ed145ebce30bcf8828ec37960.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Basic on Google Fonts](https://fonts.google.com/specimen/Basic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/basic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/basic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
