# @expo-google-fonts/simonetta

This package lets you use the [**Simonetta**](https://fonts.google.com/specimen/Simonetta) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Simonetta

![Simonetta](./font-family.png)

This font family contains [4 styles](#gallery).

- `Simonetta_Regular400`
- `Simonetta_Regular400_Italic`
- `Simonetta_Black900`
- `Simonetta_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/simonetta expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Simonetta_Regular400,
  Simonetta_Regular400_Italic,
  Simonetta_Black900,
  Simonetta_Black900_Italic,
} from '@expo-google-fonts/simonetta';

export default () => {
  let [fontsLoaded] = useFonts({
    Simonetta_Regular400,
    Simonetta_Regular400_Italic,
    Simonetta_Black900,
    Simonetta_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Simonetta_Regular400' }}>
          Simonetta_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Simonetta_Regular400_Italic' }}>
          Simonetta_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Simonetta_Black900' }}>
          Simonetta_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Simonetta_Black900_Italic' }}>
          Simonetta_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Simonetta_Regular400
![Simonetta_Regular400](./d055b6397968d2e7b9a9c70b4e5d12a390ae937fbb2c140c5a2ca2bcb019501f.ttf.png)

##### Simonetta_Regular400_Italic
![Simonetta_Regular400_Italic](./dbbbd6a2dedbac1c09bf69696a69adec943f3ac81e9a4b6cedf0fab0beee274e.ttf.png)

##### Simonetta_Black900
![Simonetta_Black900](./2f9dab867c54e03c7203dae54a40e8233843e6ed0c74e9f1c939a0c3ff6e48ef.ttf.png)

##### Simonetta_Black900_Italic
![Simonetta_Black900_Italic](./b59c51c3445243e941c14dbc3663f87d2ffaa11e037d4eca6d8cc9103048d478.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Simonetta on Google Fonts](https://fonts.google.com/specimen/Simonetta)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/simonetta)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/simonetta)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
