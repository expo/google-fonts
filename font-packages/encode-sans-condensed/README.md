# @expo-google-fonts/encode-sans-condensed

This package lets you use the [**Encode Sans Condensed**](https://fonts.google.com/specimen/Encode+Sans+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Encode Sans Condensed

![Encode Sans Condensed](./font-family.png)

This font family contains [9 styles](#gallery).

- `EncodeSansCondensed_Thin100`
- `EncodeSansCondensed_ExtraLight200`
- `EncodeSansCondensed_Light300`
- `EncodeSansCondensed_Regular400`
- `EncodeSansCondensed_Medium500`
- `EncodeSansCondensed_SemiBold600`
- `EncodeSansCondensed_Bold700`
- `EncodeSansCondensed_ExtraBold800`
- `EncodeSansCondensed_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/encode-sans-condensed expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  EncodeSansCondensed_Thin100,
  EncodeSansCondensed_ExtraLight200,
  EncodeSansCondensed_Light300,
  EncodeSansCondensed_Regular400,
  EncodeSansCondensed_Medium500,
  EncodeSansCondensed_SemiBold600,
  EncodeSansCondensed_Bold700,
  EncodeSansCondensed_ExtraBold800,
  EncodeSansCondensed_Black900,
} from '@expo-google-fonts/encode-sans-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    EncodeSansCondensed_Thin100,
    EncodeSansCondensed_ExtraLight200,
    EncodeSansCondensed_Light300,
    EncodeSansCondensed_Regular400,
    EncodeSansCondensed_Medium500,
    EncodeSansCondensed_SemiBold600,
    EncodeSansCondensed_Bold700,
    EncodeSansCondensed_ExtraBold800,
    EncodeSansCondensed_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansCondensed_Thin100' }}>
          EncodeSansCondensed_Thin100
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansCondensed_ExtraLight200' }}>
          EncodeSansCondensed_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansCondensed_Light300' }}>
          EncodeSansCondensed_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansCondensed_Regular400' }}>
          EncodeSansCondensed_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansCondensed_Medium500' }}>
          EncodeSansCondensed_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansCondensed_SemiBold600' }}>
          EncodeSansCondensed_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansCondensed_Bold700' }}>
          EncodeSansCondensed_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansCondensed_ExtraBold800' }}>
          EncodeSansCondensed_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'EncodeSansCondensed_Black900' }}>
          EncodeSansCondensed_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### EncodeSansCondensed_Thin100
![EncodeSansCondensed_Thin100](./c2d65f9836891e7be8e4f366b0daa5300822ec7e50add6db5597d2947739ea20.ttf.png)

##### EncodeSansCondensed_ExtraLight200
![EncodeSansCondensed_ExtraLight200](./138b74330c8e0d86094f3164019df7594d74187b1d46294fc1be869488146eb5.ttf.png)

##### EncodeSansCondensed_Light300
![EncodeSansCondensed_Light300](./c2fbe98bd01eed6d6e9965149ece772f8df140fa27924151375ad388148a46a3.ttf.png)

##### EncodeSansCondensed_Regular400
![EncodeSansCondensed_Regular400](./864d5dbdc88484d744c5f412429aee361f61759144cb2a09436e172e49cb0396.ttf.png)

##### EncodeSansCondensed_Medium500
![EncodeSansCondensed_Medium500](./d681997db3c7754ba70e3d8b22cbe560677787b73469a962a069f9e257235795.ttf.png)

##### EncodeSansCondensed_SemiBold600
![EncodeSansCondensed_SemiBold600](./8c085d57fde1c82f5051fcdd197852a958132024196a3989c6ab00f550576534.ttf.png)

##### EncodeSansCondensed_Bold700
![EncodeSansCondensed_Bold700](./a9dde6d2d55aa492820fd930f6d9358fe60b27d9deb328384adca6f7efd4984d.ttf.png)

##### EncodeSansCondensed_ExtraBold800
![EncodeSansCondensed_ExtraBold800](./e295aa9a8ecab00ca9e9012a789c72ec620a1e03dabae570058ecf0b61ad43f0.ttf.png)

##### EncodeSansCondensed_Black900
![EncodeSansCondensed_Black900](./65117e9c412bff42a1dd46d75a60d81bf0f70390e437c1d689525a2c422e4a71.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Encode Sans Condensed on Google Fonts](https://fonts.google.com/specimen/Encode+Sans+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/encode-sans-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/encode-sans-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
