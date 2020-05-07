# @expo-google-fonts/spectral-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/spectral-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/spectral-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/spectral-sc)

This package lets you use the [**Spectral SC**](https://fonts.google.com/specimen/Spectral+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Spectral SC

![Spectral SC](./font-family.png)

This font family contains [14 styles](#gallery).

- `SpectralSC_ExtraLight200`
- `SpectralSC_ExtraLight200_Italic`
- `SpectralSC_Light300`
- `SpectralSC_Light300_Italic`
- `SpectralSC_Regular400`
- `SpectralSC_Regular400_Italic`
- `SpectralSC_Medium500`
- `SpectralSC_Medium500_Italic`
- `SpectralSC_SemiBold600`
- `SpectralSC_SemiBold600_Italic`
- `SpectralSC_Bold700`
- `SpectralSC_Bold700_Italic`
- `SpectralSC_ExtraBold800`
- `SpectralSC_ExtraBold800_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/spectral-sc expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  SpectralSC_ExtraLight200,
  SpectralSC_ExtraLight200_Italic,
  SpectralSC_Light300,
  SpectralSC_Light300_Italic,
  SpectralSC_Regular400,
  SpectralSC_Regular400_Italic,
  SpectralSC_Medium500,
  SpectralSC_Medium500_Italic,
  SpectralSC_SemiBold600,
  SpectralSC_SemiBold600_Italic,
  SpectralSC_Bold700,
  SpectralSC_Bold700_Italic,
  SpectralSC_ExtraBold800,
  SpectralSC_ExtraBold800_Italic,
} from '@expo-google-fonts/spectral-sc';

export default () => {
  let [fontsLoaded] = useFonts({
    SpectralSC_ExtraLight200,
    SpectralSC_ExtraLight200_Italic,
    SpectralSC_Light300,
    SpectralSC_Light300_Italic,
    SpectralSC_Regular400,
    SpectralSC_Regular400_Italic,
    SpectralSC_Medium500,
    SpectralSC_Medium500_Italic,
    SpectralSC_SemiBold600,
    SpectralSC_SemiBold600_Italic,
    SpectralSC_Bold700,
    SpectralSC_Bold700_Italic,
    SpectralSC_ExtraBold800,
    SpectralSC_ExtraBold800_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_ExtraLight200' }}>
          SpectralSC_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_ExtraLight200_Italic' }}>
          SpectralSC_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_Light300' }}>
          SpectralSC_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_Light300_Italic' }}>
          SpectralSC_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_Regular400' }}>
          SpectralSC_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_Regular400_Italic' }}>
          SpectralSC_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_Medium500' }}>
          SpectralSC_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_Medium500_Italic' }}>
          SpectralSC_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_SemiBold600' }}>
          SpectralSC_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_SemiBold600_Italic' }}>
          SpectralSC_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_Bold700' }}>
          SpectralSC_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_Bold700_Italic' }}>
          SpectralSC_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_ExtraBold800' }}>
          SpectralSC_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpectralSC_ExtraBold800_Italic' }}>
          SpectralSC_ExtraBold800_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### SpectralSC_ExtraLight200
![SpectralSC_ExtraLight200](./63d4dd9a1b6ca94347d9be458d3d3f27437804fcdcf96de19115ce63eab80e09.ttf.png)

##### SpectralSC_ExtraLight200_Italic
![SpectralSC_ExtraLight200_Italic](./1940514dc53b85d4d87e4f9ea64470eb98c107c053377538d63a88cd7f3c90e5.ttf.png)

##### SpectralSC_Light300
![SpectralSC_Light300](./891b1d15d1fd0adffff4ab8a71237e846a7facbe29b6fa94e95a2e2125a162b0.ttf.png)

##### SpectralSC_Light300_Italic
![SpectralSC_Light300_Italic](./4a35ca51d42122c0e214b00754e3aabd760891dd4fe8f23e3211970b66fccde5.ttf.png)

##### SpectralSC_Regular400
![SpectralSC_Regular400](./992f8c6dff2fd1f14725272931fc3336a540546fa7846b3e278bd85836fb7545.ttf.png)

##### SpectralSC_Regular400_Italic
![SpectralSC_Regular400_Italic](./0517c9389a7f90b8ee1d792ac8572855f7ec302e33658d957763f50fa551141f.ttf.png)

##### SpectralSC_Medium500
![SpectralSC_Medium500](./ffddde35929f7228c85cec1b5c3e93f839d845a8f751a7aef1b27a53f7ed7d87.ttf.png)

##### SpectralSC_Medium500_Italic
![SpectralSC_Medium500_Italic](./da37956c506e2a8bb47a1cefda935cc60a00a1735c34ec2727db59fd9f5c8f72.ttf.png)

##### SpectralSC_SemiBold600
![SpectralSC_SemiBold600](./f7bfc53ad029c821a35bea359076f8a826719e43c0491aee00359e7acdf6d2fc.ttf.png)

##### SpectralSC_SemiBold600_Italic
![SpectralSC_SemiBold600_Italic](./1fb487f3103ff60bc6f5f01b422f906549ece9883a49e5b87c3be0dd78428e36.ttf.png)

##### SpectralSC_Bold700
![SpectralSC_Bold700](./cb2b064297cc41a5df572410b58a26772056bf765768fc1a1510374bf5dea8e9.ttf.png)

##### SpectralSC_Bold700_Italic
![SpectralSC_Bold700_Italic](./380b7badc0bd105618648f3c7b9681a5e2c6a3b65569037a3c589e4a028aa6b3.ttf.png)

##### SpectralSC_ExtraBold800
![SpectralSC_ExtraBold800](./cb4ff7e22c08a17af3b239331337982b0c9f8cad6207546a955a1ea2dadddf16.ttf.png)

##### SpectralSC_ExtraBold800_Italic
![SpectralSC_ExtraBold800_Italic](./379b67f997439e4df148b4cd426dd5ebe6ec642bcf4d4a74f192d664f97306f4.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/spectral-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Spectral SC page on Google Fonts](https://fonts.google.com/specimen/Spectral+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Spectral SC on Google Fonts](https://fonts.google.com/specimen/Spectral+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/spectral-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/spectral-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
