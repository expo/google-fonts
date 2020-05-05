# @expo-google-fonts/courier-prime

This package lets you use the [**Courier Prime**](https://fonts.google.com/specimen/Courier+Prime) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Courier Prime

![Courier Prime](./font-family.png)

This font family contains [4 styles](#gallery).

- `CourierPrime_Regular400`
- `CourierPrime_Regular400_Italic`
- `CourierPrime_Bold700`
- `CourierPrime_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/courier-prime expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  CourierPrime_Regular400,
  CourierPrime_Regular400_Italic,
  CourierPrime_Bold700,
  CourierPrime_Bold700_Italic,
} from '@expo-google-fonts/courier-prime';

export default () => {
  let [fontsLoaded] = useFonts({
    CourierPrime_Regular400,
    CourierPrime_Regular400_Italic,
    CourierPrime_Bold700,
    CourierPrime_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CourierPrime_Regular400' }}>
          CourierPrime_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CourierPrime_Regular400_Italic' }}>
          CourierPrime_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CourierPrime_Bold700' }}>
          CourierPrime_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CourierPrime_Bold700_Italic' }}>
          CourierPrime_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### CourierPrime_Regular400
![CourierPrime_Regular400](./4ab28865b2644070e548699748855f2d5a34b5bf8adea09607e18d4a7adc8999.ttf.png)

##### CourierPrime_Regular400_Italic
![CourierPrime_Regular400_Italic](./7109c63818181b56013b7ced3e5da53d756aab727e6a9786a0c8a58affe4ec23.ttf.png)

##### CourierPrime_Bold700
![CourierPrime_Bold700](./385e70d216befbb71f12f5009f1824d235e0f4f2ab653bb0296d5d999afdfd3f.ttf.png)

##### CourierPrime_Bold700_Italic
![CourierPrime_Bold700_Italic](./3f61e15019812e414a4dba4f3b4fbdda453e8c4dd18deafacb7c55686cef11a7.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Courier Prime on Google Fonts](https://fonts.google.com/specimen/Courier+Prime)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/courier-prime)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/courier-prime)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
