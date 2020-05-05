# @expo-google-fonts/elsie

This package lets you use the [**Elsie**](https://fonts.google.com/specimen/Elsie) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Elsie

![Elsie](./font-family.png)

This font family contains [2 styles](#gallery).

- `Elsie_Regular400`
- `Elsie_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/elsie expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Elsie_Regular400, Elsie_Black900 } from '@expo-google-fonts/elsie';

export default () => {
  let [fontsLoaded] = useFonts({
    Elsie_Regular400,
    Elsie_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Elsie_Regular400' }}>
          Elsie_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Elsie_Black900' }}>
          Elsie_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Elsie_Regular400
![Elsie_Regular400](./bc0b83b9cbe3b25809361a2f4e495bdc9f10756f669072da3bc89689a42c8845.ttf.png)

##### Elsie_Black900
![Elsie_Black900](./9aca439d3b5c4abdf62ae59fb1a643c185345724ebdb002f388d25d7926f8f98.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Elsie on Google Fonts](https://fonts.google.com/specimen/Elsie)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/elsie)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/elsie)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
