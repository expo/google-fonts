# @expo-google-fonts/lekton

This package lets you use the [**Lekton**](https://fonts.google.com/specimen/Lekton) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Lekton

![Lekton](./font-family.png)

This font family contains [3 styles](#gallery).

- `Lekton_Regular400`
- `Lekton_Regular400_Italic`
- `Lekton_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/lekton expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Lekton_Regular400,
  Lekton_Regular400_Italic,
  Lekton_Bold700,
} from '@expo-google-fonts/lekton';

export default () => {
  let [fontsLoaded] = useFonts({
    Lekton_Regular400,
    Lekton_Regular400_Italic,
    Lekton_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lekton_Regular400' }}>
          Lekton_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lekton_Regular400_Italic' }}>
          Lekton_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lekton_Bold700' }}>
          Lekton_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Lekton_Regular400
![Lekton_Regular400](./919f93dff330901c348455426b31bc6ad6270b29b4527387ab2f16ae1a8b1b37.ttf.png)

##### Lekton_Regular400_Italic
![Lekton_Regular400_Italic](./5bdc665e2f574f3cde6b0db13ba296956f6736f4277decf03a015151ca063072.ttf.png)

##### Lekton_Bold700
![Lekton_Bold700](./34d7bf522a1cd2ddb84bd57082d9651c5155029004a5a66c713dec61c865ab08.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Lekton on Google Fonts](https://fonts.google.com/specimen/Lekton)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lekton)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lekton)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
