# @expo-google-fonts/montserrat-alternates

This package lets you use the [**Montserrat Alternates**](https://fonts.google.com/specimen/Montserrat+Alternates) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Montserrat Alternates

![Montserrat Alternates](./font-family.png)

This font family contains [18 styles](#gallery).

- `MontserratAlternates_Thin100`
- `MontserratAlternates_Thin100_Italic`
- `MontserratAlternates_ExtraLight200`
- `MontserratAlternates_ExtraLight200_Italic`
- `MontserratAlternates_Light300`
- `MontserratAlternates_Light300_Italic`
- `MontserratAlternates_Regular400`
- `MontserratAlternates_Regular400_Italic`
- `MontserratAlternates_Medium500`
- `MontserratAlternates_Medium500_Italic`
- `MontserratAlternates_SemiBold600`
- `MontserratAlternates_SemiBold600_Italic`
- `MontserratAlternates_Bold700`
- `MontserratAlternates_Bold700_Italic`
- `MontserratAlternates_ExtraBold800`
- `MontserratAlternates_ExtraBold800_Italic`
- `MontserratAlternates_Black900`
- `MontserratAlternates_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/montserrat-alternates expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  MontserratAlternates_Thin100,
  MontserratAlternates_Thin100_Italic,
  MontserratAlternates_ExtraLight200,
  MontserratAlternates_ExtraLight200_Italic,
  MontserratAlternates_Light300,
  MontserratAlternates_Light300_Italic,
  MontserratAlternates_Regular400,
  MontserratAlternates_Regular400_Italic,
  MontserratAlternates_Medium500,
  MontserratAlternates_Medium500_Italic,
  MontserratAlternates_SemiBold600,
  MontserratAlternates_SemiBold600_Italic,
  MontserratAlternates_Bold700,
  MontserratAlternates_Bold700_Italic,
  MontserratAlternates_ExtraBold800,
  MontserratAlternates_ExtraBold800_Italic,
  MontserratAlternates_Black900,
  MontserratAlternates_Black900_Italic,
} from '@expo-google-fonts/montserrat-alternates';

export default () => {
  let [fontsLoaded] = useFonts({
    MontserratAlternates_Thin100,
    MontserratAlternates_Thin100_Italic,
    MontserratAlternates_ExtraLight200,
    MontserratAlternates_ExtraLight200_Italic,
    MontserratAlternates_Light300,
    MontserratAlternates_Light300_Italic,
    MontserratAlternates_Regular400,
    MontserratAlternates_Regular400_Italic,
    MontserratAlternates_Medium500,
    MontserratAlternates_Medium500_Italic,
    MontserratAlternates_SemiBold600,
    MontserratAlternates_SemiBold600_Italic,
    MontserratAlternates_Bold700,
    MontserratAlternates_Bold700_Italic,
    MontserratAlternates_ExtraBold800,
    MontserratAlternates_ExtraBold800_Italic,
    MontserratAlternates_Black900,
    MontserratAlternates_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MontserratAlternates_Thin100' }}>
          MontserratAlternates_Thin100
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'MontserratAlternates_Thin100_Italic' }}>
          MontserratAlternates_Thin100_Italic
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'MontserratAlternates_ExtraLight200' }}>
          MontserratAlternates_ExtraLight200
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'MontserratAlternates_ExtraLight200_Italic',
          }}>
          MontserratAlternates_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MontserratAlternates_Light300' }}>
          MontserratAlternates_Light300
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'MontserratAlternates_Light300_Italic' }}>
          MontserratAlternates_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MontserratAlternates_Regular400' }}>
          MontserratAlternates_Regular400
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'MontserratAlternates_Regular400_Italic',
          }}>
          MontserratAlternates_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MontserratAlternates_Medium500' }}>
          MontserratAlternates_Medium500
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'MontserratAlternates_Medium500_Italic',
          }}>
          MontserratAlternates_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MontserratAlternates_SemiBold600' }}>
          MontserratAlternates_SemiBold600
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'MontserratAlternates_SemiBold600_Italic',
          }}>
          MontserratAlternates_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MontserratAlternates_Bold700' }}>
          MontserratAlternates_Bold700
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'MontserratAlternates_Bold700_Italic' }}>
          MontserratAlternates_Bold700_Italic
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'MontserratAlternates_ExtraBold800' }}>
          MontserratAlternates_ExtraBold800
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'MontserratAlternates_ExtraBold800_Italic',
          }}>
          MontserratAlternates_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MontserratAlternates_Black900' }}>
          MontserratAlternates_Black900
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'MontserratAlternates_Black900_Italic' }}>
          MontserratAlternates_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### MontserratAlternates_Thin100
![MontserratAlternates_Thin100](./5c09b026797ce5fac448caefbdc866f5a81bf9cc625984ef1aa9403631484819.ttf.png)

##### MontserratAlternates_Thin100_Italic
![MontserratAlternates_Thin100_Italic](./c82e331c5ea52753b4551af7eff9d03c3662fb16fea5c00fa558120532424212.ttf.png)

##### MontserratAlternates_ExtraLight200
![MontserratAlternates_ExtraLight200](./3a0f2fd4ee372169bc19522956923e1ade9563dbf8789d7a74576eca54c0cb98.ttf.png)

##### MontserratAlternates_ExtraLight200_Italic
![MontserratAlternates_ExtraLight200_Italic](./9e8fdaa328523c20fe857f63acd10406a6fe6165bc82fd41a676e77c55374087.ttf.png)

##### MontserratAlternates_Light300
![MontserratAlternates_Light300](./009e98fbd7f5568e68b9379e0d049e1f646ef5001f366eca34cd44c262443dbb.ttf.png)

##### MontserratAlternates_Light300_Italic
![MontserratAlternates_Light300_Italic](./d82d87be0bd762617314db90ed2694ea7a75e7aeb4e4da266a9581c67fd97d09.ttf.png)

##### MontserratAlternates_Regular400
![MontserratAlternates_Regular400](./b2f5d183ba5588c36e0f975cd5c154bfab1c4defaf7edcacb101f20a83721bb0.ttf.png)

##### MontserratAlternates_Regular400_Italic
![MontserratAlternates_Regular400_Italic](./a94551458451c010e364df974a12e6de5911fe56b117390ba8d52ac82dfaaec5.ttf.png)

##### MontserratAlternates_Medium500
![MontserratAlternates_Medium500](./0ad6f1c378b9acd74dc8ac990b61607e3b218a3fbf0988f0ef5c508fa13fdab1.ttf.png)

##### MontserratAlternates_Medium500_Italic
![MontserratAlternates_Medium500_Italic](./4afe42c2aeb0bd46a2c9f199560bd2ebedb166d1e67618651870b8421499c300.ttf.png)

##### MontserratAlternates_SemiBold600
![MontserratAlternates_SemiBold600](./2fec79e6e398e2c513322f7af66001553bf74c69cefe117fb05472b44f6d95ed.ttf.png)

##### MontserratAlternates_SemiBold600_Italic
![MontserratAlternates_SemiBold600_Italic](./3ef634325d5a61d0891d3a6eacd265a2983cf1e9e84caafc7bc2addf2f554d69.ttf.png)

##### MontserratAlternates_Bold700
![MontserratAlternates_Bold700](./54d33b2d46c465e38dbbac2b2b8b5f0a6242270cf0d5511f0161c21e1f0d4ccf.ttf.png)

##### MontserratAlternates_Bold700_Italic
![MontserratAlternates_Bold700_Italic](./95d8420481ab395146970da7489bd9b91f5c0437ac1806c84583787cdd4d9b58.ttf.png)

##### MontserratAlternates_ExtraBold800
![MontserratAlternates_ExtraBold800](./2dd175394efc14d9c412b3bad3e06b26a98655760909e676e5be12e642daee59.ttf.png)

##### MontserratAlternates_ExtraBold800_Italic
![MontserratAlternates_ExtraBold800_Italic](./0ea02188bddfbe57ace54b7785d677eddcdd630d1073fdcda277f1186aaedf20.ttf.png)

##### MontserratAlternates_Black900
![MontserratAlternates_Black900](./4d1eed87eda713f3f729c721ae1754c382e1517f51f29be05babf98f8e985693.ttf.png)

##### MontserratAlternates_Black900_Italic
![MontserratAlternates_Black900_Italic](./59d0191230f070e7792b5c21e8a1f3ebc0c132ed6564d765d8759903325bda9b.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Montserrat Alternates on Google Fonts](https://fonts.google.com/specimen/Montserrat+Alternates)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/montserrat-alternates)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/montserrat-alternates)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
