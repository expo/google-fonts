# @expo-google-fonts/crete-round

This package lets you use the [**Crete Round**](https://fonts.google.com/specimen/Crete+Round) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Crete Round

![Crete Round](./font-family.png)

This font family contains [2 styles](#gallery).

- `CreteRound_Regular400`
- `CreteRound_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/crete-round expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  CreteRound_Regular400,
  CreteRound_Regular400_Italic,
} from '@expo-google-fonts/crete-round';

export default () => {
  let [fontsLoaded] = useFonts({
    CreteRound_Regular400,
    CreteRound_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CreteRound_Regular400' }}>
          CreteRound_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CreteRound_Regular400_Italic' }}>
          CreteRound_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### CreteRound_Regular400
![CreteRound_Regular400](./62fbd9c68fa6485a1a4fde14a03ed6a5268f26365fff7614e5704531390f0363.ttf.png)

##### CreteRound_Regular400_Italic
![CreteRound_Regular400_Italic](./c8e915bc50126a1af673b8fbd3181aa9f8eac78545ec1b8d827ac5bac66b5cc5.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Crete Round on Google Fonts](https://fonts.google.com/specimen/Crete+Round)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/crete-round)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/crete-round)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
