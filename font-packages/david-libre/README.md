# @expo-google-fonts/david-libre

This package lets you use the [**David Libre**](https://fonts.google.com/specimen/David+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## David Libre

![David Libre](./font-family.png)

This font family contains [3 styles](#gallery).

- `DavidLibre_Regular400`
- `DavidLibre_Medium500`
- `DavidLibre_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/david-libre expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  DavidLibre_Regular400,
  DavidLibre_Medium500,
  DavidLibre_Bold700,
} from '@expo-google-fonts/david-libre';

export default () => {
  let [fontsLoaded] = useFonts({
    DavidLibre_Regular400,
    DavidLibre_Medium500,
    DavidLibre_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'DavidLibre_Regular400' }}>
          DavidLibre_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DavidLibre_Medium500' }}>
          DavidLibre_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DavidLibre_Bold700' }}>
          DavidLibre_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### DavidLibre_Regular400
![DavidLibre_Regular400](./8319053cbaa4074884c0364b74327548dbe246119e76a214a864d9d55a12353d.ttf.png)

##### DavidLibre_Medium500
![DavidLibre_Medium500](./288d258f0790230352ec2d9b0eef7f533d14554250a99cd0b5cfc80c349d2b38.ttf.png)

##### DavidLibre_Bold700
![DavidLibre_Bold700](./d02a7be354414e34512a70b5f00901c7c3c4e7df88c6bab47e8ed2e50c770c71.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [David Libre on Google Fonts](https://fonts.google.com/specimen/David+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/david-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/david-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
