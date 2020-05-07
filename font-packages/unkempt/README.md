# @expo-google-fonts/unkempt

This package lets you use the [**Unkempt**](https://fonts.google.com/specimen/Unkempt) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Unkempt

![Unkempt](./font-family.png)

This font family contains [2 styles](#gallery).

- `Unkempt_Regular400`
- `Unkempt_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/unkempt expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Unkempt_Regular400, Unkempt_Bold700 } from '@expo-google-fonts/unkempt';

export default () => {
  let [fontsLoaded] = useFonts({
    Unkempt_Regular400,
    Unkempt_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Unkempt_Regular400' }}>
          Unkempt_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Unkempt_Bold700' }}>
          Unkempt_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Unkempt_Regular400
![Unkempt_Regular400](./d4f6b7d5ae22a39c55f20fa7871901f21fd6c60c5a788fcf578cf326216a1052.ttf.png)

##### Unkempt_Bold700
![Unkempt_Bold700](./7fd27119b105972e2538d19f5b9fc686ccaf1e10de3d8c7ab7c7d3e0111700dd.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Unkempt on Google Fonts](https://fonts.google.com/specimen/Unkempt)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/unkempt)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/unkempt)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
