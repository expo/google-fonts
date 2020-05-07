# @expo-google-fonts/fahkwang

This package lets you use the [**Fahkwang**](https://fonts.google.com/specimen/Fahkwang) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Fahkwang

![Fahkwang](./font-family.png)

This font family contains [12 styles](#gallery).

- `Fahkwang_ExtraLight200`
- `Fahkwang_ExtraLight200_Italic`
- `Fahkwang_Light300`
- `Fahkwang_Light300_Italic`
- `Fahkwang_Regular400`
- `Fahkwang_Regular400_Italic`
- `Fahkwang_Medium500`
- `Fahkwang_Medium500_Italic`
- `Fahkwang_SemiBold600`
- `Fahkwang_SemiBold600_Italic`
- `Fahkwang_Bold700`
- `Fahkwang_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/fahkwang expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Fahkwang_ExtraLight200,
  Fahkwang_ExtraLight200_Italic,
  Fahkwang_Light300,
  Fahkwang_Light300_Italic,
  Fahkwang_Regular400,
  Fahkwang_Regular400_Italic,
  Fahkwang_Medium500,
  Fahkwang_Medium500_Italic,
  Fahkwang_SemiBold600,
  Fahkwang_SemiBold600_Italic,
  Fahkwang_Bold700,
  Fahkwang_Bold700_Italic,
} from '@expo-google-fonts/fahkwang';

export default () => {
  let [fontsLoaded] = useFonts({
    Fahkwang_ExtraLight200,
    Fahkwang_ExtraLight200_Italic,
    Fahkwang_Light300,
    Fahkwang_Light300_Italic,
    Fahkwang_Regular400,
    Fahkwang_Regular400_Italic,
    Fahkwang_Medium500,
    Fahkwang_Medium500_Italic,
    Fahkwang_SemiBold600,
    Fahkwang_SemiBold600_Italic,
    Fahkwang_Bold700,
    Fahkwang_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fahkwang_ExtraLight200' }}>
          Fahkwang_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fahkwang_ExtraLight200_Italic' }}>
          Fahkwang_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fahkwang_Light300' }}>
          Fahkwang_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fahkwang_Light300_Italic' }}>
          Fahkwang_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fahkwang_Regular400' }}>
          Fahkwang_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fahkwang_Regular400_Italic' }}>
          Fahkwang_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fahkwang_Medium500' }}>
          Fahkwang_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fahkwang_Medium500_Italic' }}>
          Fahkwang_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fahkwang_SemiBold600' }}>
          Fahkwang_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fahkwang_SemiBold600_Italic' }}>
          Fahkwang_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fahkwang_Bold700' }}>
          Fahkwang_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Fahkwang_Bold700_Italic' }}>
          Fahkwang_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Fahkwang_ExtraLight200
![Fahkwang_ExtraLight200](./07a682d6bc044cbd486744e34dcb061077bac07d9501f34c8f50b67aa2c02b7f.ttf.png)

##### Fahkwang_ExtraLight200_Italic
![Fahkwang_ExtraLight200_Italic](./c9cba18dabd9762bcd5cd460bbc145d71a364a65255b3ff8514cb385997506c8.ttf.png)

##### Fahkwang_Light300
![Fahkwang_Light300](./a4f936e2bce0a9dc318b8e50537d34ffd7475cd6199842a810f7b9ef9072cdae.ttf.png)

##### Fahkwang_Light300_Italic
![Fahkwang_Light300_Italic](./a1ef09b096105c18faf5fadb52cbeb7979873ad7e9d50910b116ce244b4fe166.ttf.png)

##### Fahkwang_Regular400
![Fahkwang_Regular400](./9e288aad85ecd44f0568c3d218d1478f896a2e9656dea8978a0462f0432102f7.ttf.png)

##### Fahkwang_Regular400_Italic
![Fahkwang_Regular400_Italic](./d39b9b3782631bd9e5ca85b327f2e86ade2f88ca6d30a9f85112209c08f703e5.ttf.png)

##### Fahkwang_Medium500
![Fahkwang_Medium500](./f7b5bd7dd6726ca8619156e571f3ab9429a229e110e87eb4807508a6e603b055.ttf.png)

##### Fahkwang_Medium500_Italic
![Fahkwang_Medium500_Italic](./99dff1eec80cee80e76e31de570b32a627c8b114c5f4a6edda2349c62ef7eb9e.ttf.png)

##### Fahkwang_SemiBold600
![Fahkwang_SemiBold600](./b415ad58dda4167eef2957ac799ec99e305a626797d3f015c814096dcab8244f.ttf.png)

##### Fahkwang_SemiBold600_Italic
![Fahkwang_SemiBold600_Italic](./a3cb35f606a6f504a703c26834f242e79e57064c9cc15b016acd7ead15c1c379.ttf.png)

##### Fahkwang_Bold700
![Fahkwang_Bold700](./9d4c87b61ab6b7a8c8fd345b20f1bdea3f0eaf90b1f3d014ba9a1aed4df71bc5.ttf.png)

##### Fahkwang_Bold700_Italic
![Fahkwang_Bold700_Italic](./02444f0d64cab232aa85ca6646af07c761791397753194217bec25ee19e4107e.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Fahkwang on Google Fonts](https://fonts.google.com/specimen/Fahkwang)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fahkwang)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fahkwang)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
