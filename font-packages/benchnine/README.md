# @expo-google-fonts/benchnine

This package lets you use the [**BenchNine**](https://fonts.google.com/specimen/BenchNine) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## BenchNine

![BenchNine](./font-family.png)

This font family contains [3 styles](#gallery).

- `BenchNine_Light300`
- `BenchNine_Regular400`
- `BenchNine_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/benchnine expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  BenchNine_Light300,
  BenchNine_Regular400,
  BenchNine_Bold700,
} from '@expo-google-fonts/benchnine';

export default () => {
  let [fontsLoaded] = useFonts({
    BenchNine_Light300,
    BenchNine_Regular400,
    BenchNine_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BenchNine_Light300' }}>
          BenchNine_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BenchNine_Regular400' }}>
          BenchNine_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BenchNine_Bold700' }}>
          BenchNine_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### BenchNine_Light300
![BenchNine_Light300](./819e7479fd3310e52e9754666e7a85aae97b6ea92363f425c93d1763341c5720.ttf.png)

##### BenchNine_Regular400
![BenchNine_Regular400](./6ff13f62cc4e1011ea688bc0bdad0ec34826a3c14cbc1b9ec0ed2b768a756be1.ttf.png)

##### BenchNine_Bold700
![BenchNine_Bold700](./ad7761d772dd04c7cf6c3ea55ea6f5bc9ca1540a2961a12251b37aee5d067022.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [BenchNine on Google Fonts](https://fonts.google.com/specimen/BenchNine)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/benchnine)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/benchnine)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
