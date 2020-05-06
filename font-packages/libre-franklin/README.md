# @expo-google-fonts/libre-franklin

This package lets you use the [**Libre Franklin**](https://fonts.google.com/specimen/Libre+Franklin) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Libre Franklin

![Libre Franklin](./font-family.png)

This font family contains [18 styles](#gallery).

- `LibreFranklin_Thin100`
- `LibreFranklin_Thin100_Italic`
- `LibreFranklin_ExtraLight200`
- `LibreFranklin_ExtraLight200_Italic`
- `LibreFranklin_Light300`
- `LibreFranklin_Light300_Italic`
- `LibreFranklin_Regular400`
- `LibreFranklin_Regular400_Italic`
- `LibreFranklin_Medium500`
- `LibreFranklin_Medium500_Italic`
- `LibreFranklin_SemiBold600`
- `LibreFranklin_SemiBold600_Italic`
- `LibreFranklin_Bold700`
- `LibreFranklin_Bold700_Italic`
- `LibreFranklin_ExtraBold800`
- `LibreFranklin_ExtraBold800_Italic`
- `LibreFranklin_Black900`
- `LibreFranklin_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/libre-franklin expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  LibreFranklin_Thin100,
  LibreFranklin_Thin100_Italic,
  LibreFranklin_ExtraLight200,
  LibreFranklin_ExtraLight200_Italic,
  LibreFranklin_Light300,
  LibreFranklin_Light300_Italic,
  LibreFranklin_Regular400,
  LibreFranklin_Regular400_Italic,
  LibreFranklin_Medium500,
  LibreFranklin_Medium500_Italic,
  LibreFranklin_SemiBold600,
  LibreFranklin_SemiBold600_Italic,
  LibreFranklin_Bold700,
  LibreFranklin_Bold700_Italic,
  LibreFranklin_ExtraBold800,
  LibreFranklin_ExtraBold800_Italic,
  LibreFranklin_Black900,
  LibreFranklin_Black900_Italic,
} from '@expo-google-fonts/libre-franklin';

export default () => {
  let [fontsLoaded] = useFonts({
    LibreFranklin_Thin100,
    LibreFranklin_Thin100_Italic,
    LibreFranklin_ExtraLight200,
    LibreFranklin_ExtraLight200_Italic,
    LibreFranklin_Light300,
    LibreFranklin_Light300_Italic,
    LibreFranklin_Regular400,
    LibreFranklin_Regular400_Italic,
    LibreFranklin_Medium500,
    LibreFranklin_Medium500_Italic,
    LibreFranklin_SemiBold600,
    LibreFranklin_SemiBold600_Italic,
    LibreFranklin_Bold700,
    LibreFranklin_Bold700_Italic,
    LibreFranklin_ExtraBold800,
    LibreFranklin_ExtraBold800_Italic,
    LibreFranklin_Black900,
    LibreFranklin_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_Thin100' }}>
          LibreFranklin_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_Thin100_Italic' }}>
          LibreFranklin_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_ExtraLight200' }}>
          LibreFranklin_ExtraLight200
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_ExtraLight200_Italic' }}>
          LibreFranklin_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_Light300' }}>
          LibreFranklin_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_Light300_Italic' }}>
          LibreFranklin_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_Regular400' }}>
          LibreFranklin_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_Regular400_Italic' }}>
          LibreFranklin_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_Medium500' }}>
          LibreFranklin_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_Medium500_Italic' }}>
          LibreFranklin_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_SemiBold600' }}>
          LibreFranklin_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_SemiBold600_Italic' }}>
          LibreFranklin_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_Bold700' }}>
          LibreFranklin_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_Bold700_Italic' }}>
          LibreFranklin_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_ExtraBold800' }}>
          LibreFranklin_ExtraBold800
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_ExtraBold800_Italic' }}>
          LibreFranklin_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_Black900' }}>
          LibreFranklin_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreFranklin_Black900_Italic' }}>
          LibreFranklin_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### LibreFranklin_Thin100
![LibreFranklin_Thin100](./a1f21b9a28ecb3d6ea935dfde51aee05540140c3a25253b0641b9444dda667c1.ttf.png)

##### LibreFranklin_Thin100_Italic
![LibreFranklin_Thin100_Italic](./09e958f9da1c899ed89026561f56a7c052b9408db021ae9a897f9247aad44039.ttf.png)

##### LibreFranklin_ExtraLight200
![LibreFranklin_ExtraLight200](./97dcc6cedbef15bad22ec4941bcf10ede26cae6bbf0844281f0935c77e475130.ttf.png)

##### LibreFranklin_ExtraLight200_Italic
![LibreFranklin_ExtraLight200_Italic](./d7ed8c62c5358fda45d46e54541af5e0e8397f71242f11a485c04dc39a11218d.ttf.png)

##### LibreFranklin_Light300
![LibreFranklin_Light300](./948626a8cfb11d7e06c5fafa6b5e1c4fa4be5db5351c6a223f2ca782b9795798.ttf.png)

##### LibreFranklin_Light300_Italic
![LibreFranklin_Light300_Italic](./34e2e0606ed438b0a6d4debccf0e4c6db3db50b9963425c4f53fa58c91e75aae.ttf.png)

##### LibreFranklin_Regular400
![LibreFranklin_Regular400](./d81c9f4f52bd37777bfda74e64a609d354ef7ccbae5ccc54d946e46d0355ce5d.ttf.png)

##### LibreFranklin_Regular400_Italic
![LibreFranklin_Regular400_Italic](./a6f8c531931908db5a4f8c02ab8f7bb923b97ba2db982c240715f93114bcd958.ttf.png)

##### LibreFranklin_Medium500
![LibreFranklin_Medium500](./05ef5f27b97c4867b996bc39496419b7ece8741ac22d6eefe59e893a9a499089.ttf.png)

##### LibreFranklin_Medium500_Italic
![LibreFranklin_Medium500_Italic](./92e317ea35eba4231dde4a6c824a53ccfa8c615e10e8ecc6cae2d148cdff6b49.ttf.png)

##### LibreFranklin_SemiBold600
![LibreFranklin_SemiBold600](./b31f2f6914b461a54f80a39780a73cfc0e9fdb98c0025558fc780865881f4379.ttf.png)

##### LibreFranklin_SemiBold600_Italic
![LibreFranklin_SemiBold600_Italic](./51e7bd4a4cc8faf0e20e3a2f9ee81132e7a586a1cd64c19fa34654b505fd56ec.ttf.png)

##### LibreFranklin_Bold700
![LibreFranklin_Bold700](./df03d679c9dba10b0ec29c9d44006aba2dd476ae7c3886c4b3e713665ca443fe.ttf.png)

##### LibreFranklin_Bold700_Italic
![LibreFranklin_Bold700_Italic](./a6883fda2b8a258fd408d8655880863ebf75e8eb0c22afc895f6e7f60d955d6c.ttf.png)

##### LibreFranklin_ExtraBold800
![LibreFranklin_ExtraBold800](./09d37126271e3ab9282776debe97a4652875fb69f4d98f773a1b6b8d37256299.ttf.png)

##### LibreFranklin_ExtraBold800_Italic
![LibreFranklin_ExtraBold800_Italic](./1a059fcf7d8cb61a71e33599611f5f014c20d34592f0ce2d4afb7ce9e3dfbbd8.ttf.png)

##### LibreFranklin_Black900
![LibreFranklin_Black900](./41ab0fe0ad9c37f298d693d6b8e4c5f3cef041ad27ed08c25ee44af8653ee501.ttf.png)

##### LibreFranklin_Black900_Italic
![LibreFranklin_Black900_Italic](./136f29fe980b3eaed9bf88c730b2383f963681429fc8d55de10ce71392487a12.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Libre Franklin on Google Fonts](https://fonts.google.com/specimen/Libre+Franklin)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/libre-franklin)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/libre-franklin)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
