# @expo-google-fonts/tangerine

This package lets you use the [**Tangerine**](https://fonts.google.com/specimen/Tangerine) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Tangerine

![Tangerine](./font-family.png)

This font family contains [2 styles](#gallery).

- `Tangerine_Regular400`
- `Tangerine_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/tangerine expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Tangerine_Regular400, Tangerine_Bold700 } from '@expo-google-fonts/tangerine';

export default () => {
  let [fontsLoaded] = useFonts({
    Tangerine_Regular400,
    Tangerine_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tangerine_Regular400' }}>
          Tangerine_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tangerine_Bold700' }}>
          Tangerine_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Tangerine_Regular400
![Tangerine_Regular400](./d57c4cf7ce5cace0ff51506a942305cb2a8342c0d13badf47b74d8b7ccd6a976.ttf.png)

##### Tangerine_Bold700
![Tangerine_Bold700](./99be610fa0d0acc2de30af936f07ac82bda5378a98b867c55dc1d8ae1a763c72.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Tangerine on Google Fonts](https://fonts.google.com/specimen/Tangerine)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tangerine)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tangerine)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
