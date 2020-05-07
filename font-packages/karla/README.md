# @expo-google-fonts/karla

This package lets you use the [**Karla**](https://fonts.google.com/specimen/Karla) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Karla

![Karla](./font-family.png)

This font family contains [4 styles](#gallery).

- `Karla_Regular400`
- `Karla_Regular400_Italic`
- `Karla_Bold700`
- `Karla_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/karla expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Karla_Regular400,
  Karla_Regular400_Italic,
  Karla_Bold700,
  Karla_Bold700_Italic,
} from '@expo-google-fonts/karla';

export default () => {
  let [fontsLoaded] = useFonts({
    Karla_Regular400,
    Karla_Regular400_Italic,
    Karla_Bold700,
    Karla_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karla_Regular400' }}>
          Karla_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karla_Regular400_Italic' }}>
          Karla_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karla_Bold700' }}>
          Karla_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karla_Bold700_Italic' }}>
          Karla_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Karla_Regular400
![Karla_Regular400](./6f59c39b7fe5470c4c19a0bd67174cb94cdbe2053382046ea00b00fbfd5008a7.ttf.png)

##### Karla_Regular400_Italic
![Karla_Regular400_Italic](./8dfdedc9371e4b6c128ba66b488cc38a94142de7a6aec5633026651dbbe7fd50.ttf.png)

##### Karla_Bold700
![Karla_Bold700](./60f1379da84423da4c84a9d3ad1a1293ce82daf3c8337c5f3d027e5e0aa892c3.ttf.png)

##### Karla_Bold700_Italic
![Karla_Bold700_Italic](./11cdf8ae7a17fbd7e9d7e2b43ced2e092b6d3a77cd2846dbf42cf3d82ffcb5e8.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Karla on Google Fonts](https://fonts.google.com/specimen/Karla)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/karla)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/karla)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
