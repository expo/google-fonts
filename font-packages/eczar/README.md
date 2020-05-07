# @expo-google-fonts/eczar

This package lets you use the [**Eczar**](https://fonts.google.com/specimen/Eczar) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Eczar

![Eczar](./font-family.png)

This font family contains [5 styles](#gallery).

- `Eczar_Regular400`
- `Eczar_Medium500`
- `Eczar_SemiBold600`
- `Eczar_Bold700`
- `Eczar_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/eczar expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Eczar_Regular400,
  Eczar_Medium500,
  Eczar_SemiBold600,
  Eczar_Bold700,
  Eczar_ExtraBold800,
} from '@expo-google-fonts/eczar';

export default () => {
  let [fontsLoaded] = useFonts({
    Eczar_Regular400,
    Eczar_Medium500,
    Eczar_SemiBold600,
    Eczar_Bold700,
    Eczar_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Eczar_Regular400' }}>
          Eczar_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Eczar_Medium500' }}>
          Eczar_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Eczar_SemiBold600' }}>
          Eczar_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Eczar_Bold700' }}>
          Eczar_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Eczar_ExtraBold800' }}>
          Eczar_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Eczar_Regular400
![Eczar_Regular400](./c6e04a6ef288e1fca3e9420bfd9752bfdc230a20ce55a05855a8896bdb763a8e.ttf.png)

##### Eczar_Medium500
![Eczar_Medium500](./d91586e1decf2874b409ef01f87cf50e9725e5f419ea08e5158a6c0a06595fbe.ttf.png)

##### Eczar_SemiBold600
![Eczar_SemiBold600](./ba1eb42528b2001e261653b3e56b8566ae08e9a3a6709b57e20f58b84b82a76a.ttf.png)

##### Eczar_Bold700
![Eczar_Bold700](./254b1a9878dd1e9479e9aab40683ad5d17b35782b413a724f71d89952f460b39.ttf.png)

##### Eczar_ExtraBold800
![Eczar_ExtraBold800](./d9144eab6daf83585fcb44f4726902a8cbca81d5df060ed6f09787fd5192239f.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Eczar on Google Fonts](https://fonts.google.com/specimen/Eczar)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/eczar)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/eczar)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
