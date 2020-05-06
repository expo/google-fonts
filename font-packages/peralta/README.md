# @expo-google-fonts/peralta

This package lets you use the [**Peralta**](https://fonts.google.com/specimen/Peralta) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Peralta

![Peralta](./font-family.png)

This font family contains [1 style](#gallery).

- `Peralta_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/peralta expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Peralta_Regular400 } from '@expo-google-fonts/peralta';

export default () => {
  let [fontsLoaded] = useFonts({
    Peralta_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Peralta_Regular400' }}>
          Peralta_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Peralta_Regular400
![Peralta_Regular400](./28a0d3b695c9ecde1fe0ab5e4dceac96b21749fe6a3df062847e363b47af3360.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Peralta on Google Fonts](https://fonts.google.com/specimen/Peralta)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/peralta)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/peralta)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
