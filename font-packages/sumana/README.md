# @expo-google-fonts/sumana

This package lets you use the [**Sumana**](https://fonts.google.com/specimen/Sumana) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Sumana

![Sumana](./font-family.png)

This font family contains [2 styles](#gallery).

- `Sumana_Regular400`
- `Sumana_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/sumana expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Sumana_Regular400, Sumana_Bold700 } from '@expo-google-fonts/sumana';

export default () => {
  let [fontsLoaded] = useFonts({
    Sumana_Regular400,
    Sumana_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sumana_Regular400' }}>
          Sumana_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sumana_Bold700' }}>
          Sumana_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Sumana_Regular400
![Sumana_Regular400](./9fc4eb110fb834ab65fd4f7af149d8ca3402dde810677f1f6dc84f2b08194c7c.ttf.png)

##### Sumana_Bold700
![Sumana_Bold700](./b035af08a910c59c4baf4941cca6a95cdea0a5c22c5d2615f77267f808f82c28.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Sumana on Google Fonts](https://fonts.google.com/specimen/Sumana)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sumana)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sumana)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
