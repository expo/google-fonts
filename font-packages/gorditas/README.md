# @expo-google-fonts/gorditas

This package lets you use the [**Gorditas**](https://fonts.google.com/specimen/Gorditas) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Gorditas

![Gorditas](./font-family.png)

This font family contains [2 styles](#gallery).

- `Gorditas_Regular400`
- `Gorditas_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/gorditas expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Gorditas_Regular400, Gorditas_Bold700 } from '@expo-google-fonts/gorditas';

export default () => {
  let [fontsLoaded] = useFonts({
    Gorditas_Regular400,
    Gorditas_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gorditas_Regular400' }}>
          Gorditas_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gorditas_Bold700' }}>
          Gorditas_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Gorditas_Regular400
![Gorditas_Regular400](./987a5551dac8207ac89158c984bb117eac9569a4def85c67405a6f7ee656ca7b.ttf.png)

##### Gorditas_Bold700
![Gorditas_Bold700](./1a73ab190434815fb46d5c9f8095a8d40543c248bd203391f3e120aebb2c223e.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Gorditas on Google Fonts](https://fonts.google.com/specimen/Gorditas)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gorditas)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gorditas)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
