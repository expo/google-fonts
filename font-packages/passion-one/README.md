# @expo-google-fonts/passion-one

This package lets you use the [**Passion One**](https://fonts.google.com/specimen/Passion+One) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Passion One

![Passion One](./font-family.png)

This font family contains [3 styles](#gallery).

- `PassionOne_Regular400`
- `PassionOne_Bold700`
- `PassionOne_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/passion-one expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  PassionOne_Regular400,
  PassionOne_Bold700,
  PassionOne_Black900,
} from '@expo-google-fonts/passion-one';

export default () => {
  let [fontsLoaded] = useFonts({
    PassionOne_Regular400,
    PassionOne_Bold700,
    PassionOne_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PassionOne_Regular400' }}>
          PassionOne_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PassionOne_Bold700' }}>
          PassionOne_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PassionOne_Black900' }}>
          PassionOne_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### PassionOne_Regular400
![PassionOne_Regular400](./1f9e3f81509fa1087e3a4636d898f6ce048f4953bf6c06a6d79d9cb78115c03d.ttf.png)

##### PassionOne_Bold700
![PassionOne_Bold700](./567181e9763fb8cb33a51945378a8a2756c423cb05608d37fdc2e0d8ff170fa1.ttf.png)

##### PassionOne_Black900
![PassionOne_Black900](./351dd38c35e67c20b4ae84db1964391fd924cd245611616eacaf6b9e63113442.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Passion One on Google Fonts](https://fonts.google.com/specimen/Passion+One)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/passion-one)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/passion-one)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
