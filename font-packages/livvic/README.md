# @expo-google-fonts/livvic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/livvic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/livvic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/livvic)

This package lets you use the [**Livvic**](https://fonts.google.com/specimen/Livvic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Livvic

![Livvic](./font-family.png)

This font family contains [16 styles](#gallery).

- `Livvic_Thin100`
- `Livvic_Thin100_Italic`
- `Livvic_ExtraLight200`
- `Livvic_ExtraLight200_Italic`
- `Livvic_Light300`
- `Livvic_Light300_Italic`
- `Livvic_Regular400`
- `Livvic_Regular400_Italic`
- `Livvic_Medium500`
- `Livvic_Medium500_Italic`
- `Livvic_SemiBold600`
- `Livvic_SemiBold600_Italic`
- `Livvic_Bold700`
- `Livvic_Bold700_Italic`
- `Livvic_Black900`
- `Livvic_Black900_Italic`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/livvic expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Livvic_Thin100,
  Livvic_Thin100_Italic,
  Livvic_ExtraLight200,
  Livvic_ExtraLight200_Italic,
  Livvic_Light300,
  Livvic_Light300_Italic,
  Livvic_Regular400,
  Livvic_Regular400_Italic,
  Livvic_Medium500,
  Livvic_Medium500_Italic,
  Livvic_SemiBold600,
  Livvic_SemiBold600_Italic,
  Livvic_Bold700,
  Livvic_Bold700_Italic,
  Livvic_Black900,
  Livvic_Black900_Italic,
} from '@expo-google-fonts/livvic';

export default () => {
  let [fontsLoaded] = useFonts({
    Livvic_Thin100,
    Livvic_Thin100_Italic,
    Livvic_ExtraLight200,
    Livvic_ExtraLight200_Italic,
    Livvic_Light300,
    Livvic_Light300_Italic,
    Livvic_Regular400,
    Livvic_Regular400_Italic,
    Livvic_Medium500,
    Livvic_Medium500_Italic,
    Livvic_SemiBold600,
    Livvic_SemiBold600_Italic,
    Livvic_Bold700,
    Livvic_Bold700_Italic,
    Livvic_Black900,
    Livvic_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_Thin100' }}>
          Livvic_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_Thin100_Italic' }}>
          Livvic_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_ExtraLight200' }}>
          Livvic_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_ExtraLight200_Italic' }}>
          Livvic_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_Light300' }}>
          Livvic_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_Light300_Italic' }}>
          Livvic_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_Regular400' }}>
          Livvic_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_Regular400_Italic' }}>
          Livvic_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_Medium500' }}>
          Livvic_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_Medium500_Italic' }}>
          Livvic_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_SemiBold600' }}>
          Livvic_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_SemiBold600_Italic' }}>
          Livvic_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_Bold700' }}>
          Livvic_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_Bold700_Italic' }}>
          Livvic_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_Black900' }}>
          Livvic_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Livvic_Black900_Italic' }}>
          Livvic_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Livvic_Thin100
![Livvic_Thin100](./69cf7d68bd7ea7e4f1eea68a6ce1241109949e773f7342713cc8394cfc3a9350.ttf.png)

##### Livvic_Thin100_Italic
![Livvic_Thin100_Italic](./bac5d8a0627f56ade7281b777b0753a1e5c0d8954b749c43c474cef3987fabb3.ttf.png)

##### Livvic_ExtraLight200
![Livvic_ExtraLight200](./4339e04cdaa30779650ab9cd08a8e6208806c5d3e61ae9934286f6a0fb3045e2.ttf.png)

##### Livvic_ExtraLight200_Italic
![Livvic_ExtraLight200_Italic](./1e90ead4569f3a9562d934ed81529f5b9f77d31c3f3fb04d0761808cc8121c00.ttf.png)

##### Livvic_Light300
![Livvic_Light300](./1d4d9954fddbfe812dc3f05be50de4c32cc79db0ac03c061be82e347885a0d16.ttf.png)

##### Livvic_Light300_Italic
![Livvic_Light300_Italic](./56eb0ced8438e313f473ed5c0d4ee2b2a14fd14f795e437c8fe91da30d6bfa87.ttf.png)

##### Livvic_Regular400
![Livvic_Regular400](./684c0977078ce7a0aa4baca696a867093d47a8b698ac6524e6cba0262e63cc57.ttf.png)

##### Livvic_Regular400_Italic
![Livvic_Regular400_Italic](./ed0c728d0a90d1b99fd01bfbc0371e526ddad2ea79d269182c60cd5bb8241393.ttf.png)

##### Livvic_Medium500
![Livvic_Medium500](./c9399fe200dc52728dd923fc8ef5e8f2566eaa599bfcc903102b49126535701f.ttf.png)

##### Livvic_Medium500_Italic
![Livvic_Medium500_Italic](./eebd5e2f0a3762de32ae06a0aecd96d94322b7e078bc768455d63e202a74411f.ttf.png)

##### Livvic_SemiBold600
![Livvic_SemiBold600](./38ef1c46a21565d37981213d2daba4d8f216e1f0f25972c1003069f2c05df6d1.ttf.png)

##### Livvic_SemiBold600_Italic
![Livvic_SemiBold600_Italic](./4c557b68961f711648417be8fe965f0ee26452f0b78ade0beda7fdfa4a13b939.ttf.png)

##### Livvic_Bold700
![Livvic_Bold700](./87b0c42cfd0f29daea2867b06adda2fdf978a1c565072fc54ba65774ef420c1e.ttf.png)

##### Livvic_Bold700_Italic
![Livvic_Bold700_Italic](./5431f875e19403b74700eaecfee54e157b5661d8a1fb32712bee2165274e7b03.ttf.png)

##### Livvic_Black900
![Livvic_Black900](./4a61243d45e4b7c886a8af1be0488f4cd259518fea160b655891a491dc90bd01.ttf.png)

##### Livvic_Black900_Italic
![Livvic_Black900_Italic](./541bf67ff4d9b5b56c9d47e30220519bc5d38c2ca202037bf673fba3fe3a8b77.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/livvic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Livvic page on Google Fonts](https://fonts.google.com/specimen/Livvic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Livvic on Google Fonts](https://fonts.google.com/specimen/Livvic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/livvic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/livvic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
