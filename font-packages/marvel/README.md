# @expo-google-fonts/marvel

This package lets you use the [**Marvel**](https://fonts.google.com/specimen/Marvel) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Marvel

![Marvel](./font-family.png)

This font family contains [4 styles](#gallery).

- `Marvel_Regular400`
- `Marvel_Regular400_Italic`
- `Marvel_Bold700`
- `Marvel_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/marvel expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Marvel_Regular400,
  Marvel_Regular400_Italic,
  Marvel_Bold700,
  Marvel_Bold700_Italic,
} from '@expo-google-fonts/marvel';

export default () => {
  let [fontsLoaded] = useFonts({
    Marvel_Regular400,
    Marvel_Regular400_Italic,
    Marvel_Bold700,
    Marvel_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Marvel_Regular400' }}>
          Marvel_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Marvel_Regular400_Italic' }}>
          Marvel_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Marvel_Bold700' }}>
          Marvel_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Marvel_Bold700_Italic' }}>
          Marvel_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Marvel_Regular400
![Marvel_Regular400](./3762fad5facc07dfebad111a683192dbddb8dc02a4a43406d2c79a4303b11b95.ttf.png)

##### Marvel_Regular400_Italic
![Marvel_Regular400_Italic](./aaf0a4ec8425cfad4c7d8c41f37da8d7de878baf6fe877de46e9bb6a21afa443.ttf.png)

##### Marvel_Bold700
![Marvel_Bold700](./84edf56bb5528f4a5a646cc54e1df7f8b8f0acfcab08ba176e2140d05e3576dc.ttf.png)

##### Marvel_Bold700_Italic
![Marvel_Bold700_Italic](./3b41fd323f8f2702af4eac210e3a7aaccc576298b28256bf11c98cba436c90c9.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Marvel on Google Fonts](https://fonts.google.com/specimen/Marvel)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/marvel)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/marvel)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
