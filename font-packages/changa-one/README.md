# @expo-google-fonts/changa-one

This package lets you use the [**Changa One**](https://fonts.google.com/specimen/Changa+One) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Changa One

![Changa One](./font-family.png)

This font family contains [2 styles](#gallery).

- `ChangaOne_Regular400`
- `ChangaOne_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/changa-one expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ChangaOne_Regular400, ChangaOne_Regular400_Italic } from '@expo-google-fonts/changa-one';

export default () => {
  let [fontsLoaded] = useFonts({
    ChangaOne_Regular400,
    ChangaOne_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ChangaOne_Regular400' }}>
          ChangaOne_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ChangaOne_Regular400_Italic' }}>
          ChangaOne_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### ChangaOne_Regular400
![ChangaOne_Regular400](./55a043f0a2eb34269cfb137a6203fdc338019e9bdaabee1e685c6b37495cb962.ttf.png)

##### ChangaOne_Regular400_Italic
![ChangaOne_Regular400_Italic](./241077b802e7b6209a41ea93aae98aa81d9f09e6f78fce924c863af6ca96b529.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Changa One on Google Fonts](https://fonts.google.com/specimen/Changa+One)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/changa-one)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/changa-one)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
