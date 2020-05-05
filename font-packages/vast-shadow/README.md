# @expo-google-fonts/vast-shadow

This package lets you use the [**Vast Shadow**](https://fonts.google.com/specimen/Vast+Shadow) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Vast Shadow

![Vast Shadow](./font-family.png)

This font family contains [1 style](#gallery).

- `VastShadow_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/vast-shadow expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { VastShadow_Regular400 } from '@expo-google-fonts/vast-shadow';

export default () => {
  let [fontsLoaded] = useFonts({
    VastShadow_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'VastShadow_Regular400' }}>
          VastShadow_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### VastShadow_Regular400
![VastShadow_Regular400](./c7455e059437040326c4daa3043261ce959c3f096f26dbe670dec65d1a611705.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Vast Shadow on Google Fonts](https://fonts.google.com/specimen/Vast+Shadow)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/vast-shadow)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/vast-shadow)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
