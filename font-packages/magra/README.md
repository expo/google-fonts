# @expo-google-fonts/magra

This package lets you use the [**Magra**](https://fonts.google.com/specimen/Magra) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Magra

![Magra](./font-family.png)

This font family contains [2 styles](#gallery).

- `Magra_Regular400`
- `Magra_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/magra expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Magra_Regular400, Magra_Bold700 } from '@expo-google-fonts/magra';

export default () => {
  let [fontsLoaded] = useFonts({
    Magra_Regular400,
    Magra_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Magra_Regular400' }}>
          Magra_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Magra_Bold700' }}>
          Magra_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Magra_Regular400
![Magra_Regular400](./9af41cbbd0f37a100cfb6828248fbfbac10111faefb7b379eb4d74092ebd2f8b.ttf.png)

##### Magra_Bold700
![Magra_Bold700](./ab81d03efbb8cfb766cdee7ef1e7333d196769ab264426971367541a4feee673.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Magra on Google Fonts](https://fonts.google.com/specimen/Magra)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/magra)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/magra)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
