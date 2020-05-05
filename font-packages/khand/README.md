# @expo-google-fonts/khand

This package lets you use the [**Khand**](https://fonts.google.com/specimen/Khand) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Khand

![Khand](./font-family.png)

This font family contains [5 styles](#gallery).

- `Khand_Light300`
- `Khand_Regular400`
- `Khand_Medium500`
- `Khand_SemiBold600`
- `Khand_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/khand expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Khand_Light300,
  Khand_Regular400,
  Khand_Medium500,
  Khand_SemiBold600,
  Khand_Bold700,
} from '@expo-google-fonts/khand';

export default () => {
  let [fontsLoaded] = useFonts({
    Khand_Light300,
    Khand_Regular400,
    Khand_Medium500,
    Khand_SemiBold600,
    Khand_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Khand_Light300' }}>
          Khand_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Khand_Regular400' }}>
          Khand_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Khand_Medium500' }}>
          Khand_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Khand_SemiBold600' }}>
          Khand_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Khand_Bold700' }}>
          Khand_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Khand_Light300
![Khand_Light300](./7cd4683a916646dd278fb0eb4426f6826ca4f0cc92ce083de087f2287fb11f98.ttf.png)

##### Khand_Regular400
![Khand_Regular400](./325e1b6938310cd0385a917b47fcadabece70ea8fa6356a276e20fb171d57af5.ttf.png)

##### Khand_Medium500
![Khand_Medium500](./6dd2785eedd866d3f7e329ad7264d66157ec7a40ef41d48aab098287b5a8863d.ttf.png)

##### Khand_SemiBold600
![Khand_SemiBold600](./2471269ec4d3228c379da2bc6e54db78b4c7b315613d0cd1e639539c7d92d75d.ttf.png)

##### Khand_Bold700
![Khand_Bold700](./609dc9682e1321a8db6ab6a4caeffe07395b8517327ee5ce936b365e586fb402.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Khand on Google Fonts](https://fonts.google.com/specimen/Khand)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/khand)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/khand)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
