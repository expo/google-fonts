# @expo-google-fonts/poly

This package lets you use the [**Poly**](https://fonts.google.com/specimen/Poly) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Poly

![Poly](./font-family.png)

This font family contains [2 styles](#gallery).

- `Poly_Regular400`
- `Poly_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/poly expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Poly_Regular400, Poly_Regular400_Italic } from '@expo-google-fonts/poly';

export default () => {
  let [fontsLoaded] = useFonts({
    Poly_Regular400,
    Poly_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poly_Regular400' }}>
          Poly_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Poly_Regular400_Italic' }}>
          Poly_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Poly_Regular400
![Poly_Regular400](./25d6b0314754bfa56533ecd2bf390f3f2108e60043db13b206cca5e0a900f857.ttf.png)

##### Poly_Regular400_Italic
![Poly_Regular400_Italic](./cc94a04fc599f53d7e32be6f932b998f8229d4e0462ebb808d61554abb4f0dbc.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Poly on Google Fonts](https://fonts.google.com/specimen/Poly)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/poly)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/poly)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
