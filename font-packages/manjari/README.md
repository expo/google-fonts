# @expo-google-fonts/manjari

This package lets you use the [**Manjari**](https://fonts.google.com/specimen/Manjari) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Manjari

![Manjari](./font-family.png)

This font family contains [3 styles](#gallery).

- `Manjari_Thin100`
- `Manjari_Regular400`
- `Manjari_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/manjari expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Manjari_Thin100, Manjari_Regular400, Manjari_Bold700 } from '@expo-google-fonts/manjari';

export default () => {
  let [fontsLoaded] = useFonts({
    Manjari_Thin100,
    Manjari_Regular400,
    Manjari_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manjari_Thin100' }}>
          Manjari_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manjari_Regular400' }}>
          Manjari_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manjari_Bold700' }}>
          Manjari_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Manjari_Thin100
![Manjari_Thin100](./bf27671bb835dda0357f930bf36e8187a3b84c55eee29c45942c1f24658669b6.ttf.png)

##### Manjari_Regular400
![Manjari_Regular400](./1f336f99d4a94b987c207d844c5dcf944f0499c38fa5136e75debe864ea9cb43.ttf.png)

##### Manjari_Bold700
![Manjari_Bold700](./3679ad318e4f3587d288eeeedd62d875b904a491a6163aecc418b38e359be2d4.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Manjari on Google Fonts](https://fonts.google.com/specimen/Manjari)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/manjari)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/manjari)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
