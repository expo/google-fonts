# @expo-google-fonts/manuale

This package lets you use the [**Manuale**](https://fonts.google.com/specimen/Manuale) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Manuale

![Manuale](./font-family.png)

This font family contains [8 styles](#gallery).

- `Manuale_Regular400`
- `Manuale_Regular400_Italic`
- `Manuale_Medium500`
- `Manuale_Medium500_Italic`
- `Manuale_SemiBold600`
- `Manuale_SemiBold600_Italic`
- `Manuale_Bold700`
- `Manuale_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/manuale expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Manuale_Regular400,
  Manuale_Regular400_Italic,
  Manuale_Medium500,
  Manuale_Medium500_Italic,
  Manuale_SemiBold600,
  Manuale_SemiBold600_Italic,
  Manuale_Bold700,
  Manuale_Bold700_Italic,
} from '@expo-google-fonts/manuale';

export default () => {
  let [fontsLoaded] = useFonts({
    Manuale_Regular400,
    Manuale_Regular400_Italic,
    Manuale_Medium500,
    Manuale_Medium500_Italic,
    Manuale_SemiBold600,
    Manuale_SemiBold600_Italic,
    Manuale_Bold700,
    Manuale_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manuale_Regular400' }}>
          Manuale_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manuale_Regular400_Italic' }}>
          Manuale_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manuale_Medium500' }}>
          Manuale_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manuale_Medium500_Italic' }}>
          Manuale_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manuale_SemiBold600' }}>
          Manuale_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manuale_SemiBold600_Italic' }}>
          Manuale_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manuale_Bold700' }}>
          Manuale_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Manuale_Bold700_Italic' }}>
          Manuale_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Manuale_Regular400
![Manuale_Regular400](./cfd06fa1d33d937fd3d097835096788da1e29fe217c0e6619d7f4e92770987f2.ttf.png)

##### Manuale_Regular400_Italic
![Manuale_Regular400_Italic](./b7144bb9db9fc28df1a2f22173a91396c535d078a58256b0937d0ed4916ac08d.ttf.png)

##### Manuale_Medium500
![Manuale_Medium500](./bee63de104b5fab81c246551830fd9cf2910da15ffb1fe837913493df2612797.ttf.png)

##### Manuale_Medium500_Italic
![Manuale_Medium500_Italic](./b9d7d38e3301e49ed48cee4bdbfdf8bf85004f299e7d33795cc55fad29b5406f.ttf.png)

##### Manuale_SemiBold600
![Manuale_SemiBold600](./1b0e482a58bde31d3c0408ea84a5ce8287b1669e24bb7e75648b20ee859ade8b.ttf.png)

##### Manuale_SemiBold600_Italic
![Manuale_SemiBold600_Italic](./023ded306bfcddff115b0b04ed36de8a5184275774cd972ce1fb34d8d917c61e.ttf.png)

##### Manuale_Bold700
![Manuale_Bold700](./50014d6214dc09001362c4e4a770de808a95fc3f590d52d895c9eef86b71d68a.ttf.png)

##### Manuale_Bold700_Italic
![Manuale_Bold700_Italic](./2a59ed27fb6985f70acb9fc94d9038ae63cfc4a2ddc5226dfecb7c8407b5a93f.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Manuale on Google Fonts](https://fonts.google.com/specimen/Manuale)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/manuale)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/manuale)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
