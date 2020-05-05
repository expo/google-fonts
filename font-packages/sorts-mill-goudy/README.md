# @expo-google-fonts/sorts-mill-goudy

This package lets you use the [**Sorts Mill Goudy**](https://fonts.google.com/specimen/Sorts+Mill+Goudy) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Sorts Mill Goudy

![Sorts Mill Goudy](./font-family.png)

This font family contains [2 styles](#gallery).

- `SortsMillGoudy_Regular400`
- `SortsMillGoudy_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/sorts-mill-goudy expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  SortsMillGoudy_Regular400,
  SortsMillGoudy_Regular400_Italic,
} from '@expo-google-fonts/sorts-mill-goudy';

export default () => {
  let [fontsLoaded] = useFonts({
    SortsMillGoudy_Regular400,
    SortsMillGoudy_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'SortsMillGoudy_Regular400' }}>
          SortsMillGoudy_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SortsMillGoudy_Regular400_Italic' }}>
          SortsMillGoudy_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### SortsMillGoudy_Regular400
![SortsMillGoudy_Regular400](./70d3ad626ef92c3b9eeaff7e3694af6d64f477a31ab242d11f98704e9903a065.ttf.png)

##### SortsMillGoudy_Regular400_Italic
![SortsMillGoudy_Regular400_Italic](./d8d1d17c5bffaec08a5c129dfdbd62c0a538de036da120d20edef29019f0b5bf.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Sorts Mill Goudy on Google Fonts](https://fonts.google.com/specimen/Sorts+Mill+Goudy)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sorts-mill-goudy)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sorts-mill-goudy)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
