# @expo-google-fonts/averia-libre

This package lets you use the [**Averia Libre**](https://fonts.google.com/specimen/Averia+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Averia Libre

![Averia Libre](./font-family.png)

This font family contains [6 styles](#gallery).

- `AveriaLibre_Light300`
- `AveriaLibre_Light300_Italic`
- `AveriaLibre_Regular400`
- `AveriaLibre_Regular400_Italic`
- `AveriaLibre_Bold700`
- `AveriaLibre_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/averia-libre expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  AveriaLibre_Light300,
  AveriaLibre_Light300_Italic,
  AveriaLibre_Regular400,
  AveriaLibre_Regular400_Italic,
  AveriaLibre_Bold700,
  AveriaLibre_Bold700_Italic,
} from '@expo-google-fonts/averia-libre';

export default () => {
  let [fontsLoaded] = useFonts({
    AveriaLibre_Light300,
    AveriaLibre_Light300_Italic,
    AveriaLibre_Regular400,
    AveriaLibre_Regular400_Italic,
    AveriaLibre_Bold700,
    AveriaLibre_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaLibre_Light300' }}>
          AveriaLibre_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaLibre_Light300_Italic' }}>
          AveriaLibre_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaLibre_Regular400' }}>
          AveriaLibre_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaLibre_Regular400_Italic' }}>
          AveriaLibre_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaLibre_Bold700' }}>
          AveriaLibre_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaLibre_Bold700_Italic' }}>
          AveriaLibre_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### AveriaLibre_Light300
![AveriaLibre_Light300](./446105043cce1cc90406cda4c387ef2100b294d9d63b3946d4a395d3f2a9ce07.ttf.png)

##### AveriaLibre_Light300_Italic
![AveriaLibre_Light300_Italic](./c8a24e13d7d611dd8a4e15743ac34b163b1e96d1c9a9e82746f0bd9d3a878613.ttf.png)

##### AveriaLibre_Regular400
![AveriaLibre_Regular400](./2b819eb7a1c11f4de65f3bfe1a8f658ea56fc62b2b7a24b2cf8688e9ced04c96.ttf.png)

##### AveriaLibre_Regular400_Italic
![AveriaLibre_Regular400_Italic](./793d505e83fbdbef6ceeabd6897693fb515a4890b822623deb545b53e7ec68dd.ttf.png)

##### AveriaLibre_Bold700
![AveriaLibre_Bold700](./6b157a260e6fd6b7cdd2d54fc4f46e1a72fbb33034b74a6929cbc4d0a7d83e3d.ttf.png)

##### AveriaLibre_Bold700_Italic
![AveriaLibre_Bold700_Italic](./08c2c28ffffd04d884122fa538e0c615e52983959363269b543084794a60955f.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Averia Libre on Google Fonts](https://fonts.google.com/specimen/Averia+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/averia-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/averia-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
