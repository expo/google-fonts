# @expo-google-fonts/arsenal

This package lets you use the [**Arsenal**](https://fonts.google.com/specimen/Arsenal) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Arsenal

![Arsenal](./font-family.png)

This font family contains [4 styles](#gallery).

- `Arsenal_Regular400`
- `Arsenal_Regular400_Italic`
- `Arsenal_Bold700`
- `Arsenal_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/arsenal expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Arsenal_Regular400,
  Arsenal_Regular400_Italic,
  Arsenal_Bold700,
  Arsenal_Bold700_Italic,
} from '@expo-google-fonts/arsenal';

export default () => {
  let [fontsLoaded] = useFonts({
    Arsenal_Regular400,
    Arsenal_Regular400_Italic,
    Arsenal_Bold700,
    Arsenal_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arsenal_Regular400' }}>
          Arsenal_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arsenal_Regular400_Italic' }}>
          Arsenal_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arsenal_Bold700' }}>
          Arsenal_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arsenal_Bold700_Italic' }}>
          Arsenal_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Arsenal_Regular400
![Arsenal_Regular400](./7b13a735c3c27289a74f4e934b380f078f89568b2633c5d8386e97a97d46158c.ttf.png)

##### Arsenal_Regular400_Italic
![Arsenal_Regular400_Italic](./f687cc6b9b17ac45aaf3391fbe649c2e1607804ce3ab85daddf9669f796d0a79.ttf.png)

##### Arsenal_Bold700
![Arsenal_Bold700](./0ac62eb1c6ee28d30c2dacea06acdbec9c72bcbfdca1f76a873b8a2c18ac8ae6.ttf.png)

##### Arsenal_Bold700_Italic
![Arsenal_Bold700_Italic](./41b9ba2384a037e4ec361896e5868107cfa8535ab8befda2d9666584884aca80.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Arsenal on Google Fonts](https://fonts.google.com/specimen/Arsenal)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/arsenal)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/arsenal)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
