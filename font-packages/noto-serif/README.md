# @expo-google-fonts/noto-serif

This package lets you use the [**Noto Serif**](https://fonts.google.com/specimen/Noto+Serif) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Noto Serif

![Noto Serif](./font-family.png)

This font family contains [4 styles](#gallery).

- `NotoSerif_Regular400`
- `NotoSerif_Regular400_Italic`
- `NotoSerif_Bold700`
- `NotoSerif_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-serif expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  NotoSerif_Regular400,
  NotoSerif_Regular400_Italic,
  NotoSerif_Bold700,
  NotoSerif_Bold700_Italic,
} from '@expo-google-fonts/noto-serif';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerif_Regular400,
    NotoSerif_Regular400_Italic,
    NotoSerif_Bold700,
    NotoSerif_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSerif_Regular400' }}>
          NotoSerif_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSerif_Regular400_Italic' }}>
          NotoSerif_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSerif_Bold700' }}>
          NotoSerif_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSerif_Bold700_Italic' }}>
          NotoSerif_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### NotoSerif_Regular400
![NotoSerif_Regular400](./756d85930a29b444fc130d6ab854e9f796a951dff740c2bedb926522aa2db185.ttf.png)

##### NotoSerif_Regular400_Italic
![NotoSerif_Regular400_Italic](./3a8f4b27348c68ceb866bc4d52c0eae507c8cf764c1ab8d398805aeb89e40eb6.ttf.png)

##### NotoSerif_Bold700
![NotoSerif_Bold700](./b8ab5cf0042204e461a5d83a980849507daa6ef58dda05725bcfa7403675eb0d.ttf.png)

##### NotoSerif_Bold700_Italic
![NotoSerif_Bold700_Italic](./fff456cbd82e58d6ca98db85fc03a22b982377a0f7e36525541d06b1eaaa1db0.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Noto Serif on Google Fonts](https://fonts.google.com/specimen/Noto+Serif)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
