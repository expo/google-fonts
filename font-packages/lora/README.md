# @expo-google-fonts/lora

This package lets you use the [**Lora**](https://fonts.google.com/specimen/Lora) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Lora

![Lora](./font-family.png)

This font family contains [4 styles](#gallery).

- `Lora_Regular400`
- `Lora_Regular400_Italic`
- `Lora_Bold700`
- `Lora_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/lora expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Lora_Regular400,
  Lora_Regular400_Italic,
  Lora_Bold700,
  Lora_Bold700_Italic,
} from '@expo-google-fonts/lora';

export default () => {
  let [fontsLoaded] = useFonts({
    Lora_Regular400,
    Lora_Regular400_Italic,
    Lora_Bold700,
    Lora_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lora_Regular400' }}>
          Lora_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lora_Regular400_Italic' }}>
          Lora_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lora_Bold700' }}>Lora_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lora_Bold700_Italic' }}>
          Lora_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Lora_Regular400
![Lora_Regular400](./ab4a36d4eeabba7b21d6d9f9cf3402c3cfc28c64a4fb06cb6c424de03a8c98b9.ttf.png)

##### Lora_Regular400_Italic
![Lora_Regular400_Italic](./5bda244cfbcaf07666bfff144e4e1e5809f93966fa537d9ba1a29fcfd7e0ebb5.ttf.png)

##### Lora_Bold700
![Lora_Bold700](./aada77cdac3a872737be48f8c95b39befadbb124e16cc8b8e5076dd429400ea1.ttf.png)

##### Lora_Bold700_Italic
![Lora_Bold700_Italic](./b8238541d0dfa01767e098baf5d7942885a58372a7b97e09d2af15e9d295f2f2.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Lora on Google Fonts](https://fonts.google.com/specimen/Lora)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lora)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lora)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
