# @expo-google-fonts/codystar

This package lets you use the [**Codystar**](https://fonts.google.com/specimen/Codystar) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Codystar

![Codystar](./font-family.png)

This font family contains [2 styles](#gallery).

- `Codystar_Light300`
- `Codystar_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/codystar expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Codystar_Light300, Codystar_Regular400 } from '@expo-google-fonts/codystar';

export default () => {
  let [fontsLoaded] = useFonts({
    Codystar_Light300,
    Codystar_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Codystar_Light300' }}>
          Codystar_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Codystar_Regular400' }}>
          Codystar_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Codystar_Light300
![Codystar_Light300](./d8599cf77d1a295657a62a9be2067a1d7c27dad40e7ae89910c6516e57f1fdb1.ttf.png)

##### Codystar_Regular400
![Codystar_Regular400](./5d2fb67af692de14dd1f3b942de494168b78c1cef3cc103867d36c4281ac0b00.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Codystar on Google Fonts](https://fonts.google.com/specimen/Codystar)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/codystar)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/codystar)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
