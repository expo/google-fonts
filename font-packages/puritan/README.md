# @expo-google-fonts/puritan

This package lets you use the [**Puritan**](https://fonts.google.com/specimen/Puritan) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Puritan

![Puritan](./font-family.png)

This font family contains [4 styles](#gallery).

- `Puritan_Regular400`
- `Puritan_Regular400_Italic`
- `Puritan_Bold700`
- `Puritan_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/puritan expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Puritan_Regular400,
  Puritan_Regular400_Italic,
  Puritan_Bold700,
  Puritan_Bold700_Italic,
} from '@expo-google-fonts/puritan';

export default () => {
  let [fontsLoaded] = useFonts({
    Puritan_Regular400,
    Puritan_Regular400_Italic,
    Puritan_Bold700,
    Puritan_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Puritan_Regular400' }}>
          Puritan_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Puritan_Regular400_Italic' }}>
          Puritan_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Puritan_Bold700' }}>
          Puritan_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Puritan_Bold700_Italic' }}>
          Puritan_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Puritan_Regular400
![Puritan_Regular400](./53c4e62f0ae59849064a30afb5f388987e173b8699d99efa7364a1b99c16385d.ttf.png)

##### Puritan_Regular400_Italic
![Puritan_Regular400_Italic](./28385ca71871b908d353e761320647ac350dc310f04d767c54ffa33c5bb0e846.ttf.png)

##### Puritan_Bold700
![Puritan_Bold700](./4a044a29b77d5907eb6eb71d1e7955016b52b63e928f6a1381bda726cb81317a.ttf.png)

##### Puritan_Bold700_Italic
![Puritan_Bold700_Italic](./792b0deaf812e2c13a119b6c56f14b2c25e985edc90ba79c34dfe61c0d28db06.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Puritan on Google Fonts](https://fonts.google.com/specimen/Puritan)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/puritan)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/puritan)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
