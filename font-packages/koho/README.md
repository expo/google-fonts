# @expo-google-fonts/koho

This package lets you use the [**KoHo**](https://fonts.google.com/specimen/KoHo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## KoHo

![KoHo](./font-family.png)

This font family contains [12 styles](#gallery).

- `KoHo_ExtraLight200`
- `KoHo_ExtraLight200_Italic`
- `KoHo_Light300`
- `KoHo_Light300_Italic`
- `KoHo_Regular400`
- `KoHo_Regular400_Italic`
- `KoHo_Medium500`
- `KoHo_Medium500_Italic`
- `KoHo_SemiBold600`
- `KoHo_SemiBold600_Italic`
- `KoHo_Bold700`
- `KoHo_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/koho expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  KoHo_ExtraLight200,
  KoHo_ExtraLight200_Italic,
  KoHo_Light300,
  KoHo_Light300_Italic,
  KoHo_Regular400,
  KoHo_Regular400_Italic,
  KoHo_Medium500,
  KoHo_Medium500_Italic,
  KoHo_SemiBold600,
  KoHo_SemiBold600_Italic,
  KoHo_Bold700,
  KoHo_Bold700_Italic,
} from '@expo-google-fonts/koho';

export default () => {
  let [fontsLoaded] = useFonts({
    KoHo_ExtraLight200,
    KoHo_ExtraLight200_Italic,
    KoHo_Light300,
    KoHo_Light300_Italic,
    KoHo_Regular400,
    KoHo_Regular400_Italic,
    KoHo_Medium500,
    KoHo_Medium500_Italic,
    KoHo_SemiBold600,
    KoHo_SemiBold600_Italic,
    KoHo_Bold700,
    KoHo_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_ExtraLight200' }}>
          KoHo_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_ExtraLight200_Italic' }}>
          KoHo_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_Light300' }}>
          KoHo_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_Light300_Italic' }}>
          KoHo_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_Regular400' }}>
          KoHo_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_Regular400_Italic' }}>
          KoHo_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_Medium500' }}>
          KoHo_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_Medium500_Italic' }}>
          KoHo_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_SemiBold600' }}>
          KoHo_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_SemiBold600_Italic' }}>
          KoHo_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_Bold700' }}>KoHo_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_Bold700_Italic' }}>
          KoHo_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### KoHo_ExtraLight200
![KoHo_ExtraLight200](./7b4addbdb3d0cadc2f6c0149b90b29c059dc7f2be08d0b28292acb880db45124.ttf.png)

##### KoHo_ExtraLight200_Italic
![KoHo_ExtraLight200_Italic](./73dd6271884581477beeb0860878fd6b524f3e880cc020295c24e2bf1d41a70c.ttf.png)

##### KoHo_Light300
![KoHo_Light300](./676e89293e4714a1c63fdd477c5dc88950461834031e2ea0437e65b31fc5a03a.ttf.png)

##### KoHo_Light300_Italic
![KoHo_Light300_Italic](./5c2ce20516635678f4f67581782cd3c0429b8cf361e732c24021bc1711fc609e.ttf.png)

##### KoHo_Regular400
![KoHo_Regular400](./e8128e00cc778e37cc7db7f518f22ca833399d8c4bdfac07fd1fd063435ba658.ttf.png)

##### KoHo_Regular400_Italic
![KoHo_Regular400_Italic](./3225382b5d36a6963f8d1cc5fb60086a657ecb39882bab5259eda483f292af57.ttf.png)

##### KoHo_Medium500
![KoHo_Medium500](./90a011adf31d93ee90f5e105dd20a7a69e7de53626672d10449e9bced87b5916.ttf.png)

##### KoHo_Medium500_Italic
![KoHo_Medium500_Italic](./cd0a466ebee7135ca6790a7908264c0457b65dbd9c927ec7082f43827d45f5d4.ttf.png)

##### KoHo_SemiBold600
![KoHo_SemiBold600](./7cf86562498ddfbbaa3a3b5d46e848407702a925472a4a3e76ab1ef1a7949106.ttf.png)

##### KoHo_SemiBold600_Italic
![KoHo_SemiBold600_Italic](./cd527fcf4a07b728233b2d93e0ef12477bf9988918e604f16fd823a15a2c3639.ttf.png)

##### KoHo_Bold700
![KoHo_Bold700](./c059ce850125c2f3bec60528a808fea56f6191b9b9bac380a4a38da9d2f42bfa.ttf.png)

##### KoHo_Bold700_Italic
![KoHo_Bold700_Italic](./16a471d3f9b251d19034945ede1cd8c304c08caba74db67fc08e01556ec0e3b4.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [KoHo on Google Fonts](https://fonts.google.com/specimen/KoHo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/koho)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/koho)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
