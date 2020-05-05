# @expo-google-fonts/amita

This package lets you use the [**Amita**](https://fonts.google.com/specimen/Amita) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Amita

![Amita](./font-family.png)

This font family contains [2 styles](#gallery).

- `Amita_Regular400`
- `Amita_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/amita expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Amita_Regular400, Amita_Bold700 } from '@expo-google-fonts/amita';

export default () => {
  let [fontsLoaded] = useFonts({
    Amita_Regular400,
    Amita_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amita_Regular400' }}>
          Amita_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amita_Bold700' }}>
          Amita_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Amita_Regular400
![Amita_Regular400](./f8ab328073e1c729f0b4f38521b47bb39c63db396da1602f6b08a2a8775249f4.ttf.png)

##### Amita_Bold700
![Amita_Bold700](./e421cec126c6014995b96189e28c3c8b119e3e21dbe1c3dea8585ec31afa0679.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Amita on Google Fonts](https://fonts.google.com/specimen/Amita)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/amita)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/amita)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
