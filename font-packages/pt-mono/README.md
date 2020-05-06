# @expo-google-fonts/pt-mono

This package lets you use the [**PT Mono**](https://fonts.google.com/specimen/PT+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## PT Mono

![PT Mono](./font-family.png)

This font family contains [1 style](#gallery).

- `PTMono_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/pt-mono expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { PTMono_Regular400 } from '@expo-google-fonts/pt-mono';

export default () => {
  let [fontsLoaded] = useFonts({
    PTMono_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PTMono_Regular400' }}>
          PTMono_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### PTMono_Regular400
![PTMono_Regular400](./76d11b0f53258fdd742b27fc7e194046840c2fc0cafe1246aa0c27718a5f031a.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [PT Mono on Google Fonts](https://fonts.google.com/specimen/PT+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/pt-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/pt-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
