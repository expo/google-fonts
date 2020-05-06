# @expo-google-fonts/athiti

This package lets you use the [**Athiti**](https://fonts.google.com/specimen/Athiti) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Athiti

![Athiti](./font-family.png)

This font family contains [6 styles](#gallery).

- `Athiti_ExtraLight200`
- `Athiti_Light300`
- `Athiti_Regular400`
- `Athiti_Medium500`
- `Athiti_SemiBold600`
- `Athiti_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/athiti expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Athiti_ExtraLight200,
  Athiti_Light300,
  Athiti_Regular400,
  Athiti_Medium500,
  Athiti_SemiBold600,
  Athiti_Bold700,
} from '@expo-google-fonts/athiti';

export default () => {
  let [fontsLoaded] = useFonts({
    Athiti_ExtraLight200,
    Athiti_Light300,
    Athiti_Regular400,
    Athiti_Medium500,
    Athiti_SemiBold600,
    Athiti_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Athiti_ExtraLight200' }}>
          Athiti_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Athiti_Light300' }}>
          Athiti_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Athiti_Regular400' }}>
          Athiti_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Athiti_Medium500' }}>
          Athiti_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Athiti_SemiBold600' }}>
          Athiti_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Athiti_Bold700' }}>
          Athiti_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Athiti_ExtraLight200
![Athiti_ExtraLight200](./4abe61baf7f8762b4dcb6b88b0610de73f42b112a793e28b92da163ee7e441d7.ttf.png)

##### Athiti_Light300
![Athiti_Light300](./f9c6df08ed329fa184304cf4bc64319e7812c62c2ae136dc89cb10a5d5c35018.ttf.png)

##### Athiti_Regular400
![Athiti_Regular400](./4559ae55fe1020c88dc144ae60afba5e282fcd3aa1c5107292df173d42135806.ttf.png)

##### Athiti_Medium500
![Athiti_Medium500](./6e1f0a1706330d270d93ea13e88b35d9c6f4bf71d927e9468278c03b57986330.ttf.png)

##### Athiti_SemiBold600
![Athiti_SemiBold600](./398a37b4c34df12c6ede4a85f215d56eaa5a8b515ea5e0bdad2ef676c2ae858a.ttf.png)

##### Athiti_Bold700
![Athiti_Bold700](./63b6ab040d22bd64ce5d5400f352fac3ecefa83827b1862b8a216d5c729ea286.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Athiti on Google Fonts](https://fonts.google.com/specimen/Athiti)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/athiti)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/athiti)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
