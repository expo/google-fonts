# @expo-google-fonts/encode-sans-expanded

This package lets you use the [**Encode Sans Expanded**](https://fonts.google.com/specimen/Encode+Sans+Expanded) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Encode Sans Expanded

![Encode Sans Expanded](./font-family.png)

This font family contains [9 styles](#gallery).

- `EncodeSansExpanded_Thin100`
- `EncodeSansExpanded_ExtraLight200`
- `EncodeSansExpanded_Light300`
- `EncodeSansExpanded_Regular400`
- `EncodeSansExpanded_Medium500`
- `EncodeSansExpanded_SemiBold600`
- `EncodeSansExpanded_Bold700`
- `EncodeSansExpanded_ExtraBold800`
- `EncodeSansExpanded_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/encode-sans-expanded expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  EncodeSansExpanded_Thin100,
  EncodeSansExpanded_ExtraLight200,
  EncodeSansExpanded_Light300,
  EncodeSansExpanded_Regular400,
  EncodeSansExpanded_Medium500,
  EncodeSansExpanded_SemiBold600,
  EncodeSansExpanded_Bold700,
  EncodeSansExpanded_ExtraBold800,
  EncodeSansExpanded_Black900,
} from '@expo-google-fonts/encode-sans-expanded';

export default () => {
  let [fontsLoaded] = useFonts({
    EncodeSansExpanded_Thin100,
    EncodeSansExpanded_ExtraLight200,
    EncodeSansExpanded_Light300,
    EncodeSansExpanded_Regular400,
    EncodeSansExpanded_Medium500,
    EncodeSansExpanded_SemiBold600,
    EncodeSansExpanded_Bold700,
    EncodeSansExpanded_ExtraBold800,
    EncodeSansExpanded_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansExpanded_Thin100' }}>
          EncodeSansExpanded_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansExpanded_ExtraLight200' }}>
          EncodeSansExpanded_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansExpanded_Light300' }}>
          EncodeSansExpanded_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansExpanded_Regular400' }}>
          EncodeSansExpanded_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansExpanded_Medium500' }}>
          EncodeSansExpanded_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansExpanded_SemiBold600' }}>
          EncodeSansExpanded_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansExpanded_Bold700' }}>
          EncodeSansExpanded_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansExpanded_ExtraBold800' }}>
          EncodeSansExpanded_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansExpanded_Black900' }}>
          EncodeSansExpanded_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### EncodeSansExpanded_Thin100
![EncodeSansExpanded_Thin100](./380345d9f11a5d51121f04ec7692992b4393552df2a3a7d880f4fee2445141d0.ttf.png)

##### EncodeSansExpanded_ExtraLight200
![EncodeSansExpanded_ExtraLight200](./4a7de0181c2afd610c6c4f4cdd0c1b277e273ce075ebc1aeac436fad20e45419.ttf.png)

##### EncodeSansExpanded_Light300
![EncodeSansExpanded_Light300](./9b50fe9a059788e12206f492db451f122f3ae30e6b8aa5944b51f4fa9b128373.ttf.png)

##### EncodeSansExpanded_Regular400
![EncodeSansExpanded_Regular400](./f2fa9b86d419104b4b7ab7aa2d8507d9998032c843e7127317c103b55c3900c3.ttf.png)

##### EncodeSansExpanded_Medium500
![EncodeSansExpanded_Medium500](./9ec9211a546cbefbb5fdbdca840aa8782bdbfdef2bc24a03e769b5676d869dd1.ttf.png)

##### EncodeSansExpanded_SemiBold600
![EncodeSansExpanded_SemiBold600](./57adaf522bbff1044518d732d894dc3b9619455577129c3806e15c41ab7a0cf0.ttf.png)

##### EncodeSansExpanded_Bold700
![EncodeSansExpanded_Bold700](./4ff65de1f2f27bec57c2af88329ff74b61c90a349cda06d054d87125aa4d4588.ttf.png)

##### EncodeSansExpanded_ExtraBold800
![EncodeSansExpanded_ExtraBold800](./93137f85c3ca94e2b0d5d2501170e4b955208bf20d99d3279a12420033315efe.ttf.png)

##### EncodeSansExpanded_Black900
![EncodeSansExpanded_Black900](./bc58d2db7b8afc49e3bc54a2ffd46ce334497d9361768e992654a18428895228.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Encode Sans Expanded on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Expanded)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/encode-sans-expanded)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/encode-sans-expanded)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
