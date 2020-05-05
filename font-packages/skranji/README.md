# @expo-google-fonts/skranji

This package lets you use the [**Skranji**](https://fonts.google.com/specimen/Skranji) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Skranji

![Skranji](./font-family.png)

This font family contains [2 styles](#gallery).

- `Skranji_Regular400`
- `Skranji_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/skranji expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Skranji_Regular400, Skranji_Bold700 } from '@expo-google-fonts/skranji';

export default () => {
  let [fontsLoaded] = useFonts({
    Skranji_Regular400,
    Skranji_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Skranji_Regular400' }}>
          Skranji_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Skranji_Bold700' }}>
          Skranji_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Skranji_Regular400
![Skranji_Regular400](./9ee2c9312ee6ae5db2fdf49b0a797da03bd5ae1df447d051b081612b3db1d2fd.ttf.png)

##### Skranji_Bold700
![Skranji_Bold700](./7dd8ded95fc8d9be6c80296a989eb3057929d548770081d17653c90dc11d8248.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Skranji on Google Fonts](https://fonts.google.com/specimen/Skranji)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/skranji)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/skranji)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
