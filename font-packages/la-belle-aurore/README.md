# @expo-google-fonts/la-belle-aurore

This package lets you use the [**La Belle Aurore**](https://fonts.google.com/specimen/La+Belle+Aurore) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## La Belle Aurore

![La Belle Aurore](./font-family.png)

This font family contains [1 style](#gallery).

- `LaBelleAurore_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/la-belle-aurore expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { LaBelleAurore_Regular400 } from '@expo-google-fonts/la-belle-aurore';

export default () => {
  let [fontsLoaded] = useFonts({
    LaBelleAurore_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'LaBelleAurore_Regular400' }}>
          LaBelleAurore_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### LaBelleAurore_Regular400
![LaBelleAurore_Regular400](./604ab650c1e1ab2e45459ba2bc1302e120467025e2f3a9946978bb7e7e0d03a3.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [La Belle Aurore on Google Fonts](https://fonts.google.com/specimen/La+Belle+Aurore)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/la-belle-aurore)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/la-belle-aurore)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
