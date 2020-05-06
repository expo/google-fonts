# @expo-google-fonts/pt-serif-caption

This package lets you use the [**PT Serif Caption**](https://fonts.google.com/specimen/PT+Serif+Caption) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## PT Serif Caption

![PT Serif Caption](./font-family.png)

This font family contains [2 styles](#gallery).

- `PTSerifCaption_Regular400`
- `PTSerifCaption_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/pt-serif-caption expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  PTSerifCaption_Regular400,
  PTSerifCaption_Regular400_Italic,
} from '@expo-google-fonts/pt-serif-caption';

export default () => {
  let [fontsLoaded] = useFonts({
    PTSerifCaption_Regular400,
    PTSerifCaption_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PTSerifCaption_Regular400' }}>
          PTSerifCaption_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PTSerifCaption_Regular400_Italic' }}>
          PTSerifCaption_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### PTSerifCaption_Regular400
![PTSerifCaption_Regular400](./fa2de071d21315555c75861f438b09fdfc9205ed9845c49d401903c6db245582.ttf.png)

##### PTSerifCaption_Regular400_Italic
![PTSerifCaption_Regular400_Italic](./0d238ee69704d0810493bff87f27c3236c6c9b81abda84fba39091e70f47eb26.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [PT Serif Caption on Google Fonts](https://fonts.google.com/specimen/PT+Serif+Caption)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/pt-serif-caption)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/pt-serif-caption)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
