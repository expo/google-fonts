# @expo-google-fonts/merriweather-sans

This package lets you use the [**Merriweather Sans**](https://fonts.google.com/specimen/Merriweather+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Merriweather Sans

![Merriweather Sans](./font-family.png)

This font family contains [8 styles](#gallery).

- `MerriweatherSans_Light300`
- `MerriweatherSans_Light300_Italic`
- `MerriweatherSans_Regular400`
- `MerriweatherSans_Regular400_Italic`
- `MerriweatherSans_Bold700`
- `MerriweatherSans_Bold700_Italic`
- `MerriweatherSans_ExtraBold800`
- `MerriweatherSans_ExtraBold800_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/merriweather-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  MerriweatherSans_Light300,
  MerriweatherSans_Light300_Italic,
  MerriweatherSans_Regular400,
  MerriweatherSans_Regular400_Italic,
  MerriweatherSans_Bold700,
  MerriweatherSans_Bold700_Italic,
  MerriweatherSans_ExtraBold800,
  MerriweatherSans_ExtraBold800_Italic,
} from '@expo-google-fonts/merriweather-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    MerriweatherSans_Light300,
    MerriweatherSans_Light300_Italic,
    MerriweatherSans_Regular400,
    MerriweatherSans_Regular400_Italic,
    MerriweatherSans_Bold700,
    MerriweatherSans_Bold700_Italic,
    MerriweatherSans_ExtraBold800,
    MerriweatherSans_ExtraBold800_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MerriweatherSans_Light300' }}>
          MerriweatherSans_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MerriweatherSans_Light300_Italic' }}>
          MerriweatherSans_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MerriweatherSans_Regular400' }}>
          MerriweatherSans_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'MerriweatherSans_Regular400_Italic' }}>
          MerriweatherSans_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MerriweatherSans_Bold700' }}>
          MerriweatherSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MerriweatherSans_Bold700_Italic' }}>
          MerriweatherSans_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MerriweatherSans_ExtraBold800' }}>
          MerriweatherSans_ExtraBold800
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'MerriweatherSans_ExtraBold800_Italic' }}>
          MerriweatherSans_ExtraBold800_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### MerriweatherSans_Light300
![MerriweatherSans_Light300](./f616380e06211b4f761656da4fa581a7d0342e10ef56f5be45bee9306dfc3a9b.ttf.png)

##### MerriweatherSans_Light300_Italic
![MerriweatherSans_Light300_Italic](./05ca1d14a17191d43a6d7622e29059462800af4da0f507c95243b2bad8fa630c.ttf.png)

##### MerriweatherSans_Regular400
![MerriweatherSans_Regular400](./6bed429e28f419d7f2a83544104f8c0561a37b088ae9f84c2bcd7400c2589dea.ttf.png)

##### MerriweatherSans_Regular400_Italic
![MerriweatherSans_Regular400_Italic](./2064c7a30f875f7364657c94031f67a4ec37225a03e604d81190ef884df6b744.ttf.png)

##### MerriweatherSans_Bold700
![MerriweatherSans_Bold700](./fa38d2e5c8adaa4e200490a344d5cf28495405d0d83c6a0620bef8510853c9ac.ttf.png)

##### MerriweatherSans_Bold700_Italic
![MerriweatherSans_Bold700_Italic](./5c33c69255f4345f6510aeb92fb1edd05495c99313368face8b8c9f996bf5545.ttf.png)

##### MerriweatherSans_ExtraBold800
![MerriweatherSans_ExtraBold800](./344758d11e4f83c18b0998f11d76dfc215dabfffa863207739c8a99248ec5f89.ttf.png)

##### MerriweatherSans_ExtraBold800_Italic
![MerriweatherSans_ExtraBold800_Italic](./45321dfdc3c655bfed2b7abc7fb30131d49e307233bf42d8a8d477135890fc04.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Merriweather Sans on Google Fonts](https://fonts.google.com/specimen/Merriweather+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/merriweather-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/merriweather-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
