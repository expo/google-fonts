# @expo-google-fonts/cormorant-unicase

This package lets you use the [**Cormorant Unicase**](https://fonts.google.com/specimen/Cormorant+Unicase) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cormorant Unicase

![Cormorant Unicase](./font-family.png)

This font family contains [5 styles](#gallery).

- `CormorantUnicase_Light300`
- `CormorantUnicase_Regular400`
- `CormorantUnicase_Medium500`
- `CormorantUnicase_SemiBold600`
- `CormorantUnicase_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cormorant-unicase expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  CormorantUnicase_Light300,
  CormorantUnicase_Regular400,
  CormorantUnicase_Medium500,
  CormorantUnicase_SemiBold600,
  CormorantUnicase_Bold700,
} from '@expo-google-fonts/cormorant-unicase';

export default () => {
  let [fontsLoaded] = useFonts({
    CormorantUnicase_Light300,
    CormorantUnicase_Regular400,
    CormorantUnicase_Medium500,
    CormorantUnicase_SemiBold600,
    CormorantUnicase_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantUnicase_Light300' }}>
          CormorantUnicase_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantUnicase_Regular400' }}>
          CormorantUnicase_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantUnicase_Medium500' }}>
          CormorantUnicase_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantUnicase_SemiBold600' }}>
          CormorantUnicase_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantUnicase_Bold700' }}>
          CormorantUnicase_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### CormorantUnicase_Light300
![CormorantUnicase_Light300](./8b2f697aa9071850538a594d14122faff09a953f9e6b7897e5284ae9afe2c2b0.ttf.png)

##### CormorantUnicase_Regular400
![CormorantUnicase_Regular400](./a075bd869512a69bf9bfcb4b1987513cf71f5b0f8931adc373783f751c44553a.ttf.png)

##### CormorantUnicase_Medium500
![CormorantUnicase_Medium500](./fa07955427124a8c76b2621bceba09805d61cc57efe1c57120f9fd91a46e04ce.ttf.png)

##### CormorantUnicase_SemiBold600
![CormorantUnicase_SemiBold600](./34d64ee75c05feffc586b864ce55af03115c3fd6a3c3fabeeef53742fd991848.ttf.png)

##### CormorantUnicase_Bold700
![CormorantUnicase_Bold700](./ad4713eaa8a5f3198c0bed735f60707e4cb0c77de5643d8b4df7f61e8a8979a6.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Cormorant Unicase on Google Fonts](https://fonts.google.com/specimen/Cormorant+Unicase)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cormorant-unicase)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cormorant-unicase)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
