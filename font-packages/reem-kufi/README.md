# @expo-google-fonts/reem-kufi

This package lets you use the [**Reem Kufi**](https://fonts.google.com/specimen/Reem+Kufi) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Reem Kufi

![Reem Kufi](./font-family.png)

This font family contains [1 style](#gallery).

- `ReemKufi_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/reem-kufi expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ReemKufi_Regular400 } from '@expo-google-fonts/reem-kufi';

export default () => {
  let [fontsLoaded] = useFonts({
    ReemKufi_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ReemKufi_Regular400' }}>
          ReemKufi_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### ReemKufi_Regular400
![ReemKufi_Regular400](./ea139970598b2fe720c5ddab2a0e2483460759bc626931104aa1adb9c4ef6b9a.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Reem Kufi on Google Fonts](https://fonts.google.com/specimen/Reem+Kufi)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/reem-kufi)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/reem-kufi)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
