# @expo-google-fonts/inconsolata

This package lets you use the [**Inconsolata**](https://fonts.google.com/specimen/Inconsolata) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Inconsolata

![Inconsolata](./font-family.png)

This font family contains [2 styles](#gallery).

- `Inconsolata_Regular400`
- `Inconsolata_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/inconsolata expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Inconsolata_Regular400, Inconsolata_Bold700 } from '@expo-google-fonts/inconsolata';

export default () => {
  let [fontsLoaded] = useFonts({
    Inconsolata_Regular400,
    Inconsolata_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Inconsolata_Regular400' }}>
          Inconsolata_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Inconsolata_Bold700' }}>
          Inconsolata_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Inconsolata_Regular400
![Inconsolata_Regular400](./7b710cb16b36b86fd08be8de67824345433e776ff152ce4d819f8dac26b76bb2.ttf.png)

##### Inconsolata_Bold700
![Inconsolata_Bold700](./499bfec42f5525e40e1acc5d044cce315e80cc9c1205db693cf68fd5a7b724d3.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Inconsolata on Google Fonts](https://fonts.google.com/specimen/Inconsolata)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/inconsolata)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/inconsolata)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
