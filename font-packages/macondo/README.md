# @expo-google-fonts/macondo

This package lets you use the [**Macondo**](https://fonts.google.com/specimen/Macondo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Macondo

![Macondo](./font-family.png)

This font family contains [1 style](#gallery).

- `Macondo_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/macondo expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Macondo_Regular400 } from '@expo-google-fonts/macondo';

export default () => {
  let [fontsLoaded] = useFonts({
    Macondo_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Macondo_Regular400' }}>
          Macondo_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Macondo_Regular400
![Macondo_Regular400](./ecbf710a53864dd6307e2422a043a2a6904563df10226e7278fea2ef2d293dbd.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Macondo on Google Fonts](https://fonts.google.com/specimen/Macondo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/macondo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/macondo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
