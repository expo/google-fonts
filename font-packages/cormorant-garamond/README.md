# @expo-google-fonts/cormorant-garamond

This package lets you use the [**Cormorant Garamond**](https://fonts.google.com/specimen/Cormorant+Garamond) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cormorant Garamond

![Cormorant Garamond](./font-family.png)

This font family contains [10 styles](#gallery).

- `CormorantGaramond_Light300`
- `CormorantGaramond_Light300_Italic`
- `CormorantGaramond_Regular400`
- `CormorantGaramond_Regular400_Italic`
- `CormorantGaramond_Medium500`
- `CormorantGaramond_Medium500_Italic`
- `CormorantGaramond_SemiBold600`
- `CormorantGaramond_SemiBold600_Italic`
- `CormorantGaramond_Bold700`
- `CormorantGaramond_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cormorant-garamond expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  CormorantGaramond_Light300,
  CormorantGaramond_Light300_Italic,
  CormorantGaramond_Regular400,
  CormorantGaramond_Regular400_Italic,
  CormorantGaramond_Medium500,
  CormorantGaramond_Medium500_Italic,
  CormorantGaramond_SemiBold600,
  CormorantGaramond_SemiBold600_Italic,
  CormorantGaramond_Bold700,
  CormorantGaramond_Bold700_Italic,
} from '@expo-google-fonts/cormorant-garamond';

export default () => {
  let [fontsLoaded] = useFonts({
    CormorantGaramond_Light300,
    CormorantGaramond_Light300_Italic,
    CormorantGaramond_Regular400,
    CormorantGaramond_Regular400_Italic,
    CormorantGaramond_Medium500,
    CormorantGaramond_Medium500_Italic,
    CormorantGaramond_SemiBold600,
    CormorantGaramond_SemiBold600_Italic,
    CormorantGaramond_Bold700,
    CormorantGaramond_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantGaramond_Light300' }}>
          CormorantGaramond_Light300
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'CormorantGaramond_Light300_Italic' }}>
          CormorantGaramond_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantGaramond_Regular400' }}>
          CormorantGaramond_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'CormorantGaramond_Regular400_Italic' }}>
          CormorantGaramond_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantGaramond_Medium500' }}>
          CormorantGaramond_Medium500
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'CormorantGaramond_Medium500_Italic' }}>
          CormorantGaramond_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantGaramond_SemiBold600' }}>
          CormorantGaramond_SemiBold600
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'CormorantGaramond_SemiBold600_Italic' }}>
          CormorantGaramond_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantGaramond_Bold700' }}>
          CormorantGaramond_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantGaramond_Bold700_Italic' }}>
          CormorantGaramond_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### CormorantGaramond_Light300
![CormorantGaramond_Light300](./9e5ae2850e0033754375df527e1bb29ed63bd133553ce65b8d9313dd4cc944f8.ttf.png)

##### CormorantGaramond_Light300_Italic
![CormorantGaramond_Light300_Italic](./86bc19f83cdf358de6e84a3bdbdc0f24e24d47bbdbf7cc2eac80d7bfe24dfdd4.ttf.png)

##### CormorantGaramond_Regular400
![CormorantGaramond_Regular400](./5a2dd210ea12467e5697bb32480d20e0ebfbe2c2af1c64b1679567cf3486a8a5.ttf.png)

##### CormorantGaramond_Regular400_Italic
![CormorantGaramond_Regular400_Italic](./4766c3793328466bbd4f974a3843b2bffb312bd22c98098b0dec8990ba48f5e2.ttf.png)

##### CormorantGaramond_Medium500
![CormorantGaramond_Medium500](./31bc31d93d2a5c505ca03887ae0ad2ad816caf59499f35016d89fe4d5db18ced.ttf.png)

##### CormorantGaramond_Medium500_Italic
![CormorantGaramond_Medium500_Italic](./e2b5d7b06e08f325bc0513179903b1423183f6533fec2645b64a6e1f24ad699c.ttf.png)

##### CormorantGaramond_SemiBold600
![CormorantGaramond_SemiBold600](./25068099ded344cf0919185bae33e11bca97b6c8b1a528dede8ac80325e27c6b.ttf.png)

##### CormorantGaramond_SemiBold600_Italic
![CormorantGaramond_SemiBold600_Italic](./e316fc5e36acd433eb0c3ea1b28d8475a1ff9d0da27bf329fa1bd5d54eb870bf.ttf.png)

##### CormorantGaramond_Bold700
![CormorantGaramond_Bold700](./b273c7be0b4af1389631638e4f056f5d9066fc17d321e665b3a28d43001736af.ttf.png)

##### CormorantGaramond_Bold700_Italic
![CormorantGaramond_Bold700_Italic](./e1c32c701a4b7594cd169653bc0feceed0160066ce7cedd06999fc884ddd6c02.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Cormorant Garamond on Google Fonts](https://fonts.google.com/specimen/Cormorant+Garamond)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cormorant-garamond)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cormorant-garamond)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
