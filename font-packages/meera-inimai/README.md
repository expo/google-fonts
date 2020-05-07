# @expo-google-fonts/meera-inimai

This package lets you use the [**Meera Inimai**](https://fonts.google.com/specimen/Meera+Inimai) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Meera Inimai

![Meera Inimai](./font-family.png)

This font family contains [1 style](#gallery).

- `MeeraInimai_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/meera-inimai expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { MeeraInimai_Regular400 } from '@expo-google-fonts/meera-inimai';

export default () => {
  let [fontsLoaded] = useFonts({
    MeeraInimai_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MeeraInimai_Regular400' }}>
          MeeraInimai_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### MeeraInimai_Regular400
![MeeraInimai_Regular400](./199785360f92220660b6a90e66afd8907c31df21ef4e4470e2af99c968017208.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Meera Inimai on Google Fonts](https://fonts.google.com/specimen/Meera+Inimai)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/meera-inimai)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/meera-inimai)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
