# @expo-google-fonts/arimo

This package lets you use the [**Arimo**](https://fonts.google.com/specimen/Arimo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Arimo

![Arimo](./font-family.png)

This font family contains [4 styles](#gallery).

- `Arimo_Regular400`
- `Arimo_Regular400_Italic`
- `Arimo_Bold700`
- `Arimo_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/arimo expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Arimo_Regular400,
  Arimo_Regular400_Italic,
  Arimo_Bold700,
  Arimo_Bold700_Italic,
} from '@expo-google-fonts/arimo';

export default () => {
  let [fontsLoaded] = useFonts({
    Arimo_Regular400,
    Arimo_Regular400_Italic,
    Arimo_Bold700,
    Arimo_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arimo_Regular400' }}>
          Arimo_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arimo_Regular400_Italic' }}>
          Arimo_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arimo_Bold700' }}>
          Arimo_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arimo_Bold700_Italic' }}>
          Arimo_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Arimo_Regular400
![Arimo_Regular400](./df255da5c656bbf01f4aa3012b4d4ba16f7bd17664a4e1fc011146a4eb95d436.ttf.png)

##### Arimo_Regular400_Italic
![Arimo_Regular400_Italic](./eafe825bf96517b1ff3b8d8710254e225584de1489e4c3deaa6b1cb8549a027d.ttf.png)

##### Arimo_Bold700
![Arimo_Bold700](./5a4f400fb6090e3938136ea6fd3ec2c02777fb674d13b9582f96d4515044df23.ttf.png)

##### Arimo_Bold700_Italic
![Arimo_Bold700_Italic](./e6b358f015564a1505c76b32db9b3f5c538a8f7d220dd04446697d286c820bf0.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Arimo on Google Fonts](https://fonts.google.com/specimen/Arimo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/arimo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/arimo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
