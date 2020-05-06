# @expo-google-fonts/droid-serif

This package lets you use the [**Droid Serif**](https://fonts.google.com/specimen/Droid+Serif) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Droid Serif

![Droid Serif](./font-family.png)

This font family contains [4 styles](#gallery).

- `DroidSerif_Regular400`
- `DroidSerif_Regular400_Italic`
- `DroidSerif_Bold700`
- `DroidSerif_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/droid-serif expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  DroidSerif_Regular400,
  DroidSerif_Regular400_Italic,
  DroidSerif_Bold700,
  DroidSerif_Bold700_Italic,
} from '@expo-google-fonts/droid-serif';

export default () => {
  let [fontsLoaded] = useFonts({
    DroidSerif_Regular400,
    DroidSerif_Regular400_Italic,
    DroidSerif_Bold700,
    DroidSerif_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'DroidSerif_Regular400' }}>
          DroidSerif_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DroidSerif_Regular400_Italic' }}>
          DroidSerif_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DroidSerif_Bold700' }}>
          DroidSerif_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DroidSerif_Bold700_Italic' }}>
          DroidSerif_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### DroidSerif_Regular400
![DroidSerif_Regular400](./dcdbbe04f7d65d6dd062e948aad5cedf59b28322fcd555a4dbff9564ba77f032.ttf.png)

##### DroidSerif_Regular400_Italic
![DroidSerif_Regular400_Italic](./f2412575e58a24ba7f60d09803924763e7420e8a18ef8535551454a69b0e2765.ttf.png)

##### DroidSerif_Bold700
![DroidSerif_Bold700](./11fcb243238a8c4df11d23a99078e060b56b2f23e44efcdf3323fde6290297fb.ttf.png)

##### DroidSerif_Bold700_Italic
![DroidSerif_Bold700_Italic](./5072734295fa76a5684706f1c6fab998057ea2dbd03ed74b92b6b105d694e505.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Droid Serif on Google Fonts](https://fonts.google.com/specimen/Droid+Serif)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/droid-serif)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/droid-serif)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
