# @expo-google-fonts/prata

This package lets you use the [**Prata**](https://fonts.google.com/specimen/Prata) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Prata

![Prata](./font-family.png)

This font family contains [1 style](#gallery).

- `Prata_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/prata expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Prata_Regular400 } from '@expo-google-fonts/prata';

export default () => {
  let [fontsLoaded] = useFonts({
    Prata_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Prata_Regular400' }}>
          Prata_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Prata_Regular400
![Prata_Regular400](./dae0ecee4b97ae6292786b6e9e7efc1c63cf85f8beaef215151813c08fd2aa02.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Prata on Google Fonts](https://fonts.google.com/specimen/Prata)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/prata)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/prata)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
