# @expo-google-fonts/montserrat

This package lets you use the [**Montserrat**](https://fonts.google.com/specimen/Montserrat) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Montserrat

![Montserrat](./font-family.png)

This font family contains [18 styles](#gallery).

- `Montserrat_Thin100`
- `Montserrat_Thin100_Italic`
- `Montserrat_ExtraLight200`
- `Montserrat_ExtraLight200_Italic`
- `Montserrat_Light300`
- `Montserrat_Light300_Italic`
- `Montserrat_Regular400`
- `Montserrat_Regular400_Italic`
- `Montserrat_Medium500`
- `Montserrat_Medium500_Italic`
- `Montserrat_SemiBold600`
- `Montserrat_SemiBold600_Italic`
- `Montserrat_Bold700`
- `Montserrat_Bold700_Italic`
- `Montserrat_ExtraBold800`
- `Montserrat_ExtraBold800_Italic`
- `Montserrat_Black900`
- `Montserrat_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/montserrat expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Montserrat_Thin100,
  Montserrat_Thin100_Italic,
  Montserrat_ExtraLight200,
  Montserrat_ExtraLight200_Italic,
  Montserrat_Light300,
  Montserrat_Light300_Italic,
  Montserrat_Regular400,
  Montserrat_Regular400_Italic,
  Montserrat_Medium500,
  Montserrat_Medium500_Italic,
  Montserrat_SemiBold600,
  Montserrat_SemiBold600_Italic,
  Montserrat_Bold700,
  Montserrat_Bold700_Italic,
  Montserrat_ExtraBold800,
  Montserrat_ExtraBold800_Italic,
  Montserrat_Black900,
  Montserrat_Black900_Italic,
} from '@expo-google-fonts/montserrat';

export default () => {
  let [fontsLoaded] = useFonts({
    Montserrat_Thin100,
    Montserrat_Thin100_Italic,
    Montserrat_ExtraLight200,
    Montserrat_ExtraLight200_Italic,
    Montserrat_Light300,
    Montserrat_Light300_Italic,
    Montserrat_Regular400,
    Montserrat_Regular400_Italic,
    Montserrat_Medium500,
    Montserrat_Medium500_Italic,
    Montserrat_SemiBold600,
    Montserrat_SemiBold600_Italic,
    Montserrat_Bold700,
    Montserrat_Bold700_Italic,
    Montserrat_ExtraBold800,
    Montserrat_ExtraBold800_Italic,
    Montserrat_Black900,
    Montserrat_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_Thin100' }}>
          Montserrat_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_Thin100_Italic' }}>
          Montserrat_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_ExtraLight200' }}>
          Montserrat_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_ExtraLight200_Italic' }}>
          Montserrat_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_Light300' }}>
          Montserrat_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_Light300_Italic' }}>
          Montserrat_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_Regular400' }}>
          Montserrat_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_Regular400_Italic' }}>
          Montserrat_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_Medium500' }}>
          Montserrat_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_Medium500_Italic' }}>
          Montserrat_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_SemiBold600' }}>
          Montserrat_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_SemiBold600_Italic' }}>
          Montserrat_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_Bold700' }}>
          Montserrat_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_Bold700_Italic' }}>
          Montserrat_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_ExtraBold800' }}>
          Montserrat_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_ExtraBold800_Italic' }}>
          Montserrat_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_Black900' }}>
          Montserrat_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Montserrat_Black900_Italic' }}>
          Montserrat_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Montserrat_Thin100
![Montserrat_Thin100](./13b843ab4d5acd6d99d06a88bbc492bd3ffb0d55b01f159c34a0a6237cb2f148.ttf.png)

##### Montserrat_Thin100_Italic
![Montserrat_Thin100_Italic](./282f82e77ce6ec450987922f6c8c55456bd826c8a1557a007adeb4c460c6ce27.ttf.png)

##### Montserrat_ExtraLight200
![Montserrat_ExtraLight200](./b058309166a4bdbc1e36f0f4ca0b8349e9705f457bc71a190e34624de2062455.ttf.png)

##### Montserrat_ExtraLight200_Italic
![Montserrat_ExtraLight200_Italic](./778b3406a7b740d7d857323720a66ef72ccb3b507b3488b2e56fb9c9f52977b8.ttf.png)

##### Montserrat_Light300
![Montserrat_Light300](./25cab2a480827c3b70f98fa4fe09b06a974b8afb996f60232b5acacb57acade2.ttf.png)

##### Montserrat_Light300_Italic
![Montserrat_Light300_Italic](./7b490e666930fe7f1379aa62b203966a6f284a9dc74b09e8dd5c59760da460f8.ttf.png)

##### Montserrat_Regular400
![Montserrat_Regular400](./470e93c06a9fffa6851375f54047917a9d774ed6027d9f044cd1bc8d4cd5630b.ttf.png)

##### Montserrat_Regular400_Italic
![Montserrat_Regular400_Italic](./83e171717660560888d9a84b2a2b1409b6fb43b806ce9b96059c974be4126d64.ttf.png)

##### Montserrat_Medium500
![Montserrat_Medium500](./cec0f6e0bfbfaa352eb189f0eb220916dd278b02aaf824be87055ba5cc38d58b.ttf.png)

##### Montserrat_Medium500_Italic
![Montserrat_Medium500_Italic](./a61fc08703fd75883c389503641242523b7140ac0b6df6b22106902767e7bb2c.ttf.png)

##### Montserrat_SemiBold600
![Montserrat_SemiBold600](./5f82f6e55db43e905c6ab9d04395566b243c41798d6a53545ffbd10ed6c424c4.ttf.png)

##### Montserrat_SemiBold600_Italic
![Montserrat_SemiBold600_Italic](./625ed5e1a74ead073b6562f04b509f83c2e1630b25ea4c98ccd3d275418c0308.ttf.png)

##### Montserrat_Bold700
![Montserrat_Bold700](./052bfd7f3dc788ae3f0d59dc8e5d65be0c1ec9acaa6fbe53dc70640f64c075bd.ttf.png)

##### Montserrat_Bold700_Italic
![Montserrat_Bold700_Italic](./7c882260e0b6664897eb1747188ca151cea2a966109ae534e0eb706aa990510d.ttf.png)

##### Montserrat_ExtraBold800
![Montserrat_ExtraBold800](./8bac23178f38bab6018ed343c524a822a5bcbe2a021decbf30f85a9cb61aade0.ttf.png)

##### Montserrat_ExtraBold800_Italic
![Montserrat_ExtraBold800_Italic](./f2c00bb055d9f815d97ed28ae9e26ae9bff8d0ffa7c6e9ddd3cc47c070c922ea.ttf.png)

##### Montserrat_Black900
![Montserrat_Black900](./c64d95a01ae992dd8ff7474e55c16b2a05ea6c4e9aa944ccb51d4b1016232583.ttf.png)

##### Montserrat_Black900_Italic
![Montserrat_Black900_Italic](./6eac88b190248d68069db0de9c165f24aaffc22097fec98ba72710c2f9a96a71.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Montserrat on Google Fonts](https://fonts.google.com/specimen/Montserrat)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/montserrat)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/montserrat)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
