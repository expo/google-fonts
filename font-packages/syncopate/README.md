# @expo-google-fonts/syncopate

This package lets you use the [**Syncopate**](https://fonts.google.com/specimen/Syncopate) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Syncopate

![Syncopate](./font-family.png)

This font family contains [2 styles](#gallery).

- `Syncopate_Regular400`
- `Syncopate_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/syncopate expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Syncopate_Regular400, Syncopate_Bold700 } from '@expo-google-fonts/syncopate';

export default () => {
  let [fontsLoaded] = useFonts({
    Syncopate_Regular400,
    Syncopate_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Syncopate_Regular400' }}>
          Syncopate_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Syncopate_Bold700' }}>
          Syncopate_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Syncopate_Regular400
![Syncopate_Regular400](./8f40fe696b566662712524f9cf3f5c4aff3afa640f0bd4ec0e527c22369561a9.ttf.png)

##### Syncopate_Bold700
![Syncopate_Bold700](./0c6b8fb391ff34b292bb2091302fb45fcc3b16eefc6bf4e67b9f1fe38f4ab3fe.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Syncopate on Google Fonts](https://fonts.google.com/specimen/Syncopate)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/syncopate)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/syncopate)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
