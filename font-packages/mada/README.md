# @expo-google-fonts/mada

This package lets you use the [**Mada**](https://fonts.google.com/specimen/Mada) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Mada

![Mada](./font-family.png)

This font family contains [7 styles](#gallery).

- `Mada_ExtraLight200`
- `Mada_Light300`
- `Mada_Regular400`
- `Mada_Medium500`
- `Mada_SemiBold600`
- `Mada_Bold700`
- `Mada_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/mada expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Mada_ExtraLight200,
  Mada_Light300,
  Mada_Regular400,
  Mada_Medium500,
  Mada_SemiBold600,
  Mada_Bold700,
  Mada_Black900,
} from '@expo-google-fonts/mada';

export default () => {
  let [fontsLoaded] = useFonts({
    Mada_ExtraLight200,
    Mada_Light300,
    Mada_Regular400,
    Mada_Medium500,
    Mada_SemiBold600,
    Mada_Bold700,
    Mada_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mada_ExtraLight200' }}>
          Mada_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mada_Light300' }}>
          Mada_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mada_Regular400' }}>
          Mada_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mada_Medium500' }}>
          Mada_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mada_SemiBold600' }}>
          Mada_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mada_Bold700' }}>Mada_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mada_Black900' }}>
          Mada_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Mada_ExtraLight200
![Mada_ExtraLight200](./9e8f4edc7b74697883d4382000502d7429481f7ccc59b65ac62c28e99481cbc3.ttf.png)

##### Mada_Light300
![Mada_Light300](./4987425fde45e8da45ede3fad409b0ac00e32ca0255a60b44b8e1f701764346c.ttf.png)

##### Mada_Regular400
![Mada_Regular400](./9e3c24ab83037a6d4fc5b72d068caaa6a0767414bd20d7defe31c562ced6d6e7.ttf.png)

##### Mada_Medium500
![Mada_Medium500](./c3e70bf71ab0557ddd82906726c36d89e199792db1997040b1599f61e00acd78.ttf.png)

##### Mada_SemiBold600
![Mada_SemiBold600](./052e0e0f174e9e8ff63bf2a85f70db6cc59d3391a016a31ace8e20c49d0fa0d6.ttf.png)

##### Mada_Bold700
![Mada_Bold700](./b94e1f9c917ae40e5e6b8d95fe24de1817e37942aafb9b9310d5e0d4b049221a.ttf.png)

##### Mada_Black900
![Mada_Black900](./7746a4ca1c6767a971c0db31ec18594fa5211adcc318e293d27b55efc36bded9.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Mada on Google Fonts](https://fonts.google.com/specimen/Mada)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mada)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mada)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
