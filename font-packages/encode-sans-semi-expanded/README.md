# @expo-google-fonts/encode-sans-semi-expanded

This package lets you use the [**Encode Sans Semi Expanded**](https://fonts.google.com/specimen/Encode+Sans+Semi+Expanded) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Encode Sans Semi Expanded

![Encode Sans Semi Expanded](./font-family.png)

This font family contains [9 styles](#gallery).

- `EncodeSansSemiExpanded_Thin100`
- `EncodeSansSemiExpanded_ExtraLight200`
- `EncodeSansSemiExpanded_Light300`
- `EncodeSansSemiExpanded_Regular400`
- `EncodeSansSemiExpanded_Medium500`
- `EncodeSansSemiExpanded_SemiBold600`
- `EncodeSansSemiExpanded_Bold700`
- `EncodeSansSemiExpanded_ExtraBold800`
- `EncodeSansSemiExpanded_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/encode-sans-semi-expanded expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  EncodeSansSemiExpanded_Thin100,
  EncodeSansSemiExpanded_ExtraLight200,
  EncodeSansSemiExpanded_Light300,
  EncodeSansSemiExpanded_Regular400,
  EncodeSansSemiExpanded_Medium500,
  EncodeSansSemiExpanded_SemiBold600,
  EncodeSansSemiExpanded_Bold700,
  EncodeSansSemiExpanded_ExtraBold800,
  EncodeSansSemiExpanded_Black900,
} from '@expo-google-fonts/encode-sans-semi-expanded';

export default () => {
  let [fontsLoaded] = useFonts({
    EncodeSansSemiExpanded_Thin100,
    EncodeSansSemiExpanded_ExtraLight200,
    EncodeSansSemiExpanded_Light300,
    EncodeSansSemiExpanded_Regular400,
    EncodeSansSemiExpanded_Medium500,
    EncodeSansSemiExpanded_SemiBold600,
    EncodeSansSemiExpanded_Bold700,
    EncodeSansSemiExpanded_ExtraBold800,
    EncodeSansSemiExpanded_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiExpanded_Thin100' }}>
          EncodeSansSemiExpanded_Thin100
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiExpanded_ExtraLight200' }}>
          EncodeSansSemiExpanded_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiExpanded_Light300' }}>
          EncodeSansSemiExpanded_Light300
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiExpanded_Regular400' }}>
          EncodeSansSemiExpanded_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiExpanded_Medium500' }}>
          EncodeSansSemiExpanded_Medium500
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiExpanded_SemiBold600' }}>
          EncodeSansSemiExpanded_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiExpanded_Bold700' }}>
          EncodeSansSemiExpanded_Bold700
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiExpanded_ExtraBold800' }}>
          EncodeSansSemiExpanded_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansSemiExpanded_Black900' }}>
          EncodeSansSemiExpanded_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### EncodeSansSemiExpanded_Thin100
![EncodeSansSemiExpanded_Thin100](./dac238a8febf393531eee30878adc66774dcd33b426136f91db2c3094cdbbc87.ttf.png)

##### EncodeSansSemiExpanded_ExtraLight200
![EncodeSansSemiExpanded_ExtraLight200](./a57cc45a15668d01ed3de253cf2cdf14b05212ccf8f5ed876ecdf23610598f7d.ttf.png)

##### EncodeSansSemiExpanded_Light300
![EncodeSansSemiExpanded_Light300](./9ce3f3d0f672e4bdcd7688f38c1ba9cb57ed89bab6f5028da4bb87ed3407edd2.ttf.png)

##### EncodeSansSemiExpanded_Regular400
![EncodeSansSemiExpanded_Regular400](./7e3397e73831600b41c8b2381dae7b2f9fbaf91ad2dd7eda631a23dcfa4b9d95.ttf.png)

##### EncodeSansSemiExpanded_Medium500
![EncodeSansSemiExpanded_Medium500](./3fe7f827d5bc65690cf565f4e5a7662f8ae67d2871679b9cd6e8551a94ad4faa.ttf.png)

##### EncodeSansSemiExpanded_SemiBold600
![EncodeSansSemiExpanded_SemiBold600](./1ab6bbce3162ec2c3cdd343f0ff38a4d8988517afb002ad887736c6a2df3a9d1.ttf.png)

##### EncodeSansSemiExpanded_Bold700
![EncodeSansSemiExpanded_Bold700](./35e2e50ea2e448f64fd31c6479eedc42e754710a0efb4e16fb6bc55724dc3b0c.ttf.png)

##### EncodeSansSemiExpanded_ExtraBold800
![EncodeSansSemiExpanded_ExtraBold800](./aff573a59e5988f277836dfe45250f8fb62d9289084f3798c5b8d3adef115da9.ttf.png)

##### EncodeSansSemiExpanded_Black900
![EncodeSansSemiExpanded_Black900](./f945eac695f316de1c89017007aef0369d2d9c13e4564a642da83224ea32e464.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Encode Sans Semi Expanded on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Semi+Expanded)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/encode-sans-semi-expanded)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/encode-sans-semi-expanded)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
