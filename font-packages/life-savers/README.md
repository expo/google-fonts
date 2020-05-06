# @expo-google-fonts/life-savers

This package lets you use the [**Life Savers**](https://fonts.google.com/specimen/Life+Savers) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Life Savers

![Life Savers](./font-family.png)

This font family contains [2 styles](#gallery).

- `LifeSavers_Regular400`
- `LifeSavers_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/life-savers expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { LifeSavers_Regular400, LifeSavers_Bold700 } from '@expo-google-fonts/life-savers';

export default () => {
  let [fontsLoaded] = useFonts({
    LifeSavers_Regular400,
    LifeSavers_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'LifeSavers_Regular400' }}>
          LifeSavers_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LifeSavers_Bold700' }}>
          LifeSavers_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### LifeSavers_Regular400
![LifeSavers_Regular400](./04d39ceac525bd7119947e50ca506cd62efc8803e38347a7b1d07e401463bcee.ttf.png)

##### LifeSavers_Bold700
![LifeSavers_Bold700](./362b7da392f70200e34ca8d939a7739b45fdd4cb54b9aee41f6a1db39d13a08b.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Life Savers on Google Fonts](https://fonts.google.com/specimen/Life+Savers)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/life-savers)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/life-savers)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
