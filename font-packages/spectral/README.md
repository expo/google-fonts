# @expo-google-fonts/spectral

This package lets you use the [**Spectral**](https://fonts.google.com/specimen/Spectral) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Spectral

![Spectral](./font-family.png)

This font family contains [14 styles](#gallery).

- `Spectral_ExtraLight200`
- `Spectral_ExtraLight200_Italic`
- `Spectral_Light300`
- `Spectral_Light300_Italic`
- `Spectral_Regular400`
- `Spectral_Regular400_Italic`
- `Spectral_Medium500`
- `Spectral_Medium500_Italic`
- `Spectral_SemiBold600`
- `Spectral_SemiBold600_Italic`
- `Spectral_Bold700`
- `Spectral_Bold700_Italic`
- `Spectral_ExtraBold800`
- `Spectral_ExtraBold800_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/spectral expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Spectral_ExtraLight200,
  Spectral_ExtraLight200_Italic,
  Spectral_Light300,
  Spectral_Light300_Italic,
  Spectral_Regular400,
  Spectral_Regular400_Italic,
  Spectral_Medium500,
  Spectral_Medium500_Italic,
  Spectral_SemiBold600,
  Spectral_SemiBold600_Italic,
  Spectral_Bold700,
  Spectral_Bold700_Italic,
  Spectral_ExtraBold800,
  Spectral_ExtraBold800_Italic,
} from '@expo-google-fonts/spectral';

export default () => {
  let [fontsLoaded] = useFonts({
    Spectral_ExtraLight200,
    Spectral_ExtraLight200_Italic,
    Spectral_Light300,
    Spectral_Light300_Italic,
    Spectral_Regular400,
    Spectral_Regular400_Italic,
    Spectral_Medium500,
    Spectral_Medium500_Italic,
    Spectral_SemiBold600,
    Spectral_SemiBold600_Italic,
    Spectral_Bold700,
    Spectral_Bold700_Italic,
    Spectral_ExtraBold800,
    Spectral_ExtraBold800_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_ExtraLight200' }}>
          Spectral_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_ExtraLight200_Italic' }}>
          Spectral_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_Light300' }}>
          Spectral_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_Light300_Italic' }}>
          Spectral_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_Regular400' }}>
          Spectral_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_Regular400_Italic' }}>
          Spectral_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_Medium500' }}>
          Spectral_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_Medium500_Italic' }}>
          Spectral_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_SemiBold600' }}>
          Spectral_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_SemiBold600_Italic' }}>
          Spectral_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_Bold700' }}>
          Spectral_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_Bold700_Italic' }}>
          Spectral_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_ExtraBold800' }}>
          Spectral_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Spectral_ExtraBold800_Italic' }}>
          Spectral_ExtraBold800_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Spectral_ExtraLight200
![Spectral_ExtraLight200](./38faebd2b01ddd2e497f09028eb10210de56ffadde5c5842c2f70a195865e869.ttf.png)

##### Spectral_ExtraLight200_Italic
![Spectral_ExtraLight200_Italic](./3ee03dc791594673ce8b752c95ef9d29d66d2afb3777a862edd4e9886ceff42a.ttf.png)

##### Spectral_Light300
![Spectral_Light300](./877b7e52c3c9951be21132edc23e99f7b227c3cf6a6189a349ea4195a5ca645d.ttf.png)

##### Spectral_Light300_Italic
![Spectral_Light300_Italic](./3fceb0d465d8e2d6c3b28408281c75b8a55b5228875d262f65cafbf9f89aa1b5.ttf.png)

##### Spectral_Regular400
![Spectral_Regular400](./cf0966737e7520da7784b9dfadc8744a34d7d90ab9d90ee290f28a8b29b868ea.ttf.png)

##### Spectral_Regular400_Italic
![Spectral_Regular400_Italic](./9ba9b61cb4417f86b861d19cadc70e612a8e32596f88e9eaf7f65a33ac37e363.ttf.png)

##### Spectral_Medium500
![Spectral_Medium500](./91b2985ae69deaca521a82b390a544247f735dfd48b0338fa92a1ab42a0a6414.ttf.png)

##### Spectral_Medium500_Italic
![Spectral_Medium500_Italic](./47041fa850a2c3190804212d1ffe2e590aef6306201b9cff1c6bc798da3ea255.ttf.png)

##### Spectral_SemiBold600
![Spectral_SemiBold600](./04a313e8c2f5ac831e7298c25c6075b9660a810569519797c226baede971cda1.ttf.png)

##### Spectral_SemiBold600_Italic
![Spectral_SemiBold600_Italic](./85a9ddd0720f69c9da803991658683f387f75a2d200989f17e4c84f03353a73f.ttf.png)

##### Spectral_Bold700
![Spectral_Bold700](./49302f1176eef815c75aec07833e13b9758532914b49c1993e9b619638ebcfd8.ttf.png)

##### Spectral_Bold700_Italic
![Spectral_Bold700_Italic](./8f82f95515722a631616d0b69effe11da9717cf7eea641359596c20dbe87a7ca.ttf.png)

##### Spectral_ExtraBold800
![Spectral_ExtraBold800](./8a965c3cce6911f473a1523ad68029f95071a6aaabe726bf72ff4f9ed5455f0e.ttf.png)

##### Spectral_ExtraBold800_Italic
![Spectral_ExtraBold800_Italic](./528018df6d31607eec08ae87cd710edd29678dd7b9a2946b21fe5c2f725d95e5.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Spectral on Google Fonts](https://fonts.google.com/specimen/Spectral)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/spectral)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/spectral)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
