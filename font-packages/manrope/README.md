# @expo-google-fonts/manrope

This package lets you use the [**Manrope**](https://fonts.google.com/specimen/Manrope) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Manrope

![Manrope](./font-family.png)

This font family contains [7 styles](#gallery).

- `Manrope_ExtraLight200`
- `Manrope_Light300`
- `Manrope_Regular400`
- `Manrope_Medium500`
- `Manrope_SemiBold600`
- `Manrope_Bold700`
- `Manrope_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/manrope expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Manrope_ExtraLight200,
  Manrope_Light300,
  Manrope_Regular400,
  Manrope_Medium500,
  Manrope_SemiBold600,
  Manrope_Bold700,
  Manrope_ExtraBold800,
} from '@expo-google-fonts/manrope';

export default () => {
  let [fontsLoaded] = useFonts({
    Manrope_ExtraLight200,
    Manrope_Light300,
    Manrope_Regular400,
    Manrope_Medium500,
    Manrope_SemiBold600,
    Manrope_Bold700,
    Manrope_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manrope_ExtraLight200' }}>
          Manrope_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manrope_Light300' }}>
          Manrope_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manrope_Regular400' }}>
          Manrope_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manrope_Medium500' }}>
          Manrope_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manrope_SemiBold600' }}>
          Manrope_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manrope_Bold700' }}>
          Manrope_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manrope_ExtraBold800' }}>
          Manrope_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Manrope_ExtraLight200
![Manrope_ExtraLight200](./0e0aac7c30d815ffee8f590cf386f62ccea077282904c5bcc089f83e1e3fa6ba.ttf.png)

##### Manrope_Light300
![Manrope_Light300](./b00c95e47bd20d7096fc9bd66552bab89fdaee62611c600e651efcc4c1808b29.ttf.png)

##### Manrope_Regular400
![Manrope_Regular400](./1f742b6ef495bb5b9f5b968a27c50281ca1f9822bb53ec99bb3757ff2f3febfd.ttf.png)

##### Manrope_Medium500
![Manrope_Medium500](./1b26cd5641c96028ba3251bc1c3017c3b7f0f66db8bffa236e6a9fba9273dbe4.ttf.png)

##### Manrope_SemiBold600
![Manrope_SemiBold600](./2926db83b22f15d5dead94c407d4b830fe032adae54af4611e4a3b1d95e5059b.ttf.png)

##### Manrope_Bold700
![Manrope_Bold700](./89fbadf5ffbbcf438d182a4931c241c4beb528b1c11c22290afc4b4b8c8f854d.ttf.png)

##### Manrope_ExtraBold800
![Manrope_ExtraBold800](./f94757bb3fe3b1f1a20cdb49284c1a311dec4ed72554c5858d186fc93db7afaf.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Manrope on Google Fonts](https://fonts.google.com/specimen/Manrope)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/manrope)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/manrope)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
