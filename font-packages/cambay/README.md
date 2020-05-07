# @expo-google-fonts/cambay

This package lets you use the [**Cambay**](https://fonts.google.com/specimen/Cambay) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cambay

![Cambay](./font-family.png)

This font family contains [4 styles](#gallery).

- `Cambay_Regular400`
- `Cambay_Regular400_Italic`
- `Cambay_Bold700`
- `Cambay_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cambay expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Cambay_Regular400,
  Cambay_Regular400_Italic,
  Cambay_Bold700,
  Cambay_Bold700_Italic,
} from '@expo-google-fonts/cambay';

export default () => {
  let [fontsLoaded] = useFonts({
    Cambay_Regular400,
    Cambay_Regular400_Italic,
    Cambay_Bold700,
    Cambay_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cambay_Regular400' }}>
          Cambay_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cambay_Regular400_Italic' }}>
          Cambay_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cambay_Bold700' }}>
          Cambay_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cambay_Bold700_Italic' }}>
          Cambay_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Cambay_Regular400
![Cambay_Regular400](./a7bad4e2ac4cc5bdeef53e890b4b3d52b065fdae8ebe5f754f263384995f7c73.ttf.png)

##### Cambay_Regular400_Italic
![Cambay_Regular400_Italic](./e821a1eb24db547646223e8b5065d6feeed373e25daf722bd4c3499785d3b6aa.ttf.png)

##### Cambay_Bold700
![Cambay_Bold700](./ece04d3d10726b39914e7a3c3ebbef7ccadcf7a26272fc090c83d3bf7690eea4.ttf.png)

##### Cambay_Bold700_Italic
![Cambay_Bold700_Italic](./d17daa8d61f0a8bdd69696d0da7fc566e3a13141eb0ae45e512b48dcafb92565.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Cambay on Google Fonts](https://fonts.google.com/specimen/Cambay)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cambay)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cambay)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
