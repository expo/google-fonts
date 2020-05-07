# @expo-google-fonts/asap

This package lets you use the [**Asap**](https://fonts.google.com/specimen/Asap) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Asap

![Asap](./font-family.png)

This font family contains [6 styles](#gallery).

- `Asap_Regular400`
- `Asap_Regular400_Italic`
- `Asap_Medium500`
- `Asap_Medium500_Italic`
- `Asap_Bold700`
- `Asap_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/asap expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Asap_Regular400,
  Asap_Regular400_Italic,
  Asap_Medium500,
  Asap_Medium500_Italic,
  Asap_Bold700,
  Asap_Bold700_Italic,
} from '@expo-google-fonts/asap';

export default () => {
  let [fontsLoaded] = useFonts({
    Asap_Regular400,
    Asap_Regular400_Italic,
    Asap_Medium500,
    Asap_Medium500_Italic,
    Asap_Bold700,
    Asap_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Asap_Regular400' }}>
          Asap_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Asap_Regular400_Italic' }}>
          Asap_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Asap_Medium500' }}>
          Asap_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Asap_Medium500_Italic' }}>
          Asap_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Asap_Bold700' }}>Asap_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Asap_Bold700_Italic' }}>
          Asap_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Asap_Regular400
![Asap_Regular400](./3424989c5e2512f04cbd78fd70665961847d7307eb5d795caadac8db451f74cc.ttf.png)

##### Asap_Regular400_Italic
![Asap_Regular400_Italic](./6286c24191501089796508556c20c3086610ae6aeb56d9aadceaaa0b7d825c51.ttf.png)

##### Asap_Medium500
![Asap_Medium500](./c7034a58c9a896f74c127472a7085dbd1d6bfb6fd2cafb4140dfde291f0bc399.ttf.png)

##### Asap_Medium500_Italic
![Asap_Medium500_Italic](./13483b794adc9a08424049bbf8e6a03b399069e87c0c4d01777ae17c3328de81.ttf.png)

##### Asap_Bold700
![Asap_Bold700](./835a74fedec5a1877e092c739d9f213a3e41860462c70437da2465b5f99ea073.ttf.png)

##### Asap_Bold700_Italic
![Asap_Bold700_Italic](./ce966470982f0031860428bc4a47e41d80471ac70ccc857fac1e948d6c964eb7.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Asap on Google Fonts](https://fonts.google.com/specimen/Asap)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/asap)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/asap)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
