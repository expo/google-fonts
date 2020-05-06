# @expo-google-fonts/port-lligat-sans

This package lets you use the [**Port Lligat Sans**](https://fonts.google.com/specimen/Port+Lligat+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Port Lligat Sans

![Port Lligat Sans](./font-family.png)

This font family contains [1 style](#gallery).

- `PortLligatSans_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/port-lligat-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { PortLligatSans_Regular400 } from '@expo-google-fonts/port-lligat-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    PortLligatSans_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PortLligatSans_Regular400' }}>
          PortLligatSans_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### PortLligatSans_Regular400
![PortLligatSans_Regular400](./84c1f23904d96ac1b51af7e38d0892c88f5a84b7bdd1c30685b9cb4d2213706d.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Port Lligat Sans on Google Fonts](https://fonts.google.com/specimen/Port+Lligat+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/port-lligat-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/port-lligat-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
