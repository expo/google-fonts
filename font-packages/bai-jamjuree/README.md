# @expo-google-fonts/bai-jamjuree

This package lets you use the [**Bai Jamjuree**](https://fonts.google.com/specimen/Bai+Jamjuree) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Bai Jamjuree

![Bai Jamjuree](./font-family.png)

This font family contains [12 styles](#gallery).

- `BaiJamjuree_ExtraLight200`
- `BaiJamjuree_ExtraLight200_Italic`
- `BaiJamjuree_Light300`
- `BaiJamjuree_Light300_Italic`
- `BaiJamjuree_Regular400`
- `BaiJamjuree_Regular400_Italic`
- `BaiJamjuree_Medium500`
- `BaiJamjuree_Medium500_Italic`
- `BaiJamjuree_SemiBold600`
- `BaiJamjuree_SemiBold600_Italic`
- `BaiJamjuree_Bold700`
- `BaiJamjuree_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/bai-jamjuree expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  BaiJamjuree_ExtraLight200,
  BaiJamjuree_ExtraLight200_Italic,
  BaiJamjuree_Light300,
  BaiJamjuree_Light300_Italic,
  BaiJamjuree_Regular400,
  BaiJamjuree_Regular400_Italic,
  BaiJamjuree_Medium500,
  BaiJamjuree_Medium500_Italic,
  BaiJamjuree_SemiBold600,
  BaiJamjuree_SemiBold600_Italic,
  BaiJamjuree_Bold700,
  BaiJamjuree_Bold700_Italic,
} from '@expo-google-fonts/bai-jamjuree';

export default () => {
  let [fontsLoaded] = useFonts({
    BaiJamjuree_ExtraLight200,
    BaiJamjuree_ExtraLight200_Italic,
    BaiJamjuree_Light300,
    BaiJamjuree_Light300_Italic,
    BaiJamjuree_Regular400,
    BaiJamjuree_Regular400_Italic,
    BaiJamjuree_Medium500,
    BaiJamjuree_Medium500_Italic,
    BaiJamjuree_SemiBold600,
    BaiJamjuree_SemiBold600_Italic,
    BaiJamjuree_Bold700,
    BaiJamjuree_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BaiJamjuree_ExtraLight200' }}>
          BaiJamjuree_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BaiJamjuree_ExtraLight200_Italic' }}>
          BaiJamjuree_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BaiJamjuree_Light300' }}>
          BaiJamjuree_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BaiJamjuree_Light300_Italic' }}>
          BaiJamjuree_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BaiJamjuree_Regular400' }}>
          BaiJamjuree_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BaiJamjuree_Regular400_Italic' }}>
          BaiJamjuree_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BaiJamjuree_Medium500' }}>
          BaiJamjuree_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BaiJamjuree_Medium500_Italic' }}>
          BaiJamjuree_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BaiJamjuree_SemiBold600' }}>
          BaiJamjuree_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BaiJamjuree_SemiBold600_Italic' }}>
          BaiJamjuree_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BaiJamjuree_Bold700' }}>
          BaiJamjuree_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BaiJamjuree_Bold700_Italic' }}>
          BaiJamjuree_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### BaiJamjuree_ExtraLight200
![BaiJamjuree_ExtraLight200](./fdb9acd5c9a309240a161cc16a0a5e3a1f3bf9258d1f2cf14fdfdf6f79d83c8e.ttf.png)

##### BaiJamjuree_ExtraLight200_Italic
![BaiJamjuree_ExtraLight200_Italic](./fff587a7a746a3d84947c3982968551180877152f29ac4e6b58a5d060e741ee3.ttf.png)

##### BaiJamjuree_Light300
![BaiJamjuree_Light300](./253ea5a1c8d0d3dacbf5b9f0db496617c2af6b95a5e0680df9c9c62b989b1799.ttf.png)

##### BaiJamjuree_Light300_Italic
![BaiJamjuree_Light300_Italic](./c31f0c72862a5db7605a1625ddf34cc3c20c1c8a756b7d8848bf7f57a2707e0c.ttf.png)

##### BaiJamjuree_Regular400
![BaiJamjuree_Regular400](./c1dad5e37560fcacf02277fc359aecaab78b734f4a4839c6cf910296b20101fa.ttf.png)

##### BaiJamjuree_Regular400_Italic
![BaiJamjuree_Regular400_Italic](./e8939d2176c550b12487aed8e2fbc3b25917494c1174787534ed05c61be397f2.ttf.png)

##### BaiJamjuree_Medium500
![BaiJamjuree_Medium500](./9f9c01d94ba412108985bed479c74ca19d6b1b8c6982ee1fc113a970d5d323ea.ttf.png)

##### BaiJamjuree_Medium500_Italic
![BaiJamjuree_Medium500_Italic](./01569d323f908485836ed8c94772695fc05a4b02812f4f29a62ec257f911b55b.ttf.png)

##### BaiJamjuree_SemiBold600
![BaiJamjuree_SemiBold600](./a2ef2b81cbfb6b9a14a4bb8931a87a0887e676e237a098c40aa9e61d601dcbd2.ttf.png)

##### BaiJamjuree_SemiBold600_Italic
![BaiJamjuree_SemiBold600_Italic](./7db95e5673e505c331643e67b6172b4465e72300e3642242b55e75a28d7f5883.ttf.png)

##### BaiJamjuree_Bold700
![BaiJamjuree_Bold700](./e456eaafee629c1aa6ffda2fbc121b9b76b54ab7f4b6dcaac6a4a523263b2237.ttf.png)

##### BaiJamjuree_Bold700_Italic
![BaiJamjuree_Bold700_Italic](./3445df11af52dc901fce718f3b68b4df5dc14a6c7b2ae6399dcf47c7fa7dd34b.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Bai Jamjuree on Google Fonts](https://fonts.google.com/specimen/Bai+Jamjuree)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bai-jamjuree)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bai-jamjuree)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
