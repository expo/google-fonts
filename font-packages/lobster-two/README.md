# @expo-google-fonts/lobster-two

This package lets you use the [**Lobster Two**](https://fonts.google.com/specimen/Lobster+Two) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Lobster Two

![Lobster Two](./font-family.png)

This font family contains [4 styles](#gallery).

- `LobsterTwo_Regular400`
- `LobsterTwo_Regular400_Italic`
- `LobsterTwo_Bold700`
- `LobsterTwo_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/lobster-two expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  LobsterTwo_Regular400,
  LobsterTwo_Regular400_Italic,
  LobsterTwo_Bold700,
  LobsterTwo_Bold700_Italic,
} from '@expo-google-fonts/lobster-two';

export default () => {
  let [fontsLoaded] = useFonts({
    LobsterTwo_Regular400,
    LobsterTwo_Regular400_Italic,
    LobsterTwo_Bold700,
    LobsterTwo_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'LobsterTwo_Regular400' }}>
          LobsterTwo_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LobsterTwo_Regular400_Italic' }}>
          LobsterTwo_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LobsterTwo_Bold700' }}>
          LobsterTwo_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LobsterTwo_Bold700_Italic' }}>
          LobsterTwo_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### LobsterTwo_Regular400
![LobsterTwo_Regular400](./0c7a1501aa183946996d6a6dd00639131356d161f596511cf06339053570e634.ttf.png)

##### LobsterTwo_Regular400_Italic
![LobsterTwo_Regular400_Italic](./c0dbd5c04e410d8e4da9017651e742b0e62adac50ae9b77ad22cf0407e27e211.ttf.png)

##### LobsterTwo_Bold700
![LobsterTwo_Bold700](./510f984a2bfaf23d533e8c389063fe40f2e0d02c2d16889ff79e565345b3aaa5.ttf.png)

##### LobsterTwo_Bold700_Italic
![LobsterTwo_Bold700_Italic](./37a829bca6d8cab14c9768897a1dafc7fcc08b7b459ba3bd2a2e0dac406eead9.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Lobster Two on Google Fonts](https://fonts.google.com/specimen/Lobster+Two)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lobster-two)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lobster-two)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
