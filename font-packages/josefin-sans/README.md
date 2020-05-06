# @expo-google-fonts/josefin-sans

This package lets you use the [**Josefin Sans**](https://fonts.google.com/specimen/Josefin+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Josefin Sans

![Josefin Sans](./font-family.png)

This font family contains [10 styles](#gallery).

- `JosefinSans_Thin100`
- `JosefinSans_Thin100_Italic`
- `JosefinSans_Light300`
- `JosefinSans_Light300_Italic`
- `JosefinSans_Regular400`
- `JosefinSans_Regular400_Italic`
- `JosefinSans_SemiBold600`
- `JosefinSans_SemiBold600_Italic`
- `JosefinSans_Bold700`
- `JosefinSans_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/josefin-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  JosefinSans_Thin100,
  JosefinSans_Thin100_Italic,
  JosefinSans_Light300,
  JosefinSans_Light300_Italic,
  JosefinSans_Regular400,
  JosefinSans_Regular400_Italic,
  JosefinSans_SemiBold600,
  JosefinSans_SemiBold600_Italic,
  JosefinSans_Bold700,
  JosefinSans_Bold700_Italic,
} from '@expo-google-fonts/josefin-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    JosefinSans_Thin100,
    JosefinSans_Thin100_Italic,
    JosefinSans_Light300,
    JosefinSans_Light300_Italic,
    JosefinSans_Regular400,
    JosefinSans_Regular400_Italic,
    JosefinSans_SemiBold600,
    JosefinSans_SemiBold600_Italic,
    JosefinSans_Bold700,
    JosefinSans_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSans_Thin100' }}>
          JosefinSans_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSans_Thin100_Italic' }}>
          JosefinSans_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSans_Light300' }}>
          JosefinSans_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSans_Light300_Italic' }}>
          JosefinSans_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSans_Regular400' }}>
          JosefinSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSans_Regular400_Italic' }}>
          JosefinSans_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSans_SemiBold600' }}>
          JosefinSans_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSans_SemiBold600_Italic' }}>
          JosefinSans_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSans_Bold700' }}>
          JosefinSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSans_Bold700_Italic' }}>
          JosefinSans_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### JosefinSans_Thin100
![JosefinSans_Thin100](./d9274027036e4bec6eeac49709c56529144d0714f2d42cfefabb8f29aa669110.ttf.png)

##### JosefinSans_Thin100_Italic
![JosefinSans_Thin100_Italic](./fe583724f6b3b6ff7f2a65b872c7a8be86957b1f03d8efb03b7c3a83271d22f0.ttf.png)

##### JosefinSans_Light300
![JosefinSans_Light300](./2bfd7038e00c3bcb80df604697efc092891a519557503aab5b119fad6fb79d41.ttf.png)

##### JosefinSans_Light300_Italic
![JosefinSans_Light300_Italic](./7ab4a22bc24c0da9b9abeae23dcabe78ebe9cb10010845ffc5b916764b87f63a.ttf.png)

##### JosefinSans_Regular400
![JosefinSans_Regular400](./ad0ce8b3f694b796a43e60893235246f404c728782ef2719a3122b54b6aee1d6.ttf.png)

##### JosefinSans_Regular400_Italic
![JosefinSans_Regular400_Italic](./e240205c12a00fd8fec9a99ee4ce68015307c91c1dc38586775ff103177bbf6b.ttf.png)

##### JosefinSans_SemiBold600
![JosefinSans_SemiBold600](./1af031215debaf6e64b6373e58d995de8763c248952fcf2a5f2b03b1cff3e26f.ttf.png)

##### JosefinSans_SemiBold600_Italic
![JosefinSans_SemiBold600_Italic](./d8d67f5eb2f1bd5f94c9574d8aee64e7e1706e25d0e4715e73d236bf12efeca0.ttf.png)

##### JosefinSans_Bold700
![JosefinSans_Bold700](./dd252f6382ade7107cb7955cfb5062f3b8b8546376fd9bdb6774fc830292db75.ttf.png)

##### JosefinSans_Bold700_Italic
![JosefinSans_Bold700_Italic](./de8609adb9deaf3cd40532c56050226a1aa22c9f100b56fd248fd4b77fd8fd88.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Josefin Sans on Google Fonts](https://fonts.google.com/specimen/Josefin+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/josefin-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/josefin-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
