# @expo-google-fonts/red-hat-text

This package lets you use the [**Red Hat Text**](https://fonts.google.com/specimen/Red+Hat+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Red Hat Text

![Red Hat Text](./font-family.png)

This font family contains [6 styles](#gallery).

- `RedHatText_Regular400`
- `RedHatText_Regular400_Italic`
- `RedHatText_Medium500`
- `RedHatText_Medium500_Italic`
- `RedHatText_Bold700`
- `RedHatText_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/red-hat-text expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  RedHatText_Regular400,
  RedHatText_Regular400_Italic,
  RedHatText_Medium500,
  RedHatText_Medium500_Italic,
  RedHatText_Bold700,
  RedHatText_Bold700_Italic,
} from '@expo-google-fonts/red-hat-text';

export default () => {
  let [fontsLoaded] = useFonts({
    RedHatText_Regular400,
    RedHatText_Regular400_Italic,
    RedHatText_Medium500,
    RedHatText_Medium500_Italic,
    RedHatText_Bold700,
    RedHatText_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatText_Regular400' }}>
          RedHatText_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatText_Regular400_Italic' }}>
          RedHatText_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatText_Medium500' }}>
          RedHatText_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatText_Medium500_Italic' }}>
          RedHatText_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatText_Bold700' }}>
          RedHatText_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatText_Bold700_Italic' }}>
          RedHatText_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### RedHatText_Regular400
![RedHatText_Regular400](./0d9ffb6cd7ed3ba3a171dc3f14fc4f0ee80d0bcc276de998f2d1856e2e4c46bc.ttf.png)

##### RedHatText_Regular400_Italic
![RedHatText_Regular400_Italic](./c25033ec3d2ae9b4a79da58b3a841070303dba586f0797ab0d60afcd8d5e6708.ttf.png)

##### RedHatText_Medium500
![RedHatText_Medium500](./8e6613e0c2b79e3e7adfce20e339e92aa65b3b932d8daed7102603d8a7e05352.ttf.png)

##### RedHatText_Medium500_Italic
![RedHatText_Medium500_Italic](./492f537d5c3ba80c637f66cd970d7ab47e7cdf85b3daa0783ae5b96ea8a95770.ttf.png)

##### RedHatText_Bold700
![RedHatText_Bold700](./0ed0cf791ad1be4c2b900b22803db61988f37e96e044682319e45bce7a859b91.ttf.png)

##### RedHatText_Bold700_Italic
![RedHatText_Bold700_Italic](./be2de719ea5a677cf21fed0bf32ac84f816db39db4d91e04de07bd8bfcf2d8d7.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Red Hat Text on Google Fonts](https://fonts.google.com/specimen/Red+Hat+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/red-hat-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/red-hat-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
