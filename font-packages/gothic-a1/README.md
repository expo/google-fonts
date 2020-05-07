# @expo-google-fonts/gothic-a1

This package lets you use the [**Gothic A1**](https://fonts.google.com/specimen/Gothic+A1) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Gothic A1

![Gothic A1](./font-family.png)

This font family contains [9 styles](#gallery).

- `GothicA1_Thin100`
- `GothicA1_ExtraLight200`
- `GothicA1_Light300`
- `GothicA1_Regular400`
- `GothicA1_Medium500`
- `GothicA1_SemiBold600`
- `GothicA1_Bold700`
- `GothicA1_ExtraBold800`
- `GothicA1_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/gothic-a1 expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  GothicA1_Thin100,
  GothicA1_ExtraLight200,
  GothicA1_Light300,
  GothicA1_Regular400,
  GothicA1_Medium500,
  GothicA1_SemiBold600,
  GothicA1_Bold700,
  GothicA1_ExtraBold800,
  GothicA1_Black900,
} from '@expo-google-fonts/gothic-a1';

export default () => {
  let [fontsLoaded] = useFonts({
    GothicA1_Thin100,
    GothicA1_ExtraLight200,
    GothicA1_Light300,
    GothicA1_Regular400,
    GothicA1_Medium500,
    GothicA1_SemiBold600,
    GothicA1_Bold700,
    GothicA1_ExtraBold800,
    GothicA1_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'GothicA1_Thin100' }}>
          GothicA1_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GothicA1_ExtraLight200' }}>
          GothicA1_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GothicA1_Light300' }}>
          GothicA1_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GothicA1_Regular400' }}>
          GothicA1_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GothicA1_Medium500' }}>
          GothicA1_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GothicA1_SemiBold600' }}>
          GothicA1_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GothicA1_Bold700' }}>
          GothicA1_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GothicA1_ExtraBold800' }}>
          GothicA1_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GothicA1_Black900' }}>
          GothicA1_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### GothicA1_Thin100
![GothicA1_Thin100](./1ae3fbdff726cb716a361659f8efd51296b280ce94f4582c7eea6a69905050e0.ttf.png)

##### GothicA1_ExtraLight200
![GothicA1_ExtraLight200](./c2132aa2e6fae5ce3ac066aa23fc45e7a83571666c0b4cc9c4dd7bf734363f05.ttf.png)

##### GothicA1_Light300
![GothicA1_Light300](./91a462996301381a669ea6f51dc5030f155c0a85e896a575a5d80dfbd8471779.ttf.png)

##### GothicA1_Regular400
![GothicA1_Regular400](./a9676e8d54fdeef2976f9c8fde17f39fec21956933f3ee203655c2655f350e08.ttf.png)

##### GothicA1_Medium500
![GothicA1_Medium500](./4d0781b8cc09648594a3bba783b1d463592a004fea48584b181b631e2bfc9956.ttf.png)

##### GothicA1_SemiBold600
![GothicA1_SemiBold600](./94fbbaaaa3c999db13176f3b5a8cc657f1e471472f8efc8fd47d298191d6ea56.ttf.png)

##### GothicA1_Bold700
![GothicA1_Bold700](./e689bf118e2ff1a2884e3170b3d1829ccfdd0147baf98523e7fe0494299969f1.ttf.png)

##### GothicA1_ExtraBold800
![GothicA1_ExtraBold800](./db82d9a4e6dabe467f8879d6c23074f7bb1b8ea95857527aec64201e53126f6d.ttf.png)

##### GothicA1_Black900
![GothicA1_Black900](./ad367f71a0970215c6e16efbe180999b11228c398745e8021187b0aa608fdd2d.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Gothic A1 on Google Fonts](https://fonts.google.com/specimen/Gothic+A1)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gothic-a1)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gothic-a1)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
