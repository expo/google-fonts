# @expo-google-fonts/alegreya-sans

This package lets you use the [**Alegreya Sans**](https://fonts.google.com/specimen/Alegreya+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Alegreya Sans

![Alegreya Sans](./font-family.png)

This font family contains [14 styles](#gallery).

- `AlegreyaSans_Thin100`
- `AlegreyaSans_Thin100_Italic`
- `AlegreyaSans_Light300`
- `AlegreyaSans_Light300_Italic`
- `AlegreyaSans_Regular400`
- `AlegreyaSans_Regular400_Italic`
- `AlegreyaSans_Medium500`
- `AlegreyaSans_Medium500_Italic`
- `AlegreyaSans_Bold700`
- `AlegreyaSans_Bold700_Italic`
- `AlegreyaSans_ExtraBold800`
- `AlegreyaSans_ExtraBold800_Italic`
- `AlegreyaSans_Black900`
- `AlegreyaSans_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/alegreya-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  AlegreyaSans_Thin100,
  AlegreyaSans_Thin100_Italic,
  AlegreyaSans_Light300,
  AlegreyaSans_Light300_Italic,
  AlegreyaSans_Regular400,
  AlegreyaSans_Regular400_Italic,
  AlegreyaSans_Medium500,
  AlegreyaSans_Medium500_Italic,
  AlegreyaSans_Bold700,
  AlegreyaSans_Bold700_Italic,
  AlegreyaSans_ExtraBold800,
  AlegreyaSans_ExtraBold800_Italic,
  AlegreyaSans_Black900,
  AlegreyaSans_Black900_Italic,
} from '@expo-google-fonts/alegreya-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    AlegreyaSans_Thin100,
    AlegreyaSans_Thin100_Italic,
    AlegreyaSans_Light300,
    AlegreyaSans_Light300_Italic,
    AlegreyaSans_Regular400,
    AlegreyaSans_Regular400_Italic,
    AlegreyaSans_Medium500,
    AlegreyaSans_Medium500_Italic,
    AlegreyaSans_Bold700,
    AlegreyaSans_Bold700_Italic,
    AlegreyaSans_ExtraBold800,
    AlegreyaSans_ExtraBold800_Italic,
    AlegreyaSans_Black900,
    AlegreyaSans_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_Thin100' }}>
          AlegreyaSans_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_Thin100_Italic' }}>
          AlegreyaSans_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_Light300' }}>
          AlegreyaSans_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_Light300_Italic' }}>
          AlegreyaSans_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_Regular400' }}>
          AlegreyaSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_Regular400_Italic' }}>
          AlegreyaSans_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_Medium500' }}>
          AlegreyaSans_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_Medium500_Italic' }}>
          AlegreyaSans_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_Bold700' }}>
          AlegreyaSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_Bold700_Italic' }}>
          AlegreyaSans_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_ExtraBold800' }}>
          AlegreyaSans_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_ExtraBold800_Italic' }}>
          AlegreyaSans_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_Black900' }}>
          AlegreyaSans_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSans_Black900_Italic' }}>
          AlegreyaSans_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### AlegreyaSans_Thin100
![AlegreyaSans_Thin100](./4e4fc2370a575c44ada0a88565af306c9e5f6f863cd3e594f68fbecb64d6eb45.ttf.png)

##### AlegreyaSans_Thin100_Italic
![AlegreyaSans_Thin100_Italic](./dfad029fd95bc8e1e6f4aff5ca9a40f7ee01b7c42436068b1a609af1036de968.ttf.png)

##### AlegreyaSans_Light300
![AlegreyaSans_Light300](./f413bb7452d6c3127865026e765917685dde894f8130417ee32c5c22d3332a5a.ttf.png)

##### AlegreyaSans_Light300_Italic
![AlegreyaSans_Light300_Italic](./53c675ca8ca26437bfdef9475e6be6a31d8f390904f2a25dc7f71ecacf749525.ttf.png)

##### AlegreyaSans_Regular400
![AlegreyaSans_Regular400](./5186af372dbc9306a0390c6a53c2b3ed7e398bf7e19390e4115779d9d4dcb9e0.ttf.png)

##### AlegreyaSans_Regular400_Italic
![AlegreyaSans_Regular400_Italic](./a1cf80b2ffea7f7a74c290c886e0853612aa20f2f2942a11b6221973a8b1125a.ttf.png)

##### AlegreyaSans_Medium500
![AlegreyaSans_Medium500](./b54080b02a55195adec0aed32ecb384095ddfef221504059e15682a59709d9a5.ttf.png)

##### AlegreyaSans_Medium500_Italic
![AlegreyaSans_Medium500_Italic](./16b83ef0510db5d9b7adeb15a6bf505975df75012e3f04118c8384165bae4c4f.ttf.png)

##### AlegreyaSans_Bold700
![AlegreyaSans_Bold700](./baf6cfdcdaeaff8ae1997ba5a87f7c43b4823b8e094097eb354fdaeb531c610e.ttf.png)

##### AlegreyaSans_Bold700_Italic
![AlegreyaSans_Bold700_Italic](./c3ea4ab25245b87d94c68e797ee68e472bf893023027f57d0dfb6aef204e650d.ttf.png)

##### AlegreyaSans_ExtraBold800
![AlegreyaSans_ExtraBold800](./2313ece3a1be01342c2f2b902904ce864b05c9ecf3a72e96580c84ed124b370c.ttf.png)

##### AlegreyaSans_ExtraBold800_Italic
![AlegreyaSans_ExtraBold800_Italic](./296f24dc4713815e4ea5f25a60e938c00c6d94678ba90f140c4c4dcd5d3dae42.ttf.png)

##### AlegreyaSans_Black900
![AlegreyaSans_Black900](./c1ae94a74aa4998c1ed777107095512b795dd19783a838e9eaffca2382405bf3.ttf.png)

##### AlegreyaSans_Black900_Italic
![AlegreyaSans_Black900_Italic](./63fa7d406f209d33ac9020dc3209f61bda016b2e851b369e2475f6c77bd65111.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Alegreya Sans on Google Fonts](https://fonts.google.com/specimen/Alegreya+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alegreya-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alegreya-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
