# @expo-google-fonts/gupter

This package lets you use the [**Gupter**](https://fonts.google.com/specimen/Gupter) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Gupter

![Gupter](./font-family.png)

This font family contains [3 styles](#gallery).

- `Gupter_Regular400`
- `Gupter_Medium500`
- `Gupter_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/gupter expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Gupter_Regular400, Gupter_Medium500, Gupter_Bold700 } from '@expo-google-fonts/gupter';

export default () => {
  let [fontsLoaded] = useFonts({
    Gupter_Regular400,
    Gupter_Medium500,
    Gupter_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gupter_Regular400' }}>
          Gupter_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gupter_Medium500' }}>
          Gupter_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gupter_Bold700' }}>
          Gupter_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Gupter_Regular400
![Gupter_Regular400](./98ef59cfa0eb83781f6573b4ad1964bf98369e70db38156479c353702557fa01.ttf.png)

##### Gupter_Medium500
![Gupter_Medium500](./84381b04d635b2daeb369d9c0afa5ff2489d0cda8d9660ee7631bfdf82f2eaeb.ttf.png)

##### Gupter_Bold700
![Gupter_Bold700](./0e63fe340f8e61f9d4d9c5bbc638e79930af1125c534f656814a99d3909674b0.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Gupter on Google Fonts](https://fonts.google.com/specimen/Gupter)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gupter)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gupter)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
