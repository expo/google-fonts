# @expo-google-fonts/josefin-slab

This package lets you use the [**Josefin Slab**](https://fonts.google.com/specimen/Josefin+Slab) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Josefin Slab

![Josefin Slab](./font-family.png)

This font family contains [10 styles](#gallery).

- `JosefinSlab_Thin100`
- `JosefinSlab_Thin100_Italic`
- `JosefinSlab_Light300`
- `JosefinSlab_Light300_Italic`
- `JosefinSlab_Regular400`
- `JosefinSlab_Regular400_Italic`
- `JosefinSlab_SemiBold600`
- `JosefinSlab_SemiBold600_Italic`
- `JosefinSlab_Bold700`
- `JosefinSlab_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/josefin-slab expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  JosefinSlab_Thin100,
  JosefinSlab_Thin100_Italic,
  JosefinSlab_Light300,
  JosefinSlab_Light300_Italic,
  JosefinSlab_Regular400,
  JosefinSlab_Regular400_Italic,
  JosefinSlab_SemiBold600,
  JosefinSlab_SemiBold600_Italic,
  JosefinSlab_Bold700,
  JosefinSlab_Bold700_Italic,
} from '@expo-google-fonts/josefin-slab';

export default () => {
  let [fontsLoaded] = useFonts({
    JosefinSlab_Thin100,
    JosefinSlab_Thin100_Italic,
    JosefinSlab_Light300,
    JosefinSlab_Light300_Italic,
    JosefinSlab_Regular400,
    JosefinSlab_Regular400_Italic,
    JosefinSlab_SemiBold600,
    JosefinSlab_SemiBold600_Italic,
    JosefinSlab_Bold700,
    JosefinSlab_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSlab_Thin100' }}>
          JosefinSlab_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSlab_Thin100_Italic' }}>
          JosefinSlab_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSlab_Light300' }}>
          JosefinSlab_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSlab_Light300_Italic' }}>
          JosefinSlab_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSlab_Regular400' }}>
          JosefinSlab_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSlab_Regular400_Italic' }}>
          JosefinSlab_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSlab_SemiBold600' }}>
          JosefinSlab_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSlab_SemiBold600_Italic' }}>
          JosefinSlab_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSlab_Bold700' }}>
          JosefinSlab_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'JosefinSlab_Bold700_Italic' }}>
          JosefinSlab_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### JosefinSlab_Thin100
![JosefinSlab_Thin100](./447b30a4f09ce882924bc14b5cb2d46ed8a09e31fbd138c82200fce2411f2612.ttf.png)

##### JosefinSlab_Thin100_Italic
![JosefinSlab_Thin100_Italic](./9e521fdac6770840a2382fe98c7220bc471558f801d8965edf8573e7f30b69b5.ttf.png)

##### JosefinSlab_Light300
![JosefinSlab_Light300](./ed15a28fd4c2b8d4813431c543e1e1d9293d3054ccc2ba5ef342f99ce5a44c08.ttf.png)

##### JosefinSlab_Light300_Italic
![JosefinSlab_Light300_Italic](./5e1991a7b37703dc6b6e746ddc357b7310c82534d6438bdb6f7ae3748790800e.ttf.png)

##### JosefinSlab_Regular400
![JosefinSlab_Regular400](./a95bda8e2687087242a1a437c00ed9c693590a2280a21d2a4734a3ad6dfce08b.ttf.png)

##### JosefinSlab_Regular400_Italic
![JosefinSlab_Regular400_Italic](./61d7f09bf0f42191d6840eb606f9898b7faf7fe6493a630405fe91aac97327f4.ttf.png)

##### JosefinSlab_SemiBold600
![JosefinSlab_SemiBold600](./1a3215f9937cb8a3b66779e1b69158645771177c7433046a9d0929ddc30e126e.ttf.png)

##### JosefinSlab_SemiBold600_Italic
![JosefinSlab_SemiBold600_Italic](./efaff26fee494b1b09da8456684d5c03d3bb898803d186aa6a88154f10bfdfee.ttf.png)

##### JosefinSlab_Bold700
![JosefinSlab_Bold700](./00f4364ef7f981110c8e894aa31ef2195629999eeb5bc8689c21745ec03cf534.ttf.png)

##### JosefinSlab_Bold700_Italic
![JosefinSlab_Bold700_Italic](./999b995ee79a2865d9ed663bd3b3d65fcd10a6c15198afb228ca225b210eac8c.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Josefin Slab on Google Fonts](https://fonts.google.com/specimen/Josefin+Slab)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/josefin-slab)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/josefin-slab)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
