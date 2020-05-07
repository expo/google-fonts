# @expo-google-fonts/east-sea-dokdo

This package lets you use the [**East Sea Dokdo**](https://fonts.google.com/specimen/East+Sea+Dokdo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## East Sea Dokdo

![East Sea Dokdo](./font-family.png)

This font family contains [1 style](#gallery).

- `EastSeaDokdo_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/east-sea-dokdo expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { EastSeaDokdo_Regular400 } from '@expo-google-fonts/east-sea-dokdo';

export default () => {
  let [fontsLoaded] = useFonts({
    EastSeaDokdo_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'EastSeaDokdo_Regular400' }}>
          EastSeaDokdo_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### EastSeaDokdo_Regular400
![EastSeaDokdo_Regular400](./28e44e5875cc0c761d9fa6492d1a738977cb5a555b57aa3016e44e2a138df2f7.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [East Sea Dokdo on Google Fonts](https://fonts.google.com/specimen/East+Sea+Dokdo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/east-sea-dokdo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/east-sea-dokdo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
