# @expo-google-fonts/padauk

This package lets you use the [**Padauk**](https://fonts.google.com/specimen/Padauk) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Padauk

![Padauk](./font-family.png)

This font family contains [2 styles](#gallery).

- `Padauk_Regular400`
- `Padauk_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/padauk expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Padauk_Regular400, Padauk_Bold700 } from '@expo-google-fonts/padauk';

export default () => {
  let [fontsLoaded] = useFonts({
    Padauk_Regular400,
    Padauk_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Padauk_Regular400' }}>
          Padauk_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Padauk_Bold700' }}>
          Padauk_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Padauk_Regular400
![Padauk_Regular400](./5326568d3a2c4690b03acaafdf444cd2e52712e7a16d96a3639b40f17fcfe8b0.ttf.png)

##### Padauk_Bold700
![Padauk_Bold700](./a3054832e288beedeba883a9477e908a910c186e002a455277fb4c54e37518f6.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Padauk on Google Fonts](https://fonts.google.com/specimen/Padauk)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/padauk)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/padauk)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
