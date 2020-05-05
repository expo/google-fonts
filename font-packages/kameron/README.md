# @expo-google-fonts/kameron

This package lets you use the [**Kameron**](https://fonts.google.com/specimen/Kameron) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Kameron

![Kameron](./font-family.png)

This font family contains [2 styles](#gallery).

- `Kameron_Regular400`
- `Kameron_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/kameron expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Kameron_Regular400, Kameron_Bold700 } from '@expo-google-fonts/kameron';

export default () => {
  let [fontsLoaded] = useFonts({
    Kameron_Regular400,
    Kameron_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kameron_Regular400' }}>
          Kameron_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kameron_Bold700' }}>
          Kameron_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Kameron_Regular400
![Kameron_Regular400](./31d4c66237b8a2353dcb28cc0c0fcf347f10cb20582071c7db1e3d2820bc9d29.ttf.png)

##### Kameron_Bold700
![Kameron_Bold700](./ba1c38d9290bf8209d9ff96941f976a43f44f9bd3eee9b066349fe39d6a0eef6.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Kameron on Google Fonts](https://fonts.google.com/specimen/Kameron)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kameron)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kameron)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
