# @expo-google-fonts/source-serif-pro

This package lets you use the [**Source Serif Pro**](https://fonts.google.com/specimen/Source+Serif+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Source Serif Pro

![Source Serif Pro](./font-family.png)

This font family contains [3 styles](#gallery).

- `SourceSerifPro_Regular400`
- `SourceSerifPro_SemiBold600`
- `SourceSerifPro_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/source-serif-pro expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  SourceSerifPro_Regular400,
  SourceSerifPro_SemiBold600,
  SourceSerifPro_Bold700,
} from '@expo-google-fonts/source-serif-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    SourceSerifPro_Regular400,
    SourceSerifPro_SemiBold600,
    SourceSerifPro_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSerifPro_Regular400' }}>
          SourceSerifPro_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSerifPro_SemiBold600' }}>
          SourceSerifPro_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SourceSerifPro_Bold700' }}>
          SourceSerifPro_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### SourceSerifPro_Regular400
![SourceSerifPro_Regular400](./f87f7b82ba7f18f5fc9e92b9a88f9da0c847cee069182948fc67c6440c888949.ttf.png)

##### SourceSerifPro_SemiBold600
![SourceSerifPro_SemiBold600](./21ba3c9624cb12920db48bb25f0e1db9398acab0031d2ae8f13b8628f4d02740.ttf.png)

##### SourceSerifPro_Bold700
![SourceSerifPro_Bold700](./eb04de6aca072d01a88545fa409c6264d93f9b38f86a0ecd3a00708917085bd8.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Source Serif Pro on Google Fonts](https://fonts.google.com/specimen/Source+Serif+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/source-serif-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/source-serif-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
