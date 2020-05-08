# @expo-google-fonts/k2d

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/k2d)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/k2d)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/k2d)

This package lets you use the [**K2D**](https://fonts.google.com/specimen/K2D) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## K2D

![K2D](./font-family.png)

This font family contains [16 styles](#-gallery).

- `K2D_Thin100`
- `K2D_Thin100_Italic`
- `K2D_ExtraLight200`
- `K2D_ExtraLight200_Italic`
- `K2D_Light300`
- `K2D_Light300_Italic`
- `K2D_Regular400`
- `K2D_Regular400_Italic`
- `K2D_Medium500`
- `K2D_Medium500_Italic`
- `K2D_SemiBold600`
- `K2D_SemiBold600_Italic`
- `K2D_Bold700`
- `K2D_Bold700_Italic`
- `K2D_ExtraBold800`
- `K2D_ExtraBold800_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/k2d expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  K2D_Thin100,
  K2D_Thin100_Italic,
  K2D_ExtraLight200,
  K2D_ExtraLight200_Italic,
  K2D_Light300,
  K2D_Light300_Italic,
  K2D_Regular400,
  K2D_Regular400_Italic,
  K2D_Medium500,
  K2D_Medium500_Italic,
  K2D_SemiBold600,
  K2D_SemiBold600_Italic,
  K2D_Bold700,
  K2D_Bold700_Italic,
  K2D_ExtraBold800,
  K2D_ExtraBold800_Italic,
} from '@expo-google-fonts/k2d';

export default () => {
  let [fontsLoaded] = useFonts({
    K2D_Thin100,
    K2D_Thin100_Italic,
    K2D_ExtraLight200,
    K2D_ExtraLight200_Italic,
    K2D_Light300,
    K2D_Light300_Italic,
    K2D_Regular400,
    K2D_Regular400_Italic,
    K2D_Medium500,
    K2D_Medium500_Italic,
    K2D_SemiBold600,
    K2D_SemiBold600_Italic,
    K2D_Bold700,
    K2D_Bold700_Italic,
    K2D_ExtraBold800,
    K2D_ExtraBold800_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_Thin100' }}>K2D_Thin100</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_Thin100_Italic' }}>
          K2D_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_ExtraLight200' }}>
          K2D_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_ExtraLight200_Italic' }}>
          K2D_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_Light300' }}>K2D_Light300</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_Light300_Italic' }}>
          K2D_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_Regular400' }}>
          K2D_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_Regular400_Italic' }}>
          K2D_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_Medium500' }}>
          K2D_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_Medium500_Italic' }}>
          K2D_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_SemiBold600' }}>
          K2D_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_SemiBold600_Italic' }}>
          K2D_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_Bold700' }}>K2D_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_Bold700_Italic' }}>
          K2D_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_ExtraBold800' }}>
          K2D_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'K2D_ExtraBold800_Italic' }}>
          K2D_ExtraBold800_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### K2D_Thin100
![K2D_Thin100](./d221fa3a362d33d180e193b479bfddbf9e8ab02b545540d3a80121af669090de.ttf.png)

##### K2D_Thin100_Italic
![K2D_Thin100_Italic](./2ee77370590db6101099fae848e5f0e4fad425bcb6a8bb711390100587eacf49.ttf.png)

##### K2D_ExtraLight200
![K2D_ExtraLight200](./84c5594915b66f9cd68b4acb3820acdf5be79979f881f4edbece711c1a63d0cd.ttf.png)

##### K2D_ExtraLight200_Italic
![K2D_ExtraLight200_Italic](./989bf534f4958d0d4655079703f5c6788e8cd7b1add81d08a1de93c354d69c1c.ttf.png)

##### K2D_Light300
![K2D_Light300](./bad065e1eeca31036e60587a4472530b8db84eb93149d94f2b687a28c8b0af39.ttf.png)

##### K2D_Light300_Italic
![K2D_Light300_Italic](./1696fa34076cad6a8c919ffbe3247882c29a281086a573ddb8abc0c175794aed.ttf.png)

##### K2D_Regular400
![K2D_Regular400](./ebd6d32612d7badd90f78a25b0a45e1573bcbd0b93954b702d17188d178d9e87.ttf.png)

##### K2D_Regular400_Italic
![K2D_Regular400_Italic](./d7dc126127f8fcfeda097e5da4a1097f60e396ed7c4696060eaa0da6f1727366.ttf.png)

##### K2D_Medium500
![K2D_Medium500](./57c28cc8eae5e455cd2000ea358ed6be014ff9f0e69866e18a1e7b9c6345bce0.ttf.png)

##### K2D_Medium500_Italic
![K2D_Medium500_Italic](./00dc6e342b171a8e55a277d83326c4612d8f176cd576ee5f666636b13fc4ca18.ttf.png)

##### K2D_SemiBold600
![K2D_SemiBold600](./8ceb3795ff3e683d9c70a4d12f431d94434b2527d61dcc11d59f840bfd644a8a.ttf.png)

##### K2D_SemiBold600_Italic
![K2D_SemiBold600_Italic](./3bff6acc9a59d6af0e9d2b3170d55987d1c96e9bb88ff5c20be84053cdb0dd81.ttf.png)

##### K2D_Bold700
![K2D_Bold700](./42e6c8a5b79abf6121af3fc8777219f39b88045a96a42dfe628d28c2112a4e12.ttf.png)

##### K2D_Bold700_Italic
![K2D_Bold700_Italic](./3d449eedd3718213cee306d0dd007fccf31827c55aa2d25b3d14ca933471e53b.ttf.png)

##### K2D_ExtraBold800
![K2D_ExtraBold800](./8f35ce22ce957eeee7bffef62f142fb7bf751169767ad5ab73cd78ba6c135821.ttf.png)

##### K2D_ExtraBold800_Italic
![K2D_ExtraBold800_Italic](./2141bd5b98bac331831e687a2131f46a8d23093831953a533451e0081a54f6aa.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/k2d` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [K2D page on Google Fonts](https://fonts.google.com/specimen/K2D) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [K2D on Google Fonts](https://fonts.google.com/specimen/K2D)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/k2d)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/k2d)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
