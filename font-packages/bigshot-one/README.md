# @expo-google-fonts/bigshot-one

This package lets you use the [**Bigshot One**](https://fonts.google.com/specimen/Bigshot+One) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Bigshot One

![Bigshot One](./font-family.png)

This font family contains [1 style](#gallery).

- `BigshotOne_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/bigshot-one expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { BigshotOne_Regular400 } from '@expo-google-fonts/bigshot-one';

export default () => {
  let [fontsLoaded] = useFonts({
    BigshotOne_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BigshotOne_Regular400' }}>
          BigshotOne_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### BigshotOne_Regular400
![BigshotOne_Regular400](./cd6b11ed5794f665b3e412e676ae624b63b086b93992d6c0b00c9afd26180c79.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Bigshot One on Google Fonts](https://fonts.google.com/specimen/Bigshot+One)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bigshot-one)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bigshot-one)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
