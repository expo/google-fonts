# @expo-google-fonts/almarai

This package lets you use the [**Almarai**](https://fonts.google.com/specimen/Almarai) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Almarai

![Almarai](./font-family.png)

This font family contains [4 styles](#gallery).

- `Almarai_Light300`
- `Almarai_Regular400`
- `Almarai_Bold700`
- `Almarai_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/almarai expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Almarai_Light300,
  Almarai_Regular400,
  Almarai_Bold700,
  Almarai_ExtraBold800,
} from '@expo-google-fonts/almarai';

export default () => {
  let [fontsLoaded] = useFonts({
    Almarai_Light300,
    Almarai_Regular400,
    Almarai_Bold700,
    Almarai_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Almarai_Light300' }}>
          Almarai_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Almarai_Regular400' }}>
          Almarai_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Almarai_Bold700' }}>
          Almarai_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Almarai_ExtraBold800' }}>
          Almarai_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Almarai_Light300
![Almarai_Light300](./d65c40f0692b45d73302895b80e837f57f1b4e69a5d3255c3f186919eab23780.ttf.png)

##### Almarai_Regular400
![Almarai_Regular400](./1b22529a81e051312110ae38c450d9b4f5474030f2275dc4574f26c8fcf5318e.ttf.png)

##### Almarai_Bold700
![Almarai_Bold700](./6cf3b7ecc9ac853f7071684fc5dfb22dd3a13f41901fee6aeb54cd9cc81d1126.ttf.png)

##### Almarai_ExtraBold800
![Almarai_ExtraBold800](./55d68f8e4adef1c44ed2dbc154537092c330112b9ac46a94338e58f08f02bcb6.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Almarai on Google Fonts](https://fonts.google.com/specimen/Almarai)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/almarai)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/almarai)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
