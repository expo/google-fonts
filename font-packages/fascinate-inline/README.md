# @expo-google-fonts/fascinate-inline

This package lets you use the [**Fascinate Inline**](https://fonts.google.com/specimen/Fascinate+Inline) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Fascinate Inline

![Fascinate Inline](./font-family.png)

This font family contains [1 style](#gallery).

- `FascinateInline_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/fascinate-inline expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { FascinateInline_Regular400 } from '@expo-google-fonts/fascinate-inline';

export default () => {
  let [fontsLoaded] = useFonts({
    FascinateInline_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'FascinateInline_Regular400' }}>
          FascinateInline_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### FascinateInline_Regular400
![FascinateInline_Regular400](./c052c5d8595ae4b44c8e2c92cd12be41381064837072f05fc6a3f4807f1d80e7.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Fascinate Inline on Google Fonts](https://fonts.google.com/specimen/Fascinate+Inline)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fascinate-inline)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fascinate-inline)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
