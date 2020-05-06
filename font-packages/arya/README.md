# @expo-google-fonts/arya

This package lets you use the [**Arya**](https://fonts.google.com/specimen/Arya) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Arya

![Arya](./font-family.png)

This font family contains [2 styles](#gallery).

- `Arya_Regular400`
- `Arya_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/arya expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Arya_Regular400, Arya_Bold700 } from '@expo-google-fonts/arya';

export default () => {
  let [fontsLoaded] = useFonts({
    Arya_Regular400,
    Arya_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arya_Regular400' }}>
          Arya_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arya_Bold700' }}>Arya_Bold700</Text>
      </View>
    );
  }
};

```

## Gallery

##### Arya_Regular400
![Arya_Regular400](./98cf640f609db3f8940fc4bc1566dda034961cb11d23f71a277f3ab268c8859a.ttf.png)

##### Arya_Bold700
![Arya_Bold700](./6c168a53b559c7407d20692a42b94301046b15c4838d709b83992c32cab5732c.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Arya on Google Fonts](https://fonts.google.com/specimen/Arya)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/arya)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/arya)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
