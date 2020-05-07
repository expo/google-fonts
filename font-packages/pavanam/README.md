# @expo-google-fonts/pavanam

This package lets you use the [**Pavanam**](https://fonts.google.com/specimen/Pavanam) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Pavanam

![Pavanam](./font-family.png)

This font family contains [1 style](#gallery).

- `Pavanam_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/pavanam expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Pavanam_Regular400 } from '@expo-google-fonts/pavanam';

export default () => {
  let [fontsLoaded] = useFonts({
    Pavanam_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Pavanam_Regular400' }}>
          Pavanam_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Pavanam_Regular400
![Pavanam_Regular400](./177d645082f388adf4ae3cf8413e270d77cbb5f7b24b7d521cce366a857de30a.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Pavanam on Google Fonts](https://fonts.google.com/specimen/Pavanam)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/pavanam)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/pavanam)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
