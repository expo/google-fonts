# @expo-google-fonts/ranga

This package lets you use the [**Ranga**](https://fonts.google.com/specimen/Ranga) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Ranga

![Ranga](./font-family.png)

This font family contains [2 styles](#gallery).

- `Ranga_Regular400`
- `Ranga_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ranga expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Ranga_Regular400, Ranga_Bold700 } from '@expo-google-fonts/ranga';

export default () => {
  let [fontsLoaded] = useFonts({
    Ranga_Regular400,
    Ranga_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ranga_Regular400' }}>
          Ranga_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ranga_Bold700' }}>
          Ranga_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Ranga_Regular400
![Ranga_Regular400](./e51a6898e34d12bd9b9057002e645f176d30f5e821bfaa1ccc4e56294af7099a.ttf.png)

##### Ranga_Bold700
![Ranga_Bold700](./c5c763628e805a2af3c9deb68abd0b70227a98911f7ba56f4f8c2a3e8c286b96.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Ranga on Google Fonts](https://fonts.google.com/specimen/Ranga)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ranga)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ranga)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
