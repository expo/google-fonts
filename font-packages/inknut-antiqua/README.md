# @expo-google-fonts/inknut-antiqua

This package lets you use the [**Inknut Antiqua**](https://fonts.google.com/specimen/Inknut+Antiqua) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Inknut Antiqua

![Inknut Antiqua](./font-family.png)

This font family contains [7 styles](#gallery).

- `InknutAntiqua_Light300`
- `InknutAntiqua_Regular400`
- `InknutAntiqua_Medium500`
- `InknutAntiqua_SemiBold600`
- `InknutAntiqua_Bold700`
- `InknutAntiqua_ExtraBold800`
- `InknutAntiqua_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/inknut-antiqua expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  InknutAntiqua_Light300,
  InknutAntiqua_Regular400,
  InknutAntiqua_Medium500,
  InknutAntiqua_SemiBold600,
  InknutAntiqua_Bold700,
  InknutAntiqua_ExtraBold800,
  InknutAntiqua_Black900,
} from '@expo-google-fonts/inknut-antiqua';

export default () => {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_Light300,
    InknutAntiqua_Regular400,
    InknutAntiqua_Medium500,
    InknutAntiqua_SemiBold600,
    InknutAntiqua_Bold700,
    InknutAntiqua_ExtraBold800,
    InknutAntiqua_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_Light300' }}>
          InknutAntiqua_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_Regular400' }}>
          InknutAntiqua_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_Medium500' }}>
          InknutAntiqua_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_SemiBold600' }}>
          InknutAntiqua_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_Bold700' }}>
          InknutAntiqua_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_ExtraBold800' }}>
          InknutAntiqua_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_Black900' }}>
          InknutAntiqua_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### InknutAntiqua_Light300
![InknutAntiqua_Light300](./8fae03035a8fb6772fc7bcac683c4a01747a3902ede69b6897be980d35cd3c42.ttf.png)

##### InknutAntiqua_Regular400
![InknutAntiqua_Regular400](./bad6e7b6f2580d3870d5242c04a7edbb0712500e639570759d1b76b16ad225af.ttf.png)

##### InknutAntiqua_Medium500
![InknutAntiqua_Medium500](./f7bad3658649b817553e3c3a1e3b75b8b1c2f93af24d3ee0c2f491f13695cee4.ttf.png)

##### InknutAntiqua_SemiBold600
![InknutAntiqua_SemiBold600](./4249a7edc9acfbbb46d50638be038427a109d75df9478fd696a6d61ac2c6262b.ttf.png)

##### InknutAntiqua_Bold700
![InknutAntiqua_Bold700](./ed4800a911bc4a319bbb68949167b0e0c9149ae4542444b3643b0949f21dbebb.ttf.png)

##### InknutAntiqua_ExtraBold800
![InknutAntiqua_ExtraBold800](./58f6a2abd44b4a7ba81f42611ec481c40e08bed9129fec6f638b2dca583bf20d.ttf.png)

##### InknutAntiqua_Black900
![InknutAntiqua_Black900](./068486e18282d9c5300c186834bd1a055d1d4d2697ac3498756bc41e999b676b.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Inknut Antiqua on Google Fonts](https://fonts.google.com/specimen/Inknut+Antiqua)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/inknut-antiqua)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/inknut-antiqua)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
