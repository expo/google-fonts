# @expo-google-fonts/fondamento

This package lets you use the [**Fondamento**](https://fonts.google.com/specimen/Fondamento) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Fondamento

![Fondamento](./font-family.png)

This font family contains [2 styles](#gallery).

- `Fondamento_Regular400`
- `Fondamento_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/fondamento expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Fondamento_Regular400, Fondamento_Regular400_Italic } from '@expo-google-fonts/fondamento';

export default () => {
  let [fontsLoaded] = useFonts({
    Fondamento_Regular400,
    Fondamento_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fondamento_Regular400' }}>
          Fondamento_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fondamento_Regular400_Italic' }}>
          Fondamento_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Fondamento_Regular400
![Fondamento_Regular400](./75f9d66c336050a69b4366a5bd1cd8d8a0a5b7338dddd16b9af1f679ed3f6543.ttf.png)

##### Fondamento_Regular400_Italic
![Fondamento_Regular400_Italic](./78976bc375126e59b80ff99b8d26195e4332d5cc86505149fc21d183b60e8340.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Fondamento on Google Fonts](https://fonts.google.com/specimen/Fondamento)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fondamento)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fondamento)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
