# @expo-google-fonts/scada

This package lets you use the [**Scada**](https://fonts.google.com/specimen/Scada) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Scada

![Scada](./font-family.png)

This font family contains [4 styles](#gallery).

- `Scada_Regular400`
- `Scada_Regular400_Italic`
- `Scada_Bold700`
- `Scada_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/scada expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Scada_Regular400,
  Scada_Regular400_Italic,
  Scada_Bold700,
  Scada_Bold700_Italic,
} from '@expo-google-fonts/scada';

export default () => {
  let [fontsLoaded] = useFonts({
    Scada_Regular400,
    Scada_Regular400_Italic,
    Scada_Bold700,
    Scada_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Scada_Regular400' }}>
          Scada_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Scada_Regular400_Italic' }}>
          Scada_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Scada_Bold700' }}>
          Scada_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Scada_Bold700_Italic' }}>
          Scada_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Scada_Regular400
![Scada_Regular400](./b50d4e47b78665f29007e923c626d8127c7c9793f60cc8b94e55fe65a9e1b156.ttf.png)

##### Scada_Regular400_Italic
![Scada_Regular400_Italic](./19e3630deea1d0d7694e73dfb85c5a97e8fc332031fc27897d4b5b14fb6f62b3.ttf.png)

##### Scada_Bold700
![Scada_Bold700](./9a106a75900b9cafa514e2c814b45cabcd61c5f50ceac1772ce6a12386cfa505.ttf.png)

##### Scada_Bold700_Italic
![Scada_Bold700_Italic](./c61947a93ece6ef8f4f35e6f1f51f2d2eae7d27d8c1e103b8a0792818925421e.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Scada on Google Fonts](https://fonts.google.com/specimen/Scada)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/scada)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/scada)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
